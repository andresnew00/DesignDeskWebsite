import React from "react";

export default function WhoWeAre() {
  return (
    <div className="WhoWeAre">
      <div className="wrapper">
        <div className="text-section">
          <p>What We Do</p>
          <h1>
            There might be thousands of agencies, but at{" "}
            <span>Design Desk</span> you are the priority.
          </h1>
          <p>
            We are a group of individuals whose passion is to provide
            hand-crafted websites that express not only your business but its
            personality as well, we believe that creating memorable experiences
            is the best way to connect with your consumers. From dynamic web
            designs to cutting-edge digital marketing strategies, we believe
            that the custom solutions we create will connect to your customers
            and show them what your business is really about. No matter your
            product or service, you have a story to tell. And, we’re the best
            agency to tell it. <br></br>
            <br></br> Our interactive web design agency in Lawrenceville helps
            you connect with your audience in exciting and engaging ways. We
            focus on your success by defining your needs and achieving your
            goals.
          </p>
        </div>
        <div className="table-team">
          <img src={require(`../assets/Consulting_Flatline1.png`)} />
        </div>
      </div>
    </div>
  );
}
