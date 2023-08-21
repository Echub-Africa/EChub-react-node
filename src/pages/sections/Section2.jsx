import React from 'react';
import '../App.css';
import checkcircle1 from '../images/checkcircle1.svg';
import un2 from '../images/un2.svg';
import un from '../images/un.svg';
import engineering from '../images/engineering.png';
import manage_accounts from '../images/manage_accounts.png';
import summarize from '../images/summarize.png';
import verified from '../images/verified.png';


const Section2 = () => {
  return (
<>
 {/*section2*/}
 <div className="section2">
          <div className="section2left">
            {/*mobile view*/}
            <h2>Why you should switch to competence</h2>
            <div className="topnav">
              <a href="waitinglist.html">
                <div className="listoftopnav">           
                  <div className="boxes" style={{backgroundColor: '#E6D0C4'}}>
                    <img src={un2} className="imageonsection2" /><br />
                    <h2>
                      Smart Monitoring
                    </h2>
                    <p className="lastonsection2">
                      Utilising the power of tehnology, monitor your facility and power usage in real time, utilising the technology of Internet of Things.         
                    </p>
                  </div>
                  <div className="boxes" style={{backgroundColor: '#E8D1CB'}}>
                    <img src={un} className="imageonsection2" /><br />
                    <h2>
                      Hands-On Support
                    </h2>
                    <p className="lastonsection2">
                      From helping with on boarding to execution to sharing best practices, our success team is there every step of the way with 24hrs customer emergency support &amp; Help Desk
                    </p>
                  </div></div></a>
              <a href="waitinglist.html">   
                <div className="listoftopnav">       
                  <div className="boxes" style={{backgroundColor: '#D9E2DD'}}>
                    <img src={engineering} className="imageonsection2" /><br />
                    <h2>
                      facility Health Status and Lifespan
                    </h2>
                    <p className="lastonsection2">
                      With this valuable information, you can proactively plan for maintenance, replacement, and upgrades, avoiding unexpected diisruptions and costly repairs
                    </p>
                  </div>
                  <div className="boxes" style={{backgroundColor: '#DAD2D3'}}>
                    <img src={manage_accounts} className="imageonsection2" /><br />
                    <h2>
                      Best Talent
                    </h2>
                    <p className="lastonsection2">
                      Tap into a talent pool that spans multiple regions. The best technicians aren't always in your backyard, they are at Blue Collar
                    </p>
                  </div></div></a>
              <a href="waitinglist.html">   
                <div className="listoftopnav" style={{marginRight: '30px'}}>           
                  <div className="boxes" style={{backgroundColor: '#E6DFEF'}}>
                    <img src={summarize} className="imageonsection2" /><br />
                    <h2>
                      Maintenance Report &amp; Audit
                    </h2>
                    <p className="lastonsection2">
                      You get reports on every maintenance carried out with expenses, consultations and suggestions to aid in the technical maintenance. Here, technicians cannot cheat or overcharge or underperform or even try to smuggle you.
                    </p>
                  </div>
                  <div className="boxes" style={{backgroundColor: '#EADCE8'}}>
                    <img src={verified} className="imageonsection2" /><br />
                    <h2>
                      The best offer
                    </h2>
                    <p className="lastonsection2">
                      We are ready to offer you a 10% reduction in price of your cheapest technicians with more improved service at that. (T &amp;C applies)
                    </p>
                  </div></div></a>
            </div>
            {/*end of mobile view*/}
            <div className="link">
              <div className="boxes" style={{backgroundColor: '#E6D0C4'}}>
                <img src={engineering} className="imageonsection2" /><br />
                <h2>
                  facility Health Status and Lifespan
                </h2>
                <p className="lastonsection2">
                  With this valuable information, you can proactively plan for maintenance, replacement, and upgrades, avoiding unexpected diisruptions and costly repairs
                </p>
              </div>
              <div className="boxes" style={{backgroundColor: '#E8D1CB'}}>
                <img src={manage_accounts} className="imageonsection2" /><br />
                <h2>
                  Best Talent
                </h2>
                <p className="lastonsection2">
                  Tap into a talent pool that spans multiple regions. The best technicians aren’t always in your backyard, they are at Blue Collar
                </p>
              </div>
            </div>
            <div className="link">
              <div className="boxes" style={{backgroundColor: '#D9E2DD'}}>
                <img src={summarize} className="imageonsection2" /><br />
                <h2>
                  Maintenance report &amp; audit
                </h2>
                <p className="lastonsection2">
                  You get reports on every maintenance carried out with expenses, consultations and suggestions to aid in the technical maintenance. Here, technicians cannot cheat or overcharge or underperform or even try to smuggle you.
                </p>
              </div>
              <div className="boxes" style={{backgroundColor: '#DAD2D3'}}>
                <img src={verified} className="imageonsection2" /><br />
                <h2>
                  The best offer
                </h2>
                <p className="lastonsection2">
                  We are ready to offer you a 10% reduction in price of your cheapest technicians with more improved service at that. (T &amp;C applies)
                </p>
              </div>
            </div>
            <div className="link">
              <div className="boxes" style={{backgroundColor: '#E6DFEF'}}>
                <img src={un2} className="imageonsection2" /><br />
                <h2>
                  Smart Monitoring
                </h2>
                <p className="lastonsection2">
                  Utilising the power of tehnology, monitor your facility and power usage in real time, utilising the technology of Internet of Things.            
                </p>
              </div>
              <div className="boxes" style={{backgroundColor: '#EADCE8'}}>
                <img src={un} className="imageonsection2" /><br />
                <h2>
                  Hands-On Support
                </h2>
                <p className="lastonsection2">
                  From helping with on boarding to execution to sharing best practices, our success team is there every step of the way with 24hrs customer emergency support &amp; Help Desk
                </p>
              </div>
            </div></div>
          <div className="sectionleft2">
            <h2>
              Why top companies prefer<br />
              Blue Collars' talents
            </h2>
            <div className="textonsection">
              <img src={checkcircle1} />
              <div className="button5" style={{marginTop: '-13px'}}>We train and equip our artisans</div>
            </div>
            <div className="textonsection">
              <img src={checkcircle1} />
              <div className="button5" style={{marginTop: '-13px'}}>
                Full imediate follow up report and audits
              </div>
            </div>
            <div className="textonsection">
              <img src={checkcircle1} />
              <div className="button5" style={{marginTop: '-13px'}}>
                IoT &amp; Smart home device to top recurring clients
              </div>
            </div>
            <div className="textonsection">
              <img src={checkcircle1} />
              <div className="button5" style={{marginTop: '-13px'}}>
                24hrs customer emergency support &amp; Help Desk
              </div></div></div><br /></div>
        {/*end of section2*/}
       
</>

  )
}

export default Section2;