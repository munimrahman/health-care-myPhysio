import React from 'react';
import { useParams } from 'react-router';
import useBlogs from '../../hooks/useBlog';
import useProducts from '../../hooks/useProduct';
import ProductCard from '../ProductCard/ProductCard';
import SideBar from '../SideBar/SideBar';
import './BlogPost.css'

const BlogPost = () => {
    // This Blog Post. Its a Private Route.
    const blogs = useBlogs();
    const { blogID } = useParams();
    const blogPost = blogs.filter(blogPost => blogPost.id === blogID)
    const { title, img, para1, para2, para3, para4, para5, para6, author, date, tags } = blogPost[0] || {};
    const products = useProducts();
    const widgetProducts = products.slice(3, 5)
    return (
        <div>
            <div className="text-white section-header bg-linear text-center mb-5">
                <h1 className="fw-bold pt-5 blog-post-title">{title}</h1>
                <h6 className="pb-5">Home &gt; Blogs &gt; Post Name</h6>
            </div>
            <div className="row container mx-auto service-details">
                <div className="row col-12 col-md-9">
                    <img src={img} className="img-fluid rounded" alt="" />
                    <div className="mt-4">
                        <div className="fs-5 text-secondary fw-bold">
                            <small className="px-3">By <span className="secondary-text">{author}</span></small>
                            <span>&#47;</span>
                            <small className="px-3">{date}</small>
                            <span>&#47;</span>
                            <small className="px-3">0 Comments</small>
                            <span>&#47;</span>
                            <small className="px-3">{tags}</small>
                        </div>
                        <hr />
                        <h1 className="fs-2 fw-bold blog-title py-3 secondary-text">{title}</h1>
                        <p>{para1}</p>
                        <p>{para2}</p>
                        <p>{para3}</p>
                        <p>{para4}</p>
                        <p>{para5}</p>
                        <p>{para6}</p>
                    </div>
                    <hr className="my-3" />
                    <div className="mz-3">
                        <h1 className="fs-2 fw-bold blog-title py-2 secondary-text">Leave a Reply</h1>
                        <p className="text-secondary service-font-size">Your email address will not be published. Required fields are marked *</p>
                        <div>
                            <div className="row mb-3">
                                <div className="col-12 col-md-4">
                                    <label for="exampleFormControlInput1" className="form-label text-secondary">Name*</label>
                                    <input type="text" className="form-control shadow-none" id="fullName" placeholder="Your Name" />
                                </div>
                                <div className="col-12 col-md-4">
                                    <label for="exampleFormControlInput1" className="form-label text-secondary">Email Address*</label>
                                    <input type="email" className="form-control shadow-none" id="emailId" placeholder="name@example.com" />
                                </div>
                                <div className="col-12 col-md-4">
                                    <label for="exampleFormControlInput1" className="form-label text-secondary">Website</label>
                                    <input type="email" className="form-control shadow-none" id="website" placeholder="https://example.com" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label text-secondary">Comment*</label>
                                <textarea className="form-control shadow-none" id="exampleFormControlTextarea1" rows="8"></textarea>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input shadow-none" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label text-secondary" for="flexCheckDefault">
                                    Save my name, email, and website in this browser for the next time I comment.
                                </label>
                            </div>
                            <button className="btn btn-info rounded-pill text-white fw-bold mt-2 mb-5 shadow-none">Submit</button>
                        </div>
                    </div>
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
        </div >
    );
};

export default BlogPost;