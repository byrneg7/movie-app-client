import React from 'react';

import Banner from "../banners/Banner";
import IconGroup from "./IconGroup";
import ImageShowCase from "./ImageShowCases";
import './landingPage.scss';
import Testimonials from "./Testimonials";
import CallToAction from "../banners/CallToAction";

const LandingPage = () => {
    const renderBannerBody = () =>
        <form>
            <div className="form-row">
                <div className="col-12 col-md-9 mb-2 mb-md-0">
                    <input type="email" className="form-control form-control-lg" placeholder="Enter your email..."/>
                </div>
                <div className="col-12 col-md-3">
                    <button type="submit" className="btn btn-block btn-lg btn-primary">Sign up!</button>
                </div>
            </div>
        </form>;

    return (
        <>
            <Banner body={renderBannerBody()} title='Build a landing page for your business or project and generate more leads!'/>
            <IconGroup/>
            <ImageShowCase/>
            <Testimonials/>
            <CallToAction/>
        </>
    )
};

export default LandingPage;