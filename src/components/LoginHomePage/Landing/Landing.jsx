import React from 'react'
import styles from './landing.module.css'
import play from '../../../assets/LoginHomePageImages/play-circle.png'
import chat from '../../../assets/LoginHomePageImages/chat.png'

const Landing = () => {
    const {container, flex, playWrapper} = styles
  return (
    <section className={container}>
        <div>
            <article>
                <h2>The work is on us The focus is you</h2>
            </article>
            <article>
                <input type="search" name="" id="" placeholder='Search For Artisans' />
            </article>
            <article>
                <article className={flex}>
                    <button>I want a technician now &nbsp; &nbsp;<i class="fas fa-angle-right"></i> </button>
                    <div className={playWrapper}>
                        <img src={play} alt="" />
                        <span>See the new offer for homeowners</span>
                    </div>
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