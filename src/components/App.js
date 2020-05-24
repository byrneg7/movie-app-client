import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LandingNav from "./nav/LandingNav";
import Router from "../routes/router";
import Footer from "./footer/Footer";

function App() {
    return (
        <>
            <ToastContainer position="top-right" closeOnClick autoClose={5000}/>

            <LandingNav/>
            <Router/>
            <Footer/>
        </>
    );
}

export default App;
