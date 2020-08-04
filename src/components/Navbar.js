import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import {ReactComponent as Burger} from "../assets/open-menu.svg";

function Navbar() {
  return (
    <header>
      <div className="navbar-wrapper">
        <div className="logo">
          <Logo />
        </div>
        <div className="phoneNburger">
          <div className="phoneNumber">+1 (678) 338-6427</div>
          <div className="burgerMenu">
            <Burger />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
