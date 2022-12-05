import React from 'react'
import NavBar from '../components/NavBar'
import FirstSection from '../components/FirstSection'
import SecondSection from '../components/SecondSection'
import ThirdSection from '../components/ThirdSection'
import FourthSection from '../components/FourthSection'
import FifthSection from '../components/FifthSection'
import SixthSection from "../components/SixthSection"
import SeventhSection from "../components/SeventhSection"
import Accordions from '../components/Accordions'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='Home'>
      <NavBar />
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <SixthSection/>
      <SeventhSection/>
      <Accordions/>
      <Footer/>
      
    
    
    
    </div>
  )
}
