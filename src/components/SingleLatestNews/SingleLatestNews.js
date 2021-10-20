import React from 'react';
import { Link } from 'react-router-dom';

const SingleLatestNews = (props) => {
    const { title, img, para1 } = props.news;
    return (
        <div className="col">
            <div className="card h-100 shadow">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <Link className="text-info text-decoration-none" to="/blogs/blog-post">
                        <h6 className="card-title fw-bold line-height">{title}</h6>
                    </Link>
                    <p className="card-text">{para1.slice(0, 141)}...</p>
                    <Link className="text-decoration-none fw-bold secondary-text" to="/blogs/blog-post">Read Post &gt;</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleLatestNews;