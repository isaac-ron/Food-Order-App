import React from "react"; 
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import HomeItems from "./Components/HomeItems";
import Footer from "./Components/Footer";
import Foods from "./Components/Foods";

//Setting up routing for product pages views using createBrowserRouter.
const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/foods' element = {<Foods/>}/>
));

export default function App(){
    return(
        <RouterProvider router={router} />
    )
}