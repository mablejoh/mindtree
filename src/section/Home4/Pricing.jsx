import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PricingImage1 from '../../assets/images/shape/pricing-four-shape.png';
import PricingImage2 from '../../assets/images/shape/pricing-shape.png';


function Pricing() {
    return (
        <>

        <section className="pricing-section-two have-after pt-120 pb-120">
            <figure className="sec-shape">
                <img src={PricingImage1} alt="Image"/>
            </figure>
            <div className="container">
                <div className="sec-title center mb-30">
                <h6 className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">pricing plan</h6>
                <h2 className="title wow splt-txt" data-splitting>Secure the success of your <br/> business journey…</h2>
                <p className="text wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Business consulting is a
                    dynamic and multifaceted field that plays a pivotal <br/>
                    role in helping organizations thrive in today's competitive landscape.</p>
                </div>

                <div className="row g-4 align-items-end">
                <div className="col-md-6 col-xl-4 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                    <div className="pricing-block-two">

                    <div className="inner-box">
                        <figure className="shape">
                        <img src={PricingImage2} alt="Image"/>
                        </figure>
                        <div className="top">
                        <span className="title">Regular Plan</span>
                        <p className="sub-title">For Small Businesses</p>
                        </div>

                        <ul className="list">
                        <li>Email marketing</li>
                        <li>Unlimited chat history</li>
                        <li>Unlimited landing pages</li>
                        <li>Automation templates</li>
                        <li>Great Customer Support</li>
                        </ul>

                        <div className="bottom">
                        <h3 className="title">
                            $19.99<span>/ Monthly</span>
                        </h3>
                        <h6 className="sub-title">For Small Businesses</h6>
                        </div>

                        <Link className="btn-one-light mt-50" to="/page-pricing">Choose Package</Link>
                    </div>

                    </div>
                </div>

                <div className="col-md-6 col-xl-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="pricing-block-two">
                    <div className="popular">
                        Popular Package
                    </div>
                    <div className="inner-box">
                        <figure className="shape">
                        <img src={PricingImage2} alt="Image"/>
                        </figure>
                        <div className="top">
                        <span className="title">Standard Plan</span>
                        <p className="sub-title">For Medium Businesses</p>
                        </div>

                        <ul className="list">
                        <li>Email marketing</li>
                        <li>Unlimited chat history</li>
                        <li>Unlimited landing pages</li>
                        <li>Automation templates</li>
                        <li></li>
                        <li>Great Customer Support</li>
                        </ul>

                        <div className="bottom">
                        <h3 className="title">
                            $29.99<span>/ Monthly</span>
                        </h3>
                        <h6 className="sub-title">For Medium Businesses</h6>
                        </div>

                        <Link className="btn-one-rounded mt-50" to="/page-pricing">Choose Package</Link>
                    </div>

                    </div>
                </div>

                <div className="col-md-6 col-xl-4 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                    <div className="pricing-block-two">

                    <div className="inner-box">
                        <figure className="shape">
                        <img src={PricingImage2} alt="Image"/>
                        </figure>
                        <div className="top">
                        <span className="title">Premium Plan</span>
                        <p className="sub-title">For Big Businesses</p>
                        </div>

                        <ul className="list">
                        <li>Email marketing</li>
                        <li>Unlimited chat history</li>
                        <li>Unlimited landing pages</li>
                        <li>Automation templates</li>
                        <li>Great Customer Support</li>
                        </ul>

                        <div className="bottom">
                        <h3 className="title">
                            $99.10<span>/ Monthly</span>
                        </h3>
                        <h6 className="sub-title">For Big Businesses</h6>
                        </div>

                        <Link className="btn-one-light mt-50" to="/page-pricing">Choose Package</Link>
                    </div>

                    </div>
                </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default Pricing