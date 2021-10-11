import React, { useState }  from 'react'
import { v4 as uuidv4 } from 'uuid';
const Form = ({addTodo}) => {

  const inputTextHandler = (e) => {
}

  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false
  });


    function handleTaskInputChange(e) {
      // e.target.value contains new input from onChange
      // event for input elements
      setTodo({ ...todo, task: e.target.value });
    }

    function handleSubmit(e) {
      e.preventDefault(); // prevents browser refresh
      // trim() gets rid of string whitespace
      if (todo.task.trim()) {
        addTodo({ ...todo, id: uuidv4() });
        setTodo({ ...todo, task: "" });
      }
    }

  return (
    <div>FormData
    <form onSubmit={handleSubmit}>
    <input
    name="task"
    type="text"
    value={todo.task}
    onChange={handleTaskInputChange}
     />
    <button />
    </form>
    Okz
    </div>

  )
}

export default Form

/*
<fieldset>
   <label>
     <p>Name</p>
     <input name="name" />
   </label>
 </fieldset>

<button onClick={handleSubmit} >

</button>
*/
/*
//import React from 'react'

const Todo1 = (props) => {
  return (
  <todo1>
  <h1> TODO 1 {props.title}</h1>
  </todo1>
  )
}
Component1.defaultProps = {
  title: 'Todo List Application'
}
export default Todo1

*/
