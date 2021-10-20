import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'

const ProductCard = (props) => {
    const { id, name, price, img } = props.product;
    const url = `/shop/${id}`
    return (
        <div className="col product mb-3">
            <div className="card h-100 shadow">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fw-bold mb-0 text-hover">{name}</h5>
                    <div className="my-2">
                        <i className="fas fa-star text-info"></i>
                        <i className="fas fa-star text-info"></i>
                        <i className="fas fa-star text-info"></i>
                        <i className="fas fa-star text-info"></i>
                        <i className="far fa-star text-info"></i>
                    </div>
                    <p className="card-text fw-bold text-secondary">Price: ${price}</p>
                    <div className="text-center">
                        <Link to={url}>
                            <button className="btn btn-info rounded-pill text-white fw-bold shadow-none">Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;