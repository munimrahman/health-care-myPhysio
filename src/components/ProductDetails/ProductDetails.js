import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../../hooks/useProduct';
import './ProductDetails.css'

const ProductDetails = () => {
    const { productID } = useParams();
    const products = useProducts();
    const product = products.filter(product => product.id === productID);
    const { id, name, price, img, des } = product[0] || {};
    return (
        <div>
            <div className="text-white section-header bg-linear text-center">
                <h1 className="fw-bold pt-5 font-size-custom">Shop</h1>
                <h6 className="pb-5">Home &gt; {name}</h6>
            </div>
            <div className="my-5">
                <div className="container row mx-auto">
                    <div className="col-12 col-md-6 mb-3">
                        <img src={img} className="img-fluid rounded" alt="" />
                    </div>
                    <div className="col-12 col-md-6">
                        <h1 className="fw-bold text-light-dark">{name}</h1>
                        <div className="my-2">
                            <i class="fas fa-star text-info"></i>
                            <i class="fas fa-star text-info"></i>
                            <i class="fas fa-star text-info"></i>
                            <i class="fas fa-star text-info"></i>
                            <i class="far fa-star text-info"></i>
                            <span className="ps-2 text-color-gray">(4 customer reviews)</span>
                        </div>
                        <p className="fw-bold fs-3 text-info">Price: ${price}.00</p>
                        <p className="service-font-size py-4">{des}</p>
                        <div class="row align-items-center">
                            <div className="col-12 col-md-6 mb-2">
                                <input class="form-control me-2 text-center shadow-none" type="number" defaultValue="1" aria-label="Search" />
                            </div>
                            <div className="col-12 col-md-6">
                                <button class="btn btn-info text-white fw-bold py-2 w-100 rounded-pill shadow-none" type="submit">Add To Cart</button>
                            </div>
                        </div>
                        <p className="py-3 text-secondary service-font-size">Categories: <span className="text-info">Body</span>, <span className="text-info">Exercise</span>, <span className="text-info">Physiotherapy</span></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;