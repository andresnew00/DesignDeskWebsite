import React from "react";
import { ReactComponent as Logo } from "../assets/logodark.svg";
import { ReactComponent as XIcon } from "../assets/x-icon.svg";
import { Link } from "react-router-dom";

export default function Navigation(props) {
  // const Mylocation = props.location.Currentlocation;

  return (
    <div className="Navigation">
      <div className="wrapper-top">
        <div className="logo">
          <Logo />
        </div>
        <Link to={`${process.env.PUBLIC_URL}/`}>
        <div className="x-icon">
          <XIcon />
        </div>
        </Link>
      </div>
      <div className="wrapper-bottom">
        <ul>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
          </li>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/about`}>About</Link>
          </li>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/contact`}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
