import './App.css';
import User from './Components/user';
import ToDoList from './Components/toDoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
        <p>Made by Aileen & Justin</p>
      </header>
      <body>
        <User />
        <br></br>
        <ToDoList />
      </body>
    </div>
  );
}

export default App