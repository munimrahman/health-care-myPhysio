import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../Images/logo.png'
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light py-0">
                <div className="container-fluid px-3">
                    <Link className="navbar-brand pb-0" to="/">
                        <img src={logo} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto pe-3 mb-3 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blogs">Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/shop">Shop</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About Us
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link className="dropdown-item hover-color" to="/about-us">About Us</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item hover-color" to="#">Our Specialist</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item hover-color" to="#">FAQs</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item hover-color" to="#">Price List</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact-us">Contact Us</Link>
                            </li>
                            {user.email && <li className="nav-item dropdown fw-bold">
                                <Link className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="https://avatars.githubusercontent.com/u/53802153?v=4" className="user-img me-2" alt="" />
                                    {user.displayName}
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link className="dropdown-item hover-color" to="/">Your Profile</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item hover-color" to="/">Your Orders</Link>
                                    </li>
                                    <li>
                                        <button className="dropdown-item hover-color" onClick={logOut}>Sign Out <i className="fas fa-sign-out-alt fs-5 text-secondary"></i></button>
                                    </li>
                                </ul>
                            </li>}
                            {!user.email && <li className="nav-item">
                                <Link className="nav-link btn btn-outline-info shadow-none me-3 mb-1 ms-2 fw-bold sign-in-btn" to="/sign-in">Sign In</Link>
                            </li>}
                            {!user.email && <li className="nav-item">
                                <Link className="nav-link btn btn-info shadow-none fw-bold text-white" to="/sign-up">Sign Up <i className="fas fa-long-arrow-alt-right"></i></Link>
                            </li>}
                        </ul>
                    </div>
                </div >
            </nav >
        </div >
    );
};

export default Header;