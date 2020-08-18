import React from "react";

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
          { props.showButton === false ? (null) : (<button>CONTACT US</button>) }
        </div>
        <div className="bottom-blue-rectangle"></div>
      </div>
    </div>
  );
}
