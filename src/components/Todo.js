import React from 'react'
import Form from "./Form";

const Todo = (todo, toggleComplete, removeTodo ) => {
  return (
    <div style={{display: "flex"}}>
  <input type="checkbox" />
  <li
  style={{
    color: "white",
    textDecoration: todo.completed ? "line-through" : null
  }}
  >

   {todo.task}
   </li>
  <button>Close </button>
  </div>
  )
}
/*
{todos.map(todo => (
  <Form todo={todo} />
))}
*/
/*
function Todo1 ({todos})
return (
  <ul>

  </ul>
)
*/
/*
Component1.defaultProps = {
  title: 'Todo List Application'
}
*/
export default Todo
