import { Link } from 'react-router-dom';
import PortfolioFilter2 from "../lib/PortfolioFilter2";
import PriceFilter from "../lib/PriceFilter";
import Thumb1 from '../assets/images/resource/products/thumb-1.jpg';
import Thumb2 from '../assets/images/resource/products/thumb-2.jpg';
import Thumb3 from '../assets/images/resource/products/thumb-3.jpg';

export default function ShopSidebar() { 
    return (
        <>
            <section className="featured-products">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <div className="shop-sidebar">
                                <div className="sidebar-search">
                                    <form className="search-form" method="get" action="/">
                                        <div className="form-group">
                                            <input type="search" name="search-field" placeholder="Search..." required="" />
                                            <button><i className="lnr lnr-icon-search"></i></button>
                                        </div>
                                    </form>
                                </div>
                                <div className="sidebar-widget category-widget">
                                    <div className="widget-title">
                                        <h5 className="widget-title">Categories</h5>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="category-list clearfix">
                                            <li><Link to="/shop-product-details">Cloud Solution</Link></li>
                                            <li><Link to="/shop-product-details">Cyber Data</Link></li>
                                            <li><Link to="/shop-product-details">SEO Marketing</Link></li>
                                            <li><Link to="/shop-product-details">UI/UX Design</Link></li>
                                            <li><Link to="/shop-product-details">Web Development</Link></li>
                                            <li><Link to="/shop-product-details">Artifical Intelligence</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sidebar-widget price-filters">
                                    <div className="widget-title">
                                        <h5 className="widget-title">Filter by Price</h5>
                                    </div>
                                    <PriceFilter/>
                                </div>
                                <div className="sidebar-widget post-widget">
                                    <div className="widget-title">
                                        <h5 className="widget-title">Popular Products</h5>
                                    </div>
                                    <div className="post-inner">
                                        <div className="post">
                                            <figure className="post-thumb"><Link to="/shop-details"><img src={Thumb1} alt="Image" /></Link></figure>
                                            <Link to="/shop-product-details">Best Headset</Link>
                                            <span className="price">$45.00</span>
                                        </div>
                                        <div className="post">
                                            <figure className="post-thumb"><Link to="/shop-details"><img src={Thumb2} alt="Image" /></Link></figure>
                                            <Link to="/shop-product-details">Quality Battery</Link>
                                            <span className="price">$34.00</span>
                                        </div>
                                        <div className="post">
                                            <figure className="post-thumb"><Link to="/shop-details"><img src={Thumb3} alt="Image" /></Link></figure>
                                            <Link to="/shop-product-details">Smart Watch</Link>
                                            <span className="price">$29.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-12 col-sm-12 content-side mt-md-60">
                            <div className="mixitup-gallery">
                                <PortfolioFilter2 /> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}