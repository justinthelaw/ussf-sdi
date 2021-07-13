import React from 'react'
import './emailMessage.css'
import FullEmail from './fullEmail'

export default class EmailMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sender: '',
      recipient: '',
      subject: '',
      message: '',
      date: '',
      id: props.id,
      display: false
    }

    this.componentDidMount = this.componentDidMount.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
    this.clearMessage = this.clearMessage.bind(this)
  }

  componentDidMount() {
    let url = `http://localhost:3001/emails/${this.state.id}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          sender: data.sender,
          recipient: data.recipient,
          subject: data.subject,
          message: data.message,
          date: data.date,
          id: data.id
        })
      })
      .catch(error => error)
  }

  handleOnClick(event) {
    this.setState({
      display: true,
    })
  }

  clearMessage(){
    this.setState({
      display: false
    })
  }

  render() {
    if (this.state.display) {
      return (
        <div>
          <FullEmail id={this.state.id}/>
          <button type="button" onClick={this.clearMessage}>Close Message</button>
        </div>
      )
    }

    return(
      <tr onClick={this.handleOnClick}>
        <td className="email">{this.state.subject}</td>
        <td className="email">{this.state.sender}</td>
      </tr>
    )
  }
}