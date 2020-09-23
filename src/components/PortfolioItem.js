import React from "react";

export default function PortfolioItem(props) {
  return (
    <a className="portfolioItem-wrapper" href={props.link}>
        <img src={props.image} alt={props.title}/>
    </a>
  );
}
