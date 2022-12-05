import React, { useState } from 'react'
import './SignUp.css'
// import Bg from '../asset/Bg.png'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom'

const SignUp = () => {
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
    if(!form?.password){
        toast.error('password is required')
    }
    else if(form?.password.length < 4){
        toast.error("password must be more than 4 characters")
    }
    else if(form?.password.length > 10){
        toast.error("password must be less than 10 characters")
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
          <div className='form-img'>
              {/* <img src={Bg} /> */}
          </div>
          <div className='form-input'>
          <ToastContainer />
          <form onSubmit={HandleSubmit}>
              <h1 className='text-center '>Welcome to Sushi!</h1>
              <div>
                <input type='text' name = 'name' onChange={HandleChange} placeholder='Enter your fullname'/>
              </div>
              <div>
                <input  name = 'email' onChange={HandleChange} placeholder='Enter your Email'/>
              </div>
              <div >
                <input type={passwordShown?"text": "password"} placeholder='Enter your password' 
                name = 'password' onChange={HandleChange}
                />
               <label className='mt-4' 
                style={{'marginLeft': '-37px', 'marginBottom':'30px', 'fontSize': '20px'}}
                onClick={togglePassword}>
                  {passwordShown?<AiOutlineEyeInvisible />:<AiOutlineEye /> }
                </label>
              </div>
              <div>
                <button>SIGN UP</button>
              </div>
              <div className='text-center'>
                <p>Already have an account. <Link to='/login'>LOGIN</Link></p>
              </div>
          </form>
              </div> 
        </div>
      )
}

export default SignUp