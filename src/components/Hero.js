import React from "react";
import { ReactComponent as ShapeOne } from "../assets/shape-top.svg";
import { ReactComponent as ShapeTwo } from "../assets/shape-bottom-right.svg";
import { ReactComponent as ShapeThree } from "../assets/shape-bottom-left.svg";
import { Spring } from "react-spring/renderprops";

function Hero(props) {
  const titulo = props.title;
  return (
    <main>
      <div className="hero-wrapper">
        <div className="shape1-wrapper">
          <ShapeOne />
        </div>
        <Spring from={{ opacity: 0, marginRight: -200  }} to={{ opacity: 1, marginRight: 0 }}>
          {(props) => (
            <div className="square-text" style={props}>
              <div className="rectangle"></div>
              <p className="rectangle-text">
                Website Design that leaves a lasting <br></br> impression.
              </p>
            </div>
          )}
        </Spring>

        <Spring from={{ opacity: 0, marginLeft: -200 }} to={{ opacity: 1, marginLeft: 0 }}>
          {(props) => (
            <h1 className="main-text" style={props}>
              {titulo}
            </h1>
          )}
        </Spring>
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
