import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhoWeAre from "../components/WhoWeAre";
import Footer from "../components/Footer";
import ApproachBar from "../components/ApproachBar";
import Process from "../components/Process";
import FeaturedClients from "../components/FeaturedClients";
import GetInTouch from "../components/GetInTouch";

function About() {
  return (
    <div className="about">
      <Navbar location={"about"}/>
      <Hero title="About Us"/>
      <WhoWeAre />
      <ApproachBar />
      <Process />
      <FeaturedClients />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default About;
