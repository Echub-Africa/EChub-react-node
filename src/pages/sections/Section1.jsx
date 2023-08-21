import React from 'react';
import '../App.css';
import playcircle from '../images/playcircle.svg';
import checkcircle1 from '../images/checkcircle1.svg';





const Section1 = () => {
  return (
<>
 {/*section1*/}
 <div className="section1">
 <div className="section1left"> 
   <h2 className="section1h2">
     Are you presently facing these<br />
     challenges?
   </h2>
   <div className="textonsection1">
     <img src={checkcircle1} />
     <div className="button4" style={{marginTop: '-1px'}}>
       Constant troubles with quack technicians.    
     </div>
   </div>
   <div className="textonsection1">
     <img src={checkcircle1} />
     <div className="button4" style={{marginTop: '-1px'}}>
       Difficulty in tracking your maintenance request leading to a
       long time on closing maintenance requests.
     </div>
   </div>
   <div className="textonsection1">
     <img src={checkcircle1} />
     <div className="button4" style={{marginTop: '0px'}}>
       Unexplained cost that result in a lack of transparency.
     </div>
   </div>
   <div className="textonsection1">
     <img src={checkcircle1} />
     <div className="button4" style={{marginTop: '0px'}}>
       Distractions from core business areas due to frequent facilities
       management issues.
     </div>
   </div></div>
 <a href="waitinglist.html"><div className="button10">SWITCH TO COMPETENCE &gt;</div></a> 
 <div className="rightsection1">
   <img src={playcircle} className="imagesrightsection1" />
 </div>
</div>
{/*end of section1*/}
</>
  )
}

export default Section1;