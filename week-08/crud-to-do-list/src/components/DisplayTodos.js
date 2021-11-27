import React from 'react'

export default class DisplayTodos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      inputTodo: null,
      counter: this.props.counter
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.props.id !== prevProps.id || this.state.counter !== prevState.counter || this.props.counter !== prevProps.counter) {
      await this.getTodosFetch(`http://localhost:3001/users/${this.props.id}/todos`)
      this.listTodos(this.state.todos)
    }
  }

  async handleCheck(e, target) {
    let targetName = this.state.todos.find(item => item.id === target).name
    let checked = e.target.checked
    await this.statusFetch(checked, target, targetName)
    this.setState({ counter: this.state.counter - 1 })
  }

  checkStatus(target) {
    return this.state.todos.find(item => item.id === target).done
  }

  handleChange(e) {
    e.preventDefault()
    this.setState({ inputTodo: e.target.value })
  }

  async handleSubmit(e) {
    e.preventDefault()
    if (this.state.todos.find(item => item.name === this.state.inputTodo)) {
      alert(`To-do: ${this.state.inputTodo} already exists`)
    } else if (!this.props.users.find(user => user.id === this.props.id)) {
      alert(`Please select or add a user before adding a to-do`)
    } else {
      await this.postTodoFetch(this.state.inputTodo, this.props.id)
      await this.setState({ counter: this.state.counter + 1 })
    }
  }

  async handleDelete(e, target) {
    e.preventDefault()
    let targetName = this.state.todos.find(item => item.id === target).name
    await this.deleteTodoFetch(target, targetName)
    this.setState({ counter: this.state.counter + 1 })
  }

  listTodos(array) {
    return array.map(item =>
      <li key={(item.id) * 10}>
        {item.name}
        <input
          name={item.name}
          type="checkbox"
          defaultChecked={this.checkStatus(item.id)}
          onClick={(e) => this.handleCheck(e, item.id)}
        />
        <button
          name={item.name}
          onClick={(e) => this.handleDelete(e, item.id)}
        >
          Delete
        </button>
      </li >)
  }

  async deleteTodoFetch(target, targetName) {
    await fetch(`http://localhost:3001/todos`, {
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

  async statusFetch(checked, target, targetName) {
    await fetch(`http://localhost:3001/todos`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: target,
        done: checked,
        name: targetName
      })
    })
  }

  async postTodoFetch(todo, id) {
    await fetch(`http://localhost:3001/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: todo,
        user_id: id
      })
    })
  }

  async getTodosFetch(url) {
    await fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({ todos: [...data] })
      })
  }

  render() {
    return (
      <div>
        <h3>To-Do List</h3>
        <div>
          {this.props.id > 0 ?
            <div>
              <form onSubmit={this.handleSubmit}>
                <label htmlFor='addTodo' hidden />
                <input
                  name='addTodo'
                  type="text"
                  placeholder="Add To-Do"
                  required="required"
                  onChange={this.handleChange}
                />
                <button type="submit">Submit</button>
              </form>
              <ul> {this.listTodos(this.state.todos)}</ul>
            </div>
            : 'Please pick a user!'}
        </div>
      </div >
    )
  }
}