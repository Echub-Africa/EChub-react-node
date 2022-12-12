import React from 'react'
import ladderBoi from "../../assets/ladderBoi.jpg"
import "./loginPage.css"
import play from "../../assets/play-circle.svg"


export default function LoginFirstDiv() {
  return (
    <div className='LoginFirstDiv'>
      <div className='loginContainer'>
        <div className='searchDiv mb-5'>
          <h1 className='searchHeader'>
            The work is on us,<br></br>the focus is on you
          </h1>
          <input type='text' className='searchBar' placeholder="&#xF002; Search for Artisans"  />
        </div>
        <div className='hireDiv'>
        <button type="button" class="btn btn-primary hireButton">I want to hire now</button>
        <p className='offer'><img src={play} alt="play"/> See the new offer for home owners</p>

        </div>
      </div>
    </div>
  )
}
