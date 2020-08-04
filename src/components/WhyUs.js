import React from "react";
import { ReactComponent as ComputerGirls } from "../assets/computer-girls.svg";
function WhyUs() {
  return (
    <div className="why-wrapper">
      <div className="rectangle-container">
        <div className="top-white-rectangle">
          <h2>Why us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            laborum rerum hic amet quos natus tempora animi, illo neque totam
            rem perferendis quia excepturi assumenda beatae soluta recusandae
            qui quam!
          </p>
          <div className="bottom-blue-rectangle"></div>
        </div>
        
      </div>
      <div className="computer-girls-img">
        <ComputerGirls />
      </div>
    </div>
  );
}

export default WhyUs;
