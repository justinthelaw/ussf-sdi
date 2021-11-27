/* eslint-disable */

import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [message, changeMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:2001/test')
      .then((data) => data.json())
      .then((data) => data.map(entry => entry.name))
      .then((res) => {
        changeMessage(res);
      })
      .catch((error) => changeMessage(JSON.stringify(error)));
  });

  return (
    <div className="App">
      { JSON.stringify(message) }
    </div>
  );
}

export default App;
