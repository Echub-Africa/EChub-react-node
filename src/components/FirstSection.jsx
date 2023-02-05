import React from 'react'
import electrician from "../assets/Technician image.png"

const FirstSection = ()=> {
  return (
      <div className='firstSection' style={first}>
        <div className='row first-container' >
          <div className='col col-lg-7 col-md-7 col-sm-12 leftSection'>
            <small className='bold text-black'>Switch to competence</small>
            <h1>We have tried and tested <b className='terry'>TERRIBLE</b> artisans so you don't have to</h1>
            <p className='bold white'>Led by executives with a total experience of three decades ,we are the leading go-to company to find plumbers, carpenters, electrician for construction projects</p>          
            <div type="button" class="mt-5 p-3 firstButton">i want a technician now  <i class="fas fa-angle-right"></i></div>
          </div>
          <div className='col col-lg-5  col-md-7 col-sm-12 imageDiv'>
            <img className='electrician' src={electrician} alt="electrician"/>
          </div>
        </div>
    </div>
  )
}

export default FirstSection

const first = {
  display: "grid",
  placeItems: "center",
  
}
// const h1 = {
//   fontWeight: 700,
//   fontSize: "45px",
//   lineHeight: "53px",
//   width: "667px",
//   color: "#000"
// }

// const btn = {
//   fontSize: "15px",
//   width: "100%",
//   background: "#085BDA",
//   borderRadius: "5px",
//   border: "none",
//   color: "#fff",  
//   textTransform: "uppercase"
// }

// const p = {  
//   fontStyle: "normal",
//   fontWeight: 400,
//   fontSize: "18px",
//   lineHeight: "23px",
//   color: "#000000",
//   width: "645px",
//   marginTop: "12px"
// }

// const imgEl = {
//   width: "462px",
//   height: "595px"
// }