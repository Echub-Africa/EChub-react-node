import React from 'react'
import styles from './landing.module.css'
import play from '../../../assets/LoginHomePageImages/play-circle.png'
import chat from '../../../assets/LoginHomePageImages/chat.png'

const Landing = () => {
    const {container,flex} = styles
  return (
    <section className={container}>
        <div>
            <article>
                <h2>The work is on us the focus is on you</h2>
            </article>
            <article>
                <input type="search" name="" id="" placeholder='Search For Artisans' />
            </article>
            <article>
                <article className={flex}>
                    <button>I want a technician now &nbsp; &nbsp;<i class="fas fa-angle-right"></i> </button>
                    <img src={play} alt="" />
                    <p>See the new offer for homeowners</p>
                </article>
            </article>
            <article>
                <img src={chat} alt="chat message" />
            </article>
        </div>
    </section>
  )
}

export default Landing