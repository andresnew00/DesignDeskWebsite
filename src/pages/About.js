import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhoWeAre from "../components/WhoWeAre";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="about">
      <Navbar location={"about"}/>
      <Hero title="About Us"/>
      <WhoWeAre />
      <Footer />
    </div>
  );
}

export default About;
