import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import serviceReducer from '../features/serviceSlice';
import projectReducer from '../features/projectSlice';



export const store = configureStore({
    reducer: {
        user: userReducer,
        service: serviceReducer,
        project: projectReducer
    }
})
