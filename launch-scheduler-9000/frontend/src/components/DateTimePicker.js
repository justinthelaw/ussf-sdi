import React, { useContext, useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    DateTimePicker,
    MuiPickersUtilsProvider
} from '@material-ui/pickers';
import AppContext from '../contexts/AppContext';


export default function Picker({ launchData }) {

    const { selectedDate, setSelectedDate } = useContext(AppContext)
    const [omgIsThereNotABetterWayOfHandlingUseEffect, setOMG] = useState(false)

    const handleDateChange = (date) => {
        console.log('setting new date to be: ', date)
        setSelectedDate(date.toString());
    };

    const jankyDateConverter = () => {
        let stringDate = `${launchData.launch_date.replace('Z', 'GMT')}`

        let date = new Date(stringDate)
        let dateMillis = date.getTime()
        let offset = date.getTimezoneOffset() * 60000;
        let offsetDate = dateMillis + offset;

        let dateFromMillis = new Date(offsetDate)

        setSelectedDate(dateFromMillis)
        console.log("selected Date got set: ", dateFromMillis)
        return dateFromMillis

    }

    useEffect(() => {
        setSelectedDate(jankyDateConverter())
        // eslint-disable-next-line
        setThing()
    }, [omgIsThereNotABetterWayOfHandlingUseEffect])

    const setThing = () => {
        setOMG(true)
    }

    return (

        < MuiPickersUtilsProvider utils={DateFnsUtils} >
            {console.log('setting picker with date : ', selectedDate)}
            <Grid container justifyContent="left">
                <DateTimePicker
                    id="datetime"
                    label="Launch Date/Time (Z)"
                    inputVariant="outlined"
                    ampm={false}
                    variant="dialog"
                    margin="normal"
                    value={selectedDate}
                    onChange={handleDateChange}
                    openTo="date"
                    format="yyyy/MM/dd HH:mm:ss"
                    showTodayButton={true}
                />
            </Grid>
        </MuiPickersUtilsProvider >
    );
}