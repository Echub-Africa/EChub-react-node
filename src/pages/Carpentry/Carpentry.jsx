import React from 'react';

import './Carpentry.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../../components/CarpentryComponent/Hero';
import Features from '../../components/CarpentryComponent/Features';
import CarpentrySection from '../../components/CarpentryComponent/Carpentry';
import Projects from '../../components/CarpentryComponent/Projects';
import Plan from '../../components/CarpentryComponent/Plan';
import Services from '../../components/CarpentryComponent/Services';
import SixthSection from '../../components/SixthSection'

const Carpentry = () => {
  return (
    <div className="carpentry">
        <Header />
        <Hero />
        <Features />
        <CarpentrySection />
        <Projects />
        <Plan />
        <SixthSection />
        <Services />
        <Footer />
    </div>
  )
}

export default Carpentry;