import React from 'react';
import useProducts from '../../hooks/useProduct';
import ProductCard from '../ProductCard/ProductCard';

const Shop = () => {
    // Shpo page
    const products = useProducts();
    return (
        <div>
            <div className="text-white section-header bg-linear text-center">
                <h1 className="fw-bold pt-5 font-size-custom">Shop</h1>
                <h6 className="pb-5">Home &gt; Shop</h6>
            </div>
            <div className="container mt-5">
                <div className="container d-flex justify-content-between mb-3">
                    <div className="mx-5">
                        <p className="fs-6"><i className="fas fa-th text-secondary me-2"></i> Showing 1 - 6 of 6 Products</p>
                    </div>
                    <div className="mx-5 d-flex">
                        <div className="mx-2">
                            <select className="form-select form-select-sm shadow-none" aria-label=".form-select-sm example" defaultValue={'DEFAULT'}>
                                <option value="DEFAULT">Select Category</option>
                                <option value="1">Body</option>
                                <option value="2">Exercise</option>
                                <option value="4">Physiotherapy</option>
                                <option value="5">Medical</option>
                            </select>
                        </div>
                        <div className="mx-2">
                            <select className="form-select form-select-sm shadow-none" aria-label=".form-select-sm example" defaultValue={'DEFAULT'}>
                                <option value="DEFAULT">Sort By</option>
                                <option value="1">Name</option>
                                <option value="2">Price Low to High</option>
                                <option value="2">Price High to Low</option>
                                <option value="3">Reviews</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="mb-5">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            products.map(product => <ProductCard
                                key={product.id}
                                product={product}
                            ></ProductCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;