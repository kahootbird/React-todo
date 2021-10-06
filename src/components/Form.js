import React from 'react'

const Form = ({setInputText}) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value)
    console.log(e)
    setInputText(e.target.value)
  }
  function handleSubmit(event) {
    event.preventDefault();
    //alert('A name was submitted: ' + this.event.value);
    console.log("VALUE SUBMITTED")
    //event.preventDefault();
  }
  return (
    <div>FormData
    <fieldset>
       <label>
         <p>Name</p>
         <input name="name" />
       </label>
     </fieldset>

    <button onClick={handleSubmit} >

    </button>
    </div>

  )
}

export default Form


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
