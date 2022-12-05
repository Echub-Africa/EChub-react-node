import React, { useState } from 'react'
import './SignUp.css'
// import chef1 from '../asset/chef1.jfif'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom'
import Modal from '../components/Modal';

const Login = () => {

  // MODAL
  const[modalOpen, setModalOpen] = useState(false)
  // TOGGLING PASSWORD VISIBILITY
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  // FORM VALIDATION
  const[loginData, setloginData] = useState({
    email : '',
    password : ''

})
  const setLogin = (e) =>{
    setloginData({
      
        ...loginData,
        [e.target.name] : e.target.value
    }) 
}
const HandleSub = (e) =>{
    e.preventDefault()
    let user = JSON.parse(sessionStorage.getItem('user'))
    
    if(loginData?.email === user.email && loginData.password === user.password){
      // toast.success('sucessfully logged in')
      setModalOpen(true)
    //   setInterval(()=>{
    //     window.location = './menu'
    // },1500)
    }
    else{
      toast.error('wrong email or password')
    }
    
   
}
  return (
    <div className='d-flex'>
      <div className='form-img'>
          {/* <img src={chef1} /> */}
      </div>
      <div className='form-input'>
      <ToastContainer />
      <form onSubmit={HandleSub}>
          <h1 className='text-center '>Welcome Back To Sushi!</h1>
          <div>
            <input name='email' onChange={setLogin} placeholder='Enter your Email' />
          </div>
          <div >
            <input type={passwordShown?"text": "password"} placeholder='Enter your password' 
            name='password' onChange={setLogin}
            />
           <label className='mt-4' 
            style={{'marginLeft': '-37px', 'marginBottom':'30px', 'fontSize': '20px'}}
            onClick={togglePassword}>
              {passwordShown?<AiOutlineEyeInvisible />:<AiOutlineEye /> }
            </label>
          </div>
          <div>
            <button>LOG IN</button>
          </div>
      </form>
          </div> 
          {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  )
}

export default Login