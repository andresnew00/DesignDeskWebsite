import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import Skills from "../components/Skills";
import PortfolioBar from "../components/PortfolioBar";
import Testimonials from "../components/Testimonials";
import Information from "../components/Information";
import Footer from "../components/Footer";
import Services from "../components/Services";
import HireUsForm from "../components/HireUsForm";
import ContactForm from "../components/ContactForm";

function Home() {
    const message = <div>Creative and <br /> Practical, Web Design.</div>
  return (
    <div className="App">
      <Navbar location={"home"}/>
      <Hero title={message}/>
      <WhyUs />
      <Services />
      <PortfolioBar />
      {/* <Testimonials /> */}
      {/* <Information /> */}
      {/* <HireUsForm /> */}
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;
