(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{23:function(n,t,e){},30:function(n,t,e){"use strict";e.r(t);var o=e(0),i=e(9),d=e.n(i),c=(e(23),e(13)),r=e(3),a=e(4),s=e(8),l=e.p+"static/media/doneStamp.29e02b1c.png",u="add_todo",h="delete_todo",b="add_user",p="toggle_todo",j="edit_todo",x="edit_confirm";var g,f,O,w,v,m,k,y,E=e(1),C=a.a.div(g||(g=Object(r.a)([""]))),D=a.a.div(f||(f=Object(r.a)(["\n  color: black;\n  font-size: 100px;\n  text-align: center;\n  margin-bottom: 40px;\n  font-weight: bolder;\n  -webkit-text-stroke: 3px #fff;\n"]))),T=a.a.div(O||(O=Object(r.a)(["\n  width: 1000px;\n  height: auto;\n  margin: auto;\n  margin-top: 50px;\n"]))),_=a.a.input(w||(w=Object(r.a)(["\n  margin-right: 20px;\n  border-radius: 8px;\n  padding: 18px;\n  font-size: 20px;\n  border: black solid 2px;\n"]))),A=a.a.div(v||(v=Object(r.a)(["\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 16px;\n  border: 2px solid white;\n  & + & {\n    margin-top: 20px;\n  }\n  margin-top: 15px;\n"]))),S=a.a.div(m||(m=Object(r.a)(["\n  padding: 15px;\n  font-size: 35px;\n  color: #ffbde5;\n  word-break: break-all;\n  width: 600px;\n  position: relative;\n  ","\n"])),(function(n){return n.isDone?"&:after {\n      content: '';\n      width: 90px;\n      height: 78px;\n      position: absolute;\n      left: 540px;\n      top: -3px;\n      background-image: url(".concat(l,");\n      background-size: 100%;\n      z-index: 1;\n    }"):""})),z=a.a.div(k||(k=Object(r.a)([""]))),U=a.a.button(y||(y=Object(r.a)(["\n  font-size: 25px;\n  padding: 15px;\n  color: white;\n  margin-right: 10px;\n  border-radius: 10px;\n  background: black;\n  border: white 2px outset;\n  transition: 0.5s;\n  &:hover {\n    color: black;\n    background: white;\n    border: black 2px outset;\n    transition: 0.2s;\n    cursor: pointer;\n  }\n  ","\n"])),(function(n){return n.whichTabActive&&n.whichTabActive?"color: black;\n  background: white;\n  border: black 2px outset;\n  transition: 0.2s;":""}));function R(n){var t=n.content,e=n.handleContentChange,o=n.handleAdd,i=n.handleShow,d=n.whichTabActive;return Object(E.jsxs)("div",{style:{marginBottom:"45px"},children:[Object(E.jsx)(_,{type:"text",value:t,onChange:e,placeholder:"Type something   (//\u25cf\u2070\u0c6a\u2070\u25cf)//",size:"25"}),Object(E.jsx)(U,{onClick:o,children:"add todo"}),Object(E.jsx)(U,{whichTabActive:d.current.showAll,onClick:i,children:"show all"}),Object(E.jsx)(U,{whichTabActive:d.current.showDone,onClick:i,children:"show done"}),Object(E.jsx)(U,{whichTabActive:d.current.showUndo,onClick:i,children:"show undo"})]})}function N(n){var t=n.todo,e=n.handleToggle,o=n.handleEditClick,i=n.handleDelete,d=n.handleEditChange,c=n.handleEditConfirm;return Object(E.jsxs)(A,{id:t.id,children:[t.isEditing?Object(E.jsx)(_,{type:"text",defaultValue:t.content,size:"30",onChange:d,autoFocus:!0}):Object(E.jsx)(S,{isDone:t.isDone,children:t.content}),Object(E.jsxs)(z,{children:[t.isEditing?null:Object(E.jsx)(U,{onClick:function(){return e(t.id)},children:t.isDone?"undo":"done"}),t.isEditing?Object(E.jsx)(U,{onClick:function(){return o(t.id)},children:"Cancel"}):Object(E.jsx)(U,{onClick:function(){return o(t.id)},children:"Edit"}),t.isEditing?Object(E.jsx)(U,{onClick:function(){return c(t.id)},children:"Confirm"}):Object(E.jsx)(U,{onClick:function(){return i(t.id)},children:"Delete"})]})]})}var X=function(){var n=Object(o.useState)(""),t=Object(c.a)(n,2),e=t[0],i=t[1],d=Object(o.useState)(""),r=Object(c.a)(d,2),a=r[0],l=r[1],b=Object(o.useState)("all"),g=Object(c.a)(b,2),f=g[0],O=g[1],w=Object(s.c)((function(n){return n.todos.todos})),v=Object(s.b)(),m=Object(o.useRef)({showAll:!0,showDone:!1,showUndo:!1});function k(n){l(n.target.value)}function y(n){v(function(n,t){return{type:x,payload:{id:n,content:t}}}(n,a))}return Object(E.jsx)(C,{children:Object(E.jsxs)(T,{children:[Object(E.jsx)(D,{children:"Todo List"}),Object(E.jsx)(R,{content:e,handleContentChange:function(n){i(n.target.value)},handleAdd:function(){if(""===e)return alert("Please type something in the input box");v(function(n){return{type:u,payload:{content:n}}}(e)),i("")},handleShow:function(n){return"show all"===n.target.innerText?(m.current={showAll:!0,showDone:!1,showUndo:!1},O("all")):"show undo"===n.target.innerText?(m.current={showAll:!1,showDone:!1,showUndo:!0},O("undo")):"show done"===n.target.innerText?(m.current={showAll:!1,showDone:!0,showUndo:!1},O("done")):void 0},whichTabActive:m}),w.filter((function(n){return"undo"===f?!1===n.isDone:"done"===f?!0===n.isDone:"all"===f||void 0})).map((function(n){return Object(E.jsx)(N,{todo:n,handleToggle:function(n){return v(function(n){return{type:p,payload:{id:n}}}(n))},handleEditClick:function(n){return v(function(n){return{type:j,payload:{id:n}}}(n))},handleEditChange:k,handleEditConfirm:y,handleDelete:function(n){return v(function(n){return{type:h,payload:{id:n}}}(n))}},n.id)}))]})})},I=e(12),L=e(2),V=e(11),B=3,J={todos:[{id:1,content:"\u9019\u662f Redux \u7248\u672c\u7684 todo",isDone:!0,isEditing:!1},{id:2,content:"\u628a\u72c0\u614b\u4ea4\u7d66 Redux",isDone:!1,isEditing:!1}]};var F={users:[]};var P=Object(I.a)({todos:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return console.log(n),{todos:[{id:B++,content:t.payload.content,isDone:!1,isEditing:!1}].concat(Object(V.a)(n.todos))};case h:return{todos:n.todos.filter((function(n){return n.id!==t.payload.id}))};case p:return{todos:n.todos.map((function(n){return n.id!==t.payload.id?n:Object(L.a)(Object(L.a)({},n),{},{isDone:!n.isDone})}))};case j:return{todos:n.todos.map((function(n){return n.id!==t.payload.id?n:Object(L.a)(Object(L.a)({},n),{},{isEditing:!n.isEditing})}))};case x:return{todos:n.todos.map((function(n){return n.id!==t.payload.id?n:Object(L.a)(Object(L.a)({},n),{},{content:t.payload.content,isEditing:!n.isEditing})}))};default:return n}},users:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(console.log(["received",t]),t.type){case b:return Object(L.a)(Object(L.a)({},n),{},{users:[].concat(Object(V.a)(n.users),[{name:t.payload.name}])});default:return n}}}),q=Object(I.b)(P,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());d.a.render(Object(E.jsx)(s.a,{store:q,children:Object(E.jsx)(X,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.8d60cd89.chunk.js.map