import axios from 'axios';


export const publicRequest = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "Content-Type": "application/json"
    }
})


export const userRequest = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers:{
        "Content-Type": "application/json",
        "Authorization": "Nothing for now"
    }
})