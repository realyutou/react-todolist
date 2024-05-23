(this["webpackJsonptodolist-react"]=this["webpackJsonptodolist-react"]||[]).push([[0],{142:function(e,n,t){},143:function(e,n,t){},167:function(e,n){},169:function(e,n){},181:function(e,n){},183:function(e,n){},211:function(e,n){},213:function(e,n){},214:function(e,n){},219:function(e,n){},221:function(e,n){},241:function(e,n){},257:function(e,n){},260:function(e,n){},281:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),i=t(132),c=t.n(i),r=(t(142),t(143),t(16)),s=t(3),l=t(25),d=t.n(l);const u="https://todo-list.alphacamp.io/api/auth";var b=t(46),j=t(2);const h={isAuthenticated:!1,currentMember:null,register:null,login:null,logout:null},p=Object(o.createContext)(h),f=()=>Object(o.useContext)(p),x=e=>{let{children:n}=e;const[t,a]=Object(o.useState)(!1),[i,c]=Object(o.useState)(null),{pathname:r}=Object(s.i)();return Object(o.useEffect)((()=>{(async()=>{const e=localStorage.getItem("authToken");if(!e)return a(!1),void c(null);const n=await(async e=>{try{const{data:n}=await d.a.get("".concat(u,"/test-token"),{headers:{Authorization:"Bearer "+e}});return n.success}catch(n){console.error("[Check Permission failed]:",n)}})(e);if(n){a(!0);const n=b.decode(e);c(n)}else a(!1),c(null)})()}),[r]),Object(j.jsx)(p.Provider,{value:{isAuthenticated:t,currentMember:i&&{id:i.sub,name:i.name},register:async e=>{let{username:n,email:t,password:o}=e;const{success:r,authToken:s}=await(async e=>{let{username:n,email:t,password:o}=e;try{const{data:e}=await d.a.post("".concat(u,"/register"),{username:n,email:t,password:o}),{authToken:a}=e;return a?{success:!0,...e}:e}catch(a){console.error("[Register failed]:",a)}})({username:n,email:t,password:o}),l=b.decode(s);return i?(a(!0),c(l),localStorage.setItem("authToken",s)):(a(!1),c(null)),r},login:async e=>{let{username:n,password:t}=e;const{success:o,authToken:i}=await(async e=>{let{username:n,password:t}=e;try{const{data:e}=await d.a.post("".concat(u,"/login"),{username:n,password:t}),{authToken:o}=e;return o?{success:!0,...e}:e}catch(o){console.error("[Login failed]:",o)}})({username:n,password:t}),r=b.decode(i);return r?(a(!0),c(r),localStorage.setItem("authToken",i)):(a(!1),c(null)),o},logout:()=>{localStorage.removeItem("authToken"),a(!1),c(null)}},children:n})};var g,m,O,v,y=()=>{const e=Object(s.l)(),{isAuthenticated:n}=f();Object(o.useEffect)((()=>{e(n?"/todos":"/login")}),[e,n])},w=t(7),k=t(8);const C=k.a.div(g||(g=Object(w.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 50px;\n"]))),D=k.a.div(m||(m=Object(w.a)(["\n  width: 50%;\n  margin-top: 30px;\n"]))),E=k.a.button(O||(O=Object(w.a)(["\n  border-radius: 30px;\n  background-color: #ff6600;\n  border: none;\n\n  color: white;\n  min-width: 300px;\n  font-family: 'Noto Sans TC', sans-serif;\n  font-weight: bold;\n  padding: 6px 0;\n  margin: 2rem 0;\n\n  &.hover {\n    cursor: pointer;\n  }\n"]))),T=k.a.div(v||(v=Object(w.a)(["\n  color: #0062ff;\n  font-size: 16px;\n  font-weight: 400;\n"])));var S,z,N,F;function R(){return R=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},R.apply(this,arguments)}function M(e,n){let{title:t,titleId:a,...i}=e;return o.createElement("svg",R({width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":a},i),t?o.createElement("title",{id:a},t):null,S||(S=o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M25.6996 18.4709C25.6996 18.4709 18.2328 30.5781 12.1109 30.5781C1.40314 30.5781 11.3821 7.51318 19.1916 7.51318C24.641 7.51318 25.6996 18.4709 25.6996 18.4709Z",fill:"#FF6600"})),z||(z=o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M34.5723 33.6972C32.4451 35.9607 29.8198 37.6976 26.9044 38.7701C23.989 39.8426 20.8639 40.2213 17.7767 39.8761C14.6895 39.5309 11.7252 38.4713 9.11881 36.7813C6.51245 35.0914 4.33573 32.8175 2.76123 30.1401C4.5314 32.5477 7.53375 34.1527 11.803 34.1527C22.3199 34.1527 28.2899 25.98 28.2899 25.98C28.2899 25.98 28.8062 32.4392 34.5593 33.6972H34.5723Z",fill:"#FF6600"})),N||(N=o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M37.7223 10.7451C39.2963 13.7527 40.0781 17.1116 39.9939 20.505C39.9096 23.8984 38.9621 27.2144 37.2407 30.1401C35.8792 29.3764 34.8725 28.1082 34.4379 26.609L32.1558 19.7724L37.7223 10.7451Z",fill:"#FF6600"})),F||(F=o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.0031 0.0173688C25.0185 0.0140335 29.8513 1.89881 33.5398 5.29665L29.7521 11.4088C28.3811 7.84302 25.5957 4.2729 20.1767 4.2729C9.07841 4.2729 0.852307 16.3888 0.852307 23.9846C0.849861 24.9669 0.975283 25.9454 1.22543 26.8953C0.115582 23.8725 -0.247948 20.6265 0.165719 17.4331C0.579385 14.2398 1.75802 11.1934 3.60147 8.55306C5.44491 5.91269 7.89866 3.75634 10.7542 2.26726C13.6097 0.778179 16.7826 0.000388507 20.0031 0V0.0173688Z",fill:"#FF6600"})))}const A=o.forwardRef(M);t.p;var B,L,I,P=t.p+"static/media/check-active.680985db.svg",K=t.p+"static/media/check-circle.ad8591fd.svg",V=t.p+"static/media/check-hover.f1b1bcfd.svg";const Z=k.a.div(B||(B=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  background-color: #f5f8fa;\n  width: 100%;\n  height: 54px;\n  border-bottom: 2px solid black;\n"]))),H=k.a.label(L||(L=Object(w.a)(["\n  font-size: 14;\n  color: '#696974';\n  text-align: start;\n"]))),J=k.a.input(I||(I=Object(w.a)(["\n  outline: none;\n  border: none;\n  background-color: #f5f8fa;\n  border-radius: 0px;\n"])));var q,G,U=e=>{let{type:n,label:t,value:o,placeholder:a,onChange:i}=e;return Object(j.jsxs)(Z,{children:[Object(j.jsx)(H,{children:t}),Object(j.jsx)(J,{value:o||"",type:n||"text",placeholder:a||"",onChange:e=>null===i||void 0===i?void 0:i(e.target.value)})]})};const $=k.a.header(q||(q=Object(w.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  color: var(--major);\n  padding: 0 16px;\n\n  h3 {\n    font-weight: 400;\n    user-select: none;\n  }\n"]))),Q=k.a.div(G||(G=Object(w.a)(["\n  color: var(--gray);\n  span {\n    color: var(--major);\n  }\n"])));var W,X,Y,_,ee=e=>{let{username:n}=e;return Object(j.jsxs)($,{children:[Object(j.jsx)("h3",{children:"Tasks"}),Object(j.jsxs)(Q,{children:["Hi ",Object(j.jsx)("span",{children:n})]})]})},ne=t(35);const te=k.a.div(W||(W=Object(w.a)(["\n  min-height: 52px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  word-wrap: break-word;\n  word-break: break-word;\n  padding: 0 12px;\n  box-shadow: 0 17px 0 -16px #e5e5e5;\n  flex-wrap: wrap;\n\n  &.active {\n    box-shadow: 0 17px 0 -16px var(--major);\n  }\n"]))),oe=k.a.label(X||(X=Object(w.a)(["\n  display: inline-flex;\n  font-size: 30px;\n  transition: color 0.2s ease-out;\n  font-weight: 300;\n\n  &:after {\n    content: '+';\n  }\n"]))),ae=k.a.div(Y||(Y=Object(w.a)(["\n  min-height: 52px;\n  display: flex;\n  align-items: center;\n  flex: 1;\n  user-select: none;\n\n  input {\n    flex: 1;\n    padding: 8px 12px;\n    border: 0;\n    outline: 0;\n    font-size: 1rem;\n\n    &::placeholder {\n      color: var(--major);\n      font-size: 13px;\n    }\n  }\n  $.active {\n    input::placeholder {\n      color: var(--gray);\n    }\n  }\n"]))),ie=k.a.div(_||(_=Object(w.a)(["\n  button {\n    font-size: 13px;\n    color: var(--major);\n    padding-right: 5px;\n    display: none;\n  }\n\n  &.active {\n    button {\n      display: block;\n    }\n  }\n"])));var ce,re=e=>{let{inputValue:n,onChange:t,onKeyDown:o,onAddTodo:a}=e;return Object(j.jsxs)(te,{className:Object(ne.a)("",{active:n.length>0}),children:[Object(j.jsx)(oe,{className:"icon",htmlFor:"add-todo-input"}),Object(j.jsx)(ae,{children:Object(j.jsx)("input",{id:"add-todo-input",type:"text",placeholder:"\u65b0\u589e\u5de5\u4f5c",value:n,onChange:e=>{null===t||void 0===t||t(e.target.value)},onKeyDown:e=>{"Enter"===e.key&&(null===o||void 0===o||o())}})}),Object(j.jsx)(ie,{className:Object(ne.a)("",{active:n.length>0}),children:Object(j.jsx)("button",{className:"btn-reset",onClick:()=>null===a||void 0===a?void 0:a(),children:"\u65b0\u589e"})})]})};const se=k.a.div(ce||(ce=Object(w.a)(["\n  min-height: 52px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  word-wrap: break-word;\n  word-break: break-word;\n  padding: 0 12px;\n  box-shadow: 0 17px 0 -16px #e5e5e5;\n  flex-wrap: wrap;\n\n  .task-item-body-input {\n    user-select: none;\n    display: none;\n    flex: 1;\n    padding: 8px 0px;\n    border: 0;\n    outline: 0;\n    font-size: 1rem;\n\n    &::placeholder {\n      color: var(--gray);\n      font-size: 13px;\n    }\n  }\n\n  &:hover {\n    background: #fff3eb;\n    box-shadow: inset 0 0 0 1px #fff3eb;\n\n    .task-item-action .btn-destroy {\n      display: inline-flex;\n    }\n  }\n\n  &.done {\n    .task-item-body {\n      color: var(--gray);\n      text-decoration: line-through;\n    }\n\n    .icon-checked {\n      background-image: url(",");\n    }\n  }\n\n  &.edit {\n    .task-item-body-input {\n      display: block;\n    }\n    .task-item-body-text {\n      display: none;\n    }\n    .task-item-action {\n      display: none;\n    }\n  }\n\n  .task-item-checked {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .task-item-body {\n    font-weight: 400;\n    padding: 8px 12px;\n    flex: 1;\n    display: flex;\n  }\n\n  .task-item-action {\n    .btn-destroy {\n      display: none;\n      font-size: 30px;\n      transition: color 0.2s ease-out;\n      font-weight: 300;\n      &:after {\n        content: '\xd7';\n      }\n    }\n  }\n\n  .icon-checked {\n    background-image: url(",");\n    background-position: center;\n    background-repeat: no-repeat;\n\n    &:hover {\n      transition: background-image 0.5s;\n      background-image: url(",");\n    }\n  }\n"])),P,K,V);var le=e=>{let{todo:n,onToggleDone:t,onSave:a,onDelete:i,onChangeMode:c}=e;const r=Object(o.useRef)(null);return Object(j.jsxs)(se,{className:Object(ne.a)("",{done:n.isDone,edit:n.isEdit}),children:[Object(j.jsx)("div",{className:"task-item-checked",children:Object(j.jsx)("span",{className:"icon icon-checked",onClick:()=>{null===t||void 0===t||t(n.id)}})}),Object(j.jsxs)("div",{className:"task-item-body",onDoubleClick:()=>null===c||void 0===c?void 0:c({id:n.id,isEdit:!0}),children:[Object(j.jsx)("span",{className:"task-item-body-text",children:n.title}),Object(j.jsx)("input",{ref:r,className:"task-item-body-input",defaultValue:n.title,onKeyDown:e=>{r.current.value.length>0&&"Enter"===e.key&&(null===a||void 0===a||a({id:n.id,title:r.current.value})),"Escape"===e.key&&(null===c||void 0===c||c({id:n.id,isEdit:!1}))}})]}),Object(j.jsx)("div",{className:"task-item-action ",children:Object(j.jsx)("button",{className:"btn-reset btn-destroy icon",onClick:e=>{null===i||void 0===i||i({id:n.id})}})})]})};var de,ue,be=e=>{let{todos:n,onToggleDone:t,onSave:o,onDelete:a,onChangeMode:i}=e;return Object(j.jsx)("div",{children:n.map((e=>Object(j.jsx)(le,{todo:e,onSave:e=>{let{id:n,title:t}=e;null===o||void 0===o||o({id:n,title:t})},onDelete:e=>{let{id:n}=e;null===a||void 0===a||a({id:n})},onToggleDone:e=>{t(e)},onChangeMode:e=>{let{id:n,isEdit:t}=e;null===i||void 0===i||i({id:n,isEdit:t})}},e.id)))})};const je=k.a.footer(de||(de=Object(w.a)(["\n  display: flex;\n  justify-content: space-between;\n\n  padding: 0 16px;\n  p {\n    font-size: 14px;\n    font-weight: 300;\n    margin: 2rem 0 1rem;\n  }\n"]))),he=k.a.button(ue||(ue=Object(w.a)(["\n  padding: 0;\n  border: 0;\n  background: none;\n  vertical-align: baseline;\n  appearance: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  cursor: pointer;\n  outline: 0;\n\n  font-size: 14px;\n  font-weight: 300;\n  margin: 2rem 0 1rem;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));var pe=e=>{let{todosLeft:n}=e;const{logout:t}=f();return Object(j.jsxs)(je,{children:[Object(j.jsxs)("p",{children:["\u5269\u9918\u9805\u76ee\u6578\uff1a ",n]}),Object(j.jsx)(he,{onClick:()=>{t()},children:"\u767b\u51fa"})]})},fe=t(26),xe=t.n(fe);var ge=()=>{const[e,n]=Object(o.useState)(""),[t,a]=Object(o.useState)(""),i=Object(s.l)(),{login:c,isAuthenticated:l}=f();return Object(o.useEffect)((()=>{l&&i("/todos")}),[i,l]),Object(j.jsxs)(C,{children:[Object(j.jsx)("div",{children:Object(j.jsx)(A,{})}),Object(j.jsx)("h1",{children:"\u767b\u5165 Todo"}),Object(j.jsx)(D,{children:Object(j.jsx)(U,{label:"\u5e33\u865f",placeholder:"\u8acb\u8f38\u5165\u5e33\u865f",value:e,onChange:e=>n(e)})}),Object(j.jsx)(D,{children:Object(j.jsx)(U,{type:"password",label:"\u5bc6\u78bc",placeholder:"\u8acb\u8f38\u5165\u5bc6\u78bc",value:t,onChange:e=>a(e)})}),Object(j.jsx)(E,{onClick:async()=>{if(0===e.length)return;if(0===t.length)return;await c({username:e,password:t})?xe.a.fire({title:"\u767b\u5165\u6210\u529f\uff01",icon:"success",showConfirmButton:!1,timer:1e3,position:"top"}):xe.a.fire({title:"\u767b\u5165\u5931\u6557\uff01",icon:"error",showConfirmButton:!1,timer:1e3,position:"top"})},children:"\u767b\u5165"}),Object(j.jsx)(r.b,{to:"/signup",children:Object(j.jsx)(T,{children:"\u8a3b\u518a"})})]})};var me=()=>{const[e,n]=Object(o.useState)(""),[t,a]=Object(o.useState)(""),[i,c]=Object(o.useState)(""),l=Object(s.l)(),{register:d,isAuthenticated:u}=f();return Object(o.useEffect)((()=>{u&&l("/todos")}),[l,u]),Object(j.jsxs)(C,{children:[Object(j.jsx)("div",{children:Object(j.jsx)(A,{})}),Object(j.jsx)("h1",{children:"\u5efa\u7acb\u60a8\u7684\u5e33\u865f"}),Object(j.jsx)(D,{children:Object(j.jsx)(U,{label:"\u5e33\u865f",placeholder:"\u8acb\u8f38\u5165\u5e33\u865f",value:e,onChange:e=>n(e)})}),Object(j.jsx)(D,{children:Object(j.jsx)(U,{label:"Email",placeholder:"\u8acb\u8f38\u5165 Email",value:t,onChange:e=>a(e)})}),Object(j.jsx)(D,{children:Object(j.jsx)(U,{type:"password",label:"\u5bc6\u78bc",placeholder:"\u8acb\u8f38\u5165\u5bc6\u78bc",value:i,onChange:e=>c(e)})}),Object(j.jsx)(E,{onClick:async()=>{if(0===e.length)return;if(0===t.length)return;if(0===i.length)return;await d({username:e,email:t,password:i})?xe.a.fire({title:"\u8a3b\u518a\u6210\u529f\uff01",icon:"success",showConfirmButton:!1,timer:1e3,position:"top"}):xe.a.fire({title:"\u8a3b\u518a\u5931\u6557\uff01",icon:"error",showConfirmButton:!1,timer:1e3,position:"top"})},children:"\u8a3b\u518a"}),Object(j.jsx)(r.b,{to:"/login",children:Object(j.jsx)(T,{children:"\u53d6\u6d88"})})]})};const Oe="https://todo-list.alphacamp.io/api",ve=d.a.create({baseURL:Oe});ve.interceptors.request.use((e=>{const n=localStorage.getItem("authToken");return n&&(e.headers.Authorization="Bearer ".concat(n)),e}),(e=>console.error(e)));const ye=async e=>{try{const{title:n,isDone:t}=e;return(await ve.post("".concat(Oe,"/todos"),{title:n,isDone:t})).data}catch(n){console.error("[Create Todo failed]: ",n)}},we=async e=>{try{const{id:n,title:t,isDone:o}=e;return(await ve.patch("".concat(Oe,"/todos/").concat(n),{title:t,isDone:o})).data}catch(n){console.error("[Patch Todo failed]: ",n)}};var ke=()=>{const[e,n]=Object(o.useState)(""),[t,a]=Object(o.useState)([]),i=Object(s.l)(),{isAuthenticated:c,currentMember:r}=f();return Object(o.useEffect)((()=>{(async()=>{try{const e=await(async()=>{try{return(await ve.get("".concat(Oe,"/todos"))).data.data}catch(e){console.error("[Get Todos failed]: ",e)}})();a(e.map((e=>({...e,isEdit:!1}))))}catch(e){console.error(e)}})()}),[]),Object(o.useEffect)((()=>{c||i("/login")}),[i,c]),Object(j.jsxs)("div",{children:["TodoPage",Object(j.jsx)(ee,{username:null===r||void 0===r?void 0:r.name}),Object(j.jsx)(re,{inputValue:e,onChange:e=>{n(e)},onAddTodo:async()=>{try{if(0===e.length)return;const t={title:e,isDone:!1},o=await ye(t);a((e=>[...e,{id:o.id,title:o.title,isDone:o.isDone,isEdit:!1}])),n("")}catch(t){console.error(t)}},onKeyDown:async()=>{try{if(0===e.length)return;const t={title:e,isDone:!1},o=await ye(t);a((e=>[...e,{id:o.id,title:o.title,isDone:o.isDone,isEdit:!1}])),n("")}catch(t){console.error(t)}}}),Object(j.jsx)(be,{todos:t,onSave:async e=>{let{id:n,title:t}=e;try{await we({id:n,title:t}),a((e=>e.map((e=>e.id===n?{...e,title:t,isEdit:!1}:e))))}catch(o){console.error(o)}},onDelete:async e=>{let{id:n}=e;try{await(async e=>{try{return(await ve.delete("".concat(Oe,"/todos/").concat(e))).data}catch(n){console.error("[Delete Todo failed]: ",n)}})(n),a((e=>e.filter((e=>e.id!==n))))}catch(t){console.error(t)}},onToggleDone:async e=>{const n=t.find((n=>n.id===e));try{await we({id:e,isDone:!n.isDone}),a((n=>n.map((n=>n.id===e?{...n,isDone:!n.isDone}:n))))}catch(o){console.error(o)}},onChangeMode:e=>{let{id:n,isEdit:t}=e;a((e=>e.map((e=>e.id===n?{...e,isEdit:t}:{...e,isEdit:!1}))))}}),Object(j.jsx)(pe,{todosLeft:t.length})]})};var Ce=function(){return Object(j.jsx)("div",{className:"app",children:Object(j.jsx)(r.a,{basename:"/react-todolist",children:Object(j.jsx)(x,{children:Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{path:"login",element:Object(j.jsx)(ge,{})}),Object(j.jsx)(s.a,{path:"signup",element:Object(j.jsx)(me,{})}),Object(j.jsx)(s.a,{path:"todos",element:Object(j.jsx)(ke,{})}),Object(j.jsx)(s.a,{path:"*",element:Object(j.jsx)(y,{})})]})})})})};var De=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,282)).then((n=>{let{getCLS:t,getFID:o,getFCP:a,getLCP:i,getTTFB:c}=n;t(e),o(e),a(e),i(e),c(e)}))};c.a.createRoot(document.getElementById("root")).render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(Ce,{})})),De()}},[[281,1,2]]]);
//# sourceMappingURL=main.afe9bfc3.chunk.js.map