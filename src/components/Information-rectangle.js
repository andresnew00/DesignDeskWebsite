import React from "react";
import {Link} from "react-router-dom";

export default function InfoRectangle(props) {
  return (
    <div className="rectangle-container">
      <div className="info-rectangle">
        <div className="left-side">
          <h3>PHONE NUMBER</h3>
          <h1 className="phoneNumber">+1 (678) 338-6427</h1>
          <h3>EMAIL ADDRESS</h3>
          <h1>andresinciarte.dev@gmail.com</h1>
        </div>
        <div className="right-side">
          <h3>OUR LOCATION</h3>
          <h1>Coming soon</h1>
          {props.showButton === false ? null : (
            <Link to={`${process.env.PUBLIC_URL}/contact`}>
              <button className="hvr-fade hvr-shadow">CONTACT US</button>
            </Link>
          )}
        </div>
        <div className="bottom-blue-rectangle"></div>
      </div>
    </div>
  );
}
