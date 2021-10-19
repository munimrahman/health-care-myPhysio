import React from 'react';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';
import './Service.css'

const Service = () => {
    const { serviceID } = useParams();
    const services = useServices();
    const service = services.filter(service => service.id === serviceID)
    const { title, subtitle1, subtitle2, para1, para2, para3, para4, img1, img2 } = service[0] || {};
    return (
        <div>
            <div className="text-white section-header bg-linear text-center mb-5">
                <h1 className="fw-bold pt-5 font-size-custom">{title}</h1>
                <h6 className="pb-5">Home &gt; Service &gt; {title}</h6>
            </div>
            <div className="row container mx-auto service-details">
                <div className="row col-12 col-md-9">
                    <div className="col-12 col-md-6">
                        <img src={img1} className="img-fluid rounded pb-3" alt="" />
                    </div>
                    <div className="col-12 col-md-6">
                        <h6 className="fw-bold text-info fs-5">{subtitle1}</h6>
                        <p className="service-font-size">{para1}</p>
                        <p className="service-font-size">{para2}</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <h6 className="fw-bold text-info fs-5">{subtitle2}</h6>
                        <p className="service-font-size">{para3}</p>
                        <p className="service-font-size">{para4}</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <img src={img2} className="img-fluid rounded pb-3" alt="" />
                    </div>
                    {/* price table */}
                    <div>
                        <h2 className="text-center pt-4 pb-2">Price List for Service Details</h2>
                        <table class="table">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">Type</th>
                                    <th scope="col">Session</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Get Service</th>
                                </tr>
                            </thead>
                            <tbody className="price-table-text">
                                <tr>
                                    <th scope="row">Evaluation</th>
                                    <td>60 minutes</td>
                                    <td>$180</td>
                                    <td><button className="btn btn-info fw-bold py-1 text-white">Book</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">Follow-up Visit</th>
                                    <td>45-60 minutes</td>
                                    <td>$110 per visit</td>
                                    <td><button className="btn btn-info fw-bold py-1 text-white">Book</button></td>
                                </tr>
                                <tr className="">
                                    <th scope="row">Extended Follow-up Visit</th>
                                    <td>60-75 minutes</td>
                                    <td>$180 per visit</td>
                                    <td><button className="btn btn-info fw-bold py-1 text-white">Book</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* sidebar */}
                <div className="col-12 col-md-3">
                    <div>
                        <form class="d-flex">
                            <input class="form-control me-2 shadow-none" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-info text-white fw-bold shadow-none">Search</button>
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
        </div >
    );
};

export default Service;