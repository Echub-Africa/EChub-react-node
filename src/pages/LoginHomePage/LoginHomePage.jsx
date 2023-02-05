import React from 'react'
import Services from '../../components/Reusable/Services/Services'
import Challenges from '../../components/LoginHomePage/Challenges.jsx/Challenges'
import Landing from '../../components/LoginHomePage/Landing/Landing'
import Preferences from '../../components/LoginHomePage/Preferences/Preferences'
import LoginThirdDiv from '../../components/LoginPageComponents/LoginThirdDiv'
import SixthSection from '../../components/SixthSection'






const LoginHomePage = () => {
  return (
    <main>
        <Landing/>
        <Challenges/>
        <Preferences/>
        <Services login={true}/>
    </main>
  )
}

export default LoginHomePage