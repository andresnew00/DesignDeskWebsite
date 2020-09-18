import React from "react";
import instagramimg from "../assets/InstagramFrame.png";

export default function PortfolioBar() {
  return (
    <div className="barWrapper">
      <div className="content">
        <div className="title">Check out our work!</div>
        <div className="insideContent">
          <img style={{ width: "300px" }} src={instagramimg} alt="" />
          <div className="rightSide">
            <p>
              We are determined in helping small businesses create websites to
              get their image out in the online world. Feel free to visit our
              portfolio of happy clients and their responsive sites!
            </p>

            <button>Portfolio</button>
          </div>
        </div>
      </div>
    </div>
  );
}
