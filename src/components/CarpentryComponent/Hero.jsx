import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Hero = () => {
  return (
    <div className="carpentry-hero">
        <div className="container">
            <aside className="hero-left">
                <div className="hero-section-1">
                    <small>Switch to competence</small>
                </div>
                <div className="hero-section-2">
                    <h1>Wood related structures, fixtures and buildings is a No-Brainer</h1>
                </div>
                <div className="hero-section-3">
                    <ul>
                        <li>Building and Construction</li>
                        <li>Interior design and decor</li>
                        <li>Joinery</li>
                    </ul>                    
                </div>
                <div className="hero-section-4">
                    <button className="btn-primary">
                        I WANT A TECHNICIAN NOW
                        <ArrowForwardIosIcon color={"white"}/>
                    </button>                          
                </div>
            </aside>                
        </div>
    </div>
  )
}

export default Hero