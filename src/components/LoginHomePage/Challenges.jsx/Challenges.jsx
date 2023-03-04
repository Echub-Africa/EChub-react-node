import React from 'react'
import { challenges } from './StaticData'
import chastyles from './challenges.module.css'
import play from '../../../assets/LoginHomePageImages/play-circle.png'
import Lists from '../../Reusable/Lists/Lists';




const Challenges = () => {
    const {challengeCon}=chastyles
  return (
    <section className={challengeCon}>
        <div>
          <article>
            <h2>Are you presently facing these challenges?</h2>
                <ul>
                    {challenges.map(cha=>(
                        <Lists description={cha}/>
                    ))}
                </ul>
            </article>
            <article>
                <img src={play} alt="Play-buttton" srcset="" />
            </article>
        </div>
    </section>
  )
}

export default Challenges