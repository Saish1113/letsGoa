import React from 'react';
import './AboutUs1.css';
import VMC from './Vmc';
import Footer from './Footer'

function AboutUS1() {
    return (
        <div id="abt_1">
            <section className="py-4 bg-info">
                <div className="container">
                <div className="row">
                    <div className="col-md-4 my-auto">
                        <h4> About US </h4>
                        </div>
                        <div className="col-md-8 my-auto">
                        <h6 className="float-end">
                            Home / About Us
                        </h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-c-light border-bottom">
                <div className="container">
                    <h5 className="main-heading">TRAVEL AND TOURISM WEBSITE
</h5>
                    <div className="underline"></div>
                    <p>
                    The ‘Plan-It:Goa Trip Planner” has been developed to override the problems prevailing in the practicing manual system.This software is supported to eliminate and in some cases reduce the hardships faced by this existing system.

In the existing system the user has to compulsorily follow the itinerary that a package of a particular website offers.The user has no freedom to plan his/her itinerary.

Our main objective is to create a website where the user will be able to plan his trip/tour according to his choices and the website will offer him a complete itinerary of his day-to-day activities.

                    </p>
                </div>
            </section>

            {/* Our Vision Mission and values */}
            <VMC />
            <Footer/>


        </div>

);
}



    export default AboutUS1;