import React from 'react';
import img1 from '../../Images/HeroImages/1.png'
import img2 from '../../Images/HeroImages/2.png'
import img3 from '../../Images/HeroImages/3.png'

const HeroSection = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="row d-flex container mx-auto align-items-center">
                            <div className="col-md-6">
                                <p>HELPING YOU LIVE LIFE</p>
                                <h2>We offer highly specialized treatments</h2>
                                <button className="btn btn-info rounded-pill">More About Us</button>
                            </div>
                            <div className="col-md-6">
                                <img src={img1} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="row d-flex container mx-auto align-items-center">
                            <div className="col-md-6">
                                <p>SUPERIOR EXPERTISE</p>
                                <h2>We’ve been in business since 1996</h2>
                                <button className="btn btn-info rounded-pill">Book Appointment</button>
                            </div>
                            <div className="col-md-6">
                                <img src={img2} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="row d-flex container mx-auto align-items-center">
                            <div className="col-md-6">
                                <p>GOAL-ORIENTED APPROACH</p>
                                <h2>A practice built on honesty and integrity</h2>
                                <button className="btn btn-info rounded-pill">Get in Touch</button>
                            </div>
                            <div className="col-md-6">
                                <img src={img3} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default HeroSection;