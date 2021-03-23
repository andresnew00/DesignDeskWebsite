import React from "react";
import { ReactComponent as Logo } from "../assets/logodark.svg";
import { ReactComponent as XIcon } from "../assets/x-icon.svg";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Navigation(props) {
  let history = useHistory();
  return (
    <div className="Navigation">
      <div className="wrapper-top">
        <div className="logo">
          <Logo />
        </div>
        <Link onClick={() => history.goBack()}>
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
            <Link to={`${process.env.PUBLIC_URL}/portfolio`}>Portfolio</Link>
          </li>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/contact`}>Contact Us</Link>
          </li>
          <li>
            <a target="_blank" href="https://blog.designdesk.tech">Blog</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
