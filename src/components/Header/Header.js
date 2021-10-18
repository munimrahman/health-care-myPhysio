import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light py-0">
                <div class="container-fluid px-3">
                    <Link class="navbar-brand pb-0" to="/">
                        <img src={logo} alt="" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/services">Services</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/blogs">Blogs</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/shop">Shop</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About Us
                                </Link>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link class="dropdown-item hover-color" to="/about-us">About Us</Link>
                                    </li>
                                    <li>
                                        <Link class="dropdown-item hover-color" to="#">Our Specialist</Link>
                                    </li>
                                    <li>
                                        <Link class="dropdown-item hover-color" to="#">FAQs</Link>
                                    </li>
                                    <li>
                                        <Link class="dropdown-item hover-color" to="#">Price List</Link>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contact-us">Contact Us</Link>
                            </li>
                            <li class="nav-item dropdown fw-bold">
                                <Link class="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="https://avatars.githubusercontent.com/u/53802153?v=4" className="user-img me-2" alt="" />
                                    User Name
                                </Link>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link class="dropdown-item hover-color" to="/">Your Profile</Link>
                                    </li>
                                    <li>
                                        <Link class="dropdown-item hover-color" to="/">Your Orders</Link>
                                    </li>
                                    <li>
                                        <Link class="dropdown-item hover-color" to="/">Sign Out <i class="fas fa-sign-out-alt fs-5 text-secondary"></i></Link>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contact-us">Sign In</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contact-us">Sign Up <i class="fas fa-long-arrow-alt-right"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div >
            </nav >
        </div >
    );
};

export default Header;