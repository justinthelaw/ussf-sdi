import styled from 'styled-components'
import { useState } from 'react'
import cookies from 'js-cookie'

const Button = styled.button`
background: white;
border-radius: 2px;
color: black;
padding: 10px;
margin-top: 10px
`

export default function Login() {
  const [name, setName] = useState();

  function handleChange(e) {
    e.preventDefault();
    setName(e.target.value)
  }

  function handleClick(e) {
    e.preventDefault();
    fetch(`http://localhost:5001/login`, {
      credentials: 'include', method: 'POST', headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .then(cookies.set('name', name))
  }

  function handleClear(e) {
    e.preventDefault();
    cookies.remove('name')
    fetch(`http://localhost:5001/cookies/clear`, {
      credentials: 'include', method: 'GET', headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))
  }


  return (
    <form type="submit">
      <label htmlFor="name" />
      <input type="text" name="name" placeholder="Name" onChange={e => handleChange(e)} /> <br />
      <Button type="submit" onClick={e => handleClick(e)}>Login</Button>
      <Button type="submit" onClick={e => handleClear(e)}>Clear Cookies</Button>
    </form>
  )
}
