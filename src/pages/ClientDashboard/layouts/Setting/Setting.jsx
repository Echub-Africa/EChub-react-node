/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import './Setting.css'
import profilePic from "../../../../assets/profilepic.png";
import profilebg from "../../../../assets/profilebg.png";
import {publicRequest} from '../../../../helpers/requestMethod';
import Loader from '../../../../components/Loader';
import {BiCamera} from 'react-icons/bi';
import {updateUserHandler} from '../../../../API/apiRequest';

const Setting = () => {
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
    country: "",
    state: "",
    file: "",
    role: ""
  });

  const userInfo = JSON.parse(localStorage.getItem("userInfo"))

  const {userUpdated} = useSelector(state=> state.user)

  const dispatch = useDispatch()


  const updateUserProfile =()=>{
    let data = {
      ...userData
    }
    // console.log(userData)

    updateUserHandler(data, userInfo?.data.user._id, dispatch)
  }


  useEffect(()=>{
    async function fetchUser(){
      try{
        const {data} = await publicRequest.get(`users/${userInfo?.data.user._id}`)
        setUserData({
          name: data.fullname,
          email: data.email,
          phone: data.phone,
          country: data?.country,
          state: data?.state,
          role: data.isAdmin,
          file: data?.profile
        })
        // console.log(data)
      }catch(error){
        return;
      }
    }

    fetchUser()
  },[userUpdated, userInfo?.data.user._id])


  return (
    <div className="setting">
      <div className="setting-bg">
        <img src={profilebg} alt="" />
      </div>
      <div className="setting-profile">
        <div className="setting-profile-lt">
          <div className="setting-profile-pic">
            <div className="user-pic">
              {userData.file ? <img src={`${process.env.REACT_APP_FILE}${userData.file}`} alt="" /> : <img src={profilePic} alt="" />}
              <label htmlFor="upload"><BiCamera fontSize={"2.5rem"} className="pic-icon" /></label>
              <input type="file" onChange={(e)=> setUserData({...userData, file: e.target.files[0]})} id="upload" style={{display: "none"}} />
            </div>
          </div>
          <div className="setting-details">
            <div className="setting-info">{userData.name}</div>
            <div className="setting-info">{userData.email}</div>
            <div className="setting-info">{userData.role}</div>
            <div className="setting-info">{userData.phone}</div>
          </div>
        </div>
        <div className="setting-profile-rt">
          <div className="setting-input-wrapper">            
            <div className="setting-input-group">
              <label>Full name</label>
              <input value={userData.name} onChange={(e)=> setUserData({...userData, name: e.target.value})} type="text" />
            </div>
          </div>
          <div className="setting-input-wrapper">
            <div className="setting-input-group">
              <label>Phone number</label>
              <input value={userData.phone} onChange={(e)=> setUserData({...userData, phone: e.target.value})} type="text" />
            </div>
            <div className="setting-input-group">
              <label>Email/Work main address</label>
              <input value={userData.email} onChange={(e)=> setUserData({...userData, email: e.target.value})} type="text" />
            </div>
          </div>
          <div className="setting-input-wrapper">
            <div className="setting-input-group">
              <label>Country</label>
              <input value={userData.country} onChange={(e)=> setUserData({...userData, country: e.target.value})} type="text" />
            </div>
            <div className="setting-input-group">
              <label>City/State</label>
              <input value={userData.state} onChange={(e)=> setUserData({...userData, state: e.target.value})} type="text" />
            </div>
          </div>          
          <hr />
          <div className="setting-btn">
            {userUpdated ? <Loader loaderStyle={{height: "30px", width: "30px"}} /> : <span onClick={updateUserProfile}>
              Update
            </span>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Setting