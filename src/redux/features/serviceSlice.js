import { createSlice } from '@reduxjs/toolkit';


const serviceSlice = createSlice({
    name: 'service',
    initialState: {
        services: [],
        pending: false,
        isCreated: false,
        isDeleted: false,
        error: null
    },
    reducers: {
        serviceStart: (state) => {
            state.pending = true;
            state.error = null;
        },
        createStart: (state) => {
            state.isCreated = true;
            state.error = null;
        },
        deleteStart: (state) => {
            state.isDeleted = true;
            state.error = null;
        },
        serviceSuccess: (state, action) => {
            state.pending = false;
            state.isCreated = false;
            action.services = action.payload;
            state.error = null;
        },
        createService: (state, action)=>{
            state.isCreated = false;
        },
        serviceDeleted: (state)=>{
            state.isDeleted = false
        },
        serviceFailed: (state, action) => {
            state.pending = false;
            state.isCreated = false;
            state.error = action ? action.payload : null;
        }
    }
})

export const {serviceStart, serviceSuccess, createStart, deleteStart, createService, serviceDeleted, serviceFailed} = serviceSlice.actions;

export default serviceSlice.reducer;