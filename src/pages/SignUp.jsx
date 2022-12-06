import React, { useState } from 'react'
import './SignUp.css'
import sign from '../assets/sign.png'
import sign1 from '../assets/sign1.png'
import sign2 from '../assets/sign2.png'
import sign3 from '../assets/sign3.png'
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
              <img src={sign} />
          </div>
          <div className='form-input'>
          <ToastContainer />
          <form onSubmit={HandleSubmit}>
              <h2>Create an Account </h2>
              <h6 className='pt-2'>SignUp as:</h6>
              <div className='d-flex sign-img pb-3'>
              <img src={sign2}/>
              <img src={sign1}/>
              </div>
                <p>Create an account with </p>
                <div className='d-flex justify-content-between google'>  
                <img src={sign3}/>       
                <img src={sign3}/>       
                <img src={sign3}/>       
                </div>
              <div>
                <input type='text' name = 'name' onChange={HandleChange} placeholder='Enter your fullname'/>
              </div>
              <div>
                <input  name = 'email' onChange={HandleChange} placeholder='Enter your Email'/>
              </div>
              <div>
                <input type="number" placeholder='Phone Number' />
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
              <div className='d-flex'>
                <input type="checkbox" style={{'width': '40px', 'marginRight': '20px'}} />
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

export default SignUp