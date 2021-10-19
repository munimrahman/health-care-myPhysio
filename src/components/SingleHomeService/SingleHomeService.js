import React from 'react';
import { Link } from 'react-router-dom';

const SingleHomeService = (props) => {
    const { id, title, para1, img1 } = props.service;
    const url = `/services/${id}`
    return (
        <div className="col single-service">
            <div className="card h-100 shadow">
                <img src={img1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <Link className="text-decoration-none text-dark" to="/services/service">
                        <h4 className="card-title text-hover fw-bold">{title}</h4>
                    </Link>
                    <p className="card-text">{para1.slice(1, 180)}...</p>
                    <div className="text-center">
                        <Link to={url}>
                            <button className="btn text-white fw-bold font-nunito rounded-pill shadow-none btn-info">Find Out More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleHomeService;