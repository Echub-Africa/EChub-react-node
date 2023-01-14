import React from 'react';
import './HireCompany.css';
import Header from '../../components/Header';
import StepSection from '../../components/HireIndividualComponents/StepSection';
import HireForm from '../../components/HireCompanyComponents/HireForm';
import GetQuote from '../../components/HireIndividualComponents/GetQuote';
import Footer from '../../components/Footer';

const HireCompany = () => {
    
  return (
    <section className="H-ind">
        <Header />
        <StepSection />
        <HireForm />
        <GetQuote />
        <Footer />
    </section>
  )
}

export default HireCompany