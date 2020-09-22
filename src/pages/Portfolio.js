import React from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Portfolio() {
    const message = <div>Web Design <br /> Portfolio.</div>
    return (
        <div>
            <Navbar />
            <Hero title={message}/>
            <Footer />
        </div>
    )
}
