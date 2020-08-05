import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="about">
      <Navbar />
      <Hero title="About Us"/>
      <Footer />
    </div>
  );
}

export default About;
