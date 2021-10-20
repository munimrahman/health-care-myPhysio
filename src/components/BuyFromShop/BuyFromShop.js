import React from 'react';
import useProducts from '../../hooks/useProduct';
import ProductCard from '../ProductCard/ProductCard';

const BuyFromShop = () => {
    const products = useProducts()
    const widgetProducts = products.slice(0, 4)
    return (
        <div className="mx-5 my-5">
            <h1 className="">Buy From <span className="fw-bold font-nunito secondary-text">Our Shop</span></h1>
            <div className="row row-cols-1 row-cols-md-4 g-4 mt-2">
                {
                    widgetProducts.map(product => <ProductCard
                        key={product.id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default BuyFromShop;