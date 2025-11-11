import React from 'react';
import { Link } from 'react-router-dom';
import CounterUp from '../../lib/CounterUp';
import AboutImage1 from '../../assets/images/about/about-four-image1.jpg';
import AboutImage2 from '../../assets/images/about/about-four-image2.jpg';
import AboutUserImage from '../../assets/images/about/about-four-users.png';
import AboutUserImage2 from '../../assets/images/about/about-four-user.png';
import AboutSignUpImage from '../../assets/images/about/about-four-sign.png';

function About() {
    return (
        <section id="about" className="about-section-four pt-120 pb-120 paralax__animation">
            <div className="container">
                <div className="row g-5">
                    {/* Left Image Column */}
                    <div className="col-xl-6 image-column mb-5 mb-xl-0">
                        <div className="inner-column">
                            <div data-depth="0.01" className="image1 overlay-anim">
                                <img src={AboutImage1} alt="About Business Experience" />
                            </div>
                            <div data-depth="0.03" className="image2 overlay-anim">
                                <img src={AboutImage2} alt="Team Working Together" />
                            </div>
                            <div className="info" data-tilt data-tilt-max="3">
                                <h2 className="title">
                                    <CounterUp end={15} /><span><span>+ </span> Years Experience</span>
                                </h2>
                                <div className="users">
                                    <img src={AboutUserImage} alt="Happy Customers" />
                                    <span>
                                        5m+ Customer
                                        <svg width="112" height="3" viewBox="0 0 112 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0.202677 2.53384C37.227 1.53203 74.0387 1.3728 111.037 2.99826C112.33 3.05797 112.312 1.5652 111.037 1.49222C74.2779 -0.57775 36.8815 -0.637461 0.202677 2.22202C-0.0631112 2.24192 -0.0719708 2.54047 0.202677 2.53384Z"
                                                fill="#C6D936"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right Content Column */}
                    <div className="col-xl-6 content-column">
                        <div className="inner-column">
                            <div className="sec-title mb-30">
                                <h6 className="sub-title wow fadeInUp" data-wow-delay="00ms">ABOUT US</h6>
                                <h2 className="title wow splt-txt" data-splitting>Ensure the success of your business venture…</h2>
                                <p className="text wow fadeInUp" data-wow-delay="200ms">
                                    Business consulting is a dynamic and diverse field that plays a crucial role in helping organizations succeed in today's competitive environment.
                                </p>
                            </div>
                            <div className="content-box">
                                <div className="item wow fadeInLeft">
                                    <h2 className="title"><span><CounterUp end={90} /></span>%</h2>
                                    <h4 className="sub-title">Business Consulting</h4>
                                    <p className="text">Strategy consultants work closely with organizations to define</p>
                                </div>
                                <div className="item wow fadeInLeft">
                                    <h2 className="title"><span><CounterUp end={85} /></span>%</h2>
                                    <h4 className="sub-title">Financial Planning</h4>
                                    <p className="text">Financial consultants provide expert financial planning</p>
                                </div>
                            </div>
                            <h5 className="number wow fadeInDown">
                                <Link to="/page-contact">+00 0000 2222</Link> Call Us or Book A Call
                            </h5>
                            <div className="info mt-40 wow fadeInDown">
                                <Link className="btn-one-rounded" to="/page-contact">
                                    Get started <i className="fa-regular fa-angle-right"></i>
                                </Link>
                                <div className="user">
                                    <div className="image">
                                        <img src={AboutUserImage2} alt="Client Testimonial" />
                                    </div>
                                    <div>
                                        <img data-depth="0.01" src={AboutSignUpImage} alt="Signup Signature" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
