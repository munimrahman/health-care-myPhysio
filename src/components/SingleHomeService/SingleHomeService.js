import React from 'react';
import { Link } from 'react-router-dom';
import physio3 from '../../Images/physio3.jpg'

const SingleHomeService = () => {
    return (
        <div className="col single-service">
            <div className="card h-100 shadow">
                <img src={physio3} className="card-img-top" alt="..." />
                <div className="card-body">
                    <Link className="text-decoration-none text-dark" to="/services/service">
                        <h4 className="card-title text-hover fw-bold">Physical Therapy</h4>
                    </Link>
                    <p className="card-text">Physical therapy is one of the major services which we offer. Our therapists works closely with patients to help them improve their movement potential and gain a healthier and more...</p>
                    {/* <h6 className="fw-bold secondary-text">Find Out More &gt;</h6> */}
                    <div className="text-center">
                        <Link to="/services/service">
                            <button className="btn text-white fw-bold font-nunito rounded-pill shadow-none btn-info">Find Out More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleHomeService;