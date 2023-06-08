import {
    authStart,
    authSuccess,
    getUser,
    updateUser,
    authError
} from '../redux/features/userSlice'
import {
    getProjectStart,
    getUserProjects,
    getPendingSuccess,
    getOngoingSuccess,
    getCompletedSuccess,
    createProject,
    updateProjectSuccess,
    updateProjectStatus,    
    deleteProject,
    getProjectError
} from '../redux/features/projectSlice';
import {Navigate} from 'react-router-dom';
import {Util} from '../helpers/util';
import { publicRequest, uploadRequest, userRequest } from '../helpers/requestMethod';

let util = new Util()




/* USER REGISTRATION: api request */
export const register = async (info, dispatch) => {
    try {
        dispatch(authStart())

        const {data} = await publicRequest.post(`/users/`, info)
        dispatch(authSuccess())
        util.Alert("success", data)
    } catch (error) {
        let err = error.response?.data;
        dispatch(authError(err))
        util.Alert("error", err)
    }
}

/* USER LOGIN: api request */
export const login = async (info, dispatch) => {
    try {
        dispatch(authStart())

        const { data } = await publicRequest.post(`/users/login`, info)
        dispatch(authSuccess(data))
        localStorage.setItem('userInfo', JSON.stringify(data));
        util.Alert("success", data.message)
        return <Navigate to="/dashboard" />
    } catch (error) {
        let err = error.response?.data;
        dispatch(authError(err))
        util.Alert("error", err)
    }
}


/* GET ALL USERS (individual & company) */
export const getUsers = async (dispatch) => {
    try {
        dispatch(authStart())

        const {data} = await publicRequest.get('users/all')
        dispatch(getUser(data));
    }catch(error){
        let err = error.response?.data;
        dispatch(authError(err))
        util.Alert("error", err)
    }
}


/* UPDATE USER PROFILE */
export const updateUserHandler = async (info, userId, dispatch)=>{
    try{
        dispatch(authStart())

        const {data} = await uploadRequest.put(`users/${userId}`, info)
        dispatch(updateUser(data))
        localStorage.setItem('userInfo', JSON.stringify(data));
        util.Alert("success", data.message)
    }catch(error){
        let err = error.response?.data;
        dispatch(authError(err))
        util.Alert("error", err)
    }
}


/* CREATE PROJECT POST: api request */
export const createNewProject = async (info, dispatch)=>{
    try{
        dispatch(getProjectStart())

        const {data} = await uploadRequest.post('project/new', info)
        dispatch(createProject())  
        util.Alert("success", data)      
    }catch(error){
        let err = error.response?.data;
        dispatch(getProjectError(err))
        util.Alert("error", err)
    }
}

/* GET USER PROJECTS */
export const getUserProjectsByUserId = async (userId,  dispatch)=>{
    try{
        dispatch(getProjectStart())

        const {data} = await userRequest.get(`project/user/${userId}`)
        dispatch(getUserProjects(data))        
    }catch(error){
        let err = error.response?.data;
        dispatch(getProjectError(err))
        util.Alert("error", err)
    }
}


/* UPDATE PROJECT */
export const updateProjectHandler = async (info, projectId, dispatch)=>{
    try{
        dispatch(getProjectStart())

        const {data} = await uploadRequest.put(`project/update/${projectId}`, info)
        console.log(info)
        dispatch(updateProjectSuccess())
        util.Alert("success", data)        
    }catch(error){
        let err = error.response?.data;
        dispatch(getProjectError(err))
        util.Alert("error", err)
    }
}


/* DELETE PROJECT: api request */
export const deleteProjectHandler = async (projectId, dispatch)=>{
    try{
        dispatch(getProjectStart())

        const {data} = await userRequest.delete(`project/${projectId}`)
        dispatch(deleteProject())
        util.Alert("success", data)
    }catch(error){
        let err = error.response?.data;
        dispatch(getProjectError(err))
        util.Alert("error", err)
    }
}

/* GET PENDING PROJECT: api request */
export const getpendingProjects = async (dispatch)=>{
    try{
        dispatch(getProjectStart())

        const { data } = await publicRequest.get('project/pending')
        dispatch(getPendingSuccess(data))
    }catch(error){
        let err = error.response?.data;
        dispatch(getProjectError(err))
        util.Alert("error", err)
    }
}
/* GET ONGOING PROJECT: api request */
export const getOngoingProjects = async (dispatch)=>{
    try{
        dispatch(getProjectStart())

        const { data } = await publicRequest.get('project/ongoing')
        dispatch(getOngoingSuccess(data))
    }catch(error){
        let err = error.response?.data;
        dispatch(getProjectError(err))
        util.Alert("error", err)
    }
}
/* GET PENDING PROJECT: api request */
export const getCompletedProjects = async (dispatch)=>{
    try{
        dispatch(getProjectStart())

        const { data } = await publicRequest.get('project/completed')
        dispatch(getCompletedSuccess(data))
    }catch(error){
        let err = error.response?.data;
        dispatch(getProjectError(err))
        util.Alert("error", err)
    }
}


/* UPDATE PROJECT STATUS: */
export const projectStatusChange = async(info, dispatch, projectId)=> {
    try {
        dispatch(getProjectStart())

        const { data } = await userRequest.put(`project/status-change/${projectId}`, info)
        dispatch(updateProjectStatus())
        util.Alert("success", data)
    }catch(error){
        let err = error.response?.data;
        dispatch(getProjectError(err))
        util.Alert("error", err)
    }
}