import React from "react";
import { Link } from "react-router-dom";

export default function GetInTouch() {
  return (
    <div className="GetInTouch-wrapper">
      <div className="left-side">
        <div className="wrapper">
          <p>Got a project in mind?</p>
          <div className="link2contact">
            <Link className="about2" to={`${process.env.PUBLIC_URL}/contact`}>
              Get in Touch.{" "}
            </Link>
          </div>
        </div>
      </div>
      <div className="right-side">
        <p>
          {" "}
          <i>
            "Design is not what it looks and feels like, design is how it
            works."
          </i>
        </p>
        <p>
          <b>-Steve Jobs</b>
        </p>
      </div>
    </div>
  );
}
