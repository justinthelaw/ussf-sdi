//dependencies
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AppContext from "../contexts/AppContext";
import auth from "../utils/auth";
import { ValidateEmail } from "../utils/regex";
import Cookies from "js-cookie";

// components
import Drawer from "./Drawer";
import Registration from "./Registration";
import {
  TextField,
  makeStyles,
  Typography,
  Button,
  Tooltip,
} from "@material-ui/core";
import PromptDialog from "./PromptDialog";
import AlertDialog from "./AlertDialog";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: "50chch",
    },
  },
}));

export default function Login() {
  const { setCurrentUser } = useContext(AppContext);
  const { setOpen } = useContext(AppContext);
  const { reload, setReload } = useContext(AppContext);
  const { setItems } = useContext(AppContext);
  const { setStores } = useContext(AppContext);
  const { setOpenPrompt } = useContext(AppContext);
  const { baseURL } = useContext(AppContext);
  const { alert, setAlert } = useContext(AppContext);

  const [validEmail, setValidEmail] = useState(false);
  const [validPass, setValidPass] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [emailHelper, setEmailHelper] = useState("");
  const [passHelper, setPassHelper] = useState("");
  const [prompt, setPrompt] = useState({});

  let history = useHistory();

  const classes = useStyles();

  const handleEmailCheck = () => {
    let email = document.getElementById("email").value;
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

  const handlePassCheck = () => {
    let password = document.getElementById("password").value;
    if (password.length < 8) {
      setValidPass(false);
      setPassError(true);
      setPassHelper("Please enter a valid password");
    } else {
      setValidPass(true);
      setPassError(false);
      setPassHelper("");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    await fetch(`${baseURL}/users/login`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        if (data.userId && data.username && data.password && data.email) {
          await setCurrentUser(data);
          await setReload(!reload);
          await setReload(!reload);
          await auth.login(() => {
            history.push("/home");
          });
        } else {
          await setAlert({
            title: "Login Error",
            text: data.message,
            actions: "",
            closeAction: "Close",
          });
          await setOpen(true);
        }
      })
      .catch(async (err) => {
        await setAlert({
          title: "Login Error",
          text: "The provided email or password does not match our records. Please try again or register as a new user.",
          actions: "",
          closeAction: "Close",
        });
        await setOpen(true);
      });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    let body = {
      title: "Register a New Account",
      text: <Registration />,
      actions: "",
      closeAction: "Cancel",
    };
    await setPrompt(body);
    await setOpenPrompt(true);
  };

  try {
    return (
      <>
        <Drawer login={true} />
        <PromptDialog bodyPrompt={prompt} />
        <AlertDialog bodyAlert={alert} />
        <div
          style={{
            display: "flex",
            marginTop: 180,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form
            className={classes.root}
            noValidate
            autoComplete="true"
            onSubmit={handleLogin}
          >
            <Typography
              variant="h3"
              style={{
                textAlign: "center",
                padding: 0,
                margin: 0,
                fontWeight: 600,
              }}
            >
              Login
            </Typography>
            <TextField
              style={{ marginLeft: 25, marginTop: 50 }}
              id="email"
              label="Email"
              variant="outlined"
              placeholder="Email"
              autoFocus={true}
              required={true}
              onChange={handleEmailCheck}
              error={emailError}
              helperText={emailHelper}
            />
            <br />
            <TextField
              style={{ marginLeft: 25 }}
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              placeholder="Password"
              required={true}
              onBlur={(e) => {
                handlePassCheck(e);
                handleEmailCheck(e);
              }}
              onChange={handlePassCheck}
              error={passError}
              helperText={passHelper}
            />
            <br />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ marginLeft: 30, marginTop: 25 }}
              disabled={!validPass || !validEmail}
              onClick={handleLogin}
            >
              Login
            </Button>
            <Tooltip title="New Account Registration">
              <Button
                variant="contained"
                color="default"
                style={{ marginLeft: 10, marginTop: 25 }}
                onClick={handleRegister}
              >
                Register
              </Button>
            </Tooltip>
          </form>
        </div>
      </>
    );
  } catch {
    auth.logout(async () => {
      await setItems([]);
      await setStores([]);
      await Cookies.remove("token");
      window.location.href = `${window.location.origin}/`;
    });
  }
}
