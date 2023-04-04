//dependencies
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import icon from "../assets/header.png";
import auth from "../utils/auth";
import Cookies from "js-cookie";
import AppContext from "../contexts/AppContext";

// components
import {
  ShoppingCart as ShoppingCartIcon,
  HomeRounded as HomeRoundedIcon,
  AccountCircle as AccountCircleIcon,
  ExitToApp as ExitToAppIcon,
} from "@material-ui/icons/";
import {
  Drawer,
  AppBar,
  CssBaseline,
  Toolbar,
  List,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@material-ui/core/";

const drawerWidth = 190;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    boxShadow: "1px 1px 20px 1px #000000",
  },
  drawerContainer: {
    overflow: "auto",
    paddingTop: theme.spacing(1),
  },
  toolbar: {
    minHeight: 40,
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  content: {
    marginTop: 75,
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function StaticDrawer({ login }) {
  const { setItems } = useContext(AppContext);
  const { setStores } = useContext(AppContext);
  const { reload, setReload } = useContext(AppContext);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Tooltip title="To Home Page">
            <img
              src={icon}
              alt="icon.png"
              width="50px"
              style={{
                filter: "drop-shadow(1px 1px 1px #000000)",
                marginLeft: 0,
                cursor: "pointer",
              }}
              onClick={async (e) => {
                e.preventDefault();
                window.location.href = `${window.location.origin}/home`;
              }}
            />
          </Tooltip>
          <Typography
            variant="h5"
            noWrap
            style={{
              textShadow: "1px 1px 2px #000000",
              fontWeight: 500,
              marginLeft: 20,
              marginTop: 13,
            }}
          >
            Shop Till You Drop
          </Typography>
        </Toolbar>
      </AppBar>
      {login ? (
        ""
      ) : (
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <List>
              {["Home", "Account", "Lists", "Logout"].map((text, index) => (
                <Link
                  key={text}
                  exact="true"
                  to={text === "Home" ? "/home" : `/${text.toLowerCase()}`}
                  style={{ textDecoration: "none", color: "black" }}
                  onClick={async (e) => {
                    if (e.target.innerText === "Logout") {
                      auth.logout(async () => {
                        await setItems([]);
                        await setStores([]);
                        await Cookies.remove("token");
                        await setReload(false);
                        window.location.href = `${window.location.origin}/`;
                      });
                    } else if (
                      e.target.innerText === "Account" ||
                      e.target.innerText === "Lists"
                    ) {
                      await setReload(true);
                      await setReload(!reload);
                    }
                  }}
                >
                  <ListItem button key={text} style={{ marginTop: 15 }}>
                    <ListItemIcon>
                      {index === 0 ? (
                        <HomeRoundedIcon />
                      ) : index === 1 ? (
                        <AccountCircleIcon />
                      ) : index === 2 ? (
                        <ShoppingCartIcon />
                      ) : (
                        <ExitToAppIcon />
                      )}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </div>
        </Drawer>
      )}
    </div>
  );
}
