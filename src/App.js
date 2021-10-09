import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Form from "./components/Form"
import Component1 from './components/Component1'
import Todo1 from './components/Todo1'
//import Todo1 from './components/Todo1'

function App() {
  const [todos, setTodos] = useState([])
  const [inputText, setInputText] = useState("");
  function addTodo(todo)
  {
    setTodos([todo, ...todos])
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
        <Todo1 addTodo={addTodo} />
        <Form />


      </header>
      <h1> {setInputText} </h1>
    </div>
  );
}
export default App;
