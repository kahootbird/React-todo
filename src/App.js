import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Form from "./components/Form"
import Component1 from './components/Component1'
//import Todo from './components/Todo'
import TodoList from './components/TodoList'
//import Todo from './components/Todo'

function App() {
  const [todos, setTodos] = useState([])
  const [inputText, setInputText] = useState("");
  function addTodo(todo)
  {
    setTodos([todo, ...todos])
  }
  function removeTodo(id) {
   setTodos(todos.filter(todo => todo.id !== id));
 }
 function addTodo(todo) {
  // adds new todo to beginning of todos array
  setTodos([todo, ...todos]);
}

function toggleComplete(id) {
  setTodos(
    todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    })
  );
}
  //const [todos, setTodos] = useState("");

/*
  function handleSubmit(event) {
    event.preventDefault();
    //alert('A name was submitted: ' + this.event.value);
    console.log("VALUE SUBMITTED")
    //event.preventDefault();
  }
  */
  return (
    <div className="App">
      <header className="App-header">
        Todo List
        <Component1 title='Hello From Title Prop' />
        <Form addTodo={addTodo}/>
        <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
        />



      </header>
      <h1> {setInputText} </h1>
    </div>
  );
}
export default App;
