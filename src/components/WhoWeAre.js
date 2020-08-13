import React from "react";
import { ReactComponent as Team } from "../assets/team-table.svg";

export default function WhoWeAre() {
  return (
    <div className="WhoWeAre">
      <div className="wrapper">
        <div className="table-team">
          <Team />
        </div>
        <div className="text-section">
          <h1>Who are we?</h1>
          <p>
            We are a group of individuals whose passion is to provide
            hand-crafted websites which express not only your business but it's
            personality as well. We work closely with you to provide your
            clients with a feel of what your business is all about through the
            design of your page.
          </p>
        </div>
      </div>
    </div>
  );
}
