import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

import './AboutTech.css';
import Header from '../../components/Header';
import GetQuote from '../../components/HireIndividualComponents/GetQuote';
import Footer from '../../components/Footer';
import logo2 from '../../assets/logo 2.png';
import lagos from '../../assets/1__DA8kc1ZxuJQ9-QIUj8C_A 1.png';
import startup from '../../assets/322fa75b297a913f924f8683351d6027 1.png';
import logo01 from '../../assets/logo_0 1.png';
import layer from '../../assets/Layer_x0020_1.png';
import logo1 from '../../assets/logo 1.png';
import nieee from '../../assets/nieee 1.png';

const AboutTech = () => {
  return (
    <div className="about">
      <Header />
      <div className="about-container">
        <div className="about-content">
          <h1>About Tech Village</h1>
          <p>Tech Village is an exclusive network of the top technicians in the world. Top companies hire Tech village 
technicians for their most important projects. We are a to-go platform that provides people, business 
and organizations with safe, fast and convenient way to artisan fixing their problem and also rendering 
full follow-up on repair, installation, maintenance and verification services.  Artisans who would enroll as 
remote workers/freelancers (electrician, carpenters, plumbers, etc.) from all walks of the country 
are 
empowered to acquire work, set their own wages, market their skills, and get paid how and when they 
want. 
The consideration of “handymen” as opposed to the normal digital skilled freelancers is due to the 
pressing need for that in the 
Country's economy. Platforms are out for digitally skilled artisans to enroll 
but little or none at all is available for those who work 
basically as handymen. We are registered under 
the cooperate affairs commission with Registration number RC-1694657</p>
        </div>
      </div>
      <div className="about-features">
        <div className="container">
          <div className="feature-right"></div>
          <div className="feature-left"></div>
          <div className="feature-right1"></div>
        </div>
      </div>
      <div className="about-sponsors shadow">
        <div className="container pt-5 pb-5">
          <img src={logo2} alt="" />
          <img src={lagos} alt="" />
          <img src={startup} alt="" />
          <img src={logo01} alt="" />          
          <img src={layer} alt="" />
          <img src={logo1} alt="" />
          <img src={nieee} alt="" />
        </div>
      </div>
      <GetQuote />
      <div className="about-faq">
        <div className="container">
          <div className="faq-header">
            <h1>Frequently Asked Questions</h1>
          </div>
          <Accordion defaultActiveKey="0" className="faq-wrapper">
            <Accordion.Item className="card" eventKey="0">
              <Accordion.Header>Q. Is it true that I can schedule full month maintenance and repairs check for only N13,399 for my apartment</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="card" eventKey="1">
              <Accordion.Header>Where are you based?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>  
            <Accordion.Item className="card" eventKey="2">
              <Accordion.Header>Do you have barbers and fashion designers?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>  
            <Accordion.Item className="card" eventKey="3">
              <Accordion.Header>Is ECHub registered?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>  
            <Accordion.Item className="card" eventKey="4">
              <Accordion.Header>Why do I have to pay a call-out fee?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>  
            <Accordion.Item className="card" eventKey="5">
              <Accordion.Header>Q. How can I recruit artisans as staff?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>  
            <Accordion.Item className="card" eventKey="6">
              <Accordion.Header>I am running a building project, can Tech Village help?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item> 
            <Accordion.Item className="card" eventKey="7">
              <Accordion.Header>Q. I have a skill, how can I join the team?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>  
          </Accordion>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutTech