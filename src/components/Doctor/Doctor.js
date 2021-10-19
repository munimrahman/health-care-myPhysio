import React from 'react';
import person from '../../Images/team_03.jpg'

const Doctor = () => {
    return (
        <div className="col-12 col-md-3 rounded shadow py-4  m-3">
            <span className="rating">
                <i className="fas fa-star text-info"></i> <span className="text-info">4.5</span>
            </span>
            <div className="d-flex flex-column align-items-center">
                <div className="team-img-size shadow">
                    <img src={person} className="img-fluid" alt="" />
                </div>
                <h3 className="mt-3">Dr. Nilla Roy</h3>
                <h5 className="fw-bold secondary-text">Gynecologist</h5>
                <p className="text-center">Aenean facilisis sodales est neciMorbi vitapurus on Est facilisisro convallis</p>
            </div>
            <hr />
            <div className="d-flex justify-content-center">
                <div className="border social-icon d-flex justify-content-center align-items-center">
                    <i className="fab fa-facebook  secondary-text"></i>
                </div>
                <div className="border social-icon d-flex justify-content-center align-items-center">
                    <i className="fas fa-envelope-open  secondary-text"></i>
                </div>
                <div className="border social-icon d-flex justify-content-center align-items-center">
                    <i className="fas fa-phone-alt secondary-text"></i>
                </div>
            </div>
        </div>
    );
};

export default Doctor;