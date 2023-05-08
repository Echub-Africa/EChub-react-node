/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import {
  Stepper,
  Step,
  Button,
  StepContent,
  StepLabel,
  Typography,
  Paper  
} from '@mui/material';
import { usePaystackPayment } from 'react-paystack';

import { useMultistepHook } from '../../../../hooks/useMultistepHook';
import "./Service.css";
import { publicRequest } from '../../../../helpers/requestMethod';
import { Util } from '../../../../helpers/util';


const INITIALDATA = {
  currentService: "",
  currentServiceRendered: "",
  currentServicePrice: "",
  currentPaymentDuration: ""
}

let util = new Util()

const Service = () => {
  console.log(process.env.REACT_APP_API_URL)

  const [data, setData] = useState(INITIALDATA);
  
  function updateFields(fields){
    setData(prev => {
      return {...prev, ...fields}
    })
  }

  
  let { 
    steps, 
    currentStepIndex,
    setCurrentStepIndex,
    step, 
    isFirstStep, 
    back, 
    next, 
    isLastStep
  } = useMultistepHook([
    <ServiceList {...data} updateFields={updateFields} />,
    <ServiceItem {...data} updateFields={updateFields} />,
    <PaymentOption {...data} updateFields={updateFields} />
  ]);

  function onNext(e) {
    e.preventDefault();
    if(data.currentService === ""){
      util.Alert('error', "Fields can't be empty")
    }else{
      next();
    }

    if (currentStepIndex === 1) {
      if(data.currentServiceRendered === ""){
        setCurrentStepIndex(1)
        util.Alert('error', "Fields can't be empty")
      }else{
        next()
      }
    }


    // if (currentStepIndex === 2) {
    //   if(data.currentPaymentDuration === ""){
    //     setCurrentStepIndex(3)
    //     util.Alert('error', "Fields can't be empty")
    //   }else{
    //     next()
    //   }
    // }
  }


  // Monthly Plan Payment
  const configMonthly = {
    reference: (new Date()).getTime().toString(),
    email: "adexsamuel6@gmail.com",
    plan: 'PLN_0y7xysorktvgi6h',
    amount: data.currentServicePrice * 100, // Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: 'pk_test_a813c2aecd96e59d20ec7fb47cff518352ec0bc6',
  };


  // Annually Plan Payment
  const configAnnually = {
    reference: (new Date()).getTime().toString(),
    email: "adexsamuel6@gmail.com",
    plan: 'PLN_g81jagc6pnk6h9k',
    amount: data.currentServicePrice * 100, // Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: 'pk_test_a813c2aecd96e59d20ec7fb47cff518352ec0bc6',
  };


  //One time payment
  const configOneTime = {
        reference: (new Date()).getTime().toString(),
        email: "adexsamuel6@gmail.com",
        amount: data.currentServicePrice * 100, // Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        publicKey: 'pk_test_a813c2aecd96e59d20ec7fb47cff518352ec0bc6',
    };

    function onSuccess(reference) {
        // Implementation for whatever you want to do with reference and after success call.
        console.log(reference);    
    }

    // you can call this function anything
    function onClose(){        
        console.log("Closed")
    }

    const initializePayment = usePaystackPayment(configOneTime);
    const initializePayment1 = usePaystackPayment(configMonthly);
    const initializePayment2 = usePaystackPayment(configAnnually);


  function handlePaymentOption() {
    // console.log(data)
    if (currentStepIndex === 2) {
      if(data.currentPaymentDuration === ""){
        setCurrentStepIndex(2)
        util.Alert('error', "Fields can't be empty")
      }else{        
        if(data.currentPaymentDuration === 1){
          console.log("One Time Payment")
          return initializePayment(onSuccess, onClose)
        }
    
        if(data.currentPaymentDuration === 2){
          console.log("Monthly Payment")
          return initializePayment1(onSuccess, onClose)
        }
    
        if(data.currentPaymentDuration === 3){
          console.log("Annually Payment")
          return initializePayment2(onSuccess, onClose)
        }
      }
    }


  }

  return (
    <div className="service-container">
      <div className="step-count">{currentStepIndex + 1} / {steps.length}</div>
      {step}
      <div className="service-action-btn">
          {!isFirstStep && <span onClick={back} className="back">Back</span>}
          {!isLastStep ? (
            <span onClick={(e)=> onNext(e)} className="next">Next</span>
          ) : (
            <span onClick={handlePaymentOption} className="next">Finish</span>
          )}
      </div> 
    </div>
  );
}

