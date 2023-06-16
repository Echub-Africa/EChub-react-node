/* eslint-disable no-unused-vars */
import React, {useEffect, useRef, useState} from 'react';
import {Drawer, Box, Tabs, Tab, Typography, Modal} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { MdVisibility, MdClose } from 'react-icons/md';
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {confirmAlert} from 'react-confirm-alert';
import mapboxgl from 'mapbox-gl';

import profilebg from "../../../../assets/profilebg.png";
import Loader from "../../../../components/Loader";

import { 
    getUserProjectsByUserId,
    updateProjectHandler,
    deleteProjectHandler
} from '../../../../API/apiRequest';
import {publicRequest} from '../../../../helpers/requestMethod'

import './Projects.css'




const Projects = () => {
    const [services, setServices] = useState([])
    const {projectLists, pending, error, projectIsDeleted} = useSelector((state)=> state.project)

    // const navigate = useNavigate()

    const dispatch = useDispatch();

    const userInfo = JSON.parse(localStorage.getItem("userInfo"))


    useEffect(()=>{        
        getUserProjectsByUserId(userInfo?.data.user._id, dispatch)
    },[dispatch, userInfo?.data.user._id, projectIsDeleted])



        
      const columns = [        
        {
            field: 'title',
            headerName: 'Service',
            width: 220,
            editable: true,
            renderCell: params =>{
                return (
                    <div>
                        {params.row.service.name}
                    </div>
                )
            }
        },        
        {
            field: 'update',
            headerName: 'Update',                        
            width: 220,
            renderCell: (params)=>{
                return(                  
                    <Link className="edit" to={`/update-project/${params.row._id}`}>Update</Link>                  
                )
            }
        },
        {
            field: 'delete',
            headerName: 'Delete',                        
            width: 200,
            renderCell: (params)=>{                
                return(                    
                    <button className="del" onClick={()=> confirmDelete(params.row, dispatch)}>Delete</button>                                                              
                )
            }
        },
        {
            field: 'view',
            headerName: 'View',                        
            width: 160,
            renderCell: (params)=>{
                return(
                  <MdVisibility onClick={()=> viewProject(params.row)} className="view" fontSize={"1.2rem"} />
                )
            }
        },
    ];

    
  
  return (
    <div className="admin-projects">
        <div className="admin-projects-wrapper">
              <div className="project-table">
                {error && (<h5>{error}</h5>)}
                {pending ? (
                    <Loader loaderStyle={{width: "30px", height: "30px", margin: "3rem"}} />
                ) : projectLists.length > 0 ? (
                    <DataGrid
                        rows={projectLists}
                        getRowId={row => row._id}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[2]}                        
                    /> 
                ) : (
                    <span className="not-avail">No Available Data yet</span>
                )}               
            </div>
        </div>
    </div>
  )
}

export default Projects





function confirmDelete(project, dispatch){
     
    function deleteProject(projectId){
        deleteProjectHandler(projectId, dispatch)
    }


  confirmAlert({
      customUI: ({onClose})=>{
          return (
            <div className="confirm-del">
                <div className="confirm-wrapper">
                    <div className="confirm-header">
                        <h3>Are you sure to Delete</h3>
                    </div>
                    <div className="confirm-option">
                        <span onClick={()=>{
                            deleteProject(project._id)
                            onClose()
                        }}>Yes</span>
                        <span onClick={() => onClose()}>No</span>
                    </div>      
                </div>
            </div>
        )
      }
  })
}


function viewProject(project) {
    console.log("normally", project.filename.split('.')[1])
    confirmAlert({
        customUI: ({ onClose }) => {
            return (
                <div className="v-project">
                    <div className="v-wrapper">
                        <div className="v-media">
                            <p>{project.filename.type}</p>
                            {project.filename ? (
                                <>
                                {
                                    project.fileType === 'image' ? (<img src={`${process.env.REACT_APP_FILE}${project.filename}`} alt="" />) : (<video src={`${process.env.REACT_APP_FILE}${project.filename}`} controls></video>)
                                }
                                </>
                            ) : (<img src={profilebg} alt="" />)}
                        </div>
                        <div className="v-title">
                            <h3>{project.service.name}</h3>
                        </div>
                        <div className="v-details">
                            <div className="v-desc">
                                <p>{project.message}</p>
                            </div>
                        </div>
                        <div className="v-location">
                            <h4>Project Location</h4>
                            <div classname="v-map">
                                <MapWithMarker project={project} />
                            </div>
                        </div>
                        <div className="v-action">
                            <span onClick={()=> onClose()}>Close</span>
                        </div>
                    </div>
                </div>
            )
        }
    })
}


function MapWithMarker({project}) {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWRleHNhbXVlbCIsImEiOiJjbGh1bGdwZWQwMTExM2VwY3V2cGtkZW9pIn0.AZc-cIOap2G-MM5uobzOXQ';
            // Fetch place name using Mapbox Geocoding API
        // const geocodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${mapboxgl.accessToken}`;
        // const geocodingResponse = await fetch(geocodingUrl);
        // if (!geocodingResponse.ok) {
        //   throw new Error('Failed to fetch place name');
        // }
        // const geocodingData = await geocodingResponse.json();
        
    // const placeName = geocodingData.features[0].place_name;
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [project?.long, project.lat], // Default coordinates (Replace with your desired default location)
      zoom: 10,
    });

    // Add a marker at the user's current location
    const marker = new mapboxgl.Marker().setLngLat([project.long, project.lat]).addTo(map);
    new mapboxgl.Popup({ offset: 25 }).setLngLat([project.long, project.lat])
    // .setHTML(`<h3>${placeName}</h3>`).addTo(map);

    // Ensure the marker remains within the bounds of the map
    const bounds = new mapboxgl.LngLatBounds();
    bounds.extend([project.long, project.lat]);
    map.fitBounds(bounds, { padding: 50 });

    return () => map.remove();
  }, [project.lat, project.long]);

  return (
    <div className="">        
      <div ref={mapContainerRef} style={{ height: '50vh', width: '100%' }} />      
    </div>
  );
};