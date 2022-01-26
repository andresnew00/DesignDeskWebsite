import React from "react";

export default function PortfolioItem(props) {
  return (
    <a className="portfolioItem-wrapper" href={props.link} target="_blank">
        <img src={props.image} alt={props.title}/>
        <div className="portfolioItem-title">{props.title}</div>
    </a>
  );
}
