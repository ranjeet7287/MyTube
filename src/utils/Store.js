import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";
import SearchSlice from "./SearchSlice";
const store=configureStore({
    reducer:{
        app:AppSlice,
        search:SearchSlice
    }
});
export default store;