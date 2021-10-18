import React from 'react';
import SingleHomeService from '../SingleHomeService/SingleHomeService';

const HomeServices = () => {
    return (
        <div className="services mt-5">
            <div className="row d-flex align-items-center mx-5">
                <h1 className="col-12 col-md-4 my-0">We <span className="font-nunito fw-bold">offer various <span className="secondary-text font-nunito">Physio Disciplines</span></span></h1>
                <p className="col-12 col-md-8 my-0">We are proud to offer a wide range of comprehensive services to meet the needs of adults, seniors, and pediatric patients. Our team of professional caregivers specialize in providing personalized medical care, rehabilitative therapy and companion assistance.</p>
            </div>
            <div className="container service row row-cols-1 row-cols-md-3 mt-4 mx-auto g-4">
                <SingleHomeService></SingleHomeService>
                <SingleHomeService></SingleHomeService>
                <SingleHomeService></SingleHomeService>
                <SingleHomeService></SingleHomeService>
                <SingleHomeService></SingleHomeService>
                <SingleHomeService></SingleHomeService>
            </div>
        </div>
    );
};

export default HomeServices;