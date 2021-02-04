import React from "react";

export default function ServiceBox(props) {
  return (
    <div className="Box-border">
      <div className="top-layer">
        <div className="icon-circle">
          <img
            src={require(`../assets/${props.name}.png`)}
          />
        </div>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
