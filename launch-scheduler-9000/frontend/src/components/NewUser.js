import { TextField, Select, InputLabel, FormControl } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import Cookies from 'js-cookie'

export default function NewUser() {
    const { currentUser } = useContext(AppContext)

    if (!Cookies.get('user')) {
        window.location.href = 'http://localhost:3000'
        return
    }

    async function handleRegister(e) {
        e.preventDefault();
        let data = {
            'name': document.getElementById('name').value,
            'email': document.getElementById('email').value,
            'password': document.getElementById('password').value,
            'commander': (document.getElementById('commander').value === 'true')
        }

        if (data['name'] === '' || data['email'] === '' || data['password'] === '') {
            alert('Please fill-in the required fields!')
            return
        }

        if (!data['email'].includes('@')) {
            alert('Invalid email address!')
            return
        }

        if (data['password'] !== document.getElementById('confirm-password').value) {
            alert('Passwords do not match!')
            return
        }

        const postDataToServer = (data) => {
            fetch('http://localhost:3001/users', {
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
            <TextField required variant="outlined" label="Name" id="name" native margin="normal" ></TextField>
            <br />
            <TextField required variant="outlined" label="Email" id="email" native margin="normal" type='email'></TextField>
            <br />
            <TextField required variant="outlined" label="Password" id="password" native margin="normal" type='password' ></TextField>
            <br />
            <TextField required variant="outlined" label="Confirm Password" id="confirm-password" native margin="normal" type='password'></TextField>
            <br />
            <TextField required variant="outlined" label="Are you a Commander" id="commander" native margin="normal" ></TextField>
            <div style={{ marginTop: 15 }}>
                <Button variant="contained"
                    color="primary"
                    size="small"
                    type='submit'
                    onClick={handleRegister}
                > Register</Button>
                <br />
                <Link to='/home' style={{ textDecoration: 'none' }}><Button variant="contained"
                    color="secondary"
                    size="small"
                    style={{ marginTop: 15 }}>Cancel</Button></Link>
            </div>
        </form>
    )
}