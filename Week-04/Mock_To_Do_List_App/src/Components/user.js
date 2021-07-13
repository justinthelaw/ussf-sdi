import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      set: '',
      text: '\'s To-Do List'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Welcome, ' + this.state.value + '!');
    this.setState({set: this.state.value + this.state.text})
    this.setState({value: ''})
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input value={this.state.value} onChange={this.handleChange} placeholder="Type username here..."/>
        </label>
        <input type="submit" value="Submit username!" />
        <h3>{this.state.set}</h3>
      </form>
    );
  }
}

export default User;