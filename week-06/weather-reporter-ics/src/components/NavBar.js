import React from "react";
import { Link } from "react-router-dom";
import "../styles/style.css"

export default function NavBar() {
  return (
    <div className="topnav">
      <Link to="/" >Home</Link>
      <Link to="/app" >App</Link>
    </div>
  )
}
