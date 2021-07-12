import React, { useState } from 'react';
import ToDoList from './ToDoList'
import NewToDo from './NewToDo'
import AppContext from "./Contexts/AppContext";

function App() {
  const [todos, setTodos] = useState([
    { name: 'laundry' },
    { name: 'buy groceries' },
    { name: 'mow lawn' }
  ])
  const [currentItem, setCurrentItem] = useState({name: ''})

  return (
    <AppContext.Provider
      value={{
        currentItem,
        setCurrentItem,
        todos,
        setTodos
      }}
    >
      <div className="App">
        <ToDoList />
        <NewToDo />
      </div>
    </AppContext.Provider>
  );
}

export default App;
