import React from 'react';
import './ShortStory.css'
import ShortStoryImg from '../../Images/about-img.jpg'
import { Link } from 'react-router-dom';

const ShortStory = () => {
    return (
        <>
            <h1 className="text-center mt-5">Short Story <span className="font-nunito fw-bold">About <br /><span className="font-nunito fw-bold secondary-text">My Physio</span></span></h1>
            <div className="my-5 row shadow mx-auto w-75 p-2">
                <div className="col-12 col-md-6 p-0 story-bg">
                    <img src={ShortStoryImg} className="img-fluid" alt="" />
                </div>
                <div className="col-12 col-md-6 p-0 story-bg py-5 px-4">
                    <p className="line-height">Our team of highly professionals uses the latest technologies to restore you to health, quickly and easily. We thoroughly evaluate root factors related to your issue. </p>
                    <p className="line-height"> This includes, but is not limited to, your work and home stressors, nutrition, that are held in your muscles <Link className="secondary-text fw-bold" to="about-us">Read More</Link></p>
                    <div className="container row g-3 mx-auto justify-content-center mt-5">
                        <div className="col-12 col-md-5 d-flex flex-column align-items-center bg-patients py-3 rounded mx-2">
                            <h2 className="my-0">1000+</h2>
                            <p className="my-0">Happy Patients</p>
                        </div>
                        <div className="col-12 col-md-5 d-flex flex-column align-items-center bg-doctors py-3 rounded mx-2">
                            <h2 className="my-0">150+</h2>
                            <p className="my-0">Expert Doctors</p>
                        </div>
                        <div className="col-12 col-md-5 d-flex flex-column align-items-center bg-rooms py-3 rounded mx-2">
                            <h2 className="my-0">200+</h2>
                            <p className="my-0">Hospital Rooms</p>
                        </div>
                        <div className="col-12 col-md-5 d-flex flex-column align-items-center bg-award py-3 rounded mx-2">
                            <h2 className="my-0">100+</h2>
                            <p className="my-0">Award Winner</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShortStory;