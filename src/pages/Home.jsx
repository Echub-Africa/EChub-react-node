/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react'
import { useSelector } from 'react-redux';
import Navbar from './sections/Navbar.jsx';
import Section from './sections/Section.jsx';
import Section1 from './sections/Section1.jsx';
import Section2 from './sections/Section2.jsx';
import Section3 from './sections/Section3.jsx';
import Section4 from './sections/Section4.jsx';
import Section5 from './sections/Section5.jsx';
import Footer from './sections/Footer.jsx';

export default function Home() {
  const { userInfo } = useSelector((state) => state.user);

  useEffect(()=>{
    if(!userInfo) return;
  }, [userInfo])
  return (
    <div className='Home'>
      <Navbar />
      <Section/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Footer/>    
    </div>
  )
}
