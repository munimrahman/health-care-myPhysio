import React from 'react';
import { Link } from 'react-router-dom';
import useBlogs from '../../hooks/useBlog';
import SingleLatestNews from '../SingleLatestNews/SingleLatestNews';

const LatestNews = () => {
    // latest news section of home, show news from blog
    const blogs = useBlogs()
    return (
        <div className="row m-5">
            <div className="col-12 col-md-3 mb-3">
                <h1>Latest <span className="fw-bold secondary-text font-nunito">News and Research</span></h1>
                <p>Find out the latest news about our Physiotherapy Clinic and information about all your Physiotherapy and health related needs.</p>
                <p>We are always happy to hear what you have to say so be sure to leave a comment.</p>
                <Link to="/blogs">
                    <button className="btn btn-info rounded-pill text-white fw-bold shadow-none">Read all News</button>
                </Link>
            </div>
            <div className="col-12 col-md-9">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        blogs.map(blog => <SingleLatestNews
                            key={blog.id}
                            news={blog}
                        ></SingleLatestNews>)
                    }
                </div>
            </div>
        </div>
    );
};

export default LatestNews;