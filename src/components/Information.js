import React from "react";
import { ReactComponent as GuysWCoffee } from "../assets/guys-coffee.svg";

function Information() {
  return (
    <div className="information-wrapper">
      <div className="coffee-guys">
        <GuysWCoffee />
      </div>
      <div className="info-rectangle">
        <div className="left-side">
          <h3>PHONE NUMBER</h3>
          <h1>+1 (678) 338-6427</h1>
          <h3>EMAIL ADDRESS</h3>
          <h1>info@information.com</h1>
        </div>
        <div className="right-side">
          <h3>OUR LOCATION</h3>
          <h1>Coming soon</h1>
          <button>CONTACT US</button>
        </div>
      </div>
    </div>
  );
}

export default Information;
