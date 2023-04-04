import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
//import { makeStyles } from '@material-ui/core/styles';
import AppContext from '../contexts/AppContext';
import Picker from './DateTimePicker';
import { TextField, Select, InputLabel, FormControl } from '@material-ui/core';
import Cookies from 'js-cookie'

export default function NewEntry({ selectedLaunchData, edit }) {
    const { launchData } = useContext(AppContext)
    const { customerData, setCustomerData } = useContext(AppContext)
    const { userData } = useContext(AppContext)
    const { open, setOpen } = useContext(AppContext)
    const { selectedDate } = useContext(AppContext)



    const handleCommitChanges = async (e) => {
        e.preventDefault();
        let ID = selectedLaunchData.id;
        let customer = document.getElementById('customer').value
        let customerID = customerData.filter(c => c.name === customer)[0].id
        let vehicle = document.getElementById('vehicle').value
        let payload = document.getElementById('payload').value
        let scrubReason = document.getElementById('scrubReason').value
        let date = selectedDate.toString().substring(0, 24) + ' Z'

        if (vehicle === '' || payload === '' || scrubReason === '' || date === '') {
            alert('Please fill-in the required fields!')
            return
        }

        let timeDiff = 0
        let dateDiff = launchData.filter(entry => {
            let entryDate = new Date(entry.launch_date)
            let convertedSelectedDate = new Date(date)
            timeDiff = Math.abs(entryDate - convertedSelectedDate)
            return timeDiff < 43200000 && timeDiff > 0
        })

        console.log('dateDiff array: ', dateDiff)
        console.log('customerData', customerData)



        if (dateDiff.length > 0) {
            alert(
                `Selected Date Conflicts with another Launch \nNo launches allowed within 12 hours
                   Customer: ${customerData.filter(c => c.id === dateDiff[0].customer_id)[0].name}
                   Payload: ${dateDiff[0].payload}
                   Launch Date: ${dateDiff[0].launch_date} \n
                   Time Between Launches:
                   ${new Date(timeDiff).toISOString().slice(11, 19)}
                   `)
            return
        }

        //TODO get login ID
        let user_ID = Cookies.get('user');

        let dataToSend = {
            'id': ID,
            'customer_id': customerID,
            'vehicle': vehicle,
            'payload': payload,
            'launch_date': date,
            'commander_approval': false,
            'approval_date': 'Not Approved',
            'scrub_reason': scrubReason,
            'user_id': user_ID
        }

        if (edit) {
            await patchDataToServer(dataToSend)
        } else {
            await postDataToServer(dataToSend)
        }

        setOpen(false)
        window.location.href = 'http://localhost:3000/home'
    }

    const patchDataToServer = (dataToPatch) => {
        fetch('http://localhost:3001/updateEntry', {
            credentials: 'include',
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'charset': 'UTF-8'
            },
            body: JSON.stringify(dataToPatch)

        })
            .then(res => res.json())
    }
    const postDataToServer = (dataToPatch) => {
        fetch('http://localhost:3001/launchschedule', {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'charset': 'UTF-8'
            },
            body: JSON.stringify(dataToPatch)

        })
            .then(res => res.json())
    }

    let customerName = ''



    if (edit) {
        customerName = customerData.find(c => c.id === selectedLaunchData.customer_id).name
    }

    return (
        <div>

            <form >
                <FormControl variant="outlined">
                    <InputLabel required id='customer-label'>Customer</InputLabel>
                    <Select required variant="outlined"
                        labelId='customer-label'
                        label='Customer'
                        id='customer'
                        native margin="normal"
                        defaultValue={customerName}>
                        {customerData.map(customer => (<option value={customer.name}>{customer.name}</option>))}
                    </Select>
                </FormControl>
                <br />
                <TextField required variant="outlined" label="Vehicle" id="vehicle" native margin="normal" defaultValue={selectedLaunchData.vehicle}></TextField>
                <br />
                <TextField required variant="outlined" label="Payload" id="payload" native margin="normal" defaultValue={selectedLaunchData.payload}></TextField>
                <br />
                <TextField required variant="outlined" label="Scrub Reason" id="scrubReason" native margin="normal" defaultValue={selectedLaunchData.scrub_reason}></TextField>
                <br />
                <Picker launchData={selectedLaunchData} />
                <div style={{ marginTop: 15 }}>
                    <Button variant="contained"
                        color="primary"
                        size="small"
                        type='submit'
                        onClick={handleCommitChanges}
                    > Commit Changes</Button>
                </div>
            </form>

        </div>

    )


}

