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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
            cum ipsam qui voluptatum illo inventore asperiores eum vero soluta
            ad dolores fugiat, autem illum nihil culpa error! Itaque, quae quis?
          </p>
        </div>
      </div>
    </div>
  );
}
