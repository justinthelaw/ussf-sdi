import React from 'react'
import cookies from 'js-cookie'
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
  }

  componentDidMount() {
    const getName = () => {
      fetch(`http://localhost:5001/cookies/name`, { credentials: 'include' })
        .then(response => { if (response) return response })
        .then(response => cookies.get('name'))
        .then(cookieName => this.setState({ name: cookieName }))
    }
    getName();
  }

  render() {
    if (!this.state.name) {
      return (
        <h3>
          Please enter a name on the <Link exact to="/login">Login</Link> page!
        </h3>
      )
    }
    return (
      <h3>
        Welcome home, {this.state.name}!
      </h3>
    )
  }
}