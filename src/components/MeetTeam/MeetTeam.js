import './MeetTeam.css'

import React from 'react';
import Doctor from '../Doctor/Doctor';
import useDoctors from '../../hooks/useDoctors';

const MeetTeam = () => {
    const doctors = useDoctors();
    return (
        <div className="my-5">
            <h1 className="text-center fw-bold mb-4">We Are Happy <span className="font-nunito secondary-text">To Help You</span></h1>
            <div className="container row mx-auto justify-content-center">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
            </div>
        </div>
    );
};

export default MeetTeam;