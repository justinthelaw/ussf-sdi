import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom"
import AppContext from '../contexts/AppContext';
import { TextField, Select } from '@material-ui/core';
import NewEntry from './NewEntry'
import Button from '@material-ui/core/Button';
import Cookies from 'js-cookie'

export default function NewLaunch() {

    //const { launchData, setLaunchData } = useContext(AppContext)
    const { customerData, setCustomerData } = useContext(AppContext)
    const { userData, setUserData } = useContext(AppContext)
    const { currentUser } = useContext(AppContext)

    if (!Cookies.get('user')) {
        window.location.href = 'http://localhost:3000'
        return
    }

    let userIDcatch = 1;

    if (currentUser !== null) {
        userIDcatch = currentUser.id
    }

    let launchData = {
        'id': '',
        'customer': '',
        'vehicle': '',
        'payload': '',
        'launch_date': new Date().toGMTString(),
        'user_id': userIDcatch,
        'request_date': '',
        'scrub_reason': 'N/A'
    }

    return (

        <div >
            <NewEntry selectedLaunchData={launchData} edit={false} />

            <Link to='/home' style={{ textDecoration: 'none' }}>
                <Button variant="contained"
                    color="secondary"
                    size="small"
                    style={{ marginTop: 20 }}
                > Cancel </Button>
            </Link>
        </div>

    );
}