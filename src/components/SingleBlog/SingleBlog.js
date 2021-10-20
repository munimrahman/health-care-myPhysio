import React from 'react';
import { Link } from 'react-router-dom';
import './SingleBlog.css'

const SingleBlog = (props) => {
    // This is blog post page
    const { id, title, img, para1, author, date, tags } = props.blog || {};
    const url = `/blogs/${id}`;
    return (
        <div className="col-12 col-md-12 rounded single-blog-bg mb-4 pb-4 px-0">
            <img src={img} className="img-fluid rounded" alt="" />
            <div className="mt-4 px-4">
                <div className="fs-5 text-secondary fw-bold">
                    <small className="px-3">By <span className="secondary-text">{author}</span></small>
                    <span>&#47;</span>
                    <small className="px-3">{date}</small>
                    <span>&#47;</span>
                    <small className="px-3">0 Comments</small>
                    <span>&#47;</span>
                    <small className="px-3">{tags}</small>
                </div>
                <hr />
                <h1 className="fs-2 fw-bold blog-title py-3">{title}</h1>
                <p>{para1}</p>
                <Link to={url}>
                    <p className="fw-bold secondary-text text-decoration-underline">Read More</p></Link>
            </div>
        </div>
    );
};

export default SingleBlog;