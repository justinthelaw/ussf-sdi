//dependencies
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "./utils/protected.route";
import AppContext from "./contexts/AppContext";

// components
import {
  AppBar,
  Typography,
  Toolbar,
  CssBaseline,
  makeStyles,
  Button,
  Tooltip,
} from "@material-ui/core";
import Login from "./components/Login";
import Home from "./components/Home";
import Account from "./components/Account";
import Lists from "./components/Lists";
import Drawer from "./components/Drawer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    top: "auto",
    bottom: 0,
  },
  toolbar: {
    minHeight: 0,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0),
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontWeight: 600,
  },
}));

const {
  REACT_APP_PROTO_DEV,
  REACT_APP_HOST_DEV,
  REACT_APP_API_PORT,
  REACT_APP_PROTO_LIVE,
  REACT_APP_HOST_LIVE,
  REACT_APP_GOOGLE_API_KEY,
  NODE_ENV,
} = process.env;

export default function App() {
  const [stores, setStores] = useState([]);
  const [items, setItems] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [currentStore, setCurrentStore] = useState([]);
  const [currentItem, setCurrentItem] = useState([]);
  const [reload, setReload] = useState(false);
  const [open, setOpen] = useState(false);
  const [openPrompt, setOpenPrompt] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [deconflict, setDeconflict] = useState(false);
  const [alert, setAlert] = useState({
    title: "Title",
    text: "Text",
    actions: "Actions",
    closeAction: "Close",
  });
  const [baseURL] = useState(
    NODE_ENV === "development"
      ? `${REACT_APP_PROTO_DEV}://${REACT_APP_HOST_DEV}:${REACT_APP_API_PORT}`
      : `${REACT_APP_PROTO_LIVE}://${REACT_APP_HOST_LIVE}`
  );
  const [googleAPIKey] = useState(`${REACT_APP_GOOGLE_API_KEY}`);

  const classes = useStyles();

  return (
    <div>
      <AppContext.Provider
        value={{
          googleAPIKey,
          alert,
          setAlert,
          deconflict,
          setDeconflict,
          openPrompt,
          setOpenPrompt,
          openModal,
          setOpenModal,
          open,
          setOpen,
          baseURL,
          stores,
          setStores,
          items,
          setItems,
          currentUser,
          setCurrentUser,
          currentStore,
          setCurrentStore,
          currentItem,
          setCurrentItem,
          reload,
          setReload,
        }}
      >
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>

          <ProtectedRoute exact path="/home" component={Home} />

          <ProtectedRoute exact path="/account" component={Account} />

          <ProtectedRoute exact path="/lists" component={Lists} />

          <Route exact path="/logout">
            <Login />
          </Route>

          <Route path="*">
            <Drawer login={true} />
            <div
              style={{
                marginTop: 50,
                padding: 50,
                font: "14 px Lucida Grande, Helvetica, Arial, sans-serif",
              }}
            >
              <Typography variant="h3">404 Error: Path Not Found</Typography>{" "}
              <br />
              <Typography variant="body2">
                You weren't supposed to see this! Click on the Shop Till You
                Drop icon at the top to return to the home screen.
              </Typography>
              <br />
              <iframe
                width="850"
                height="500"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                style={{ marginBottom: 5 }}
              />{" "}
              <br />
              <Typography variant="caption">
                You can thank Google Chrome for forcing me to mute this video
                while autoplay is enabled.
              </Typography>
            </div>
          </Route>
        </Switch>
      </AppContext.Provider>
      <footer className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar
            className={classes.toolbar}
            style={{ marginLeft: 5, marginTop: 5 }}
          >
            <Tooltip title="💻 For app info, issue reporting, or suggestions, click on the GitHub button. 🤝 To get to know me, click on the LinkedIn button.">
              <Typography
                variant="body2"
                noWrap
                style={{
                  textShadow: "1px 1px 2px #000000",
                  fontWeight: 500,
                  marginLeft: 5,
                  marginBottom: 5,
                  cursor: "help",
                }}
              >
                Made by Justin Law
              </Typography>
            </Tooltip>
            <Button
              variant="contained"
              color="default"
              style={{
                marginLeft: 10,
                marginBottom: 5,
                padding: 0,
              }}
              size="small"
            >
              <a
                href="https://github.com/justinthelaw/shop-till-you-drop"
                target="_blank"
                rel="noreferrer"
                className={classes.link}
              >
                GitHub
              </a>
            </Button>
            <Button
              variant="contained"
              color="default"
              style={{
                marginLeft: 10,
                marginBottom: 5,
                marginRight: -10,
                padding: 0,
                paddingRight: 5,
                paddingLeft: 5,
              }}
              size="small"
            >
              <a
                href="https://www.linkedin.com/in/justinwingchunglaw/"
                target="_blank"
                rel="noreferrer"
                className={classes.link}
              >
                LinkedIn
              </a>
            </Button>
          </Toolbar>
        </AppBar>
      </footer>
    </div>
  );
}
