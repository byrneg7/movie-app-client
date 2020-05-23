import React from 'react';

import LandingNav from "./nav/LandingNav";
import Router from "../routes/router";
import Footer from "./footer/Footer";

function App() {
    return (
        <>
            <LandingNav/>
            <Router/>
            <Footer/>
        </>
    );
}

export default App;
