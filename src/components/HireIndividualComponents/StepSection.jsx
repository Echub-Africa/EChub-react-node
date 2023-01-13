import React from 'react';
import searchImg from '../../assets/Inspection icon.png';
import groupImg from '../../assets/Group.png';
import artisan from '../../assets/Artian.png';


const StepSection = () =>{
    return (
        <section className="step">
            <div className="container">
                <div className="step-header">
                    <h1>Ready to Connect tech Village?</h1>
                    <p>Talk to the best technician and get all the solutions you need </p>
                </div>
                <div className="step-wrapper">
                    <div className="step-item">
                        <h2>Step 1: Inspection</h2>
                        <img src={searchImg} alt="" />
                        <p>After filling out the form 
below we will com to your 
site for Inspection</p>
                    </div>
                    <div className="step-item">
                        <h2>Step 2: Proposal</h2>
                        <img src={groupImg} alt="" />
                        <p>In a ditailed Proposal we will 
give a pricing estimate, 
Payment plan and deliverables</p>
                    </div>
                    <div className="step-item">
                        <h2>Step 3: Execution</h2>
                        <img src={artisan} alt="" />
                        <p>Once on te.........................Job success</p>
                    </div>
                </div>
                <div className="step-footer">
                    <span>Get Quotes</span>
                </div>
            </div>
        </section>
    )
}

export default StepSection;