import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Greeter from '../components/Greeter'
import StudentList from '../components/StudentList'

ReactDOM.render(
  <React.StrictMode>
    <StudentList />
  </React.StrictMode>,
  document.getElementById('root')
);
