import React from "react";
import  ReactDOM  from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./Component/Header";

const AppLayout=()=>{
    return(
        <>
            <Header/>
            <Outlet/>
        </>
    );
}



const AppRouter=createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>
    }
])

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppRouter}/>)