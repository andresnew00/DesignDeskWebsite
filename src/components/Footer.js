import React from "react";
import { ReactComponent as Logo } from "../assets/logodd.svg";
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
            <Link to={`${process.env.PUBLIC_URL}/`}>
              Home
            </Link>
          </li>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/about`}>
              About
            </Link>
          </li>
          <li>
            <Link to={`${process.env.PUBLIC_URL}/contact`}>
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="social-media-logos">
          <div className="facebook" >
            <a href="https://www.facebook.com/Design-Desk-109023230918615"><FacebookLogo /></a>
          </div>
          <div className="instagram">
          <a href="https://www.instagram.com/inciarte_development/?hl=en"><InstagramLogo /></a>
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
