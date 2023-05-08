/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react'
import { useSelector } from 'react-redux';

import NavBar from '../components/NavBar'
import FirstSection from '../components/FirstSection'
import SecondSection from '../components/SecondSection'
import ThirdSection from '../components/ThirdSection'
import FourthSection from '../components/FourthSection'
import FifthSection from '../components/FifthSection'
import SixthSection from "../components/SixthSection"
import SeventhSection from "../components/SeventhSection"
import Accordions from '../components/Accordions'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  const { userInfo } = useSelector((state) => state.user);

  useEffect(()=>{
    if(!userInfo) return;
  }, [userInfo])
  return (
    <div className='Home'>
      <Header />
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
