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

  function handleBrowser(e) {
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

  async function handleExpress(e) {
    e.preventDefault();
    await fetch(`http://localhost:5001/login?name=${name}`, {
      credentials: 'include', method: 'GET', headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
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
  }


  return (
    <form type="submit">
      <label htmlFor="name" />
      <input type="text" name="name" placeholder="Name" onChange={e => handleChange(e)} /> <br />
      <Button type="submit" onClick={e => handleBrowser(e)}>Login (Set Cookies In Browser)</Button>
      <Button type="submit" onClick={e => handleExpress(e)}>Login (Set Cookies In Express)</Button>
      <Button type="submit" onClick={e => handleClear(e)}>Clear Cookies</Button>
    </form>
  )
}
