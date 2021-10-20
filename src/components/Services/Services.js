import React from 'react';
import useServices from '../../hooks/useServices';
import SingleHomeService from '../SingleHomeService/SingleHomeService';
import BuyFromShop from '../BuyFromShop/BuyFromShop';

const Services = () => {
    // this is services page
    const services = useServices();
    return (
        <div>
            <div className="text-white section-header bg-linear text-center mb-5">
                <h1 className="fw-bold pt-5 font-size-custom">Services</h1>
                <h6 className="pb-5">Home &gt; About Us</h6>
            </div>
            <div className="container service row row-cols-1 row-cols-md-3 mt-4 mx-auto g-4 mb-5">
                {
                    services.map(service => <SingleHomeService
                        key={service.id}
                        service={service}
                    ></SingleHomeService>)
                }
            </div>
            <BuyFromShop></BuyFromShop>
        </div>
    );
};

export default Services;