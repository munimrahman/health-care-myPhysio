import React from 'react';
import { useParams } from 'react-router';
import useDoctors from '../../hooks/useDoctors';
import doctorImg1 from '../../Images/doctors-profile-1.jpg'
import doctorImg2 from '../../Images/doctors-profile-2.jpg'

const DoctorsProfile = () => {
    const { doctorID } = useParams();
    const doctors = useDoctors();
    const doctor = doctors.filter(doctor => doctor.id === doctorID)
    const { name } = doctor[0] || {};
    return (
        <div>
            <div className="text-white section-header bg-linear text-center mb-5">
                <h1 className="fw-bold pt-5 font-size-custom">Doctors Profile: {name}</h1>
                <h6 className="pb-5">Home &gt; Doctors Profile: {name}</h6>
            </div>
            <div className="row container mx-auto">
                <div className="row col-12 col-md-9">
                    <div className="col-12 col-md-6">
                        <div className="mb-2">
                            <img src={doctorImg1} className="img-fluid rounded" alt="" />
                        </div>
                        <div className="mb-2">
                            <img src={doctorImg2} className="img-fluid rounded" alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <p className="service-font-size">Kristina opened Physio Physical Therapy in 2006 with the intention of creating a practice that would combine the best of traditional physical therapy with the principles and techniques of osteopathic manual therapy.</p>
                        <p className="service-font-size">With over 20 years of clinical experience, Kristina's practice follows the philosophy that therapy is most successful when people are treated as whole human beings, not as individual parts, and her work is focused on finding and treating the root causes.</p>
                        <h6 className="fw-bold text-info">Education</h6>
                        <p className="service-font-size">Kristina, PT, DPT, graduated from Physio University as a Physical Therapist with a Doctorate in Physical Therapy. Kristina has experiences and interest in outpatient orthopedics physical therapy and sport rehabilitation.</p>
                        <h6 className="fw-bold text-info">Career</h6>
                        <p className="service-font-size">Physical therapist at the Hospital, in private practice, and at Physio University. Adjunct faculty member at Physio University and Physical University, teaching both physical therapy and athletic training courses.</p>
                        <h6 className="fw-bold text-info">Professional Achievements</h6>
                        <p className="service-font-size">Coordinator of Clinical Education and oversees both the volunteer aide and graduate student intern programs. Member of the International Association of Dance Medicine and Science and has an active interest in the growth of the greater dance medicine community.</p>
                        <h6 className="fw-bold text-info">Therapist Qualifications</h6>
                        <ul>
                            <li className="service-font-size">Graduate Diploma in Physical Therapy</li>
                            <li className="service-font-size">Member NZ College of Physiotherapists</li>
                            <li className="service-font-size">Graduate Diploma in Manipulative Therapy</li>
                            <li className="service-font-size">Postgraduate Diploma in Rehabilitation</li>
                            <li className="service-font-size">Registered Physiotherapy Acupuncturist</li>
                        </ul>
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
            </div>
        </div>
    );
};

export default DoctorsProfile;