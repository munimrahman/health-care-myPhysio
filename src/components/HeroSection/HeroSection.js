import React from 'react';
import img1 from '../../Images/HeroImages/1.png'
import img2 from '../../Images/HeroImages/2.png'
import img3 from '../../Images/HeroImages/3.png'

const HeroSection = () => {
    return (
        // home page hero section, its bootstrap slider
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row d-flex container mx-auto align-items-center">
                            <div className="col-md-6">
                                <small className="secondary-text fw-bold">HELPING YOU LIVE LIFE</small>
                                <h1 className="py-3 lh-base">We Offer Highly <br /><span className="font-nunito fw-bold secondary-text">Specialized Treatments</span></h1>
                                <button className="btn btn-info rounded-pill fw-bold text-white">More About Us</button>
                            </div>
                            <div className="col-md-6">
                                <img src={img1} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row d-flex container mx-auto align-items-center">
                            <div className="col-md-6">
                                <small className="secondary-text fw-bold">SUPERIOR EXPERTISE</small>
                                <h1 className="py-3 lh-base">We’ve Been In Business <br /><span className="font-nunito fw-bold secondary-text">Since 1996</span></h1>
                                <button className="btn btn-info rounded-pill fw-bold text-white">Book Appointment</button>
                            </div>
                            <div className="col-md-6">
                                <img src={img2} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row d-flex container mx-auto align-items-center">
                            <div className="col-md-6">
                                <small className="secondary-text fw-bold">GOAL-ORIENTED APPROACH</small>
                                <h1 className="py-3 lh-base">A Practice Built On <br /><span className="font-nunito fw-bold secondary-text">Honesty & Integrity</span></h1>
                                <button className="btn btn-info rounded-pill fw-bold text-white">Get in Touch</button>
                            </div>
                            <div className="col-md-6">
                                <img src={img3} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default HeroSection;