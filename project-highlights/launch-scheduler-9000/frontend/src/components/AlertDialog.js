import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AppContext from '../contexts/AppContext';

export default function AlertDialog({ id }) {
    const { openAlert, setOpenAlert } = useContext(AppContext)

    const handleClickOpenAlert = () => {
        setOpenAlert(true);
    };

    const handleCancelAlert = () => {
        setOpenAlert(false);
    };

    const handleConfirmDelete = () => {
        console.log(`trying to delete`, id)
        deleteDataFromServer()
        setOpenAlert(false);
        window.location.href = 'http://localhost:3000/home'
    }

    const deleteDataFromServer = () => {
        fetch('http://localhost:3001/launchschedule', {
            credentials: 'include',
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'charset': 'UTF-8'
            },
            body: JSON.stringify({ 'id': id })

        })
            .then(res => res.json())
    }

    return (
        <div>
            <Dialog
                open={openAlert}
                onClose={handleCancelAlert}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Delete Scheduled Launch?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this launch schedule?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained"
                        color="primary"
                        size="small"
                        style={{ marginLeft: 5, marginTop: 5 }}
                        onClick={handleCancelAlert}
                        color="primary">
                        Cancel
                    </Button>
                    <Button variant="contained"
                        color="primary"
                        size="small"
                        style={{ marginLeft: 5, marginTop: 5 }}
                        onClick={handleConfirmDelete}
                        color="secondary"
                        autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}