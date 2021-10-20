import React from 'react';
import { Link } from 'react-router-dom';
import './Doctors.css'

const Doctor = (props) => {
    const { id, name, img, position, des } = props.doctor;
    const url = `doctors/${id}`
    return (
        <div className="col-12 col-md-3 rounded shadow py-4  m-3">
            <span className="rating">
                <i className="fas fa-star text-info"></i> <span className="text-info">4.5</span>
            </span>
            <div className="d-flex flex-column align-items-center">
                <div className="team-img-size shadow">
                    <img src={img} className="img-fluid doctor-img" alt="" />
                </div>
                <h3 className="mt-3">{name}</h3>
                <h5 className="fw-bold secondary-text">{position}</h5>
                <p className="text-center">{des} <Link to={url} className="text-info">Read More</Link></p>
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