import React from "react";
import ReactDOM from 'react-dom';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./views/Home/Home";
import Fashion from "./components/Trends/Fashion/Fashion";
import SkinCare from "./components/Trends/SkinCare/SkinCare";
import Shoes from "./components/Trends/Shoes/Shoes";
import HairCare from "./components/Trends/HairCare/HairCare";
import Accessories from "./components/Trends/Accessories/Accessories";
import MakeUp from "./components/Trends/MakeUp/MakeUp";
import Watches from "./components/Trends/Watches/Watches";
import HomeDecor from "./components/Trends/HomeDecor/HomeDecor";
import WomenFashion from "./components/Trends/Fashion/WomenFashion";
import MenFashion from "./components/Trends/Fashion/MenFashion";


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path : "/",
        element : <Home />
    },
    {
        path : "/fashion",
        element : <Fashion />
    },
    {
        path : "/skincare",
        element : <SkinCare />
    },
    {
        path : "/shoes",
        element : <Shoes />
    },
    {
        path : "/haircare",
        element : <HairCare />
    },
    {
        path : "/accesories",
        element : <Accessories />
    },
    {
        path : "/makeup",
        element : <MakeUp />
    },
    {
        path : "/watches",
        element : <Watches />
    },
    {
        path : "/homedecor",
        element : <HomeDecor />
    },
    {
        path : "/womens",
        element : <WomenFashion />
    },
    {
        path: "/mens",
        element: <MenFashion />
    }
])

root.render(<RouterProvider router={router} />)