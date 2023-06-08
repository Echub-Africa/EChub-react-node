/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { MdClose } from 'react-icons/md';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';


import { publicRequest } from '../../helpers/requestMethod';
import {Util} from '../../helpers/util';
import {createNewProject} from '../../API/apiRequest'


let util = new Util()


const HireForm = () =>{
    const [services, setServices] = useState([])
    const [selectedAddress, setSelectedAddress] = useState({lat: "", lng: ""});
    const [isChecked, setIsChecked] = useState(false)
    const [projectData, setProjectData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        phone: "",
        service: "",
        message: "",
        file: ""
    })

    const navigate = useNavigate()

    const userInfo = JSON.parse(localStorage.getItem("userInfo"))

    const dispatch = useDispatch()

    useEffect(()=>{
        const fetchServices = async ()=>{
            try{
                const {data} = await publicRequest.get('/service/services')
                setServices(data)
            }catch(error){
                console.log(error)
            }
        }

        fetchServices()
    }, [])
    const [showMap, setShowMap] = useState(false);

    const createProjectHandler = ()=>{
        let data = {
            ...projectData,
            ...selectedAddress,
            user: userInfo?.data.user._id
        }

        createNewProject(data, dispatch)
        navigate("/user-projects")
    }
    return (
        <div className="hire">
            {showMap && <MapWithMarker setSelectedAddress={setSelectedAddress} setShowMap={setShowMap} />}
            <div className="hire-left">
                <div className="hire-left-container container">
                    <h1>HERE IS HOW TECH VILLAGE CAN HELP YOU TODAY </h1>
                    <p>After filling the form out, we will send you a mail to scheduel a date to inspect and weigh cost</p>
                    <p>Call out fee ranges form N500 - N1000</p>
                </div>
            </div>
            <div className="hire-right">
                <div className="hire-form">
                    <div className="input-group">
                        <div className="input-form">
                            <label>Work mail</label>
                            <input type="email" value={projectData.email} onChange={(e)=>setProjectData({...projectData, email: e.target.value})} required />
                        </div>
                        <div className="input-form">
                            <label>Phone number</label>
                            <input type="text" value={projectData.phone} onChange={(e)=>setProjectData({...projectData, phone: e.target.value})} required />
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="input-form">
                            <label>First Name</label>
                            <input type="text" value={projectData.firstName} onChange={(e)=>setProjectData({...projectData, firstName: e.target.value})} required />
                        </div>
                        <div className="input-form">
                            <label>Last Name</label>
                            <input type="text" value={projectData.lastName} onChange={(e)=>setProjectData({...projectData, lastName: e.target.value})} required />
                        </div>
                    </div>
                    <div className="input-form">
                        <label>What Type of Service are you Looking For?</label>
                        <select onChange={e => setProjectData({...projectData, service: e.target.value})} value={projectData.service} required>
                            <option value="">-- Services --</option>
                            {services.map((item) => (
                                <option key={item._id} value={item._id}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="input-group">
                        <div onClick={() => setShowMap(true)} className="get-address">Get Address</div>
                    </div>
                    <div className="avail-notice">Services are only available in Lagos</div>                                        
                    {/* <div className="input-group">
                        <div className="input-form">
                            <label>Your Current Role</label>
                            <select>
                                <option>-- Role --</option>
                                <option>Software Developer</option>
                                <option>Reactjs Developer</option>
                                <option>Backend Developer</option>
                            </select>
                        </div>
                        <div className="input-form">
                            <label>Employee Range</label>
                            <select>
                                <option>-- Range --</option>
                                <option>50 - 150</option>
                                <option>50 - 150</option>
                                <option>50 - 150</option>
                            </select>
                        </div>
                    </div> */}
                    <div className="input-form">
                        <label>Message</label>
                        <div className="project-msg">
                            <textarea value={projectData.message} onChange={e => setProjectData({...projectData, message: e.target.value})}  row="10" col="20"></textarea>
                            <div className="project-upload">
                                <label className={projectData.file ? "uploaded" : ""} htmlFor="vid-img">Upload Image/Video</label>
                                <input required onChange={(e)=> setProjectData({...projectData, file: e.target.files[0]})} style={{display: "none"}} type="file" id="vid-img" />
                            </div>
                        </div>
                    </div>
                    <div className="form-policy">
                        <input type="checkbox" onChange={()=> setIsChecked((checked)=> !checked)} />
                        <div>I understand that TechVillage  will process my information in accordance with their <strong>Privacy Policy</strong>. I may withdraw my consent through unsubscribe links at any time.</div>
                    </div>
                    <div className="form-btn">
                        <span className={isChecked === true ? "" : "project-btn"} onClick={()=> isChecked && createProjectHandler()}>Fix now</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HireForm;


function MapWithMarker({setShowMap, setSelectedAddress}) {
  const mapContainerRef = useRef(null);
  

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWRleHNhbXVlbCIsImEiOiJjbGh1bGdwZWQwMTExM2VwY3V2cGtkZW9pIn0.AZc-cIOap2G-MM5uobzOXQ';

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-3.406448, 6.465422], // Default coordinates (Replace with your desired default location)
      zoom: 10,
    });

    map.on('click', (e) => {
      const { lng, lat } = e.lngLat;
      setSelectedAddress({ lat, lng });
      setShowMap(false);
      util.Alert("success", "Location Selected Successfully")
    });

    return () => map.remove();
  }, [setSelectedAddress, setShowMap]);

  return (
    <div className="mapbox-modal">
        <div className="map-close">
            <MdClose onClick={()=> setShowMap(false)} fontSize={"1.5rem"} style={{cursor: 'pointer'}} color="red" />
        </div>
      <div ref={mapContainerRef} style={{ height: '80vh', width: '80%' }} />      
    </div>
  );
};