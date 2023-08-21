import React from 'react';
import './Waitlist.css';
import { Link } from 'react-router-dom';
import Navbar from '../sections/Navbar.jsx';



const Waitlist = () => {
  return (
<>
<Navbar />
<div className='section7'><br />
<div className='sec'>
  <h1 id="showcase">*Join the EChub waitlist*</h1>
          <p id="content">Are you ready to revolutionize the way you manage your facilities?</p>
          <p id="content">At EChub, we are excited to introduce our tech-driven platform thet empowers you to take complete control of your facilitie's
           maintenance and repairs. Say goodbye to the hassle of tracking
           maintenance schedules, project report, and facility manually.<br></br> With EChub, everything you need is a click away </p>
           <h1 id="showcase">*Why join the Waitlist?*</h1>
         <p id="content1">- Get early access: Be among the first to experience the power of EChub as soon as it launches!</p>
         <p id="content1">- Stay Updated: Receive exclusive updates, news and insights about our platform's development progress.</p>
         <h1 id="showcase">*How it Works*</h1>
          <p id="content2">1. Join the Waitlist: Enter your email below to join the waitlist. it's quick and easy!</p>
          <p id="content2">2. Be in the Know: We'll keep you informed about our platform's development and launch</p>
          <p id="content2">3. Get Ready to Transform: Once we launch, you'll have access to EChub game-changing features.</p>
         <h1 id="showcase">*Join the Revolution*</h1>
          <Link to='/waitlistform'><div className="btn">STEP INSIDE</div></Link>
          <a href="https://www.facebook.com/echubafrica/"   className="fa fa-facebook" />
              <a href="https://www.linkedin.com/company/echub-africa"   className="fa fa-linkedin" />
              <a href="https://twitter.com/Echubafrica?s=09" className="fa fa-twitter" />
              <a href="https://wa.me/message/ITOTKHYYO62KP1" className="fa fa-instagram" />
              <p>Follow us on social media for exciting updates and sneak peeks!</p>
              <p>© 2023 EChub. All rights reserved.</p>
              <p>At EChub we believe nobody deserves to see shege from local technicians</p><br />
        </div>
        </div>
</>
  )
}

export default Waitlist;