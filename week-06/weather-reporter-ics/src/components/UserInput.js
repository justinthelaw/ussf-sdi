import React from "react";
import InputProcessor from "./InputProcessor";

export default class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      zipCode: null,
      inputAdded: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleBack = this.handleBack.bind(this)
  }

  async handleSubmit(event) {
    event.preventDefault();
    await this.setState({
      name: this.name.value,
      email: this.email.value,
      zipCode: this.zipCode.value,
      inputAdded: true
    })
  }

  async handleBack(event) {
    await this.setState({
      inputAdded: false
    })
  }

  render() {
    if (this.state.inputAdded) {
      return (
        <div className="restart">
          <InputProcessor
            name={this.state.name}
            email={this.state.email}
            zipCode={this.state.zipCode}
            inputAdded={this.state.inputAdded} />
          <button onClick={this.handleBack}>Restart</button>
        </div>
      )
    } else {
      return (
        <div className="center">
          <form type="submit" onSubmit={this.handleSubmit}>
            <h1>Weather Grabber v1.0</h1>
            <label htmlFor="Name" hidden>Name</label>
            <div className="inputfields">
              <input id="Name"
                type="text"
                placeholder="Name"
                ref={(name) => this.name = name} />
            </div>

            <label htmlFor="Email" hidden>Email</label>
            <div className="inputfields">
              <input id="Email"
                type="email"
                placeholder="Email"
                ref={(email) => this.email = email} />
            </div>

            <label htmlFor="zipCode" hidden>Zip Code</label>
            <div className="inputfields">
              <input id="zipCode"
                type="text"
                pattern="[0-9]{5}"
                title="Please Enter 5-digit zip code"
                placeholder="Zip Code"
                ref={(zipCode) => this.zipCode = zipCode} />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div >
      )
    }
  }
}