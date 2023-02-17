import React from 'react'
import styling from './companies.module.css'
import creationHub from '../../../assets/LoginHomePageImages/co-creation.png'
import lagosInnovate from '../../../assets/LoginHomePageImages/lagosInnovate.png'
import startup from '../../../assets/LoginHomePageImages/startup.png'
import lsetf from '../../../assets/LoginHomePageImages/lsetf.png'
import jobcentre from '../../../assets/LoginHomePageImages/jobcentre.png'
import antrum from '../../../assets/LoginHomePageImages/antrum.png'
import niee from '../../../assets/LoginHomePageImages/niee.png'

const Companies = () => {
    const{companyCon}= styling
  return (
    <section className={companyCon}>
        <div>
            <img src={creationHub} alt="co-creation hub logo" />
        </div>
        <div>
            <img src={lagosInnovate} alt="lagos innovate logo" />
        </div>
        <div>
            <img src={startup} alt="startup logo" />
        </div>
        <div>
            <img src={lsetf} alt="Lagos State Employment Trust Fund logo" />
        </div>
        <div>
            <img src={jobcentre} alt="Job Center Africa Logo" />
        </div>
        <div>
            <img src={antrum} alt="Antrum Engineering And Technology Co Ltd Logo" />
        </div>
        <div>
            <img src={niee} alt="Nigerian Instituite Of Electrical and Electronics Engineers logo" />
        </div>

    </section>
  )
}

export default Companies