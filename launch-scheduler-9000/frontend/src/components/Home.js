import Dashboard from './Dashboard'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import Cookies from 'js-cookie'

export default function Home() {

    const { currentUser, setCurrentUser } = useContext(AppContext)

    if (!Cookies.get('user')) {
        window.location.href = 'http://localhost:3000'
        return
    }

    async function handleClick(e) {
        e.preventDefault();
        setCurrentUser(null)

        await fetch('http://localhost:3001/cookies/clear', { credentials: 'include', method: 'get' })
            .then(res => res.json())
            .then(data => console.log(data))

        window.location.href = 'http://localhost:3000'
    }

    return (
        <>
            <Button variant="contained"
                color="primary"
                size="small"
                onClick={handleClick}
                style={{ marginLeft: 5, marginTop: 5, marginBottom: 20 }}>Sign Out</Button>

            <br></br>

            <Link to='/addUser' style={{ textDecoration: 'none' }}><Button variant="contained"
                color="primary"
                size="small"
                style={{ marginLeft: 5, marginTop: 5, marginBottom: 5 }}>Register User</Button></Link>
            <Link to='/addCustomer' style={{ textDecoration: 'none' }}><Button variant="contained"
                color="primary"
                size="small"
                style={{ marginLeft: 5, marginTop: 5, marginBottom: 5 }}>New Customer</Button></Link>
            <Link to='/addLaunch' style={{ textDecoration: 'none' }}><Button variant="contained"
                color="primary"
                size="small"
                style={{ marginLeft: 5, marginTop: 5, marginBottom: 5 }}>New Launch</Button></Link>

            <Dashboard />
        </>
    )
}