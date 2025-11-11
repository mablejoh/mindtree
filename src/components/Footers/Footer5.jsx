import React from "react";
import { Link } from 'react-router-dom';
import FooterLogo from '../../assets/images/shape/cta-line.png';
import FooterLogo2 from '../../assets/images/logo-2.png';
import FooterShapeImg from '../../assets/images/shape/cta-arry.png';
import FooterShapeImg2 from '../../assets/images/shape/dual-circle420.png';

function Footer5() {
    return (
        <>
        <footer className="main-footer footer-style-three at-home6 pt-100">
            <div className="container">
                <div className="footer-cta">
                <div className="sec-title">
                    <h2 className="title text-white wow splt-txt" data-splitting>Looking For Professional business consultant ?</h2>
                </div>
                <div className="btn-wrp wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <Link to="/page-contact" className="cta-btn">Get Started Free <i className="fa-regular fa-arrow-up-right"/></Link>
                    <p className="text text-white">No credit card required</p>
                </div>
                <div className="bg-shape">
                    <img src={FooterLogo} alt="Image"/>
                </div>
                <div className="arry">
                    <img className="animation__arryLeftRight" src={FooterShapeImg} alt="Image"/>
                </div>
                </div>
                <div className="widgets-section">
                <div className="row g-5 g-xl-0">
                    <div className="col-lg-4 footer-column">
                    <div className="footer-widget about-widget">
                        <div className="logo">
                        <Link to="/"><img src={FooterLogo2} alt="Logo"/></Link>
                        </div>
                        <div className="widget-content">
                        <p className="text">At vero eos et accusamus iusto odio dignissimos ducimus blanditiise</p>
                        <div className="input-field">
                            <input
                                id="emailAdress"
                                name="emailAdress"
                                type="email"
                                placeholder="Email Address"
                                autoComplete="email"
                                required
                            />
                            <label htmlFor="emailAdress" className="sr-only">Email Address</label>
                            <button type="submit">
                                <i className="fa-regular fa-arrow-up-right" />
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-8">
                    <div className="row g-4 g-xl-0">
                        <div className="col-sm-6 col-xl-3 footer-column">
                        <div className="footer-widget links-widget">
                            <h4 className="widget-title">Resource</h4>
                            <div className="widget-content">
                            <ul className="user-links">
                                <li><Link to="/">Product</Link></li>
                                <li><Link to="/">Services</Link></li>
                                <li><Link to="/">About Us</Link></li>
                                <li><Link to="/">Benefits</Link></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-6 col-xl-3 footer-column">
                        <div className="footer-widget links-widget">
                            <h4 className="widget-title">Quick Link</h4>
                            <div className="widget-content">
                            <ul className="user-links">
                                <li><Link to="/">Features</Link></li>
                                <li><Link to="/">Pricing Plan</Link></li>
                                <li><Link to="/">Best Program</Link></li>
                                <li><Link to="/">Press Kit</Link></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-6 col-xl-3 footer-column">
                        <div className="footer-widget links-widget">
                            <h4 className="widget-title">Company</h4>
                            <div className="widget-content">
                            <ul className="user-links">
                                <li><Link to="/">About</Link></li>
                                <li><Link to="/">Team Member</Link></li>
                                <li><Link to="/">Reviews</Link></li>
                                <li><Link to="/">Latest News</Link></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-6 col-xl-3 footer-column">
                        <div className="footer-widget links-widget contact-widget">
                            <h4 className="widget-title">Contact</h4>
                            <div className="widget-content">
                            <ul className="user-links">
                                <li>
                                <i className="fa-light fa-location-dot"/>
                                <Link to="/">55 Main Street, 2nd block Melbourne, Australia</Link>
                                </li>
                                <li>
                                <i className="fa-light fa-envelope"/>
                                <Link to="/">support@gmail.com</Link>
                                </li>
                                <li>
                                <i className="fa-light fa-phone-flip"/>
                                <Link to="/">+000 (123) 44 55</Link>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="footer-bottom">
                <p className="copyright-text">Copyright ©2025, <Link to="/">Design</Link> All Rights Reserved</p>
                <ul className="footer-nav">
                    <li><Link to="/">Faqs</Link></li>
                    <li><Link to="/">Setting</Link></li>
                    <li><Link to="/">Privacy</Link></li>
                    <li><Link to="/">Contact</Link></li>
                </ul>
                </div>
            </div>
            <div className="sec-shape">
                <img className="animation__rotateY" src={FooterShapeImg2} alt="Image"/>
            </div>
            <div className="box-shape">
                <div className="box1 wow slideInUp" data-wow-delay="200ms" data-wow-duration="1500ms"></div>
                <div className="box2 wow slideInLeft" data-wow-delay="200ms" data-wow-duration="1500ms"></div>
            </div>
        </footer>
        </>
    );
}

export default Footer5;
