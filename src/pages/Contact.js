import React from 'react';
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import CompanyInfo from '../components/CompanyInfo'
// import HireUsFrom from '../components/HireUsForm'
import ContactForm from "../components/ContactForm"

export default function Contact() {
    return (
        <div className="Contact">
            <Navbar location={"contact"}/>
            <Hero title="Contact Us" />
            <CompanyInfo />
            {/* <HireUsFrom /> */}
            <ContactForm />
            <Footer />
        </div>
    );
}