import React from 'react';
import aboutImg from '../../Images/about_us.jpg'
import Doctor from '../Doctor/Doctor';

const AboutUs = () => {
    return (
        <div>
            <div className="text-white section-header bg-linear text-center mb-5">
                <h1 className="fw-bold pt-5 font-size-custom">About Us</h1>
                <h6 className="pb-5">Home &gt; About Us</h6>
            </div>
            <div className="row container mx-auto">
                <div className="col-12 col-md-4">
                    <h1>Our <span className="fw-bold secondary-text font-nunito">Vision</span></h1>
                    <p className="service-font-size">To be a company that attracts, rewards, and retains highly skilled physical therapy staff. Our proactive approach to the development of best business practices and promotion of effective treatment methods will help us accomplish this.</p>
                    <h1>Our <span className="fw-bold secondary-text font-nunito">Philosophy</span></h1>
                    <p className="service-font-size">Physio Physical Therapy is committed to providing high quality outpatient physical therapy services in beautiful state-of-the-art facilities.</p>
                    <p className="service-font-size">As a healthcare leader we partner with groups and events within the communities we serve. Our focus on our physical therapists continuing education is unmatched and guarantees our physical therapists understand and put into practice cutting-edge treatments and rehabilitation techniques available for all types of injuries and conditions.</p>
                </div>
                <div className="col-12 col-md-4">
                    <h1>Our <span className="fw-bold secondary-text font-nunito">Mission</span></h1>
                    <p className="service-font-size">We are committed as primary healthcare professionals to help our clients resume their lifelong pursuit of health, fitness, and well-being.</p>
                    <h6 className="fw-bold text-info">High Quality</h6>
                    <p className="service-font-size">We take a goal-oriented approach to healing. Whatever your goals might be we want to help you achieve them</p>
                    <h6 className="fw-bold text-info">Patient Care</h6>
                    <p className="service-font-size">We’ll provide hands-on treatment in the office and education you can take home with you, enabling you to become an active participant in your recovery and future physical health.</p>
                    <h6 className="fw-bold text-info">Professional Service</h6>
                    <p className="service-font-size">Our five physical therapists have a combined 120 years of clinical experience and a shared passion for helping our community stay active.</p>

                </div>
                <div className="col-12 col-md-4 mb-3">
                    <img src={aboutImg} className="img-fluid rounded" alt="" />
                </div>
                <hr />
            </div>
            <h1 className="text-center my-3">Our <span className="fw-bold secondary-text font-nunito">Therapists</span></h1>
            <div className="container row mx-auto justify-content-center mb-5">
                <Doctor></Doctor>
                <Doctor></Doctor>
                <Doctor></Doctor>
                <Doctor></Doctor>
                <Doctor></Doctor>
                <div className="col-12 col-md-3 rounded shadow py-4 bg-info m-3 px-4 text-white">
                    <h2 className="text-center text-white">We're <span className="fw-bold font-nunito">Hiring</span></h2>
                    <p className="line-height">If you're a Physical therapist looking to take your career to the next level, explore all the Physical Therapy career opportunities.</p>
                    <p className="line-height">We’re looking for candidates who are ready to bring their expertise to our team and strive to provide the very best service to our clients.</p>
                    <p className="text-center fw-bold fs-5 text-decoration-underline">Apply Now</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;