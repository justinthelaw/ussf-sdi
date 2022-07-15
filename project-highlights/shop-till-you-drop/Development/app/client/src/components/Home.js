// dependencies
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

// styles
import "../styles/readme.css";
import "../styles/loading.css";

// components
import README from "../assets/README.md";
import schema from "../assets/schema.png";
import Drawer from "./Drawer.js";
import { makeStyles, Paper, Typography, Tooltip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 10,
    color: theme.palette.text.primary,
  },
  header: {
    fontWeight: 700,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
    cursor: "pointer",
  },
}));

export default function Home() {
  const [text, setText] = useState("");
  const [time, setTime] = useState(true);

  const classes = useStyles();

  useEffect(() => {
    async function fetchREADME() {
      await fetch(README)
        .then((res) => res.text())
        .then((data) => {
          return data
            .replace("# Shop Till You Drop", "")
            .replace(
              `<img src="./docs/header.png" alt="header.png" width="40%"/>`,
              ""
            )
            .replace(
              `![Application Schema](./docs/schema.png)`,
              `![schema.png](${schema})`
            )
            .replace("[Overview](#Overview)", "Overview")
            .replace("[Description](#Description)", "Description")
            .replace("[Installation](#Installation)", "Installation")
            .replace("[Usage](#Usage)", "Usage")
            .replace(
              "[format in this README](#Environment-Variables)",
              "format in the Environment Variables section"
            )
            .replace("[Libraries](#Libraries)", "Libraries")
            .replace("[License](#License)", "License")
            .replace(
              "[MIT](./LICENSE)",
              "[MIT](https://github.com/justinthelaw/Shop-Till-You-Drop/blob/master/LICENSE)"
            );
        })
        .then(async (md) => {
          await setText(md);
          await setTime(false);
        })
        .catch((err) => console.log("Could not read the README.md"));
    }
    fetchREADME();
  });

  if (text.length === 0 && time) {
    return (
      <>
        <Drawer />
        <main
          style={{
            marginTop: 100,
            marginLeft: 260,
            marginRight: 50,
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
              <circle className="loader-svg bg" cx="50" cy="50" r="45"></circle>
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
        if(text)
        <Drawer />
        <div>
          <main
            style={{
              marginTop: 100,
              marginLeft: 260,
              marginRight: 50,
              marginBottom: 70,
            }}
          >
            <div className="README root">
              <Tooltip title="Made by Justin Law">
                <Paper className={classes.paper}>
                  <a
                    href="https://github.com/justinthelaw"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Typography variant="h4" className={classes.header}>
                      Shop Till You Drop 🛍️
                    </Typography>
                  </a>
                </Paper>
              </Tooltip>
              <Paper className={classes.paper}>
                <ReactMarkdown remarkPlugins={[gfm]}>{text}</ReactMarkdown>
              </Paper>
            </div>
          </main>
        </div>
      </>
    );
  }
}
