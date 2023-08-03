import { createSlice } from "@reduxjs/toolkit";

const AppSlice=createSlice({
    name:"app",
    initialState:{
        isSideBar:false
    },
    reducers:{
        toggleSideBar:(state)=>{
            state.isSideBar=!state.isSideBar;
        }
    }
})
export const {toggleSideBar}=AppSlice.actions;
export default AppSlice.reducer;