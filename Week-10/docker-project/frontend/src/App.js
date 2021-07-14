import './App.css';
import React, { useRef, useState, useEffect } from 'react';

const url = process.env.BACKEND_URL;

function App() {
  console.log(url);
  const [randWish, setRandWish] = useState('');
  const [changeWish, setChangeWish] = useState(false);
  
  const authorText = useRef(null);
  const wishText = useRef(null);

  function handleClick(e) {
    e.preventDefault();
    const author = authorText.current.value === '' ? 'Anon' : authorText.current.value.substring(0, 255);
    const wish = wishText.current.value.substring(0, 255);

    fetch(`${url}/wish`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: author,
        wish: wish
      })
    });

    authorText.current.value = '';
    wishText.current.value = '';

  }

  useEffect(() => {
    async function fetchWish() {
      await fetch(`${url}/random`)
        .then(data =>  data.json())
        .then(json => {
          const response = json[0]
          if (response.wish === '') {
            setRandWish(<img src="https://community.custom-cursor.com/uploads/default/original/2X/8/8df92e258c62cf229b714e2674cd9926bfcd0899.gif" alt="Rick"/>);
          } else {
            setRandWish(`${response.wish} - ${response.name}`)
          }
        })
    }
    fetchWish();
  }, [changeWish])

  return (
    <div className="App">
      <header className="App-header">
          {randWish}
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Name" name="name" ref={authorText}/>
          <br />
          <textarea rows={5} placeholder="Wish" name="wish" ref={wishText}/>
          <br />
          <button onClick={handleClick}>Submit</button>
          <button onClick={e => {
            e.preventDefault()
            setChangeWish(!changeWish)
            }}>Change Wish</button>
        </form>
      </header>
    </div>
  );
}

export default App;
