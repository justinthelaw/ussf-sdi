import React from 'react'
import './emailDisplay.css'
import EmailMessage from './emailMessage'

export default class EmailDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfEmails: 0,
    }

    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    let url = `http://localhost:3001/emails`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        let number = data.length
        this.setState({
          numOfEmails: number
        })
      })
      .catch(error => error)
  }


  render() {
    let arrOfEmails = [];
    for (let index = 1; index <= this.state.numOfEmails; index++) {
      arrOfEmails.push(<EmailMessage id={index}/>);
    }
    return(
      <div>
        <table className="emailTable">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Sender</th>
            </tr>
          </thead>
          <tbody>
            {arrOfEmails}
          </tbody>
        </table>
      </div>
    )
  }
}