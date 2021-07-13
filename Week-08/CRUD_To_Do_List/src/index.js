import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css'

ReactDOM.render(
  <React.StrictMode>
    <h1 className='header'>CRUD To-Do List</h1>
    <div className="center">
      <App />
    </div>
  </React.StrictMode >,
  document.getElementById('root')
);
