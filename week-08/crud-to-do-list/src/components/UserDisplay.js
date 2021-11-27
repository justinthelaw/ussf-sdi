import React from 'react';
import DisplayTodos from './DisplayTodos'
import '../App.css'

export default class UserDisplay extends React.Component {
  constructor() {
    super()
    this.state = {
      users: [],
      selectedName: '',
      selectedId: null,
      inputName: null,
      counter: 0
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    this.getUsersFetch('http://localhost:3001/users')
  }

  async componentDidUpdate(_, prevState) {
    if (this.state.counter !== prevState.counter) {
      await this.getUsersFetch('http://localhost:3001/users')
      this.displayUsers(this.state.users)
    }
  }

  async handleClick(e, target) {
    e.preventDefault()
    await this.setState({ selectedName: `${target}` })
    await this.state.users.forEach(user => {
      if (user.name === this.state.selectedName) {
        this.setState({ selectedId: user.id })
      }
    })
  }

  handleChange(e) {
    e.preventDefault()
    this.setState({ inputName: e.target.value })
  }

  handleSubmit(e) {
    if (this.state.users.find(user => user.name === this.state.inputName)) {
      alert(`User: ${this.state.inputName} already exists`)
    } else {
      this.postUserFetch(this.state.inputName)
    }
  }

  async handleDelete(e, target) {
    e.preventDefault()
    let targetName = this.state.users.find(item => item.id === target).name
    await this.deleteUsersFetch(target, targetName)
    await fetch(`http://localhost:3001/users/todos`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: target
      })
    })
    this.setState({ counter: this.state.counter + 1 })
  }

  displayUsers(array) {
    return array.map((user) =>
      <li
        className='header'
        key={user.id}
        onClick={e => this.handleClick(e, user.name)}
      >
        {user.name}
        <button
          name={user.name}
          onClick={(e) => this.handleDelete(e, user.id)}
        >
          Delete
        </button>
      </li>)
  }

  async getUsersFetch(url) {
    await fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ users: [...data] }))
  }

  async postUserFetch(userName) {
    await fetch(`http://localhost:3001/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: userName })
    })
  }

  async deleteUsersFetch(target, targetName) {
    await fetch(`http://localhost:3001/users`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: target,
        name: targetName
      })
    })
  }

  render() {
    return (
      <div className="body">
        <div>
          <h3>User List</h3>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='addUser' hidden />
            <input
              name='addUser'
              type='text'
              placeholder='Add User'
              required="required"
              onChange={e => this.handleChange(e)}
            />
            < button type='submit'>Submit</button >
          </form >
          <ul>
            {this.displayUsers(this.state.users)}
          </ul>
        </div >
        <div className="body todos">
          <DisplayTodos id={this.state.selectedId} counter={this.state.counter} users={this.state.users} />
        </div>
      </div >
    )
  }
}