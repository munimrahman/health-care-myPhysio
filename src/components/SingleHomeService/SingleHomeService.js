import React from 'react';
import { Link } from 'react-router-dom';
import physio3 from '../../Images/physio3.jpg'

const SingleHomeService = () => {
    return (
        <div class="col single-service">
            <div class="card h-100 shadow">
                <img src={physio3} class="card-img-top" alt="..." />
                <div class="card-body">
                    <Link className="text-decoration-none text-dark" to="/services/service">
                        <h4 class="card-title text-hover fw-bold">Physical Therapy</h4>
                    </Link>
                    <p class="card-text">Physical therapy is one of the major services which we offer. Our therapists works closely with patients to help them improve their movement potential and gain a healthier and more...</p>
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