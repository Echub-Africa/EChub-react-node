import React from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import LoginFirstDiv from '../components/LoginPageComponents/LoginFirstDiv';
import NavBar from '../components/NavBar';
import LoginSecondDiv from '../components/LoginPageComponents/LoginSecondDiv';
import LoginThirdDiv from '../components/LoginPageComponents/LoginThirdDiv.jsx'

export default function LoggedIn() {
  return (
    <div>
    <NavBar/>
    <LoginFirstDiv/>
    <LoginSecondDiv/>
    <LoginThirdDiv/>


    </div>
  )
}
