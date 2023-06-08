import {createSlice} from '@reduxjs/toolkit';


const userSlice = createSlice({
    name: 'user',
    initialState:{
        userInfo: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null,
        userLists: [],
        pending: false,
        userUpdated: false,
        error: null
    },
    reducers:{
        authStart: (state)=>{
            state.pending = true
            state.userUpdated = true
            state.error = null
        },
        authSuccess: (state, action) => {
            state.pending = false
            state.error = null
            state.userInfo = action ? action.payload : null
        },
        getUser: (state, action) => {
            state.pending = false;            
            state.error = null;
            state.userLists = action ? action.payload : null;            
        },
        updateUser: (state, action)=>{
            state.userUpdated = false;
            state.userInfo = action ? action.payload : null;
        },
        authError: (state, action)=>{
            state.pending = false
            state.userUpdated = false;
            state.error = action ? action.payload : null;
        }
    }
})


export const {authStart, authSuccess, updateUser, getUser, authError} = userSlice.actions

export default userSlice.reducer;