import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import LogoGithub from "../assets/github.png";
import LogoFacebook from "../assets/facebook.png";
import LogoInstagram from "../assets/instagram.png";

function Footer() {
  let location = useLocation();
  return (
    <div className="footer-wrapper">
      <div className="social-media-logos">
        <div className="facebook hvr-shrink">
          <a
            href="https://www.facebook.com/Design-Desk-109023230918615"
            target="_blank"
            title="Facebook"
          >
            <img
              src={LogoFacebook}
              alt="lawrenceville website design facebook"
            />
          </a>
        </div>
        <div className="instagram hvr-shrink">
          <a
            href="https://www.instagram.com/design_desk_websites/?igshid=17s4607wqquz3"
            target="_blank"
            title="Instagram"
          >
            <img
              src={LogoInstagram}
              alt="lawrenceville logo design instagram"
            />
          </a>
        </div>
        <div className="github hvr-shrink">
          <a
            href="https://github.com/andresnew00"
            target="_blank"
            title="Github"
          >
            <img src={LogoGithub} alt="atlanta web design github" />
          </a>
        </div>
      </div>
      <div className="linkstopages">
        <ul>
          {location.pathname === "/" ? (
            <li>
              <Link className="currentPage" to={""}>
                Home
              </Link>
            </li>
          ) : (
            <li>
              <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
            </li>
          )}
          {location.pathname === "/about" ? (
            <li>
              <Link
                className="currentPage"
                to={`${process.env.PUBLIC_URL}/about`}
              >
                About
              </Link>
            </li>
          ) : (
            <li>
              <Link to={`${process.env.PUBLIC_URL}/about`}>About</Link>
            </li>
          )}
          {location.pathname === "/contact" ? (
            <li>
              <Link
                className="currentPage"
                to={`${process.env.PUBLIC_URL}/contact`}
              >
                Contact Us
              </Link>
            </li>
          ) : (
            <li>
              <Link to={`${process.env.PUBLIC_URL}/contact`}>Contact Us</Link>
            </li>
          )}
          {location.pathname === "/portfolio" ? (
            <li>
              <Link
                className="currentPage"
                to={`${process.env.PUBLIC_URL}/portfolio`}
              >
                Portfolio
              </Link>
            </li>
          ) : (
            <li>
              <Link to={`${process.env.PUBLIC_URL}/portfolio`}>Portfolio</Link>
            </li>
          )}
          <li>
            <a target="_blank" href="https://blog.designdesk.tech">
              Blog
            </a>
          </li>
        </ul>
      </div>
      <div className="copyright">
        <p>Design Desk {new Date().getFullYear()}. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
