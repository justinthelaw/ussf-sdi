import React from "react";
import WeatherReport from './WeatherReport'

// eslint-disable-next-line
const zipCodeAPI = `http://localhost:8080/https://www.zipcodeapi.com/rest/c5X0BKe7yZuwgP4t2FmNmPYk3PBNNVROLnfxgjOn4yJXjkSyNup9FqziSihvvPsc/info.json/`
//append "<zipCode>/degrees" to the end

const metaWeatherAPI = `http://localhost:8080/https://www.metaweather.com/api/location/`
//append "/search/?lattlong=<lat>,<lng>" to the end
//append "/<woeid>" to the end

export default class InputProcessor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputAdded: this.props.inputAdded,
      name: this.props.name,
      email: this.props.email,
      zipCode: this.props.zipCode,
      coords: [],
      weatherData: [ //access the following data with: data.<insert from below>
        //weather description (<description>): consolidated_weather[0].weather_state_name
        //weather icon identifier (<abbreviation>): consolidated_weather[0].weather_state_abbr
        //wind direction (<compass direction>): consolidated_weather[0].wind_direction_compass
        //air pressure: consolidated_weather[0].air_pressure
        //forcast date (YYYY-MM-DD): consolidated_weather[0].applicable_date
        //low temp (C): consolidated_weather[0].min_temp
        //high temp (C): consolidated_weather[0].max_temp
        //wind speed (mph): consolidated_weather[0].wind_speed
        //humidity (%): consolidated_weather[0].humidity
        //forcast confidence (%): consolidated_weather[0].predictability
        //sunrise (YYYY-MM-DDTHH:MM:SS.SSSSSS-<UTC offset>): sun_rise
        //sunset (YYYY-MM-DDTHH:MM:SS.SSSSSS-<UTC offset>): sun_set
        //city (<city>): title
        //timezone (<country>/<zone>): timezone
        //local time: (YYYY-MM-DDTHH:MM:SS.SSSSSS-<UTC offset>): time
      ],
      output: null
    }
  }

  async componentDidMount() {
    if (!this.state.coords.length) {
      //======== REAL Fetch ========
      await fetch(`${zipCodeAPI}${this.state.zipCode}/degrees`, { mode: 'cors' })
        .then(response => response.json())
        .then(data => this.setState({
          coords: [data.lat, data.lng]
        }))
        .catch(err => console.log(err))

      //======== MOCK Fetch ========
      // await this.setState({
      //   coords: [34, -118]
      // })

      await console.log('Zip code translated to latitude and longitude using ZipCodeAPI!')

      await fetch(`${metaWeatherAPI}search/?lattlong=${this.state.coords.join()}`, { mode: 'cors' })
        .then(response => response.json())
        .then(data =>
          fetch(`${metaWeatherAPI}${data[0].woeid}`, { mode: 'cors' })
            .then(response => response.json())
            .then(data => {
              this.setState({
                weatherData: [
                  data.consolidated_weather[0].weather_state_name,
                  data.consolidated_weather[0].weather_state_abbr,
                  data.consolidated_weather[0].wind_direction_compass,
                  data.consolidated_weather[0].air_pressure,
                  data.consolidated_weather[0].applicable_date,
                  data.consolidated_weather[0].min_temp,
                  data.consolidated_weather[0].max_temp,
                  data.consolidated_weather[0].wind_speed,
                  data.consolidated_weather[0].humidity,
                  data.consolidated_weather[0].predictability,
                  data.sun_rise,
                  data.sun_set,
                  data.title,
                  data.timezone,
                  data.time
                ]
              })
            })
            .catch(err => console.log(err)))
        .catch(err => alert("Fetching from ZipCodeAPI or MetaWeatherAPI failed due to one of the following:\n\n1. Invalid US zip code\n2. Invalid email address\n3. ZipCodeAPI is down or request limit exceeded\n4. MetaWeatherAPI is down or request limit exceeded\n\nSpecific errors are logged in the browser console. Please refresh the page and try again. "))

      await console.log('Location transformed into closest city and daily weather forcast using MetaWeatherAPI!')

      await this.setState({
        output: <WeatherReport weatherData={this.state.weatherData} name={this.state.name} email={this.state.email} coords={this.state.coords} />
      })
    }
  }

  render() {
    return (
      <div className="returnpage center">
        {this.state.output ? this.state.output : "Loading your daily weather report..."}
        <br />
      </div >
    )
  }
}