import React from 'react';
import './ClientReviews.css'
import personOne from '../../Images/person-1.png'
import personTwo from '../../Images/person-2.png'
import personThree from '../../Images/person-3.png'

const ClientReview = () => {
    return (
        <div className="review py-5">
            <h1 className="text-center">What Our <span className="fw-bold secondary-text font-nunito">Clients say</span></h1>
            <p className="w-50 mx-auto text-center fs-5 pb-3">We are trusted by thousands of people of different ages and different professions! See What our clients say!</p>
            <div id="carouselExampleInterval" className="carousel slide w-75 mx-auto" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <p className="text-center lh-lg w-75 mx-auto">My physical therapist is excellent! The whole office is very friendly and helpful. Physio is absolutely outstanding. Thank you very much for your great, attentive service</p>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="hr-line border border-info w-25"></div>
                            <img src={personOne} className="d-block border border-3 border-info carousel-img mx-3" alt="..." />
                            <div className="hr-line border border-info w-25"></div>
                        </div>
                        <p className="text-center mt-3"><span className="fw-bold">Jennifer Ebron</span> -<small> Neck Pain Treatment</small></p>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <p className="text-center lh-lg w-75 mx-auto">All of the staff was fantastic! The care I received was impeccable. Great place! I also love the availability of the Fit Plan for continued support after my discharge</p>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="hr-line border border-info w-25"></div>
                            <img src={personTwo} className="d-block border border-3 border-info carousel-img mx-3" alt="..." />
                            <div className="hr-line border border-info w-25"></div>
                        </div>
                        <p className="text-center mt-3"><span className="fw-bold">Christopher Strock</span> -<small> Back Pain Treatment</small></p>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <p className="text-center lh-lg w-75 mx-auto">Everyone I worked with was wonderful, very professional, caring and prompt. My therapist was great, as were all of the aids!</p>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="hr-line border border-info w-25"></div>
                            <img src={personThree} className="d-block border border-3 border-info carousel-img mx-3" alt="..." />
                            <div className="hr-line border border-info w-25"></div>
                        </div>
                        <p className="text-center mt-3"><span className="fw-bold">John White</span> -<small> Work Injury Treatment</small></p>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default ClientReview;