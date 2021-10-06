import logo from './logo.svg';
import './App.css';
import Component1 from './components/Component1'
import Todo1 from './components/Todo1'

//import Todo1 from './components/Todo1'

function App() {
  function handleSubmit(event) {
    event.preventDefault();
    //alert('A name was submitted: ' + this.event.value);
    console.log("VALUE SUBMITTED")
    //event.preventDefault();
  }
  return (
    <div className="App">
      <header className="App-header">
        Todo List
        <Component1 title='Hello From Title Prop' />
        <Todo1 title='Todo List' />
        <form onSubmit={handleSubmit}>
        <fieldset>
           <label>
             <p>Name</p>
             <input name="name" />
           </label>
         </fieldset>
                 <input type="submit" value="Submit" />
         </form>
      </header>

    </div>
  );
}
export default App;
