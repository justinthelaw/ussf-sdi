import React from "react";
import '../styles/App.css';
import fileHandler from './fileHandler';

export default class WeatherReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      email: this.props.email,
      coords: this.props.coords,
      weather: this.props.weatherData[0],
      icon: this.props.weatherData[1],
      windD: this.props.weatherData[2],
      airP: this.props.weatherData[3].toFixed(0),
      date: this.props.weatherData[4],
      lowT: ((9 / 5 * (this.props.weatherData[5])) + 32).toFixed(0),
      highT: ((9 / 5 * (this.props.weatherData[6])) + 32).toFixed(0),
      windS: this.props.weatherData[7].toFixed(0),
      humidity: this.props.weatherData[8].toFixed(0),
      confidence: this.props.weatherData[9].toFixed(0),
      sunrise: this.props.weatherData[10].substring(11, 19),
      sunset: this.props.weatherData[11].substring(11, 19),
      city: this.props.weatherData[12],
      timezone: this.props.weatherData[13],
      localTime: this.props.weatherData[14].substring(11, 19),
      file: null,
      fileName: null,
    }

    this.handleFile = this.handleFile.bind(this)
    this.handleDownload = this.handleDownload.bind(this)
  }

  formatICS() {
    const ics = require('ics')

    const year = parseInt(this.state.date.substring(0, 4))
    const month = parseInt(this.state.date.substring(5, 7))
    const day = parseInt(this.state.date.substring(8, 10))

    const report = `Hi, ${this.state.name}! Here is today's weather report for ${this.state.city}, with ${this.state.confidence}% confidence:
    Date: ${this.state.date}
    Local time: ${this.state.localTime}
    Timezone: ${this.state.timezone}
    Weather: ${this.state.weather}
    Sunrise: ${this.state.sunrise}
    Sunset: ${this.state.sunset}
    High Temperature: ${this.state.highT}°F
    Low Temperature: ${this.state.lowT}°F
    Humidity: ${this.state.humidity}%
    Wind Speed, Direction: ${this.state.windS} mph, ${this.state.windD}
    Pressure: ${this.state.airP} mb`

    const event = {
      productId: 'Law&Zhang/weather_grabber',
      start: [year, month, day],
      duration: { days: 1 },
      title: `Weather in ${this.state.city} on ${this.state.date}`,
      description: report,
      location: this.state.city,
      url: 'https://github.com/justinthelaw/Weather_Grabber',
      geo: { lat: this.state.coords[0], lon: this.state.coords[1] },
      categories: ['weather', 'daily report', this.state.city, 'USSF SDI'],
      status: 'CONFIRMED',
      busyStatus: 'FREE',
      organizer: { name: this.state.name, email: this.state.email },
      attendees: [{ name: this.state.name, email: this.state.email, rsvp: true, partstat: 'ACCEPTED', role: 'REQ-PARTICIPANT' }]
    }

    ics.createEvent(event, (error, file) => {
      if (error) {
        console.log('There was an error in ics.createEvent. Please check the UserInput.')
        console.log(error)
        return
      }

      this.setState({
        file: file.trim()
      })
    })
  }

  async handleFile(event) {
    event.preventDefault()
    await this.formatICS()

    await this.setState({ fileName: `${this.state.date.match(/[0-9]/g).join("")}_${this.state.city.match(/[A-Z]/g).join("")}_Weather` })
    await fileHandler(this.state.file, this.state.fileName)
  }

  handleDownload(event) {
    event.preventDefault()
    window.location = `http://localhost:5001/download/${this.state.fileName}`
  }

  render() {
    return (
      <div className="report">
        <h2> Welcome, {this.state.name}!</h2>
        <p>Here is today's weather report, with {this.state.confidence}% confidence:</p>
        <h2>{this.state.city}</h2>

        <img src={`https://www.metaweather.com/static/img/weather/${this.state.icon}.svg`} alt={this.state.weather} width="50%" />
        <h3>
          {this.state.weather}
        </h3>

        <table>
          <tbody>
            <tr> <th>Date</th><td>{this.state.date}</td> </tr>
            <tr> <th>Local Time</th><td>{this.state.localTime}</td> </tr>
            <tr> <th>Timezone</th><td>{this.state.timezone}</td> </tr>
            <tr> <th>Sunrise</th><td>{this.state.sunrise}</td> </tr>
            <tr> <th>Sunset</th><td>{this.state.sunset}</td> </tr>
            <tr> <th>High Temperature</th><td>{this.state.highT}°F</td> </tr>
            <tr> <th>Low Temperature</th><td>{this.state.lowT}°F</td> </tr>
            <tr> <th>Humidity</th><td>{this.state.humidity}%</td> </tr>
            <tr> <th>Wind Speed</th><td>{this.state.windS} mph</td> </tr>
            <tr> <th>Wind Direction</th><td>{this.state.windD}</td> </tr>
            <tr> <th>Pressure</th><td>{this.state.airP} mb</td> </tr>
          </tbody>
        </table>

        {this.state.fileName ? <><button className="download" onClick={this.handleDownload}>Download Here</button></> : ''}
        <button onClick={this.handleFile}>Generate Calendar Event</button>
      </div >
    )
  }
}