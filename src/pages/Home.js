import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import Skills from "../components/Skills";
import PortfolioBar from "../components/PortfolioBar";
import Testimonials from "../components/Testimonials";
import Information from "../components/Information";
import Footer from "../components/Footer";

function Home() {
    const message = <div>Creative and <br /> Practical, Web Design.</div>
  return (
    <div className="App">
      <Navbar location={"home"}/>
      <Hero title={message}/>
      <WhyUs />
      <PortfolioBar />
      <Skills />
      {/* <Testimonials /> */}
      <Information />
      <Footer />
    </div>
  );
}

export default Home;
