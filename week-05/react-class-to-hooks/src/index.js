import React from "react";
import ReactDOM from "react-dom";
import "./Dont_Edit_These_Styles.css"; // Don't edit these styles, they're for the side-by-side setup
import "./Shared_Styles.css"; // This css file is shared by both apps - YOUR STYLES GO HERE
import ClassApp from "./ClassAppSrc/ClassApp";
import HooksApp from "./HooksAppSrc/HooksApp";

ReactDOM.render(
  <React.StrictMode>
    <div id="container">
      <div id="class-header">⬇Class App⬇</div>
      <div id="class-app">
        <ClassApp />
      </div>
      <div id="hooks-header">⬇Hooks App⬇</div>
      <div id="hooks-app">
        <HooksApp />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
