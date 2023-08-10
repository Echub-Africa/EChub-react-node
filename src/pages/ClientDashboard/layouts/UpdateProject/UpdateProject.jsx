/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import './UpdateProject.css';
import {userRequest, publicRequest} from '../../../../helpers/requestMethod';
import { updateProjectHandler } from '../../../../API/apiRequest';
import Loader from '../../../../components/Loader'



const UpdateProject = () => {
    const [services, setServices] = useState([])
    const [updatedData, setUpdatedData] = useState({
        service: "",
        message: "",
        file: "",
    })

    let params = useParams();

    let {projectUpdated, error} = useSelector(state => state.project)

    let dispatch = useDispatch()

    let navigate = useNavigate()

    

    useEffect(()=>{
        async function getSingleProject(){
            try{
                const {data} = await userRequest.get(`project/${params.projectId}`)
                setUpdatedData({
                    ...updatedData,
                    service: data.service,
                    message: data.message                    
                })
            }catch(error){
                console.log(error.response?.data)
            }
        }

        const getAllServices = async ()=>{
            try{
                const {data} = await publicRequest.get('service/services')
                setServices(data)
            }catch(error){
                console.log(error.response.data)
            }
        }

        getSingleProject()
        getAllServices()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[params])


    function updateUserProject(){
        let data = {
            ...updatedData
        }

        updateProjectHandler(data, params?.projectId, dispatch)
        //console.log(error, projectUpdated)
        if (projectUpdated === false && error === null) {
            navigate("/user-projects")
        } else {
            return;
        }        
    }

    return (
        <div className="update-container">
            <div className="update-wrapper">
                <div className="update-form">
                    <div className="update-input">
                        <label>Service: {updatedData.service.name}</label>
                        <select onChange={(e)=> setUpdatedData({...updatedData, service: e.target.value})}>
                            <option value="">--- change service --</option>
                            {services?.map( s =>(
                                <option key={s?._id} value={s?._id}>{s?.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="update-input">
                        <label>Message</label>
                        <textarea row="20" value={updatedData.message} onChange={(e)=> setUpdatedData({...updatedData, message: e.target.value})} />
                    </div>
                    <div className="update-media">
                        <label htmlFor="upload">change image/video</label>
                        <input type="file" id="upload" onChange={(e)=> setUpdatedData({...updatedData, file: e.target.files[0]})} style={{display: 'none'}} />
                    </div>
                    <div className="update-btn">
                        <span onClick={() => updateUserProject()}>{projectUpdated ? <Loader loaderStyle={{height: "15px", width: "15px"}} /> : "Update"}</span>
                        <span><Link to="/user-projects">Go back</Link></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateProject;