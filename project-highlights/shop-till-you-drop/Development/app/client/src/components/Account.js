//dependencies
import React, { useContext, useState, useEffect } from "react";
import AppContext from "../contexts/AppContext";
import auth from "../utils/auth";
import { ValidateEmail, ValidatePassword } from "../utils/regex";
import Cookies from "js-cookie";

// styles
import "../styles/user.css";

// components
import Drawer from "./Drawer.js";
import {
  makeStyles,
  Paper,
  Grid,
  Typography,
  TextField,
  Button,
  Tooltip,
} from "@material-ui/core";
import AlertDialog from "./AlertDialog";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.primary,
  },
  paperDesc: {
    padding: theme.spacing(2.5),
    textAlign: "left",
    color: theme.palette.text.primary,
  },
  paperHead: {
    padding: theme.spacing(2.5),
    textAlign: "left",
    color: theme.palette.text.primary,
  },
  paperText: {
    padding: theme.spacing(2.5),
    textAlign: "left",
    color: theme.palette.text.primary,
  },
  type: {
    fontWeight: 600,
  },
  input: {
    margin: -8,
  },
  inputPass: {
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    marginTop: -6,
    marginLeft: 20,
    marginBottom: -6,
  },
  buttonEdit: {
    marginTop: -6,
    marginBottom: -6,
  },
}));

export default function Login() {
  const { currentUser, setCurrentUser } = useContext(AppContext);
  const { setOpen } = useContext(AppContext);
  const { baseURL } = useContext(AppContext);
  const { alert, setAlert } = useContext(AppContext);
  const { reload, setReload } = useContext(AppContext);
  const [time, setTime] = useState(true);
  const { setItems } = useContext(AppContext);
  const { setStores } = useContext(AppContext);

  const [editName, setEditName] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editPass, setEditPass] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPass, setValidPass] = useState(false);
  const [validName, setValidName] = useState(false);
  const [validConfirm, setValidConfirm] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailHelper, setEmailHelper] = useState("");
  const [oldPHelper, setOldPHelper] = useState("");
  const [newPHelper, setNewPHelper] = useState("");
  const [confirmPHelper, setConfirmPHelper] = useState("");
  const [nameHelper, setNameHelper] = useState("");
  const [seePass, setSeePass] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    const getData = async () => {
      await fetch(`${baseURL}/users/persist`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(async (data) => {
          if (data.userId && data.username && data.password && data.email) {
            let setData = {
              userId: data.userId,
              username: data.username,
              password: currentUser.password || data.password,
              email: data.email,
            };
            await setCurrentUser(setData);
            await auth.login(() => {
              return;
            });
          } else {
            await setAlert({
              title: "Loading Error",
              text: "There was a problem loading your data. Please logout and login again.",
              actions: "",
              closeAction: "Close",
            });
            await setOpen(true);
          }
          await setReload(true);
          setTime(false);
        });
    };

    getData();

    // eslint-disable-next-line
  }, [reload]);

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

  const handleOldPassCheck = () => {
    let oldP = document.getElementById("oldPass").value;
    if (oldP !== currentUser.password) {
      setValidPass(false);
      setPassError(true);
      setOldPHelper("Incorrect password");
    } else {
      setValidPass(true);
      setPassError(false);
      setOldPHelper("");
    }
  };

  const handleNewPassCheck = () => {
    let newP = document.getElementById("newPass").value;
    if (ValidatePassword(newP)) {
      setValidPass(false);
      setPassError(true);
      setNewPHelper("Please enter a valid password");
    } else {
      setValidPass(true);
      setPassError(false);
      setOldPHelper("");
      setNewPHelper("");
      setConfirmPHelper("");
    }
  };

  const handleConfirmPassCheck = () => {
    let newP = document.getElementById("newPass").value;
    let confirmP = document.getElementById("confirmPass").value;
    if (newP !== confirmP) {
      setValidPass(false);
      setPassError(true);
      setConfirmPHelper("Passwords do not match");
    } else {
      setValidPass(true);
      setPassError(false);
      setValidConfirm(true);
      setOldPHelper("");
      setNewPHelper("");
      setConfirmPHelper("");
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    switch (e.target.querySelector("p").innerText) {
      case "name":
        setEditName(true);
        break;
      case "email":
        setEditEmail(true);
        break;
      case "password":
        setEditPass(true);
        break;
      default:
        alert("Something went wrong! Please reload the page.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (e.target.querySelector("p").innerText) {
      case "name":
        setEditName(false);
        editNameHandler(e);
        break;
      case "email":
        setEditEmail(false);
        editEmailHandler(e);
        break;
      case "password":
        setEditPass(false);
        editPassHandler(e);
        break;
      default:
        alert("Something went wrong! Please reload the page.");
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    switch (e.target.querySelector("p").innerText) {
      case "name":
        setEditName(false);
        break;
      case "email":
        setEditEmail(false);
        break;
      case "password":
        setEditPass(false);
        break;
      default:
        alert("Something went wrong! Please reload the page.");
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await setAlert({
      title: "Delete Account",
      text: "Are you sure you want to delete your account and all associated data?",
      actions: (
        <Button
          variant="contained"
          color="secondary"
          size="small"
          style={{ marginBottom: -5, marginRight: 5 }}
          onClick={async (e) => {
            e.preventDefault();
            await fetch(`${baseURL}/users/delete`, {
              credentials: "include",
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ userId: currentUser.userId }),
            });

            await auth.logout(() => {
              window.location.href = `${window.location.origin}/`;
            });
          }}
        >
          Confirm
        </Button>
      ),
    });
    await setOpen(true);
  };

  const editNameHandler = async (e) => {
    e.preventDefault();
    let name = document.getElementById("newName").value;
    await fetch(`${baseURL}/users/patch`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: currentUser.userId, name: name }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        if (data.message === "Success") {
          await setAlert({
            title: "Success!",
            text: `Your username was changed to ${name}!`,
            actions: "",
          });
          await setOpen(true);
          await setCurrentUser({
            username: name,
            userId: currentUser.userId,
            password: currentUser.password,
            email: currentUser.email,
          });
        } else {
          await setAlert({
            title: "Edit Error",
            text: data.message,
            actions: "",
          });
          await setOpen(true);
        }
      })
      .catch((err) => console.log(err));
  };

  const editEmailHandler = async (e) => {
    e.preventDefault();
    let email = document.getElementById("newEmail").value;
    await fetch(`${baseURL}/users/patch`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: currentUser.userId, email: email }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        if (data.message === "Success") {
          await setAlert({
            title: "Success!",
            text: `Your email was changed to ${email}!`,
            actions: "",
          });
          await setOpen(true);
          await setCurrentUser({
            username: currentUser.username,
            userId: currentUser.userId,
            password: currentUser.password,
            email: email,
          });
        } else {
          await setAlert({
            title: "Edit Error",
            text: data.message,
            actions: "",
          });
          await setOpen(true);
        }
      })
      .catch((err) => console.log(err));
  };

  const editPassHandler = async (e) => {
    e.preventDefault();
    let password = document.getElementById("newPass").value;
    await fetch(`${baseURL}/users/patch`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: currentUser.userId, password: password }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        if (data.message === "Success") {
          await setAlert({
            title: "Success!",
            text: `Your password was successfully changed!`,
            actions: "",
          });
          await setOpen(true);
          await setCurrentUser({
            username: currentUser.username,
            userId: currentUser.userId,
            email: currentUser.email,
            password: password,
          });
        } else {
          await setAlert({
            title: "Edit Error",
            text: data.message,
            actions: "",
          });
          await setOpen(true);
        }
      })
      .catch((err) => console.log(err));
  };

  try {
    if (!currentUser.username && time) {
      return (
        <>
          <Drawer />
          <main
            style={{
              marginTop: 110,
              marginLeft: 250,
              marginRight: 40,
              marginBottom: 70,
            }}
          >
            <div className="svg-loader">
              <svg
                className="svg-container"
                height="100"
                width="100"
                viewBox="0 0 100 100"
              >
                <circle
                  className="loader-svg bg"
                  cx="50"
                  cy="50"
                  r="45"
                ></circle>
                <circle
                  className="loader-svg animate"
                  cx="50"
                  cy="50"
                  r="45"
                ></circle>
              </svg>
            </div>
          </main>
        </>
      );
    } else {
      return (
        <>
          <Drawer />
          <main
            style={{
              marginTop: 110,
              marginLeft: 250,
              marginRight: 40,
              marginBottom: 70,
            }}
          >
            <AlertDialog bodyAlert={alert} />
            <div className={classes.root}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <Typography variant="h4" className={classes.type}>
                      Welcome,
                      {"\n"}
                      {
                        <Tooltip
                          title={`Thank you for using the app, ${
                            currentUser.username[0].toUpperCase() +
                            currentUser.username.substr(1)
                          }!`}
                        >
                          <span style={{ color: "rgb(77, 88, 252)" }}>
                            {currentUser.username[0].toUpperCase() +
                              currentUser.username.substr(1)}
                          </span>
                        </Tooltip>
                      }
                      {"\n"}
                      😃
                    </Typography>
                  </Paper>
                </Grid>

                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <Grid container spacing={2} style={{ marginBottom: 20 }}>
                      <Grid item>
                        <Paper
                          className={classes.paperDesc}
                          style={{ paddingRight: 30, paddingLeft: 30 }}
                        >
                          <Typography className={classes.type}>
                            Description
                          </Typography>
                        </Paper>
                      </Grid>

                      <Grid item xs>
                        <Paper className={classes.paperDesc}>
                          <Typography className={classes.type}>
                            Your Information
                          </Typography>
                        </Paper>
                      </Grid>

                      <Grid item>
                        <Paper className={classes.paperDesc}>
                          <Typography
                            style={{ paddingLeft: 64, paddingRight: 64 }}
                            className={classes.type}
                          >
                            Actions
                          </Typography>
                        </Paper>
                      </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                      <Grid item>
                        <Paper className={classes.paperHead}>
                          <Typography
                            className={classes.type}
                            style={{ paddingRight: 15, paddingLeft: 15 }}
                          >
                            Username
                          </Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs>
                        <Paper className={classes.paperText}>
                          {editName ? (
                            <TextField
                              id="newName"
                              variant="outlined"
                              type="text"
                              defaultValue={currentUser.username}
                              size="small"
                              className={classes.input}
                              onBlur={handleNameCheck}
                              onChange={handleNameCheck}
                              error={nameError}
                              helperText={nameHelper}
                            />
                          ) : (
                            <Typography id="username">
                              {currentUser.username}
                            </Typography>
                          )}
                        </Paper>
                      </Grid>
                      <Grid item>
                        {editName ? (
                          <>
                            <Paper className={classes.paperText}>
                              <Tooltip title="Submit New Username">
                                <span>
                                  <Button
                                    onClick={handleSubmit}
                                    variant="contained"
                                    color="secondary"
                                    className={classes.buttonEdit}
                                    style={{ marginRight: 10 }}
                                    disabled={!validName}
                                  >
                                    Submit
                                    <p style={{ display: "none" }}>name</p>
                                  </Button>
                                </span>
                              </Tooltip>
                              <Tooltip title="Cancel Changes">
                                <Button
                                  onClick={(e) => {
                                    handleCancel(e);
                                    setValidName(true);
                                    setNameError(false);
                                    setNameHelper("");
                                  }}
                                  variant="contained"
                                  color="default"
                                  className={classes.buttonEdit}
                                >
                                  Cancel
                                  <p style={{ display: "none" }}>name</p>
                                </Button>
                              </Tooltip>
                            </Paper>
                          </>
                        ) : (
                          <Paper
                            className={classes.paperText}
                            style={{ paddingRight: 81, paddingLeft: 81 }}
                          >
                            <Tooltip title="Edit Username">
                              <Button
                                onClick={handleEdit}
                                variant="contained"
                                color="primary"
                                className={classes.buttonEdit}
                              >
                                Edit
                                <p style={{ display: "none" }}>name</p>
                              </Button>
                            </Tooltip>
                          </Paper>
                        )}
                      </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                      <Grid item>
                        <Paper className={classes.paperHead}>
                          <Typography
                            style={{ paddingRight: 32.5, paddingLeft: 32.5 }}
                            className={classes.type}
                          >
                            Email
                          </Typography>
                        </Paper>
                      </Grid>

                      <Grid item xs>
                        <Paper className={classes.paperText}>
                          {editEmail ? (
                            <TextField
                              id="newEmail"
                              variant="outlined"
                              type="text"
                              defaultValue={currentUser.email}
                              size="small"
                              className={classes.input}
                              autoFocus={true}
                              required={true}
                              onBlur={handleEmailCheck}
                              onChange={handleEmailCheck}
                              error={emailError}
                              helperText={emailHelper}
                            />
                          ) : (
                            <Typography id="email" style={{ marginRight: -25 }}>
                              {currentUser.email}
                            </Typography>
                          )}
                        </Paper>
                      </Grid>

                      <Grid item>
                        {editEmail ? (
                          <>
                            <Paper className={classes.paperText}>
                              <Tooltip title="Submit New Email">
                                <span>
                                  <Button
                                    onClick={handleSubmit}
                                    variant="contained"
                                    color="secondary"
                                    className={classes.buttonEdit}
                                    style={{ marginRight: 10 }}
                                    disabled={!validEmail}
                                  >
                                    Submit
                                    <p style={{ display: "none" }}>email</p>
                                  </Button>
                                </span>
                              </Tooltip>
                              <Tooltip title="Cancel Changes">
                                <Button
                                  onClick={(e) => {
                                    handleCancel(e);
                                    setValidEmail(true);
                                    setEmailError(false);
                                    setEmailHelper("");
                                  }}
                                  variant="contained"
                                  color="default"
                                  className={classes.buttonEdit}
                                >
                                  Cancel
                                  <p style={{ display: "none" }}>email</p>
                                </Button>
                              </Tooltip>
                            </Paper>
                          </>
                        ) : (
                          <Paper
                            className={classes.paperText}
                            style={{ paddingRight: 81, paddingLeft: 81 }}
                          >
                            <Tooltip title="Edit Email">
                              <Button
                                onClick={handleEdit}
                                variant="contained"
                                color="primary"
                                className={classes.buttonEdit}
                              >
                                Edit
                                <p style={{ display: "none" }}>email</p>
                              </Button>
                            </Tooltip>
                          </Paper>
                        )}
                      </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                      <Grid item>
                        <Paper className={classes.paperHead}>
                          <Typography
                            className={classes.type}
                            style={{ paddingRight: 16, paddingLeft: 16 }}
                          >
                            Password
                          </Typography>
                        </Paper>
                      </Grid>

                      <Grid item xs>
                        <Paper className={classes.paperText}>
                          {editPass ? (
                            <>
                              <TextField style={{ display: "none" }} />
                              <TextField
                                id="oldPass"
                                label="Current Password"
                                variant="outlined"
                                type="password"
                                size="small"
                                required={true}
                                className={classes.inputPass}
                                onBlur={handleOldPassCheck}
                                onChange={handleOldPassCheck}
                                error={passError}
                                helperText={oldPHelper}
                              />
                              <br />
                              <TextField
                                id="newPass"
                                label="New Password"
                                variant="outlined"
                                type="password"
                                size="small"
                                required={true}
                                className={classes.inputPass}
                                onBlur={handleNewPassCheck}
                                onChange={handleNewPassCheck}
                                error={passError}
                                helperText={newPHelper}
                              />
                              <br />
                              <TextField
                                id="confirmPass"
                                label="Confirm Password"
                                variant="outlined"
                                type="password"
                                size="small"
                                required={true}
                                className={classes.inputPass}
                                onBlur={handleConfirmPassCheck}
                                onChange={handleConfirmPassCheck}
                                error={passError}
                                helperText={confirmPHelper}
                              />{" "}
                              <br />
                              <Typography
                                variant="body2"
                                style={{ marginTop: 20 }}
                              >
                                Passwords must adhere to the following:
                                <ul style={{ marginTop: 5, marginBottom: -5 }}>
                                  <li>Contain at least 8 characters long</li>
                                  <li>Contain at least 1 uppercase letter</li>
                                  <li>Contain at least 1 lowercase letter</li>
                                  <li>Contain at least 1 number</li>
                                  <li>
                                    Contain at least 1 special character: @ $ !
                                    % * ? &
                                  </li>
                                </ul>
                              </Typography>
                            </>
                          ) : (
                            <TextField
                              variant="outlined"
                              type={seePass ? "text" : "password"}
                              placeholder="Password"
                              size="small"
                              value={currentUser.password}
                              className={classes.input}
                            />
                          )}
                        </Paper>
                      </Grid>

                      <Grid item>
                        {editPass ? (
                          <>
                            <Paper className={classes.paperText}>
                              <Tooltip title="Submit New Password">
                                <span>
                                  <Button
                                    onClick={handleSubmit}
                                    variant="contained"
                                    color="secondary"
                                    className={classes.buttonEdit}
                                    style={{ marginRight: 10 }}
                                    disabled={!validPass || !validConfirm}
                                  >
                                    Submit
                                    <p style={{ display: "none" }}>password</p>
                                  </Button>
                                </span>
                              </Tooltip>
                              <Tooltip title="Cancel Change">
                                <Button
                                  onClick={(e) => {
                                    handleCancel(e);
                                    setValidPass(true);
                                    setPassError(false);
                                    setOldPHelper("");
                                    setNewPHelper("");
                                    setConfirmPHelper("");
                                  }}
                                  variant="contained"
                                  color="default"
                                  className={classes.buttonEdit}
                                >
                                  Cancel
                                  <p style={{ display: "none" }}>password</p>
                                </Button>
                              </Tooltip>
                            </Paper>
                          </>
                        ) : (
                          <Paper
                            className={classes.paperText}
                            style={{ paddingRight: 30, paddingLeft: 30 }}
                          >
                            <Tooltip title="Toggle Show/Hide Password">
                              <Button
                                variant="contained"
                                color="primary"
                                style={{
                                  marginRight: 10,
                                  marginTop: -6,
                                  marginLeft: 0,
                                  marginBottom: -6,
                                }}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setSeePass(!seePass);
                                }}
                              >
                                Toggle
                              </Button>
                            </Tooltip>
                            <Tooltip title="Edit Password">
                              <Button
                                id="password"
                                onClick={handleEdit}
                                variant="contained"
                                color="primary"
                                className={classes.buttonEdit}
                              >
                                Edit
                                <p style={{ display: "none" }}>password</p>
                              </Button>
                            </Tooltip>
                          </Paper>
                        )}
                      </Grid>
                    </Grid>

                    <Grid container spacing={2} style={{ marginTop: 20 }}>
                      <Grid item xs>
                        <Paper className={classes.paper}>
                          <Typography className={classes.type}>
                            <Tooltip title="Delete Your Account">
                              <Button
                                id="password"
                                onClick={handleDelete}
                                variant="contained"
                                color="secondary"
                                className={classes.buttonEdit}
                                style={{ margin: -50 }}
                              >
                                Delete Your Account
                              </Button>
                            </Tooltip>
                          </Typography>
                        </Paper>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </div>
          </main>
        </>
      );
    }
  } catch (error) {
    auth.logout(async () => {
      await setItems([]);
      await setStores([]);
      await Cookies.remove("token");
      window.location.href = `${window.location.origin}/`;
    });
  }
}
