import React from 'react';
import './Waitlist.css';
import Navbar from '../sections/Navbar.jsx';



const Waitlistform = () => {
  return (
<>
<Navbar />
<div className='section8'>
  <h1>Please fill this form</h1><br />

  <center>
    <form action="https://formspree.io/f/xwkdvkbg"
  method="POST"> 
  <input type='email' name='Email Address' placeholder='Email Address'requird/> 
  <input type='text' name='Full Name' placeholder='Full Name' required/>
  <input type='number' name='Phone Number' placeholder='Phone Number' required/>
  <input type='text' name='Name of Business' placeholder='Name of Business(if not signing as a homeowner)' /><br />
<textarea type='text' name='What You are expecting to see' placeholder='What You are expecting to see' /><br />
<input type="submit" /><br /><br /><br />
  </form>  
  </center>


</div>
</>
  )
}

export default Waitlistform;