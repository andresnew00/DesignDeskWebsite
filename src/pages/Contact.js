import React from 'react';
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import CompanyInfo from '../components/CompanyInfo'
import HireUsFrom from '../components/HireUsForm'

export default function Contact() {
    return (
        <div className="Contact">
            <Navbar location={"contact"}/>
            <Hero title="Contact Us" />
            <CompanyInfo />
            <HireUsFrom />
            <Footer />
        </div>
    );
}