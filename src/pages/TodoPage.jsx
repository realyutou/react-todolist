import { Footer, Header, TodoCollection, TodoInput } from 'components';
import { useState, useEffect } from 'react';
import { getTodos, createTodo, patchTodo, deleteTodo } from '../api/todos';

const TodoPage = () => {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([])

  const handleChange = (value) => {
    setInputValue(value)
  }

  const handleAddTodo = async () => {
    try {
      if (inputValue.length === 0) {
        return
      }
  
      const newTodo = {
        title: inputValue,
        isDone: false,
      }
  
      // 發送 POST 請求
      const data = await createTodo(newTodo)
  
      setTodos(prevTodos => {
        return [
          ...prevTodos,
          {
            id: data.id,
            title: data.title,
            isDone: data.isDone,
            isEdit: false
          }
        ]
      })
      setInputValue('')
    } catch (error) {
      console.error(error)
    }
  }

  const handleKeyDown = async () => {
    try {
      if (inputValue.length === 0) {
        return;
      }
  
      const newTodo = {
        title: inputValue,
        isDone: false,
      }

      // 發送 POST 請求
      const data = await createTodo(newTodo)
  
      setTodos(prevTodos => {
        return [
          ...prevTodos,
          {
            id: data.id,
            title: data.title,
            isDone: data.isDone,
            isEdit: false
          }
        ]
      })
      setInputValue('');
    } catch (error) {
      console.error(error)
    }
  }

  const handleToggleDone = async (id) => {
    const currentTodo = todos.find(todo => todo.id === id)
    try {
      await patchTodo({
        id,
        isDone: !currentTodo.isDone
      })
      setTodos((prevTodos) => {
        return prevTodos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          }
          return todo;
        });
      });
    } catch (error) {
      console.error(error)
    }
  };

  const handleChangeMode = ({ id, isEdit }) => {
    setTodos(prevTodos => prevTodos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          isEdit
        }
      }
      return { ...todo, isEdit: false }
    }))
  }

  const handleSave = async ({ id, title }) => {
    try {
      await patchTodo({
        id,
        title
      })
      setTodos(prevTodos => prevTodos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            title,
            isEdit: false
          }
        }
        return todo
      }))
    } catch (error) {
      console.error(error)
    }
  }

  const handleDelete = async ({ id }) => {
    try {
      await deleteTodo(id)
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
    } catch(error) {
      console.error(error)
    }
  }
  // 發送 GET 請求
  useEffect(() => {
    const getTodosAsync = async () => {
      try {
        const todos = await getTodos()

        setTodos(todos.map(todo => ({
          ...todo,
          isEdit: false
        })))
      } catch (error) {
        console.error(error)
      }
    }

    getTodosAsync()
  }, [])

  return (
    <div>
      TodoPage
      <Header />
      <TodoInput
        inputValue={inputValue}
        onChange={handleChange}
        onAddTodo={handleAddTodo}
        onKeyDown={handleKeyDown}
      />
      <TodoCollection
        todos={todos}
        onSave={handleSave}
        onDelete={handleDelete}
        onToggleDone={handleToggleDone}
        onChangeMode={handleChangeMode}
      />
      <Footer todosLeft={todos.length}/>
    </div>
  );
};

export default TodoPage;
