import React from "react";
import { Link } from 'react-router-dom';
import FooterLogo from '../../assets/images/logo.png';
import FooterLogo2 from '../../assets/images/shape/globe-right.png';

function Footer6() {
    return (
        <>
        <footer className="main-footer footer-style-two">
            <div className="container">
                <div className="footer-top">
                    <div className="logo">
                        <Link to="/"><img src={FooterLogo} alt="Logo"/></Link>
                    </div>
                    <div className="subscribe-box">
                        <h3 className="title">Subscribe Newsletter</h3>
                        <form className="input-field" onSubmit={(e) => e.preventDefault()}>
                            <i className="fa-sharp fa-light fa-envelope" aria-hidden="true" />
                            <label htmlFor="subscriberEmail" className="sr-only">Email Address</label>
                            <input
                            id="subscriberEmail"
                            name="subscriberEmail"
                            type="email"
                            placeholder="Email Address"
                            autoComplete="email"
                            required
                            />
                            <button type="submit" className="btn-one-rounded">
                            Sign Up <i className="fa-regular fa-angle-right" />
                            </button>
                        </form>
                    </div>
                </div>
                <div className="widgets-section">
                    <div className="row g-5 justify-content-between">
                        <div className="col-sm-12 col-lg-5 col-xl-6">
                            <div className="footer-widget about-widget">
                                <div className="sec-title mb-40">
                                <h2 className="title text-white">Ready Discover More? Contact Us Today!</h2>
                                <p className="text">No credit card requirement it’s full free for all</p>
                                </div>                                
                                <div className="input-field">
                                    <label htmlFor="footerEmail" className="sr-only">Email Address</label>
                                    <input type="email" id="footerEmail" name="footerEmail" placeholder="Email Address" />
                                    <Link className="btn-one-rounded" to="/">
                                        Sign up now <i className="fa-regular fa-angle-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 col-xl-2">
                            <div className="footer-widget links-widget">
                                <h4 className="widget-title">Services</h4>
                                <div className="widget-content">
                                <ul className="user-links">
                                    <li><Link to="/">Business Plan</Link></li>
                                    <li><Link to="/">Growth Strategy</Link></li>
                                    <li><Link to="/">Strategic planning</Link></li>
                                    <li><Link to="/">Workflow Automation</Link></li>
                                    <li><Link to="/">Lead Generation</Link></li>
                                    <li><Link to="/">Financial Planning</Link></li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3">
                            <div className="footer-widget contact-widget">
                                <h4 className="widget-title">Locations</h4>
                                <div className="widget-content">
                                <h5 className="text">55 Main Street, 2nd block Malborne, Australia</h5>
                                </div>
                                <h4 className="widget-title mt-30">Contact</h4>
                                <div className="widget-content">
                                <Link to="/">support@gmail.com</Link>
                                <h4 className="nuber"><Link to="/">+880 (123) 456 88</Link></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="copyright-text">Copyright ©2025, <Link to="#">Business</Link> All Rights Reserved</p>
                    <ul className="footer-nav">
                        <li><Link to="/"><i className="fa-brands fa-facebook-f"/></Link></li>
                        <li><Link to="/"><i className="fa-solid fa-x"/></Link></li>
                        <li><Link to="/"><i className="fa-brands fa-vimeo-v"/></Link></li>
                        <li><Link to="/"><i className="fa-brands fa-pinterest-p"/></Link></li>
                    </ul>
                </div>
            </div>
            <div className="sec-shape">
                <img className="animation__rotateAndScale" src={FooterLogo2} alt="Image"/>
            </div>
        </footer>
        </>
    );
}

export default Footer6;
