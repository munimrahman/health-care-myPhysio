import React from 'react';
import comingSoonImg from '../../Images/coming-soon.png'

const Shop = () => {
    return (
        <div>
            <div className="text-white section-header bg-linear text-center">
                <h1 className="fw-bold pt-5 font-size-custom">Shop</h1>
                <h6 className="pb-5">Home &gt; Shop</h6>
            </div>
            <div className="e-75 d-flex justify-content-center">
                <img src={comingSoonImg} className="img-fluid mx-auto" alt="" />
            </div>
        </div>
    );
};

export default Shop;