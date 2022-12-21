import React, { useState } from 'react'
import './NormalSign.css'
import sign from '../assets/sign6.png'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom'

const NormalSign = () => {
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
    <div className='form-img'>
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
          <input type='text' style={{'width': '45%'}} name = 'name' onChange={HandleChange} placeholder='Company Name'/>
          <input type="text" style={{'width': '45%'}}/>
        </div>
        <div className='d-flex justify-content-between'>
          <input  name = 'email' style={{'width': '45%'}} onChange={HandleChange} placeholder='Company Email'/>
          <input type="number" style={{'width': '45%'}} placeholder='Phone Number' />
        </div>
        <div className='d-flex justify-content-between'>
            <input type="text" style={{'width': '45%'}} placeholder='Contact Address' />
            <select placeholder= 'country' style={{'width': '45%'}}>
                <option value=""></option>
                <option value="Nigeria">Nigeria</option>
                <option value="Ghana">Ghana</option>
                <option value="Australia">Australia</option>
                <option value="Kenya">Kenya</option>
                <option value="USA">America</option>
                    </select>
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

export default NormalSign