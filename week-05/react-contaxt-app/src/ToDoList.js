import React from 'react';
import ToDo from './ToDo.js'
import AppContext from "./Contexts/AppContext";
import { useContext } from "react";

function ToDoList() {
  const { todos } = useContext(AppContext);

  return (
    <div>
        My To Do List:
        <ul>
         { todos.map(toDoItem => <li><ToDo todo={toDoItem}/></li>) }
        </ul>
    </div>
  );
}

export default ToDoList;
