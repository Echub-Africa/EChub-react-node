import axios from 'axios';

const userInfo = JSON.parse(localStorage.getItem("userInfo"))

export const publicRequest = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {        
        "Content-Type": "application/json"
    }
})

export const uploadRequest = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'multipart/form-data',
        "Accept": "application/json",
        Authorization: `Bearer ${userInfo?.data.token}`
    }
})

export const userRequest = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers:{
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo?.data.token}`
    }
})