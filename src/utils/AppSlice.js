import { createSlice } from "@reduxjs/toolkit";

const AppSlice=createSlice({
    name:"app",
    initialState:{
        isSideBar:false
    },
    reducers:{
        toggleSideBar:(state,actions)=>{
            state.isSideBar=actions.payload;
        }
    }
})
export const {toggleSideBar}=AppSlice.actions;
export default AppSlice.reducer;