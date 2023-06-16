import React from 'react'
import { customersList } from '../../../pages/ElectricalMaintainance/staticdata'
import starrate from "../../../assets/electricalImages/star_rate.png";
import styling from './customer.module.css'


const Customers = () => {
    const{customers,customerCon, customerWrapper}= styling
  return (

    <section className={customerCon
    } >
        <h3>What Our Customers are Saying</h3>
        <div className={customerWrapper}>
        
    {customersList.map((customer) => (
      <div className={customers}>
        <article>
          <h2>{customer.name}</h2>
          <p>Manager </p>
        </article>
        <article>
          <img src={starrate} alt="starrate" />
          <img src={starrate} alt="starrate" />
          <img src={starrate} alt="starrate" />
          <img src={starrate} alt="starrate" />
          <img src={starrate} alt="starrate" />
        </article>
        <p>
          Tech Village lets out team identitify and resolve facility
          management issues faster,and empowerd them to be profuctive.
          we can now make our tenants feel at home and secure.
        </p>
      

        </div>
       
    ))}
    </div>
  </section>
  )
}

export default Customers