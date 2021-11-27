import React from 'react'

export default class FullEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sender: '',
      recipient: '',
      subject: '',
      message: '',
      date: '',
      id: props.id,
    }

    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    let url = `http://localhost:3001/emails/${this.state.id}`;
    console.log(url)
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


  render() {

    return(
      <div>
      <h1>Subject: {this.state.subject}</h1>
      <h3>Sender: {this.state.sender}</h3>
      <h3>Recipient: {this.state.recipient}</h3>
      <p>{this.state.date}</p>
      <p>{this.state.message}</p>
      </div>
    )
  }
}