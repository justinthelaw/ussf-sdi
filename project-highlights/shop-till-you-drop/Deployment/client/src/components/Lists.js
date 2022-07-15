// dependencies
import React, { useEffect, useContext, useState } from "react";
import AppContext from "../contexts/AppContext";
import { handleNew } from "../utils/functions";
import auth from "../utils/auth";
import Cookies from "js-cookie";

// styles
import "../styles/loading.css";
import "../styles/user.css";

// components
import Drawer from "./Drawer";
import AlertDialog from "./AlertDialog";
import Accordion from "./Accordion.js";
import {
  makeStyles,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Tooltip,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  type: {
    fontWeight: 600,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.primary,
  },
}));

export default function Lists() {
  const { currentUser } = useContext(AppContext);
  const { items, setItems } = useContext(AppContext);
  const { stores, setStores } = useContext(AppContext);
  const { reload, setReload } = useContext(AppContext);
  const { setOpen } = useContext(AppContext);
  const { baseURL } = useContext(AppContext);
  const { alert, setAlert } = useContext(AppContext);
  const { setCurrentUser } = useContext(AppContext);

  const [body, setBody] = useState([]);
  const [time, setTime] = useState(true);

  const classes = useStyles();

  const buildBody = () => {
    let result = [];
    stores.forEach((store) => {
      let list = [];
      items.forEach((item) => {
        if (item.store_id === store.id) {
          list.push({
            id: item.id,
            name: item.name,
            quantity: item.quantity,
            done: item.done,
          });
        }
      });
      result.push({ id: store.id, name: store.name, list: list });
    });
    setBody(result || []);
  };

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
        });

      await fetch(`${baseURL}/api/stores/${currentUser.userId}`, {
        credentials: "include",
        method: "GET",
      })
        .then((res) => res.json())
        .then((list) => setStores(list));
      await fetch(`${baseURL}/api/items/${currentUser.userId}`, {
        credentials: "include",
        method: "GET",
      })
        .then((res) => res.json())
        .then((list) => setItems(list));

      if (stores.length > 0) {
        await buildBody();
      }
      await setReload(true);
      setTime(false);
    };

    getData();

    // eslint-disable-next-line
  }, [reload]);

  const handleNewStore = async (e) => {
    e.preventDefault();
    let newStoreName = document.getElementById("newStore").value;
    if (
      newStoreName.length > 0 &&
      !stores.find((store) => store.name === newStoreName)
    ) {
      await handleNew(
        e,
        currentUser.userId,
        null,
        newStoreName,
        null,
        "store",
        baseURL,
        stores,
        null
      );
      await setAlert({
        title: "Success!",
        text: `${newStoreName} has been added the list!`,
        actions: "",
      });
      await setReload(!reload);

      // await setOpen(true);
    } else if (newStoreName.length === 0) {
      await setAlert({
        title: "Add Store Error",
        text: `You tried to add nothing! Please try again.`,
        actions: "",
      });
      await setReload(!reload);

      await setOpen(true);
    } else {
      await setAlert({
        title: "Add Store Error",
        text: `${newStoreName} already exists!`,
        actions: "",
      });
      await setReload(!reload);

      await setOpen(true);
    }
  };

  try {
    if (body.length === 0 && time) {
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
        <div className={classes.root}>
          <Drawer />
          <AlertDialog bodyAlert={alert} />
          <main
            style={{
              marginTop: 110,
              marginLeft: 250,
              marginRight: 40,
              marginBottom: 70,
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Typography variant="h4" className={classes.type}>
                    {
                      <Tooltip
                        title={`How much can you shop, ${
                          currentUser.username[0].toUpperCase() +
                          currentUser.username.substr(1)
                        }?`}
                      >
                        <span
                          style={{
                            color: "rgb(77, 88, 252)",
                          }}
                        >
                          {currentUser.username[0].toUpperCase() +
                            currentUser.username.substr(1)}
                          's
                        </span>
                      </Tooltip>
                    }
                    {"\n"}
                    Shopping Lists 📋
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <form>
                    <Tooltip title="New Store">
                      <TextField
                        id="newStore"
                        label="Add Store"
                        variant="outlined"
                        placeholder="Store"
                        style={{
                          width: 500,
                        }}
                      />
                    </Tooltip>
                    <Tooltip title="Add New Store">
                      <Button
                        variant="outlined"
                        color="primary"
                        type="submit"
                        size="large"
                        style={{
                          marginLeft: 15,
                          maxWidth: 80,
                          maxHeight: 55,
                          minWidth: 80,
                          minHeight: 55,
                          fontWeight: 600,
                        }}
                        onClick={handleNewStore}
                      >
                        Submit
                      </Button>
                    </Tooltip>
                  </form>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                {body.length > 0 ? (
                  <Accordion body={body} />
                ) : (
                  <div style={{ textAlign: "center" }}>
                    <Typography variant="h2" style={{ marginTop: 30 }}>
                      No Shopping Lists
                    </Typography>
                    <Typography variant="body1" style={{ marginTop: 10 }}>
                      Try adding a store and some items!
                    </Typography>
                    <br />
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={async (e) => {
                        e.preventDefault();
                        await setReload(!reload);
                      }}
                    >
                      Refresh ↻
                    </Button>
                  </div>
                )}
              </Grid>
            </Grid>
          </main>
        </div>
      );
    }
  } catch {
    auth.logout(async () => {
      await setItems([]);
      await setStores([]);
      await Cookies.remove("token");
      window.location.href = `${window.location.origin}/`;
    });
  }
}
