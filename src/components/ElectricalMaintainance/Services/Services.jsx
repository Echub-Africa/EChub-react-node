import React from 'react'
import plumbing from '../../../assets/electricalImages/Plumbing.png'
import carpentry from '../../../assets/electricalImages/carpentry.png'
import electronics from '../../../assets/electricalImages/electronics.png'
import styles from './service.module.css'

const Services = () => {
    const{servicesCon,underline}=styles
  return (
    <section>
        <h2 className={underline}>Our other Services </h2>
        <div className={`three-grid_reusable ${servicesCon}`}>
            <figure>
                <img src={plumbing} alt="" />
                <figcaption>Plumbing</figcaption>
                <button type='button'> Explore</button>

            </figure>
            <figure>
                <img src={electronics} alt="" />
                <figcaption>Electriconics & Gadgets</figcaption>
                <button type='button'> Explore</button>

            </figure>
            <figure>
                <img src={carpentry} alt="" />
                <figcaption>Carpenter</figcaption>
                <button type='button'> Explore</button>
            </figure>
        </div>
    </section>
  )
}

export default Services