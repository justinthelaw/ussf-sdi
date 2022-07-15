import { TextField, Button } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import AppContext from '../contexts/AppContext';

export default function Login() {

    const { currentUser, setCurrentUser } = useContext(AppContext)
    const { userData, setUserData } = useContext(AppContext)

    useEffect(() => {

        fetch('http://localhost:3001/', { credentials: 'include', method: 'get' })
            .then(res => res.json())


        fetch('http://localhost:3001/users')
            .then(res => res.json())
            .then(data => setUserData(data))


    }, [])

    function handleLogin(e) {
        e.preventDefault();

        let email = document.getElementById('email').value
        if (!email.includes('@')) {
            alert('Invalid email address!')
            return
        }
        let password = document.getElementById('password').value


        let target = userData.find(user => user.email === email && user.password === password)

        if (target) {
            setCurrentUser(target)
            fetch('http://localhost:3001/cookies/user',
                {
                    credentials: 'include',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ 'id': target.id })
                })
                .then(window.location.href = 'http://localhost:3000/home')
        } else {
            alert('Incorrect password or email!')
            return
        }
    }

    return (
        <>
            <form>

                <TextField required variant="outlined" label="Email" id="email" native margin="normal" type='email'></TextField>
                <br />
                <TextField required variant="outlined" label="Password" id="password" native margin="normal" type='password' ></TextField>
                <br />
                <Button style={{ marginTop: 15 }}
                    variant="contained"
                    color="primary"
                    size="medium"
                    type='submit'
                    onClick={handleLogin}
                >Login</Button>
            </form>
        </>
    )
}