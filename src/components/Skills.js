import React from "react";
import { ReactComponent as GuyOnComputer } from "../assets/guy-on-computer.svg";
import { ReactComponent as GirlOnLaptop } from "../assets/girl-on-laptop.svg";
import { ReactComponent as GuySearching } from "../assets/guy-searching.svg";

function Skills() {
  return (
    <div className="skills-wrapper">
      <h3>Dress your company for business</h3>
      <div className="skills">
        <div className="webdesign-skill">
          <div className="pcguy">
            <GuyOnComputer />
          </div>
          <h2>Web Design</h2>
        </div>
        <div className="uiux-skill">
          <div className="girlOnPc">
            <GirlOnLaptop />
          </div>
          <h2>UI/UX Design</h2>
        </div>
        <div className="seo-skill">
          <div className="guySEO">
            <GuySearching />
          </div>
          <h2>SEO</h2>
        </div>
      </div>
    </div>
  );
}

export default Skills;
