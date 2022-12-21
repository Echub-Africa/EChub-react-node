import React from 'react'
// import logo11 from "../assets/bbb.svg"
import logo22 from "../assets/pennee-logo.svg"
import logo33 from "../assets/images.png"
import logo44 from "../assets/List of Courses in Yaba College Of Technology (YABATECH).jpg"
import logo55 from "../assets/divi.png"
import logo66 from "../assets/download.jpg"

export default function SeventhSection() {
  return (
        <div className='seventh'>
              <div className='row'>
                    <div className='col col-lg-6 col-md-6 col-md-12 trustedBy'>
                    <h1 className='trustHeader'>We are trusted by</h1>

                    </div>
                    <div className='col col-lg-6 col-md-6 col-md-12  '>
                          <div className='div1 mb-4 '>
                          <img className='trusted' src={logo22} alt =""/>
                          <img className='trusted' src={logo22} alt =""/>
                          <img className='trusted' src={logo33} alt =""/>



                          </div>
                          <div className='div2 '>
                          <img className='trusted' src={logo44} alt =""/>
                          <img className='trusted' src={logo55} alt =""/>
                          <img className='trusted' src={logo66} alt =""/>


                          </div>

                    </div>




              </div>


        </div>
  )
}
