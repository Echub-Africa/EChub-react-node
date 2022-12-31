import React from 'react';

import './Carpentry.css';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Hero from '../../components/CarpentryComponent/Hero';
import Features from '../../components/CarpentryComponent/Features';
import CarpentrySection from '../../components/CarpentryComponent/Carpentry';
import Projects from '../../components/CarpentryComponent/Projects';
import Plan from '../../components/CarpentryComponent/Plan';
import Services from '../../components/CarpentryComponent/Services';

const Carpentry = () => {
  return (
    <div className="carpentry">
        <NavBar />
        <Hero />
        <Features />
        <CarpentrySection />
        <Projects />
        <Plan />
        <Services />
        <Footer />
    </div>
  )
}

export default Carpentry;