import React from "react";

export default function WhoWeAre() {
  return (
    <div className="WhoWeAre">
      <div className="wrapper">
        <div className="text-section">
          <p>What We Do</p>
          <h1>
            There might be thousands of agencies, but at <span>Design Desk</span> you are the
            priority.
          </h1>
          <p>
            We are a group of individuals whose passion is to provide
            hand-crafted websites which express not only your business but it's
            personality as well. We work closely with you to provide your
            clients with a feel of what your business is all about through the
            design of your page. <br></br>
            <br></br> Elementum suscipit turpis tempus a, eu viverra congue enim
            euismod. Vitae lectus consectetur et adipiscing. Massa a mattis
            porttitor posuere. Ultrices proin enim amet, mi commodo fermentum,
            viverra orci, metus. Purus nunc in tempus adipiscing phasellus.
            Integer viverra risus proin sollicitudin congue fermentum orci
            neque. Quam tempus condimentum in ut sit sed sit aliquam, nulla.
            Sociis amet odio urna vel, maecenas habitant commodo, parturient
            ornare.
          </p>
        </div>
        <div className="table-team">
          <img src={require(`../assets/Consulting_Flatline1.png`)} />
        </div>
      </div>
    </div>
  );
}
