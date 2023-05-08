import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import serviceReducer from '../features/serviceSlice';



export const store = configureStore({
    reducer: {
        user: userReducer,
        service: serviceReducer
    }
})
