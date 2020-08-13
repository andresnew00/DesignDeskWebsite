import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as FacebookLogo } from "../assets/facebook-icon.svg";
import { ReactComponent as InstagramLogo } from "../assets/instagram-icon.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="top-container">
        <div className="logo">
          <Link to={`${process.env.PUBLIC_URL}/`}>
            <Logo />
          </Link>
        </div>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About </a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
        <div className="social-media-logos">
          <div className="facebook">
            <FacebookLogo />
          </div>
          <div className="instagram">
            <InstagramLogo />
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Andres Inciarte 2020. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
