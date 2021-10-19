import React from 'react';
import './SingleBlog.css'

const SingleBlog = () => {
    return (
        <div className="col-12 col-md-12 rounded single-blog-bg mb-4 pb-4 px-0">
            <img src="https://demos.qreativethemes.com/physio/wp-content/uploads/sites/3/2016/01/physio_005.jpg" className="img-fluid rounded" alt="" />
            <div className="mt-4 px-4">
                <div className="fs-5 text-secondary fw-bold">
                    <small className="px-3">By <span>Writer Name</span></small>
                    <span>&#47;</span>
                    <small className="px-3">0 Comments</small>
                    <span>&#47;</span>
                    <small className="px-3">Tags, Tags, Tags</small>
                    <span>&#47;</span>
                    <small className="px-3">Category</small>
                </div>
                <hr />
                <h1 className="fs-2 fw-bold blog-title py-3">Identifying And Treating Pain From Nerve Tension</h1>
                <p>Nerve tension is pain that occurs because a nerve is being compressed or stuck in its surrounding tissue which prevents it from moving within its tract like it normally does. This can happen for a variety of reasons. If a joint has been immobile for a period of time it increases the risk that a nerve can get a little stuck</p>
                <p className="fw-bold secondary-text text-decoration-underline">Read More</p>
            </div>
        </div>
    );
};

export default SingleBlog;