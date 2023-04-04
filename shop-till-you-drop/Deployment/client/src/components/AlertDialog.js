// dependencies
import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";

// components
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function AlertDialog({ bodyAlert }) {
  const { open, setOpen } = useContext(AppContext);
  const { deconflict, setDeconflict } = useContext(AppContext);

  const handleCancelAlert = async () => {
    await setOpen(false);
    await setDeconflict(false);
  };

  return (
    <div>
      <Dialog
        open={open && !deconflict}
        onClose={handleCancelAlert}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {bodyAlert ? bodyAlert.title : "empty title"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {bodyAlert ? bodyAlert.text : "empty text"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {bodyAlert ? bodyAlert.actions : "empty actions"}
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 5, marginTop: 5 }}
            onClick={handleCancelAlert}
          >
            {bodyAlert.closeAction || "Close"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
