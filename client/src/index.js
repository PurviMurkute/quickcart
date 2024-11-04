import React from "react";
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./views/Home/Home";
import Fashion from "./components/Trends/Fashion/Fashion";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Signup from "./views/User-access/Signup";
import Login from "./views/User-access/Login";

import './global.css';
import Order from "./views/BuyNow/Order";
import Offers from "./views/Offers/Offers";
import Products from "./views/Products/Products";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/fashion",
        element: <Fashion />
    },

    {
        path: "/products/:category",
        element: <Products />
    },

    {
        path: "/about",
        element: <About />
    },
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/order",
        element: <Order/>
    },
    {
        path: "/offers/:id",
        element: <Offers/>
    }

])

root.render(<RouterProvider router={router} />)