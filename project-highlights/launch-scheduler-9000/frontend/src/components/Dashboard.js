import React, { useState, useEffect, useContext } from 'react';
import { DataGrid, GridToolbar } from '@material-ui/data-grid'
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles'
import NewEntry from './NewEntry';
import AppContext from '../contexts/AppContext';
import Grid from '@material-ui/core/Grid';
import AlertDialog from './AlertDialog';
import '../App.css';
import Cookies from 'js-cookie'

function Dashboard() {

    const { launchData, setLaunchData } = useContext(AppContext)
    const { customerData, setCustomerData } = useContext(AppContext)
    const { userData, setUserData } = useContext(AppContext)
    const { open, setOpen } = useContext(AppContext)
    const { setOpenAlert } = useContext(AppContext)
    const { loaded, setLoaded } = useContext(AppContext)

    const [columns, setColumns] = useState([])
    const [rows, setRows] = useState([])

    const [modalStyle] = useState(getModalStyle);
    const [currentId, setCurrentId] = useState(0);

    async function createTable() {
        let newColumns = [
            {
                field: 'pageActions',
                headerName: 'Actions',
                width: 130,
                editable: false,
                headerAlign: 'center',
                renderCell: (params) => {
                    return (
                        <strong>
                            <Button
                                variant="contained"
                                size="small"
                                onClick={() => editButtonClick(params.id)}
                                style={{ marginLeft: 5, maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px' }}>
                                ✏️</Button>
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                onClick={() => approveButtonClick(params.id)}
                                style={{ marginLeft: 5, maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px' }}>
                                ✔️</Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                size="small"
                                onClick={() => deleteButtonClick(params.id)}
                                style={{ marginLeft: 5, maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px' }}>
                                🗑️</Button>
                        </strong >)
                }
            },
            {
                field: 'id',
                headerName: 'ID',
                width: 100,
                editable: false,
                headerAlign: 'center'
            },
            {
                field: 'customer',
                headerName: 'Customer',
                width: 210,
                editable: false,
                headerAlign: 'center'
            },
            {
                field: 'vehicle',
                headerName: 'Vehicle',
                width: 150,
                editable: false,
                headerAlign: 'center'
            },
            {
                field: 'payload',
                headerName: 'Payload',
                width: 150,
                editable: false,
                headerAlign: 'center'
            },
            {
                field: 'launch_date',
                headerName: 'Launch Date',
                width: 210,
                editable: false,
                headerAlign: 'center'
            },
            {
                field: 'user',
                headerName: 'Requestor',
                width: 145,
                editable: false,
                headerAlign: 'center'
            },
            {
                field: 'commander_approval',
                headerName: 'CC Approval',
                width: 157,
                editable: false,
                headerAlign: 'center'
            },
            {
                field: 'request_date',
                headerName: 'Request Date',
                width: 200,
                editable: false,
                headerAlign: 'center'
            },
            {
                field: 'approval_date',
                headerName: 'Approval Date',
                width: 200,
                editable: false,
                headerAlign: 'center'
            },
            {
                field: 'scrub_reason',
                headerName: 'Scrub Reason',
                width: 200,
                editable: false,
                headerAlign: 'center'
            }

        ]

        await setColumns([...newColumns])

        function grabName(dataSet, id) {
            let target = dataSet.find(item => item.id === id)
            return target.name
        }

        await setRows(launchData.map(item => {
            return {
                id: item.id,
                customer: grabName(customerData, item.customer_id),
                vehicle: item.vehicle,
                payload: item.payload,
                launch_date: item.launch_date,
                user: grabName(userData, item.user_id),
                commander_approval: item.commander_approval,
                request_date: item.request_date.replace('GMT', 'Z'),
                approval_date: item.approval_date,
                scrub_reason: item.scrub_reason,
                actions: item.id
            }
        })
        )
    }

    function getModalStyle() {
        const top = 50;
        const left = 50;

        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }));


    const editButtonClick = async (id) => {
        await setCurrentId(id)
        handleOpen()
    }


    const deleteButtonClick = async (id) => {
        await setCurrentId(id)
        setOpenAlert(true)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const classes = useStyles();

    const approveLaunch = (dataToPatch) => {
        fetch('http://localhost:3001/approve', {
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

    const approveButtonClick = async (id) => {
        let userId = parseInt(Cookies.get('user'))
        let target = userData.find(user => user.id === userId)
        if (target.commander) {
            await approveLaunch({ id: id, commander_approval: "true" })
            window.location.href = 'http://localhost:3000/home'
        } else {
            alert('You are not a commander!')
        }

    }

    let body = (

        <div style={modalStyle} className={classes.root}>
            <h2 id="simple-modal-title">Edit Your Entry</h2>
            <p id="simple-modal-description">
                <NewEntry edit={true} selectedLaunchData={launchData.find(item => item.id === currentId)}></NewEntry>
            </p>
            <Grid container justifyContent="space-between">

                <Button onClick={handleClose} variant="contained"
                    color="secondary"
                    size="small"
                > Cancel </Button>
            </Grid>
        </div>

    );

    useEffect(() => {

        async function fetchData() {
            await fetch('http://localhost:3001/launchschedule')
                .then(res => res.json())
                .then(data => setLaunchData(data))

            await fetch('http://localhost:3001/customers')
                .then(res => res.json())
                .then(data => setCustomerData(data))
            await fetch('http://localhost:3001/users')
                .then(res => res.json())
                .then(data => setUserData(data))
            await createTable()

            loadTable()
        }
        fetchData()
        // eslint-disable-next-line
    }, [loaded])


    const loadTable = () => {
        setLoaded(true)
    }

    return (
        <>
            <div style={{ height: '75vh', width: '98vw' }}>
                <DataGrid
                    rows={rows}
                    rowHeight={50}
                    columns={columns}
                    pageSize={10}
                    components={{
                        Toolbar: GridToolbar
                    }}
                />
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description">
                    {body}
                </Modal>
            </div>
            <AlertDialog id={currentId} />
            {/* {console.log(userData)} */}
        </>
    );
}

export default Dashboard;