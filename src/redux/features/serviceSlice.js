import { createSlice } from '@reduxjs/toolkit';


const serviceSlice = createSlice({
    name: 'service',
    initialState: {
        services: [],
        pending: false,
        error: null
    },
    reducers: {
        serviceStart: (state) => {
            state.pending = true;
            state.error = null;
        },
        serviceSuccess: (state, action) => {
            state.pending = false;
            action.services = action.payload;
            state.error = null;
        },
        serviceFailed: (state, action) => {
            state.pending = false;
            state.error = action ? action.payload : null;
        }
    }
})

export const {serviceStart, serviceSuccess, serviceFailed} = serviceSlice.actions;

export default serviceSlice.reducer;