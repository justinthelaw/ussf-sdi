import { TextField, Select, InputLabel, FormControl } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import Cookies from 'js-cookie'

export default function NewCustomer() {


    const { currentUser } = useContext(AppContext)

    if (!Cookies.get('user')) {
        window.location.href = 'http://localhost:3000'
        return
    }

    async function handleSubmit(e) {
        e.preventDefault()
        let name = ''

        name = document.getElementById('name').value

        console.log(name)
        if (name === '') {
            alert('Please enter a customer name!')
            return
        }

        let data = {
            'name': name
        }


        const postDataToServer = (data) => {
            fetch('http://localhost:3001/customers', {
                credentials: 'include',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'charset': 'UTF-8'
                },
                body: JSON.stringify(data)

            })
                .then(res => res.json())
        }

        await postDataToServer(data)


        window.location.href = 'http://localhost:3000/home'
    }

    return (
        <form>
            <TextField required variant="outlined" label="Customer Name" id="name" native margin="normal" ></TextField>
            <div style={{ marginTop: 15 }}>
                <Button variant="contained"
                    color="primary"
                    size="small"
                    type='submit'
                    onClick={handleSubmit}
                > Submit</Button>
            </div>
            <div style={{ marginTop: 15 }}>
                <Link to='/home' style={{ textDecoration: 'none' }}><Button variant="contained"
                    color="Secondary"
                    size="small">Cancel</Button></Link>
            </div>
        </form>
    )
}