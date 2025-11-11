import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import AboutImage1 from '../../assets/images/resource/about6-1.jpg';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation ],
    slidesPerView: 1,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation:{
        clickable: true,
        prevEl: ".prev",
        nextEl: ".next",
    },
    loop: true,
};

function About() {
    return (
        <>
        <section id="about" className="about-section-home6 pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="sec-title mb-50">
                        <h6 className="sub-title style-red wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">about us</h6>
                        <h2 className="title wow splt-txt" data-splitting>Committed to delivering <br/> professional dependable <br/>insurance guidance.</h2>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="sec-title mb-50">
                        <div className="text mb-4">As independent insurance consultants, we do not sell insurance products. Instead, we work solely in your best interest to evaluate your current coverage identify any gaps </div>
                        <Link className="btn-two-rounded wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" to="/page-about">Discover more <i className="fa-regular fa-angle-right"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="about-image-box">
                            <div className="thumb">
                                <img className="w-100" src={AboutImage1} alt="Image"/>
                            </div>
                            <div className="content-box">
                                <div className="swiper one-grid-slider">
                                    <Swiper {...swiperOptions} className="swiper-wrapper">
                                        <SwiperSlide className="swiper-slide">
                                            <div className="position-relative">
                                                <h3 className="title">Our Mission.</h3>
                                                <div className="text">Our mission is empower individuals families and businesses with clear unbiased insurance guidance that protects what matters most. We are committed to delivering expert advice identifying the right coverage</div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="position-relative">
                                                <h3 className="title">Our Vission.</h3>
                                                <div className="text">Our mission is empower individuals families and businesses with clear unbiased insurance guidance that protects what matters most. We are committed to delivering expert advice identifying the right coverage</div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                    <div className="swiper-arry mt-20">
                                        <button className="prev"><i className="far fa-arrow-left-long"></i></button>
                                        <button className="next ms-2"><i className="far fa-arrow-right-long"></i></button>
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
