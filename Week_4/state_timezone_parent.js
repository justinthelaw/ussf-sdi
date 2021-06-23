// Given the stateless functional component TimestampFormatter, complete the implementation of the GalvanizeTimes class component in such a way that:
//1. Clicking on a city updates the timeZone state field
//2. GalvanizeTimes renders the TimestampFormatter component with the appropriate time zone

import React from 'react'
//Functional Component
const TimestampFormatter = (props) => {
    return (
        <span>{props.date.toLocaleString("en-US", { timeZone: props.timeZone })}</span>
    )
}

//Class Component
const cityTimeZones = [
  ['New York', 'America/New_York'],
  ['Denver', 'America/Denver'],
  ['Phoenix', 'America/Phoenix'],
  ['Los Angeles', 'America/Los_Angeles']
]

export default class GalvanizeTimes extends React.Component {

    state = {
        date: new Date(),
        timeZone: 'America/New_York'
    }
    //TODO: implement setTimeZone
    setTimeZone = (e) => {
        this.setState({...this.state, timeZone: e})
    }

    render() {
        const clickableCities = cityTimeZones.map(cityTZ => {
            return (
                <a  key={cityTZ[0]}
                    id={cityTZ[0]}
                    onClick={() => this.setTimeZone(cityTZ[1])}>
                    {cityTZ[0]}
                </a>
            )
        })

        return (
            <div>
                <h1>Click on a city to see what time it is</h1>
                {clickableCities}
                <TimestampFormatter date={this.state.date} timeZone={this.state.timeZone} />
            </div>
        )
    }
}