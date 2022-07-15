// dependencies
import React, { useContext, useState } from "react";
import { ValidateEmail, ValidatePassword } from "../utils/regex";
import AppContext from "../contexts/AppContext";

// components
import { TextField, makeStyles, Button, Typography } from "@material-ui/core";
import AlertDialog from "./AlertDialog";

const useStyles = makeStyles((theme) => ({
  input: {
    marginTop: 15,
    width: 400,
    maxWidth: 400,
  },
}));

export default function Registration() {
  const { baseURL } = useContext(AppContext);
  const { setOpen } = useContext(AppContext);
  const { setOpenPrompt } = useContext(AppContext);
  const { alert, setAlert } = useContext(AppContext);
  const { setDeconflict } = useContext(AppContext);

  const [validEmail, setValidEmail] = useState(false);
  const [validPass, setValidPass] = useState(false);
  const [validName, setValidName] = useState(false);
  const [validConfirm, setValidConfirm] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [newPassError, setNewPassError] = useState(false);
  const [confirmPassError, setConfirmPassError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailHelper, setEmailHelper] = useState("");
  const [newPHelper, setNewPHelper] = useState("");
  const [confirmPHelper, setConfirmPHelper] = useState("");
  const [nameHelper, setNameHelper] = useState("");

  const classes = useStyles();

  const handleNameCheck = () => {
    let name = document.getElementById("newName").value;
    if (name.length === 0) {
      setValidName(false);
      setNameError(true);
      setNameHelper("Username must be at least 1 character long");
    } else {
      setValidName(true);
      setNameError(false);
      setNameHelper("");
    }
  };

  const handleEmailCheck = () => {
    let email = document.getElementById("newEmail").value;
    if (ValidateEmail(email)) {
      setValidEmail(false);
      setEmailError(true);
      setEmailHelper("Please enter a valid email");
    } else {
      setValidEmail(true);
      setEmailError(false);
      setEmailHelper("");
    }
  };

  const handleNewPassCheck = () => {
    let newP = document.getElementById("newPass").value;
    if (ValidatePassword(newP)) {
      setValidPass(false);
      setNewPassError(true);
      setNewPHelper("Please enter a valid password");
    } else {
      setValidPass(true);
      setNewPassError(false);
      setNewPHelper("");
      setConfirmPHelper("");
    }
  };

  const handleConfirmPassCheck = () => {
    let newP = document.getElementById("newPass").value;
    let confirmP = document.getElementById("confirmPass").value;
    if (newP !== confirmP) {
      setValidPass(false);
      setConfirmPassError(true);
      setConfirmPHelper("New password does not match confirmation");
    } else {
      setValidPass(true);
      setConfirmPassError(false);
      setValidConfirm(true);
      setNewPHelper("");
      setConfirmPHelper("");
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    await setDeconflict(false);
    let name = document.getElementById("newName").value;
    let email = document.getElementById("newEmail").value;
    let password = document.getElementById("newPass").value;
    await fetch(`${baseURL}/users/post`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, email: email, password: password }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        if (data.message === "Success") {
          await setAlert({
            title: "Success!",
            text: `Your account was created! Please login to start using the app.`,
            actions: "",
            closeAction: "Okay",
          });
          await setOpen(true);
          await setOpenPrompt(false);
        } else {
          await setAlert({
            title: "Registration Error",
            text: data.message,
            actions: "",
            closeAction: "Close",
          });

          await setOpen(true);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <AlertDialog bodyAlert={alert} />
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          maxWidth: 500,
        }}
      >
        <form>
          <TextField
            className={classes.input}
            style={{ marginTop: 0 }}
            id="newName"
            label="Username"
            variant="outlined"
            type="text"
            placeholder="Username"
            required={true}
            onBlur={handleNameCheck}
            onChange={handleNameCheck}
            error={nameError}
            helperText={nameHelper}
          />
          <br />
          <TextField
            className={classes.input}
            id="newEmail"
            label="Email"
            variant="outlined"
            type="text"
            placeholder="Email"
            required={true}
            onBlur={handleEmailCheck}
            onChange={handleEmailCheck}
            error={emailError}
            helperText={emailHelper}
            style={{ marginBottom: 20 }}
          />
          <br />
          <Typography variant="caption">
            We don't use your email for anything besides your login. You will
            not recieve emails from this website.
          </Typography>
          <br />
          <TextField
            className={classes.input}
            id="newPass"
            label="New Password"
            variant="outlined"
            type="password"
            required={true}
            onBlur={handleNewPassCheck}
            onChange={handleNewPassCheck}
            error={newPassError}
            helperText={newPHelper}
          />
          <br />
          <TextField
            className={classes.input}
            id="confirmPass"
            label="Confirm Password"
            variant="outlined"
            type="password"
            required={true}
            onBlur={handleConfirmPassCheck}
            onChange={handleConfirmPassCheck}
            error={confirmPassError}
            helperText={confirmPHelper}
            style={{ marginBottom: 20 }}
          />
          <br />
          <Typography variant="caption">
            Passwords must adhere to the following:
            <ul
              style={{
                marginTop: 10,
                marginBottom: -12.5,
                textDecoration: "none",
              }}
            >
              <li>Contain at least 8 characters long</li>
              <li>Contain at least 1 uppercase letter</li>
              <li>Contain at least 1 lowercase letter</li>
              <li>Contain at least 1 number</li>
              <li>Contain at least 1 special character: @ $ ! % * ? &</li>
            </ul>
          </Typography>
          <br />
          <Button
            style={{ marginTop: 20 }}
            variant="contained"
            color="primary"
            disabled={!validName || !validEmail || !validPass || !validConfirm}
            onClick={handleClick}
          >
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}