export default Service;


function ServiceList({currentService, updateFields}){  
  const [currentIndex, setCurrentIndex] = useState(null);
  const [services, setServices] = useState([]);
  const [pending, setPending] = useState(false);



  useEffect(()=>{
    const storedServices = JSON.parse(localStorage.getItem("services"))
    if(storedServices){
      setServices(storedServices)
    }
  }, [])


  // useEffect(()=>{
  //   localStorage.setItem('services', JSON.stringify(services))
  // }, [])

  async function getServices() {
    setPending(true);
    try{
      const { data } = await publicRequest.get(`/service/services`);
      setServices(data);   
      localStorage.setItem('services', JSON.stringify(services))   
      setPending(false);
    }catch(error){
      console.log(error)
      setPending(false);
    }
  }

  
  useEffect(()=>{
    getServices()    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const handleServiceChange = (index, id)=>{
    setCurrentIndex(index)
    updateFields({currentService: id})
    console.log(currentService)
  }


  return (
    <div className="service-wrapper">
      {!pending && <div className="service-header">          
        <h4>What type of service does your home Require?</h4>
      </div>}
      {
        pending === true ? 
        (
          <div className="">LOADING...</div>
        ) : services.length > 0 ? 
        (
          services.map((s, i) => (
            <>
              <div key={i} className={ i === currentIndex ? "active-service" : "service"} onClick={(e)=> handleServiceChange(i, s._id)}>{s.name}</div>
            </>
          ))
        ) : 
        (
          <div className="">Nothing to see Here...</div>
        )        
      }      
    </div>
  )
}


function ServiceItem({currentService, updateFields}){  
  const [serviceItems, setServiceItems] = useState([]);
  const [pending, setPending] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  async function getServiceItem(){
    setPending(true)
    try{
      const {data} = await publicRequest.get(`/service-rendered/${currentService}/service`);
      setPending(false)
      setServiceItems(data)
    }catch(error){
      setPending(false)
      console.log(error);
    }
  }

  useEffect(()=>{
    getServiceItem()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  const handleServiceItemChange = (index, item, price)=>{
    setCurrentIndex(index)
    updateFields({currentServiceRendered: item, currentServicePrice: price})
  }

  return (
    <div className="service-wrapper">
      <div className="service-header">          
        <h4>What are your home needs?</h4>
      </div>
      {
        serviceItems.map((s, i) => (
          <div key={s._id} id="service-item" className={i === currentIndex ? "active-service" : "service"} onClick={() => handleServiceItemChange(i, s.name, s.price)}>
            <p>{s.name}</p>
            <p className="service-price">N{s.price}</p>
          </div>
        ))
      }
    </div>
  )
}


function PaymentOption({currentPaymentDuration, updateFields}){  
  const [currentIndex, setCurrentIndex] = useState(null)
  const [payments, setPayments] = useState([
    {
      id: 1,
      pname: "One-Time Payment",
    },
    {
      id: 2,
      pname: "Monthly Payment",
    },
    {
      id: 3,
      pname: "Annaully Payment",
    }
  ]);
  


  const hnadleServicePriceChange = (index, item)=>{
    setCurrentIndex(index)    
    updateFields({currentPaymentDuration: item})
  }
  
  return (
    <div className="service-wrapper">
      <div className="service-header">          
        <h4>Choose a payment Duration</h4>
      </div>
      {
        payments.map((p, i)=>(
          <div className={ i === currentIndex ? "active-service" : "service"} onClick={()=> hnadleServicePriceChange(i, p.id)}>{p.pname}</div>
        ))
      }
    </div>
  )
}