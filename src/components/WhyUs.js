import React from "react";
import { ReactComponent as ComputerGirls } from "../assets/computer-girls.svg";
import { Spring } from "react-spring/renderprops";

function WhyUs() {
  return (
    <div className="why-wrapper">
      <div className="rectangle-container">
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {(props) => (
            <div className="top-white-rectangle">
              <h2 style={props}>Why us?</h2>
              <p style={props}>
                At Design Desk we have a passion for developing products that
                are creative, easy to use, and personal. We work closely with
                our clients to provide the best balance of user experience and
                creativity your project can have to show people what your
                business is all about.
              </p>
              <div className="bottom-blue-rectangle"></div>
            </div>
          )}
        </Spring>
      </div>
      <div className="computer-girls-img">
        <ComputerGirls />
      </div>
    </div>
  );
}

export default WhyUs;
