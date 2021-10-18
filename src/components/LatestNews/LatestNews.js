import React from 'react';
import { Link } from 'react-router-dom';
import news1 from '../../Images/news1.jpg'
import news2 from '../../Images/news2.jpg'
import news3 from '../../Images/news3.jpg'

const LatestNews = () => {
    return (
        <div className="row m-5">
            <div className="col-12 col-md-3 mb-3">
                <h1>Latest <span className="fw-bold secondary-text font-nunito">News and Research</span></h1>
                <p>Find out the latest news about our Physiotherapy Clinic and information about all your Physiotherapy and health related needs.</p>
                <p>We are always happy to hear what you have to say so be sure to leave a comment.</p>
                <button className="btn btn-info rounded-pill text-white fw-bold shadow-none">Read all News</button>
            </div>
            <div className="col-12 col-md-9">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card h-100 shadow">
                            <img src={news1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <Link className="text-info text-decoration-none" to="">
                                    <h6 class="card-title fw-bold line-height">Identifying And Treating Pain From Nerve Tension</h6>
                                </Link>
                                <p class="card-text">Nerve tension is pain that occurs because a nerve is being compressed or stuck in its surrounding tissue which prevents...</p>
                                <Link className="text-decoration-none fw-bold secondary-text" to="">Read Post &gt;</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 shadow">
                            <img src={news2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <Link className="text-info text-decoration-none" to="">
                                    <h6 class="card-title fw-bold line-height">Therapy Found Effective for Carpal Tunnel Syndrome</h6>
                                </Link>
                                <p class="card-text">Customized physical therapy may be a useful way to ease low back pain, which affects an estimated 31 million Americans...</p>
                                <Link className="text-decoration-none fw-bold secondary-text" to="">Read Post &gt;</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 shadow">
                            <img src={news3} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <Link className="text-info text-decoration-none" to="">
                                    <h6 class="card-title fw-bold line-height">Myth: Physical Therapy is only for Injuries and Accidents</h6>
                                </Link>
                                <p class="card-text">Physical therapists do a lot more than just stretch or strengthen weak muscles after an injury or surgery. They are...</p>
                                <Link className="text-decoration-none fw-bold secondary-text" to="">Read Post &gt;</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LatestNews;