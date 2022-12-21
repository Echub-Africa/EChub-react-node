import React, { useState } from 'react'
import './NormalSign.css'
import sign from '../assets/sign6.png'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom'

const Join = () => {
    // SETTING PASSWORD VISIBILITY
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

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
    <div className='form-img' style={{'maxHeight': '3000px'}}>
        <img src={sign} />
    </div>
    <div className='form-input'>
    <ToastContainer />
    <form onSubmit={HandleSubmit}>
          <div className='text-center'>  
              <h1>Create an Account </h1> 
              <h3></h3>
          </div>
        <div className='d-flex justify-content-between'>
            <div style={{'width': '45%'}}>
            <label htmlFor="bane">First Name</label>
            <input type='text' name = 'name'
             onChange={HandleChange} />
            </div>
            <div style={{'width': '45%'}}>
                <label htmlFor="">Last Name</label>
                <input type="text" />
            </div>     
        </div>
        <div className='d-flex justify-content-between'>
          <div style={{'width': '45%'}}>
            <label htmlFor="">Email</label>
            <input  name = 'email' onChange={HandleChange}/>
          </div>
          <div style={{'width': '45%'}}>
            <label htmlFor="">Phone Number</label>
          <input type="number" />
        </div>
        </div>
        <div className='d-flex justify-content-between'>
          <div style={{'width': '45%'}}>
            <label htmlFor="">English Proficiency</label>
            <input  name = 'email' onChange={HandleChange}/>
          </div>
          <div style={{'width': '45%'}}>
            <label htmlFor="">Years Of Working Experience</label>
            <input type="number"  />
        </div>
        </div>
        <div className='d-flex justify-content-between'>
          <div style={{'width': '45%'}}>
            <label htmlFor="">Primary Skill</label>
            <input  name = 'email'  onChange={HandleChange}/>
          </div>
          <div style={{'width': '45%'}}>
            <label htmlFor="">Years Of Experience with skills</label>
          <input type="number"  />
        </div>
        </div>
        <div className='d-flex justify-content-between'>
                <div style={{'width': '45%'}}>
                    <label htmlFor="">Resume</label>
                    <input type="file" />
                </div>
                <div style={{'width': '45%'}}>
            <label htmlFor="">Country</label>
            <select placeholder= 'country'>
                <option value=""></option>
                <option value="Nigeria">Nigeria</option>
                <option value="Ghana">Ghana</option>
                <option value="Australia">Australia</option>
                <option value="Kenya">Kenya</option>
                <option value="USA">America</option>
                </select>
                </div>
                </div>
        <div className='d-flex'>
          <input type="checkbox" style={{'width': '40px', 'marginRight': '20px'}} />
        <p>I understand that TechVillage  will process my information in accordance with 
          their Privacy Policy. I may withdraw my consent through unsubscribe links at
          any time.
        </p>
        </div>
        <div>
          <button style={{'backgroundColor': 'black', 'color':'white', 'border':'none'}}>SIGN UP</button>
        </div>
        <div className='text-center'>
          <p>Already have an account. <Link to='/login'>LOGIN</Link></p>
        </div>
    </form>
        </div> 
  </div>
  )
}

export default Join