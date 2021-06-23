import React, { useReducer } from 'react';

function init(initialState) {
  return {
    list: [],
    textInput: 'newTodo!',
    toDelete: ''
  }
}

function reducer(state, action, ref) {

  switch (action.type) {
    case 'add':
      return {list: [...state.list, {name: state.textInput}]};
    case 'subtract':
      return {list: state.list.filter(toDoItem => toDoItem.name !== state.toDelete)}
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

function App({initialState}) {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  return (
    <>
      <div>
        My To Do List:
        <ul>
          {state.list.map(toDoItem =>
          <li> {toDoItem.name}
            <button
              onClick={(e) => {
                let target = e.target.parentElement.innerText;
                let index = target.indexOf(' Complete');
                let final = target.substring(0, index).trim();
                state.toDelete = final;
                dispatch({type: 'subtract'});
              }}>
              Complete
            </button>
          </li>)}
        </ul>
      </div>

      <form onSubmit={(e) => {
          dispatch({type: 'add'});
          e.preventDefault();
      }}>
        <label>
          Add New To-Do:
          <input type="text" placeholder="Type here..." onChange={(e) => {
            state.textInput = e.target.value
          }}/>
        </label>
        <input type="submit" value="Submit To-Do"/>
      </form>

    <br/>

      <button
        onClick={() => dispatch({type: 'reset', payload: initialState})}>
        Reset To-Do List
      </button>
    </>
  );
}

export default App;
