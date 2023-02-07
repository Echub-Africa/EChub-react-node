import React from 'react'
import styling from './trusted.module.css'
import delight  from '../../../assets/LoginHomePageImages/delight2.png'
import trinity  from '../../../assets/LoginHomePageImages/trinity2.png'
import grandeur  from '../../../assets/LoginHomePageImages/grandeur.png'
import pennee  from '../../../assets/LoginHomePageImages/pennee2.png'
import bpmc  from '../../../assets/LoginHomePageImages/bpmc2.png'
import yaba  from '../../../assets/LoginHomePageImages/yaba2.png'


const Trusted = () => {
    const {trustedCon}=styling
  return (
    <section className={trustedCon}>
        <div>
        <h2>We are trusted by</h2>
        </div>
        <div>
            <article>
                <img src={delight} alt="divine delight" />
            </article>
            <article>
                <img src={trinity} alt="trinity house" />
            </article>
            <article>
                <img src={grandeur} alt="grandeur" />
            </article>
            <article>
                <img src={bpmc} alt="bpmc" />
            </article>
            <article>
                <img src={pennee} alt="pennee" />
            </article>
            <article>
                <img src={yaba} alt="yaba" />
            </article>
        </div>
    </section>
  )
}

export default Trusted