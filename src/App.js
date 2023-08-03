import React from "react";
import  ReactDOM  from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./Component/Header";
import SideBar from "./Component/SideBar";
import { Provider } from "react-redux";
import store from "./utils/Store";
import Body from "./Component/Body";

const AppLayout=()=>{
    return(
        <Provider store={store}>
            <Header/>
            <Outlet/>
        </Provider>
    );
}



const AppRouter=createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[
            {
                path:'/',
                element:<Body/>
            }
        ]
    }
])

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppRouter}/>)