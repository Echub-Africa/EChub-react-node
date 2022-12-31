import React from 'react';

import timer from '../../assets/timer.png';
import engineering from '../../assets/engineering2.png';
import admin from '../../assets/admin_panel_settings.png';

const Features = () => {
  return (
    <div className="carpentry-features">
        <div className="container">
            <div className="feature-item">
                <img src={timer} alt="" />
                <p className="feature-p-1">24/7</p>
                <p className="feature-p-2">Support</p>
            </div>
            <hr />
            <div className="feature-item">
                <img src={admin} alt="" />
                <p className="feature-p-1">Safe</p>
                <p className="feature-p-2">Experience</p>
            </div>
            <hr />
            <div className="feature-item">
                <img src={engineering} alt="" />
                <p className="feature-p-1">100+</p>
                <p className="feature-p-2">Experts</p>
            </div>
        </div>
    </div>
  )
}

export default Features;