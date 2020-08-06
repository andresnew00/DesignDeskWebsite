import React from "react";
import { ReactComponent as GuysWCoffee } from "../assets/guys-coffee.svg";
import InfoRectangle from '../components/Information-rectangle';

function Information() {
  return (
    <div className="information-wrapper">
      <div className="coffee-guys">
        <GuysWCoffee />
      </div>
      <InfoRectangle showButton={true} />
    </div>
  );
}

export default Information;
