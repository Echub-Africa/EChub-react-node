/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {MdClose} from 'react-icons/md';
import {useDispatch, useSelector} from 'react-redux';


import './Service.css';
import {publicRequest} from '../../../../helpers/requestMethod';
import Loader from '../../../../components/Loader';
import noData from '../../../../assets/No_data.png';
import {newService, deleteServiceById} from '../../../../API/apiRequest';

const Service = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setIsloading] = useState(false)
    const [serviceName, setServiceName]= useState("")

    const {isCreated, isDeleted, error} = useSelector((state)=> state.service)

    const dispatch = useDispatch()


    useEffect(()=>{
        fetchServices()
    }, [isCreated, isDeleted])

    async function fetchServices(){
        try{
            setIsloading(true)

            const {data} = await publicRequest.get('/service/services')
            setServices(data)
            setIsloading(false)
        }catch(error){
            console.log(error)
            setIsloading(false)
        }
    }

    function createService(){
        const data = {
            name: serviceName
        }
        newService(data, dispatch)
        setServiceName("")
    }

    function deleteService(serviceId){
        deleteServiceById(serviceId, dispatch)
    }


    return (
        <div className="admin-service">
            <h3>Services</h3>
            <div className="admin-service-container">
                <div className="service-form">
                    <div className="service-form-wrapper">
                        <div className="service-input">
                            <label htmlFor="service_name">Service name</label>
                            <input type="text" value={serviceName} onChange={(e)=> setServiceName(e.target.value)} placeholder="(carpentry, plumbing, etc...)" />
                        </div>
                        <div className="service-form-btn">
                            <button onClick={createService}>{isCreated ? <Loader loaderStyle={{width: "10px", height: "10px"}} /> : "Create"}</button>
                        </div>
                    </div>
                </div>
                <div className="service-table">
                    {
                        isLoading ? (<Loader loaderStyle={{width: '30px', height: '30px', margin: '40px'}} />) 
                        : services.length > 0 
                        ? services.map(service=>(
                            <div key={service._id} className="service-list">
                                <span>{service.name}</span>
                                <MdClose onClick={()=> deleteService(service._id)} fontSize={"1rem"} />
                            </div>
                        )) : (
                            <div className="no-data">
                                <img src={noData} alt="" />
                                <p>No Data</p>
                            </div>
                        )
                    }
                    {/* {error && (
                        <div className="error-refresh">
                            <p>{error}</p>
                            <button onClick={fetchServices}>refresh</button>
                        </div>
                    )} */}
                </div>
            </div>
        </div>
    )
}

export default Service
