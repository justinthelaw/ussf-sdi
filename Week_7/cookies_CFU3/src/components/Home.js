import React from 'react'
import { BrowserRouter as Route } from 'react-router-dom';
import cookies from 'js-cookie'

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
    return (
      <Route path='/home'>
        <h3>
          Welcome home, {this.state.name}!
        </h3>
      </Route>
    )
  }
}