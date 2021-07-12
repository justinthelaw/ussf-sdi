import React from 'react';
import AppContext from "./Contexts/AppContext";
import { useContext } from "react";

function NewToDo() {
  const { setCurrentItem, currentItem, setTodos, todos } = useContext(AppContext)
  return (
    <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          if (e.target.querySelector('input[name="name"]').value === '') {
            alert('Empty Input!');
            e.target.querySelector('input[name="name"]').focus();
            return;
          };
          setTodos([...todos, currentItem]);
          e.target.reset();
          e.target.querySelector('input[name="name"]').focus();
          setCurrentItem({name: ''});
        }}>
            <label>
                New Item:
                <input type="text" name="name" autofocus='true' onChange={() => setCurrentItem({name: document.querySelector('input[name="name"]').value})}
                />
            </label>
            <input type="submit" value="Submit"/>
        </form>
    </div>
  );
}

export default NewToDo;
