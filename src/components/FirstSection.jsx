import React from 'react'
import electrician from "../assets/Technician image.png"

export default function FirstSection() {
  return (
      <div className='firstSection ' >
      <div className='row'>
        <div className='col col-lg-6   col-md-5 col-sm-12 leftSection animate__animated animate__backInDown'>
        <p className='bold '>Switch to competence</p>
        <h1>We have tried and tested <b className='terry'>TERRIBLE</b> artisans so you don't have to</h1>
        <p className='bold white'>Led by executives with a total experience of three decades ,we are the leading go-to company to find <b className='change'></b> for construction projects</p>
        
        <button type="button" class="btn btn-primary firstButton">SWITCH TO COMPETENCE <i class="fas fa-angle-right"></i></button>

        </div>
        <div className='col col-lg-6   col-md-7 col-sm-12 imageDiv animate__animated animate__backInUp'>
        <img className='electrician' src={electrician} alt="electrician"/>
       
        


        </div>

      </div>

    </div>
  )
}
