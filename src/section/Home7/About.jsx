import React from "react";
import { Link } from 'react-router-dom';
import AboutImage1 from '../../assets/images/about/rectangle-shape.png';
import AboutImage2 from '../../assets/images/about/about-seven-image1.jpg';
import AboutImage3 from '../../assets/images/about/about-seven-image2.jpg';
import AboutImage4 from '../../assets/images/about/about-four-user.png';
import AboutImage5 from '../../assets/images/about/about-four-sign.png';

function About() {
    return (
        <>
        <section id="about" className="about-section-seven pt-120 paralax__animation">
            <div className="rectangle-shape"><img className="animation__arryUpDown" src={AboutImage1} alt="Image"/></div>
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-5 image-column wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="inner-column">
                        <div data-depth="0.01" className="image1 overlay-anim">
                            <img src={AboutImage2} alt="Image"/>
                        </div>              
                        <div className="image2 overlay-anim" data-depth="0.05">
                            <img src={AboutImage3} alt="Image"/>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1 content-column">
                        <div className="inner-column">
                        <div className="content-box">
                            <div className="sec-title">
                            <h6 className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">about us</h6>
                            <h2 className="title wow splt-txt" data-splitting>Ensure the success of your business venture…</h2>
                            <p className="text wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Consumers today increasingly rely on digital channels to research products. We analyze brands and their offerings, engaging with them accordingly. Meanwhile, 51% of consumers. We strive to develop real-world</p>
                            </div>
                        </div>
                        <div className="list">
                            <ul className="mt-30 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <li><i className="fa-solid fa-check"></i> Growing Net Sales In Year 2024</li>
                            <li><i className="fa-solid fa-check"></i> Business Consultancy</li>
                            </ul>
                            <ul className="mt-30 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <li><i className="fa-solid fa-check"></i> Skilled Creative Team</li>
                            <li><i className="fa-solid fa-check"></i> We offer you solutions</li>
                            </ul>
                        </div>
                        <div className="info">
                            <Link to="/page-services" className="btn-two">Find Services</Link>
                            <div className="user">
                            <div className="image">
                                <img src={AboutImage4} alt="Image"/>
                            </div>
                            <div>
                                <img src={AboutImage5} alt="Image"/>
                            </div>
                            </div>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default About
