import React from 'react';
import './AdvantagesAndAsk.css'

const AdvantagesAndAsk = () => {
    return (
        <div className="mx-3">
            <div className="mt-3 mb-5">
                <h1 className="mb-4 text-center">Our <span className="fw-bold font-nunito secondary-text">Advantages</span></h1>
                <div className="row justify-content-center">
                    <div className="advantages-div row col-12 col-md-3 d-flex align-items-center justify-content-center shadow m-2 py-3 rounded px-3">
                        <div className="col-md-2 icn-div text-center">
                            <i className="fas fa-briefcase-medical advantages-icn-font"></i>
                        </div>
                        <div className="ps-4 col-md-10 mt-3">
                            <h6 className="fw-bold mt-0 mb-2">Personalized Treatment</h6>
                            <p className="my-0">You will receive a full individualized treatment</p>
                        </div>
                    </div>
                    <div className="advantages-div row col-12 col-md-3 d-flex align-items-center justify-content-center shadow m-2 py-3 rounded px-3">
                        <div className="col-md-2 icn-div text-center">
                            <i className="fas fa-id-badge advantages-icn-font"></i>
                        </div>
                        <div className="ps-4 col-md-10 mt-3">
                            <h6 className="fw-bold mt-0 mb-2">Licensed Therapists</h6>
                            <p className="my-0">Your treatment will be performed by only licensed therapists</p>
                        </div>
                    </div>
                    <div className="advantages-div row col-12 col-md-3 d-flex align-items-center justify-content-center shadow m-2 py-3 rounded px-3">
                        <div className="col-md-2 icn-div text-center">
                            <i className="fas fa-clinic-medical advantages-icn-font"></i>
                        </div>
                        <div className="ps-4 col-md-10 mt-3">
                            <h6 className="fw-bold mt-0 mb-2">Comfortable Clinic</h6>
                            <p className="my-0">Our clinic feels like a comfortable health & fitness center</p>
                        </div>
                    </div>
                    <div className="advantages-div row col-12 col-md-3 d-flex align-items-center justify-content-center shadow m-2 py-3 rounded px-3">
                        <div className="col-md-2 icn-div text-center">
                            {/* <i className="fas fa-hospital-user advantages-icn-font"></i> */}
                            <i className="fas fa-user-check advantages-icn-font"></i>
                        </div>
                        <div className="ps-4 col-md-10 mt-3">
                            <h6 className="fw-bold mt-0 mb-2">Experience Staff</h6>
                            <p className="my-0">Our therapists are trained and certified in therapy technique</p>
                        </div>
                    </div>
                    <div className="advantages-div row col-12 col-md-3 d-flex align-items-center justify-content-center shadow m-2 py-3 rounded px-3">
                        <div className="col-md-2 icn-div text-center">
                            <i className="fas fa-network-wired advantages-icn-font"></i>
                        </div>
                        <div className="ps-4 col-md-10 mt-3">
                            <h6 className="fw-bold mt-0 mb-2">Practitioners Network</h6>
                            <p className="my-0">We will work closely with all your health practitioners</p>
                        </div>
                    </div>
                    <div className="advantages-div row col-12 col-md-3 d-flex align-items-center justify-content-center shadow m-2 py-3 rounded px-3">
                        <div className="col-md-2 icn-div text-center">
                            <i className="fas fa-bullseye advantages-icn-font"></i>
                        </div>
                        <div className="ps-4 col-md-10 mt-3">
                            <h6 className="fw-bold mt-0 mb-2">Therapy Goals</h6>
                            <p className="my-0">Setting goals is the best way to enjoy a successful outcome</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvantagesAndAsk;