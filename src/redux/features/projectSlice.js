import {createSlice} from '@reduxjs/toolkit';


const projectSlice = createSlice({
    name: 'project',
    initialState: {
        projectLists: [],
        pendingLists: [],
        ongoingLists: [],
        completedLists: [],
        projectUpdated: false,
        pending: false,
        statusChange: false,
        projectIsDeleted: false,
        error: null
    },
    reducers: {
        getProjectStart: (state)=>{
            state.statusChange = true
            state.projectIsDeleted = true
            state.projectUpdated = true;
            state.pending = true;
            state.error = null
        },
        getUserProjects: (state, action)=>{
            state.pending = false;
            state.projectLists = action ? action.payload : null;
        },
        getPendingSuccess:  (state, action) => {
            state.pending = false;
            state.pendingLists = action ? action.payload : null
            state.error = null
        },
        getOngoingSuccess: (state, action)=>{
            state.pending = false;
            state.ongoingLists = action ? action.payload : null
            state.error = null
        },
        getCompletedSuccess: (state, action)=>{
            state.pending = false;
            state.completedLists = action ? action.payload : null
            state.error = null
        },
        createProject: (state, action)=>{
            state.pending = false;
            state.error = null;
        },
        updateProjectSuccess: (state)=>{
            state.projectUpdated = false;
            state.error = null;
        },
        updateProjectStatus: (state) => {
          state.statusChange = false;
          state.error = null;
        },
        deleteProject: (state, action)=>{
            state.projectIsDeleted = false
            state.error = null;
        },
        getProjectError: (state, action)=>{
            state.pending = false;
            state.projectUpdated = false;
            state.projectIsDeleted = false;
            state.statusChange = false;
            state.error = action ? action.payload : null;
        }
    }
})


export const {
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
} = projectSlice.actions;
export default projectSlice.reducer;