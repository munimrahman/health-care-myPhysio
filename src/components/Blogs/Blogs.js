import React from 'react';
import useBlogs from '../../hooks/useBlog';
import useProducts from '../../hooks/useProduct';
import ProductCard from '../ProductCard/ProductCard';
import SideBar from '../SideBar/SideBar';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blogs = () => {
    const blogs = useBlogs();
    const products = useProducts();
    const widgetProducts = products.slice(4, 6)
    return (
        <div>
            <div className="text-white section-header bg-linear text-center mb-5">
                <h1 className="fw-bold pt-5 font-size-custom">Blogs</h1>
                <h6 className="pb-5">Home &gt; Blogs</h6>
            </div>
            <div className="row container mx-auto service-details">
                <div className="row col-12 col-md-9">
                    {
                        blogs.map(blog => <SingleBlog
                            key={blog.id}
                            blog={blog}
                        ></SingleBlog>)
                    }
                </div>
                {/* sidebar */}
                <div className="col-12 col-md-3">
                    <SideBar></SideBar>
                    <h3 className="text-center mb-3">Buy From <span className="fw-bold font-nunito secondary-text">Shop</span></h3>
                    {
                        widgetProducts.map(product => <ProductCard
                            key={product.id}
                            product={product}
                        ></ProductCard>)
                    }
                </div>
            </div >
        </div>
    );
};

export default Blogs;