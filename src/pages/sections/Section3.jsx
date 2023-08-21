import React from 'react';
import '../App.css';
import ec1 from '../images/ec1.png';
import Plumbing from '../images/Plumbing.png';
import Carpentry from '../images/Carpentry.png';
import Electronicsandgadgets from '../images/Electronicsandgadgets.png';



const Section3 = () => {
  return (
<>
{/*section3*/}
<div className="section3"><br /><center>
          <h3>Services</h3>
          <div className="topnavv">
            <a href="waitinglist.html">           
              <div className="sec3boxes" style={{backgroundColor: '#C1D6F6'}}>
                <h2>Electrical</h2>
                <img src={ec1} width="300px" height="270px" style={{borderRadius: '0px 0px 20px 20px', marginTop: '20.3240966796875px', marginLeft: '0px'}} />
                <div className="buttononsection3boxes" style={{backgroundColor: '#085BDA'}} >Explore &gt; </div>
              </div></a>
            <a href="waitinglist.html">           
              <div className="sec3boxes" style={{backgroundColor: '#C1D6F6'}}>
                <h2>Plumbing</h2><h2>
                  <img src={Plumbing} width="300px" height="270px" style={{borderRadius: '0px 0px 20px 20px', marginTop: '20.3240966796875px', marginLeft: '0px'}} />
                  <div className="buttononsection3boxes" style={{backgroundColor: '#085BDA'}}>Explore &gt;</div>
                </h2></div></a>
            <a href="waitinglist.html">           
              <div className="sec3boxes" style={{backgroundColor: '#C1D6F6',}}>
                <h2>Carpentry</h2>
                <img src={Carpentry} width="300px" height="270px" style={{borderRadius: '0px 0px 20px 20px', marginTop: '20.3240966796875px', marginLeft: '0px'}} />
                <div className="buttononsection3boxes" style={{backgroundColor: '#085BDA'}}>Explore &gt;</div>
              </div></a>
            <a href="waitinglist.html" style={{marginRight: '20px'}}>           
              <div className="sec3boxes" style={{backgroundColor: '#C1D6F6'}}>
                <h2>Electriconics &amp; Gadgets</h2>
                <img src={Electronicsandgadgets} width="300px" height="270px" style={{borderRadius: '0px 0px 20px 20px', marginTop: '20.3240966796875px', marginLeft: '0px'}} />
                <div className="buttononsection3boxes" style={{backgroundColor: '#085BDA'}}>Explore &gt;</div>
              </div></a>
          </div>
          <br />
           <h2 className="section3textontop3">HIRE ECHUB FOR YOUR FACILITY
              MAINTENANCE/<br />MANAGEMENT AND GET 80% STRESS OFF YOUR <br />SHOULDER
              OR WE WORK FOR FREE!!!
            </h2></center>
           </div>
        {/*end of section3*/}
       
</>

  )
}

export default Section3;