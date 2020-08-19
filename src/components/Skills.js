import React from "react";
import { ReactComponent as GuyOnComputer } from "../assets/guy-on-computer.svg";
import { ReactComponent as GirlOnLaptop } from "../assets/girl-on-laptop.svg";
import { ReactComponent as GuySearching } from "../assets/guy-searching.svg";
import { Spring } from "react-spring/renderprops";
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'


function Skills() {
  return (
    <div className="skills-wrapper">
      <h3>Dress your company for business</h3>
      <div className="skills">
        <Spring from={{ opacity: 0, marginRight: -500 }} to={{opacity: 1, marginRight: 0}}>
          {(props) => (
            <div className="webdesign-skill" style={props}>
              <div className="pcguy">
                <GuyOnComputer />
              </div>
              <h2>Web Design</h2>
            </div>
          )}
        </Spring>
        <Spring from={{ opacity: 0, marginRight: -500 }} to={{opacity: 1, marginRight: 0}}>
          {(props) => (
            <div className="uiux-skill" style={props}>
            <div className="girlOnPc">
              <GirlOnLaptop />
            </div>
            <h2>UI/UX Design</h2>
          </div>
          )}
        </Spring>
        <Spring from={{ opacity: 0, marginRight: -500 }} to={{opacity: 1, marginRight: 0}}>
          {(props) => (
            <div className="seo-skill" style={props}>
            <div className="guySEO">
              <GuySearching />
            </div>
            <h2>SEO</h2>
          </div>
          )}
        </Spring>
      </div>
    </div>
  );
}

export default Skills;