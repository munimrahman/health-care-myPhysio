import React from 'react';
import './HomeContactInfo.css'

const HomeContactInfo = () => {
    return (
        <div className="row mx-5 shadow border-5 rounded m-5 py-3 d-flex">
            <div className="col-md-3 border-end py-3 d-flex align-items-center justify-content-center">
                <i className="fas fa-home icn-font"></i>
                <div className="mx-2">
                    <p className="text-color-gray my-0 fw-bold">Visit our Location</p>
                    <p className="text-color-gray my-0 fw-light">250 Main Street, New York</p>
                </div>
            </div>
            <div className="col-md-3 border-end py-3 d-flex align-items-center  d-flex align-items-center justify-content-center">
                <i className="fas fa-phone-alt icn-font"></i>
                <div className="mx-2">
                    <p className="text-color-gray my-0 fw-bold">Give us a Call</p>
                    <p className="text-color-gray my-0 fw-light">+ (12) 123 - 556 - 7890</p>
                </div>
            </div>
            <div className="col-md-3 border-end py-3 d-flex align-items-center justify-content-center">
                <i className="fas fa-envelope icn-font"></i>
                <div className="mx-2">
                    <p className="text-color-gray my-0 fw-bold">Send us a Message</p>
                    <p className="text-color-gray my-0 fw-light">info@physiotherapy.com</p>
                </div>
            </div>
            <div className="col-md-3 py-3 d-flex align-items-center justify-content-center">
                <i className="fas fa-clock icn-font"></i>
                <div className="mx-2">
                    <p className="text-color-gray my-0 fw-bold">Opening Hours</p>
                    <p className="text-color-gray my-0 fw-light">Mon - Friday: 8AM - 5PM</p>
                </div>
            </div>
        </div>
    );
};

export default HomeContactInfo;