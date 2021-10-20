import React from 'react';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';
import SideBar from '../SideBar/SideBar';
import BuyFromShop from '../BuyFromShop/BuyFromShop';
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
                    <SideBar></SideBar>
                </div>
            </div >
        </div >
    );
};

export default Service;