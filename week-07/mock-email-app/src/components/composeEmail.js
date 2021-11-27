import React from 'react'
import './composeEmail.css'

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sender: '',
      recipient: '',
      subject: '',
      message: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit(event) {
    event.preventDefault();
    await this.setState({
      sender: this.sender.value,
      recipient: this.recipient.value,
      subject: this.subject.value,
      message: this.message.value,
    })
    let url = 'http://localhost:3001/send'
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => {
      alert("Email sent successfully!")
    })
  }

  render() {
    console.log(this.state)
    return(
      <form onSubmit={this.handleSubmit} className='composeEmail'>
        <label>
          Compose Email:
          <input type="text" placeholder="Sender" ref={(sender) => this.sender = sender}/>
          <input type="text" placeholder="Recipient" ref={(recipient) => this.recipient = recipient}/>
          <input type="text" placeholder="Subject" ref={(subject) => this.subject = subject}/>
          <textArea placeholder="Message" rows="6" cols="60" ref={(message) => this.message = message}/>
        </label>
        <input type="submit" value="Send"/>
      </form>
    )
  }
}