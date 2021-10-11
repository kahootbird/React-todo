import React from 'react'
import Todo from './Todo'
/*
{todos.map(todo => (
  <Todo key={todo.id} todo={todo} />
))}
*/

/*
function TodoList({ todos, removeTodo, toggleComplete }) {
  return (
    <div>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
}
*/
const TodoList = ({todos}) => {
  return (
    <div>
  <ul>
  {todos.map(todo => (
    <Todo key={todo.id} todo={todo} />
  ))}
  </ul>
  </div>
  )
}

/*
Component1.defaultProps = {
  title: 'Todo List Application'
}
*/
export default TodoList
