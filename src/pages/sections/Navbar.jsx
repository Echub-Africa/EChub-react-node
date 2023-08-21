import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import blaa1 from '../images/blaa1.svg';


const Navbar = () => {
  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }


  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }

  return (
<>
<div id="myNav" className="overlay">
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>×</a>
          <div className="overlay-content">
          <Link to="/">Home</Link>
            <Link to="/waitlist">About Us</Link>
            <Link to="/waitlist">Services</Link>
            <Link to="/waitlist">Contact Us</Link>
            <Link to="/waitlist">Blog</Link>
            <Link to="/Faq">FAQS</Link>
            <Link to="/waitlist"><div className="buttononnavbarr">Get Started</div></Link>
          </div>
        </div>
        <div className="navbar">
          <div className="leftnavber">
            <Link to="/waitlist"><img src={blaa1} style={{height: '39.32389450073242px', width: '122.71342468261719px', borderRadius: '0px', marginTop: '37px'}} /></Link>
            <div className="linksonnavbar">
            <Link to="/">Home</Link>
              <Link to="/waitlist">About Us</Link>
              <Link to="/waitlist">Services</Link>
              <Link to="/waitlist">Contact Us</Link>
              <Link to="/waitlist">Blog</Link>
              <Link to="/Faq">FAQS</Link>
            </div>
          </div>
          <div className="rightnavbar">
            <a href="/waitlist"><div className="buttononnavbar">Get Started</div></a>
            <spann onClick={openNav}>☰</spann>
          </div>
        </div>
</>
  )
}
export default Navbar;