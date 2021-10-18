import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="footer-main pt-3">
                <div className="mx-5 row py-3">
                    <div className="col-12 col-md-3 d-flex justify-content-center align-items-center py-3">
                        <i className="fab fa-facebook-square fs-2 px-3 footer-icn-font"></i>
                        <i className="fab fa-twitter-square fs-2 px-3 footer-icn-font"></i>
                        <i className="fab fa-linkedin fs-2 px-3 footer-icn-font"></i>
                        <i className="fab fa-youtube fs-2 px-3 footer-icn-font"></i>

                    </div>
                    <div className="col-12 col-md-3 d-flex align-items-center py-3">
                        <i className="fas fa-map-marker-alt footer-icn-font"></i>
                        <div className="px-4">
                            <h5 className="fw-bold footer-title-color">Visit Our Location</h5>
                            <p className="m-0">250 Main Street, New York</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 d-flex align-items-center py-3">
                        <i className="fas fa-phone-alt footer-icn-font"></i>
                        <div className="px-4">
                            <h5 className="fw-bold footer-title-color">Give us a Call</h5>
                            <p className="m-0">+ (12) 123 - 456 -789</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 d-flex align-items-center py-3">
                        <i className="fas fa-envelope footer-icn-font"></i>
                        <div className="px-4">
                            <h5 className="fw-bold footer-title-color">Send us a Message</h5>
                            <p className="m-0">info@physiotherapy.com</p>
                        </div>
                    </div>

                </div>
                <hr className="text-white container" />
                <div className="mx-5 py-5 row">
                    <div className="py-2 col-12 col-md-3">
                        <h4 className="fw-bold pb-3 footer-title-color">About Us</h4>
                        <p>Physio is a premium WordPress theme designed & build for physical therapy and rehabilitation clinics. The theme have a drag and drop page builder, is fully customizable and responsive. Only available on ThemeForest.</p>
                        <button className="btn btn-info rounded-pill shadow-none fw-bold text-white">Learn More</button>
                    </div>
                    <div className="py-2 col-12 col-md-3">
                        <h4 className="fw-bold pb-3 footer-title-color">Important Links</h4>
                        <ul className="lh-lg list-unstyled text-decoration-underline">
                            <li>About Us</li>
                            <li>FAQ Page</li>
                            <li>Price List</li>
                            <li>Careers</li>
                            <li>Single Therapist</li>
                            <li>Single Locations</li>
                            <li>Book Appointment</li>
                        </ul>
                    </div>
                    <div className="py-2 col-12 col-md-3">
                        <h4 className="fw-bold pb-3 footer-title-color">Our Services</h4>
                        <ul className="lh-lg list-unstyled text-decoration-underline">
                            <li>View all Services</li>
                            <li>Chiropractic Therapy</li>
                            <li>Clinical Pilates</li>
                            <li>Massage Therapy</li>
                            <li>Physical Therapy</li>
                            <li>Sport Injuries</li>
                            <li>Work Injuries</li>
                        </ul>
                    </div>
                    <div className="py-2 col-12 col-md-3">
                        <h4 className="fw-bold pb-3 footer-title-color">Opening Hours</h4>
                        <table className="table w-75">
                            <tbody>
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
            <div className="bg-dark py-3 text-color-gray text-center">
                <Link className="text-color-gray p-3" to="/">Privacy</Link>
                <Link className="text-color-gray p-3" to="/">Terms</Link>
                <Link className="text-color-gray p-3" to="/">Sitemap</Link>
                <br />
                <small>Copyright © 2021 My Physio. All Right Reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;