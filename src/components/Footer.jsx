import React from 'react'


export default function Footer() {
  return (
    <div className='footer '>
      <div className='row footerRow'>
        <div className='col col-lg-4 col-md-4 col-sm-12 leftFooter'>
          <h1 className='footerBrand'>Blue Collar</h1>
          <div className='footerIcons'>
            <a href="#"><i class="fab fa-facebook-f"></i> </a>
            <a href="#"><i class="fab fa-linkedin-in"></i> </a>
            <a href="#"><i class="fab fa-twitter"></i> </a>
            <a href="#"> <i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className='col col-lg-8 col-md-8 col-sm-12 rightFooter'>
        
          <p className='know'>Want to know what we are up to?</p>
          <div className='subscribeDiv mb-4'>
            <input className='subscribe' type="email" placeholder=' Enter your Email' />
            <button type="button" class="btn btn-primary subscribeButton bold">SUBSCRIBE</button>
          </div>
          <div className='footerDivs'>
            <div className='footerDiv1'>
            <a  className='mb-5' href="#"><p className='bold footerHeader'>Join blue collar</p></a>
            <a href="#"><p className='footerP'>For blue collar technicians</p></a>
            <a href="#"><p className='footerP'>Learning community</p></a>
            <a href="#"><p className='footerP'>Leadership programme</p></a>
            <a href="#"><p className='footerP'>Become a partner</p></a>





            </div>
            <div className='footerDiv2'>
            <a  className='mb-5' href="#"><p className='bold footerHeader'>Services</p></a>
            <a href="#"><p className='footerP'>Electrical</p></a>
            <a href="#"><p className='footerP'>Carpentry</p></a>
            <a href="#"><p className='footerP'>Plumbing</p></a>
            <a href="#"><p className='footerP'>Electronics and Gadgets</p></a>

            </div>
            <div className='footerDiv3'>
            <a  className='mb-5' href="#"><p className='bold footerHeader'>About us</p></a>
            <a href="#"><p className='footerP'>Who we are</p></a>
            <a href="#"><p className='footerP'>Blogs</p></a>
            <a href="#"><p className='footerP'>Events</p></a>
            <a href="#"><p className='footerP'>Projects</p></a>

            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
