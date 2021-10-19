import React from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blogs = () => {
    return (
        <div>
            <div className="text-white section-header bg-linear text-center mb-5">
                <h1 className="fw-bold pt-5 font-size-custom">Blogs</h1>
                <h6 className="pb-5">Home &gt; Blogs</h6>
            </div>
            <div className="row container mx-auto service-details">
                <div className="row col-12 col-md-9">
                    <SingleBlog></SingleBlog>
                    <SingleBlog></SingleBlog>
                </div>
                {/* sidebar */}
                <div className="col-12 col-md-3">
                    <div>
                        <form class="d-flex">
                            <input class="form-control me-2 shadow-none" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-info text-white fw-bold">Search</button>
                        </form>
                    </div>
                    <div className="bg-info service-list mt-4 pb-4">
                        <h3 className="fw-bold text-white text-center pt-4">Our Services</h3>
                        <ul className="lh-lg list-unstyled text-decoration-underline ps-4 side-text-color fw-bold">
                            <li>View all Services</li>
                            <li>Chiropractic Therapy</li>
                            <li>Clinical Pilates</li>
                            <li>Massage Therapy</li>
                            <li>Physical Therapy</li>
                            <li>Sport Injuries</li>
                            <li>Work Injuries</li>
                        </ul>
                    </div>
                    <div className="mt-4 mb-5">
                        <h3 className="fw-bold text-center">Opening Hours</h3>
                        <div className="side-table p-2 rounded">
                            <table className="table">
                                <tbody className="">
                                    <tr>
                                        <td>Monday</td>
                                        <td className="text-end">9 AM-4 PM</td>
                                    </tr>
                                    <tr>
                                        <td>Tuesday</td>
                                        <td className="text-end">9 AM-4 PM</td>
                                    </tr>
                                    <tr>
                                        <td>Wednesday</td>
                                        <td className="text-end">9 AM-4 PM</td>
                                    </tr>
                                    <tr>
                                        <td>Thursday</td>
                                        <td className="text-end">9 AM-4 PM</td>
                                    </tr>
                                    <tr>
                                        <td>Friday</td>
                                        <td className="text-end">9 AM-4 PM</td>
                                    </tr>
                                    <tr>
                                        <td>Saturday</td>
                                        <td className="text-end">9 AM-4 PM</td>
                                    </tr>
                                    <tr>
                                        <td>Sunday</td>
                                        <td className="text-end"><span className="badge bg-dark">CLOSED</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Blogs;