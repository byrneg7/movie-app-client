import React from 'react';

import Banner from "../banners/Banner";
import IconGroup from "./IconGroup";
import ImageShowCase from "./ImageShowCases";
import './landingPage.scss';
import Testimonials from "./Testimonials";
import CallToAction from "../banners/CallToAction";

const LandingPage = () => {
    return (
        <>
            <Banner/>
            <IconGroup/>
            <ImageShowCase/>
            <Testimonials/>
            <CallToAction/>
        </>
    )
};

export default LandingPage;