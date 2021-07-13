import React from 'react';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      list: []
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    if (this.state.list.includes(this.state.value)){
      alert('Item is already on the list!')
      this.setState({
        value: ''
      })
      event.preventDefault();
    } else {
      this.setState({
        list:[...this.state.list, this.state.value]
      })
      alert('Added ' + this.state.value + '!')
      this.setState({
        value: ''
      })
      event.preventDefault();
    }
  }

  deleteToDo(toDo) {
    this.setState({list:
      this.state.list.filter(element => element !== toDo)
    })
  }

  deleteAll () {
    alert('Congrats! You finished all of your tasks 🎉')
    this.setState({list: []})
  }

  listToDos(list){
    let toDoList = list.map((toDo) => (
      <li>{toDo}
        <button onClick = {() => this.deleteToDo(toDo)}>
        Complete!
        </button>
      </li>
    ))

    return (
      <div>
        <ul>{toDoList}</ul>
      </div>
    )
  }

  render() {
    return (
      <div>

        <form onSubmit={this.handleSubmit}>
          <label>
            To-Do Submission:
            <input value={this.state.value} onChange={this.handleChange} placeholder="Type to-do here..." />
          </label>
          <input type="submit" value="Submit to-do!" />
        </form>

          {this.listToDos(this.state.list)}

          <button id="deleteButton" onClick = {() => {
            this.deleteAll()
          }}>Delete All!</button>

      </div>
    );
  }
}

export default ToDoList