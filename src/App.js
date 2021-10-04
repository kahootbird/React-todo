import logo from './logo.svg';
import './App.css';
import Component1 from './components/Component1'
import Todo1 from './components/Todo1'

//import Todo1 from './components/Todo1'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Todo List
        <Component1 title='Hello From Title Prop' />
        <Todo1 title='Todo List' />

      </header>
      <form>
      <fieldset>
         <label>
           <p>Name</p>
           <input name="name" />
         </label>
       </fieldset>
       <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default App;
