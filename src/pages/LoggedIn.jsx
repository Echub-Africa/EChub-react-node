import React, {useState} from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import loginCss from './Login.module.css'
import Modal from '../components/Modal';
import { Link } from 'react-router-dom'
import logo from '../assets/Echub Logo.svg'

const LoggedIn = () => {
  
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
  <div style={{'backgroundColor': '#F6F6F6'}} className={loginCss.wrapper}>
       <div style={{'display': 'flex', 'justifyContent': 'space-between', 'padding': '20px 40px'}}>
        <img src={logo} alt ='echub logo' />
        <Link to='/sign'><p className={loginCss.exit}>X</p></Link>
       </div>
        <div className={loginCss.formo} >
        <ToastContainer />
        <form onSubmit={HandleSub}>
          <div className='text-center'>
          <h3>Welcome Back </h3>
          <p> Login into your account </p>
          </div>
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
          <div className='d-flex justify-content-between align-items-center'>
            <span className='d-flex align-items-center' >
              <input type="checkbox" 
              style={{'width': '20px', 'marginRight': '20px'}} />
              <p className='pt-2'>Remember me</p>
            </span>
            <p className='text-danger'>Forgot Password?</p>
          </div>
          <div className={loginCss.btn}>
            <button>LOG IN</button>
          </div>
          <div className='text-center'  >
            <p>Don’t have an account? <Link to='/sign'>
              <span className='text-danger'>Sign up</span></Link></p>
          </div>
      </form>
        </div>
        {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  )
}

export default LoggedIn