import React from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BannerPortfolio from "../components/BannerPortfolio"
import Footer from "../components/Footer";
import PortfolioWebsites from "../components/PortfolioWebsites";

export default function Portfolio() {
    const message = <div>Web Design <br /> Portfolio.</div>
    return (
        <div>
            <Navbar />
            <Hero title={message}/>
            <BannerPortfolio />
            <PortfolioWebsites />
            <Footer />
        </div>
    )
}
