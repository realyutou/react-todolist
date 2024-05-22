import { createContext, useState, useEffect, useContext } from 'react'
import { register, login, checkPermission } from '../api/auth'
import { useLocation } from 'react-router-dom'
import * as jwt from 'jsonwebtoken'

const defaultAuthContext = {
  isAuthenticated: false,
  currentMember: null,
  register: null,
  login: null,
  logout: null
}

const AuthContext = createContext(defaultAuthContext)
export const useAuth = () => useContext(AuthContext)
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [payload, setPayload] = useState(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const checkTokenIsValid = async () => {
      const authToken = localStorage.getItem('authToken')
      if (!authToken) {
        setIsAuthenticated(false)
        setPayload(null)
        return
      }
      const result = await checkPermission(authToken)
      if (result) {
        setIsAuthenticated(true)
        const tempPayload = jwt.decode(authToken)
        setPayload(tempPayload)
      } else {
        setIsAuthenticated(false)
        setPayload(null)
      }
    }
    checkTokenIsValid()
  }, [pathname])

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      currentMember: payload && {
        id: payload.sub,
        name: payload.name
      },
      register: async ({ username, email, password }) => {
        // 發送註冊資料
        const { success, authToken } = await register({
          username,
          email,
          password
        })
        // 解析代碼取得 payload
        const tempPayload = jwt.decode(authToken)
        if (payload) {
          // 若成功，修改驗證狀態及存入使用者資料
          setIsAuthenticated(true)
          setPayload(tempPayload)
          localStorage.setItem('authToken', authToken)
        } else {
          setIsAuthenticated(false)
          setPayload(null)
        }

        return success
      },
      login: async ({ username, password }) => {
        const { success, authToken } = await login({
          username,
          password
        })
        const tempPayload = jwt.decode(authToken)
        if (tempPayload) {
          setIsAuthenticated(true)
          setPayload(tempPayload)
          localStorage.setItem('authToken', authToken)
        } else {
          setIsAuthenticated(false)
          setPayload(null)
        }

        return success
      },
      logout: () => {
        localStorage.removeItem('authToken')
        setIsAuthenticated(false)
        setPayload(null)
      }
    }}>
      {children}
    </AuthContext.Provider>
  )
}