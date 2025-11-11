import React from "react";
import { Link } from 'react-router-dom';


function News() {
    return (
        <>

        <section id='news' className="news-section-three">
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">From the Blog</span>
                    <h2>Checkout latest news <br /> updates & articles</h2>
                </div>	
                <div className="row">
                    <div className="news-block-three col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link to="/news-details"><img src="images/resource/news2-1.jpg" alt="" /></Link></figure>
                            </div>
                            <div className="content-box">
                                <span className="date">20 April</span>
                                <ul className="post-info">
                                    <li><i className="fa fa-user-circle" /> by Admin</li>
                                    <li><i className="fa fa-comments" /> 2 Comments</li>
                                </ul>
                                <h4 className="title"><Link to="/news-details">Your Business Safe Ensure High Availability</Link></h4>
                                <Link to="/news-details" className="read-more">Read More <i className="fa fa-long-arrow-alt-right" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="news-block-three col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link to="/news-details"><img src="images/resource/news2-2.jpg" alt="" /></Link></figure>
                            </div>
                            <div className="content-box">
                                <span className="date">20 April</span>
                                <ul className="post-info">
                                    <li><i className="fa fa-user-circle" /> by Admin</li>
                                    <li><i className="fa fa-comments" /> 2 Comments</li>
                                </ul>
                                <h4 className="title"><Link to="/news-details">Data Backup and Recovery Best Practices Small</Link></h4>
                                <Link to="/news-details" className="read-more">Read More <i className="fa fa-long-arrow-alt-right" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="news-block-three col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link to="/news-details"><img src="images/resource/news2-3.jpg" alt="" /></Link></figure>
                            </div>
                            <div className="content-box">
                                <span className="date">20 April</span>
                                <ul className="post-info">
                                    <li><i className="fa fa-user-circle" /> by Admin</li>
                                    <li><i className="fa fa-comments" /> 2 Comments</li>
                                </ul>
                                <h4 className="title"><Link to="/news-details">Make a Marketing Strategy for your Small Business</Link></h4>
                                <Link to="/news-details" className="read-more">Read More <i className="fa fa-long-arrow-alt-right" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default News