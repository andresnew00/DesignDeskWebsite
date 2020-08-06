import React from 'react';
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import CompanyInfo from '../components/CompanyInfo'

export default function Contact() {
    return (
        <div className="Contact">
            <Navbar />
            <Hero title="Contact Us" />
            <CompanyInfo />
            <Footer />
        </div>
    );
}