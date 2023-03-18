/* eslint-disable no-unused-vars */
import React from 'react';
import './HireIndividual.css';
import Header from '../../components/Header';
import StepSection from '../../components/HireIndividualComponents/StepSection';
import HireForm from '../../components/HireIndividualComponents/HireForm';
import GetQuote from '../../components/HireIndividualComponents/GetQuote';
import Footer from '../../components/Footer';

const HireIndividual = () => {
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

export default HireIndividual
