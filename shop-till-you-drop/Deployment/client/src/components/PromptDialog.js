// dependencies
import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";

// components
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function PromptDialog({ id, bodyPrompt }) {
  const { openPrompt, setOpenPrompt } = useContext(AppContext);
  const { setDeconflict } = useContext(AppContext);

  const handleCancelAlert = async () => {
    await setOpenPrompt(false);
    await setDeconflict(false);
  };

  return (
    <div>
      <Dialog
        open={openPrompt}
        onClose={handleCancelAlert}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {bodyPrompt ? bodyPrompt.title : "empty title"}
        </DialogTitle>
        <DialogContent>
          {bodyPrompt ? bodyPrompt.text : "empty text"}
        </DialogContent>
        <DialogActions>
          {bodyPrompt ? bodyPrompt.actions : "empty actions"}
          <Button
            variant="contained"
            color="primary"
            size="medium"
            style={{ marginLeft: 5, marginTop: 5 }}
            onClick={handleCancelAlert}
          >
            {bodyPrompt.closeAction}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
