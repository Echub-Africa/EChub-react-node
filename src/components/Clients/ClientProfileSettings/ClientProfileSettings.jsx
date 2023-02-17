import React from 'react'
import Layout from '../../Layout/threeGridLayout'

import profile from "../../../assets/clientImages/profile.png";
import profileStyling from './clientprofile.module.css'
import profileBanner from '../../../assets/clientImages/profileBanner.png'



const ClientProfileSettings = () => {
    const{ProfileCon,flexCon}=profileStyling
  return (
    <Layout>
        <article className={flexCon}>
            <img src={profile} alt="avatar of currently logged in user" />
            <h4>Issac Kelvin</h4>
        </article>
    <div className={ProfileCon}>
        <div >
            <img src={profile} alt="avatar of currently logged in user" />
            <article>
                <h4>Issac Kelvin</h4>
                <h4>Issackelvin@gmail.com</h4>
                <h4>Front end developer</h4>
                <h4>24</h4>
            </article>
        </div>
        <div>
            <form>
                <label>First Name
                    <input type="text" placeholder='Isaac' />
                </label>
                <label>Last Name
                    <input type="text" placeholder='Kelvin' />
                </label>
                <label>Phone Number
                    <input type="tel" />
                </label>
                <label>Email/Work mail address
                    <input type="email" />
                </label>
                <label>City/state
                    <input type="text" />
                </label>
                <label>Country
                    <input type="text" />
                </label>
                <label>Address
                    <input type="text" />
                </label>
                <label>Country
                    <input type="text" />
                </label>
                
                
            </form>
            <button type='submit'>Update</button>
        </div>

    </div>
        
    </Layout>
  )
}

export default ClientProfileSettings