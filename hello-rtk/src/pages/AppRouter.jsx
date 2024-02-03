import App from '../App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Edit from './Edit.jsx';
import AppRoot from "../AppRoot.jsx";
import { useState } from "react";
import {useSelector, useDispatch} from "react-redux"
 
export default function AppRouter() {
    
 
    const update = (_id) => {
        
    }
 
    const remove = id => {
        
    }
 
    const toggle = _id => {
        
    }
 
    const clear = () => {
       
    }
 
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <AppRoot />,
            children: [
                {
                    path: "/",
                    element: <App />
                },
                {
                    path: "/edit",
                    element: <Edit />
                }
            ]
        }
    ])
 
    return (<RouterProvider router={routes}></RouterProvider>);
}