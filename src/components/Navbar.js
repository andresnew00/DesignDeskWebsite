import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Burger } from "../assets/open-menu.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className="navbar-wrapper">
        <div className="logo">
          <Link to={`${process.env.PUBLIC_URL}/`}>
            <Logo />
          </Link>
        </div>
        <div className="phoneNburger">
          <div className="phoneNumber">+1 (678) 338-6427</div>

          <div className="burgerMenu">
            <Link to={`${process.env.PUBLIC_URL}/navigation`}>
              <Burger />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
