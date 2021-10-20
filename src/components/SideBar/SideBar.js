import React from 'react';

const SideBar = () => {
    // side bar
    return (
        <>
            <div>
                <form className="d-flex">
                    <input className="form-control me-2 shadow-none" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-info text-white fw-bold shadow-none">Search</button>
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
            <div className="mt-4 mb-4">
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
        </>
    );
};

export default SideBar;