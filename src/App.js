import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Information from './components/Information';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <WhyUs />
      <Skills />
      <Testimonials />
      <Information />
      <Footer />
    </div>
  );
}

export default App;
