import React from 'react';
import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <div className="news-letter py-5">
            <h3 className="fw-bold text-center text-white lh-lg">No matter whether your condition was caused by a sport, work <br /> accident or otherwise, we welcome the chance to serve you.</h3>
            <h3 className="text-white text-center fw-bold pb-2">Subscribe Our <span className="secondary-text font-nunito">News Letter</span></h3>
            <div className="input-group mb-3 w-50 mx-auto">
                <input type="text" className="form-control shadow-none" placeholder="your email address" aria-label="your email address" aria-describedby="button-addon2" />
                <button className="btn btn-outline-info shadow-none text-white fw-bold" type="button" id="button-addon2">Subscribe</button>
            </div>
        </div>
    );
};

export default NewsLetter;