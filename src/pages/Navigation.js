import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as XIcon } from "../assets/x-icon.svg";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="Navigation">
      <div className="wrapper-top">
        <div className="logo">
          <Logo />
        </div>
        <Link to="/">
        <div className="x-icon">
          <XIcon />
        </div>
        </Link>
      </div>
      <div className="wrapper-bottom">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
