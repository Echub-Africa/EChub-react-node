import React from 'react'
import logo1 from "../assets/logo 1.png"
import logo2 from "../assets/logo 2.png"
import logo3 from "../assets/logo 3.png"
import logo4 from "../assets/logo 4.png"
import logo5 from "../assets/logo5.png"
// import logo6 from "../assets/logo 6.png"
import logo7 from "../assets/logo 7.png"


export default function FifthSection() {
  return (
    <div className='fifth'>
      <div className='row sponsors '>
        <div className='col col-lg-2  col-sm-12 col-md-4 sponsorLogo'>
        <img src={logo1} className="logo1" alt = "logo1"/>

        </div>
        <div className='col col-lg-2  col-sm-12 col-md-4 sponsorLogo'>
        <img src={logo2} alt = "logo2"/>


        </div>
        <div className='col col-lg-2  col-sm-12 col-md-4 sponsorLogo'>
        <img  src={logo3} alt = "logo3"/>


        </div>
        <div className='col col-lg-2  col-sm-12 col-md-4 sponsorLogo'>
        <img src={logo4} alt = "logo4"/>


        </div>
        <div className='col col-lg-2  col-sm-12 col-md-4 sponsorLogo'>
        <img src={logo5} alt = "logo5"/>


        </div>
       
        <div className='col col-lg-2  col-sm-12 col-md-4 sponsorLogo'>
        <img  className='lastLogo' src={logo7} alt = "logo7"/>


        </div>

      </div>

    </div>
  )
}
