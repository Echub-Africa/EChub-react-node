/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './NormalSign.css'
import './SignUp.css'
import echub from '../assets/Echub Logo (1).png'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom'

const NormalSign = () => {
    // SETTING PASSWORD VISIBILITY
  // const [passwordShown, setPasswordShown] = useState(false);
  // const togglePassword = () => {
  //   setPasswordShown(!passwordShown);
  // };

  // VALIDATING THE FORM
  const[form, setForm] = useState({
    name : '',
    email : '',
    password : ''
  })
  const HandleChange = (e) =>{
    setForm({
        ...form,
        [e.target.name] : e.target.value
    }) 
}
function HandleSubmit(e){
  e.preventDefault()

  // STORING IN SESSION STORAGE
  sessionStorage.setItem('user', JSON.stringify(form))
  
  // VALIDATING
  const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!form?.name){
        toast.error('username is required')
    }
    if(!form?.email){
        toast.error('Email is required!');
    }
    else if (!regex.test(form?.email)) {
        toast.error("This is not a valid email format!")
  }
  // REDIRECTION
  else{
    toast.success('You have successfully signed in')
    setInterval(()=>{
        window.location = './login'
    },2000)
}
}
  return (
    <div className='d-flex'>
    <div className='form-img sign-img'>
        <div className="img-wrap">
          <img src={echub} alt="" />
        </div>
    </div>
    <div className='form-input'>
    <ToastContainer />
    <form onSubmit={HandleSubmit}>
          <div className='text-center mb-5 sign-header'>  
              <h1>Create an Account </h1> 
              <h3>Book a technician within minutes</h3>
          </div>          
        <div className='d-flex input-flex justify-content-between'>
          <div className="input-wrap">
            <label htmlFor="">Company Name</label>
            <input type='text' name = 'name' onChange={HandleChange} placeholder=''/>
          </div>
          <div className="input-wrap">
            <label htmlFor="">Password</label>
            <input type="password" />
          </div>
        </div>
        <div className='d-flex input-flex justify-content-between'>
          <div className="input-wrap">
            <label htmlFor="">Company Email</label>
            <input  name = 'email' onChange={HandleChange} placeholder=''/>
          </div>
          <div className="input-wrap">
            <label htmlFor="">Phone Number</label>
            <input type="number" placeholder='' />
          </div>
        </div>
        <div className='d-flex input-flex justify-content-between'>
          <div className="input-wrap">
            <label htmlFor="">Contact Address</label>
            <input type="text" placeholder='' />
          </div>
          <div className="input-wrap">
            <label htmlFor="">Country</label>
            <select placeholder=''>
                <option>-- Country --</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Ghana">Ghana</option>
                <option value="Australia">Australia</option>
                <option value="Kenya">Kenya</option>
                <option value="USA">America</option>
            </select>
          </div>
        </div>
        <div className='d-flex agree'>
          <input type="checkbox" style={{'width': '40px', 'marginRight': '16px'}} />
        <p>I understand that TechVillage  will process my information in accordance with 
          their Privacy Policy. I may withdraw my consent through unsubscribe links at
          any time.
        </p>
        </div>
        <div>
          <button style={{'backgroundColor': '#085BDA', 'color':'white', 'border':'none'}}>SIGN UP</button>
        </div>
        <div className='text-center'>
          <p>Already have an account. <Link to='/login'>LOGIN</Link></p>
        </div>
    </form>
        </div> 
  </div>
  )
}

export default NormalSign