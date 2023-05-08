import {createSlice} from '@reduxjs/toolkit';


const userSlice = createSlice({
    name: 'user',
    initialState:{
        userInfo: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null,
        pending: false,
        error: null
    },
    reducers:{
        authStart: (state)=>{
            state.pending = true
            state.error = null
        },
        authSuccess: (state, action) => {
            state.pending = false
            state.error = null
            state.userInfo = action ? action.payload : null
        },
        authError: (state, action)=>{
            state.pending = false
            state.error = action ? action.payload : null
        }
    }
})


export const {authStart, authSuccess, authError} = userSlice.actions

export default userSlice.reducer;