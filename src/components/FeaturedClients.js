import React from "react";

export default function FeaturedClients() {
  return (
    <div className="Featured-wrapper">
      <h2>Featured <span>Clients.</span></h2>
      <div className="image-group">
        <img src={require(`../assets/cuchitos.png`)} id="cuchitos"/>
        <img src={require(`../assets/DoctortiresfinalCopy.png`)} />
        <img src={require(`../assets/sunshadeint.png`)} />
      </div>
    </div>
  );
}
