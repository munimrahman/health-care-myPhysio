import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'

const ProductCard = (props) => {
    const { id, name, price, img } = props.product;
    const url = `/shop/${id}`
    return (
        <div class="col product mb-3">
            <div class="card h-100 shadow">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title fw-bold mb-0 text-hover">{name}</h5>
                    <div className="my-2">
                        <i class="fas fa-star text-info"></i>
                        <i class="fas fa-star text-info"></i>
                        <i class="fas fa-star text-info"></i>
                        <i class="fas fa-star text-info"></i>
                        <i class="far fa-star text-info"></i>
                    </div>
                    <p class="card-text fw-bold text-secondary">Price: ${price}</p>
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