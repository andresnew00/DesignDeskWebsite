import React from "react";
import { ReactComponent as ShapeOne } from "../assets/shape-top.svg";
import { ReactComponent as ShapeTwo } from "../assets/shape-bottom-right.svg";
import { ReactComponent as ShapeThree } from "../assets/shape-bottom-left.svg";

function Hero() {
  return (
    <main>
      <div className="hero-wrapper">
        <div className="shape1-wrapper">
          <ShapeOne />
        </div>
        <h1 className="main-text">Creative and Practical</h1>
        <div className="square-text">
          <div className="rectangle">
          <p className="rectangle-text">
            Website Design that leaves a lasting impression
          </p>
          </div>
        </div>
        <div className="shape2-wrapper">
          <ShapeTwo />
        </div>
        <div className="shape3-wrapper">
          <ShapeThree />
        </div>
      </div>
    </main>
  );
}

export default Hero;
