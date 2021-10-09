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


  function handleSubmit(event) {
    event.preventDefault();
    //alert('A name was submitted: ' + this.event.value);
    console.log("VALUE SUBMITTED")
    console.log(event.value)
    if (todo.task.trim())
    {
      addTodo({ ...todo, id: uuidv4()   })
      //reset form
      setTodo({ ...todo, task: ""})
      console.log("DATA HERE" + todo.task)
    }
    //event.preventDefault();


  }
  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value});
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
