/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react'
import './VerifyAccount.css'
import { MdClose } from "react-icons/md";
import {useParams} from 'react-router-dom';
import axios from 'axios';
import echub from "../../assets/Vector.png";
import { Link } from 'react-router-dom';
import verifyImg from "../../assets/starlink_3r0a.svg"

const VerifyAccount = () => {
    const [pending, setPending] = useState(false)
    const [validURL, setValidURL] = useState(false)
     let params = useParams()

     async function verifyAccountHandler(){
         
        setPending(true)

        try{
            const {data} = await axios.get(`http://localhost:5000/api/users/${params.userId}/verifyaccount/${params.token}`)
            setPending(false)
            setValidURL(true)
        }catch(error){
            setPending(false)            
            console.log(error.response?.data);
            setValidURL(false)
        }
    }


    useEffect(()=>{
        verifyAccountHandler()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params])

    
  return (
    <div className="verify">
        <div className="verify-header">
        <Link to="/">
            <img src={echub} alt=""/>
        </Link>
        <Link to="/">
            <MdClose size={"2rem"} color="#000" />
        </Link>
        </div>
        {validURL ? 
            (
                pending ? (
                    <div className="verify-loader">
                        <h1>LOADING...</h1>
                    </div>
                ) : (
                    <div className="verify-container">
                        <img src={verifyImg} alt="" />
                        <p>Account Verified Successfully</p>
                    </div>
                )
            ) : 
            (
                <div className="verify-error">
                    <h1>Invalid Verification Link</h1>
                </div>
            )
        }      
    </div>
  )
}

export default VerifyAccount