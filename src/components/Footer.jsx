/* eslint-disable no-unused-vars */
import React from 'react'
import {Link} from 'react-router-dom'


export default function Footer() {
  return (
    <div className='footer '>
      <div className='row footerRow'>
        <div className='col col-lg-4 col-md-4 col-sm-12 leftFooter'>
          <h1 className='footerBrand mt-5'>Blue Collar</h1>
          <div className='footerIcons'>
            <Link to="#"><i class="fab fa-facebook-f"></i> </Link>
            <Link to="#"><i class="fab fa-linkedin-in"></i> </Link>
            <Link to="#"><i class="fab fa-twitter"></i> </Link>
            <Link to="#"><i class="fab fa-instagram"></i></Link>
            <Link to="#"><i className="fab fa-facebook-f"></i></Link>
            <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
            <Link to="#"><i className="fab fa-twitter"></i></Link>
            <Link to="#"><i className="fab fa-instagram"></i></Link>
          </div>
        </div>
        <div className='col col-lg-8 col-md-8 col-sm-12 rightFooter'>
        
          <p className='know'>Want to know what we are up to?</p>
          <div className='subscribeDiv mb-4'>
            <input className='subscribe' type="email" placeholder=' Enter your Email' />
            <button type="button" className="btn btn-primary subscribeButton bold">SUBSCRIBE</button>
          </div>
          <div className='footerDivs'>
            <div className='footerDiv1'>
              <Link  className='mb-5' to="#"><p className='bold footerHeader'>Join blue collar</p></Link>
              <Link to="#"><p className='footerP'>For blue collar technicians</p></Link>
              <Link to="#"><p className='footerP'>Learning community</p></Link>
              <Link to="#"><p className='footerP'>Leadership programme</p></Link>
              <Link to="#"><p className='footerP'>Become a partner</p></Link>
            </div>
            <div className='footerDiv2'>
              <Link  className='mb-5' to="/services"><p className='bold footerHeader'>Services</p></Link>
              <Link to="/electrical-maintenance"><p className='footerP'>Electrical</p></Link>
              <Link to="/carpentry"><p className='footerP'>Carpentry</p></Link>
              <Link to="/plumbing"><p className='footerP'>Plumbing</p></Link>
              <Link to="/electronic-gadget"><p className='footerP'>Electronics and Gadgets</p></Link>
            </div>
            <div className='footerDiv3'>
              <Link  className='mb-5' to="#"><p className='bold footerHeader'>About us</p></Link>
              <Link to="#"><p className='footerP'>Who we are</p></Link>
              <Link to="#"><p className='footerP'>Blogs</p></Link>
              <Link to="#"><p className='footerP'>Events</p></Link>
              <Link to="#"><p className='footerP'>Projects</p></Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
