import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

import TestimonialBG from '../../assets/images/bg/testimonial-two-bg.png';
import TestimonialsShapeImage from '../../assets/images/shape/dual-circle420.png';
import TestimonialImg1 from '../../assets/images/testimonial/testimonial-two-image.png';
import TestimonialImg2 from '../../assets/images/testimonial/testimonial-two-info1.png';
import TestimonialImg3 from '../../assets/images/testimonial/testimonial-two-info2.png';
import TestimonialIcon from '../../assets/images/icon/testimonial-two-icon.png';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation ],
    slidesPerView: 1,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    navigation:{
        clickable: true,
        prevEl: ".testimonial-prev-two",
        nextEl: ".testimonial-next-two",
    },
    loop: true,
};


function Testimonials() {
    return (
        <>
            <section id='testimonial' className="testimonial-section-two" style={{backgroundImage: `url(${TestimonialBG})`}}>
            <div className="sec-shape">
                <img className="animation__rotateY" src={TestimonialsShapeImage} alt="Image"/>
            </div>
            <div className="container">
                <div className="row g-5 g-xxl-0 align-items-center">
                <div className="col-lg-4 image-column">
                    <div className="inner-column">
                    <figure className="image">
                        <img className="wow" src={TestimonialImg1} alt="Image"/>
                        <div className="info1">
                        <img className="animation__arryUpDown" src={TestimonialImg2} alt="Image"/>
                        </div>
                        <div className="info2">
                        <img className="animation__arryLeftRight" src={TestimonialImg3} alt="Image"/>
                        </div>
                    </figure>
                    </div>
                </div>
                <div className="col-lg-8 content-column">
                    <div className="inner-column">
                    <div className="swiper testimonial-slider-two">
                        <div className="btn-wrp">
                        <button className="testimonial-prev-two"><i className="fa-regular fa-angle-left"></i></button>
                        <button className="testimonial-next-two"><i className="fa-regular fa-angle-right"></i></button>
                        </div>
                        <Swiper {...swiperOptions} className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-block-two">
                            <div className="icon"><img src={TestimonialIcon} alt="Image"/></div>
                            <p className="text">Ascend the mountain not to plant your flag, but to embrace the challenge, savour the journey, and marvel at the view. Climb to experience the world, not for the world to notice you. This is why they stand out with exceptional</p>
                            <div className="info">
                                <div>
                                <h4 className="title">Leslie Alexander</h4>
                                <p className="sub-title">Web Designer</p>
                                </div>
                                <div className="stars">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                </div>
                            </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-block-two">
                            <div className="icon"><img src={TestimonialIcon} alt="Image"/></div>
                            <p className="text">Ascend the mountain not to plant your flag, but to embrace the challenge, savour the journey, and marvel at the view. Climb to experience the world, not for the world to notice you. This is why they stand out with exceptional</p>
                            <div className="info">
                                <div>
                                <h4 className="title">Dianne Russell</h4>
                                <p className="sub-title">Junior manager</p>
                                </div>
                                <div className="stars">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                </div>
                            </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-block-two">
                            <div className="icon"><img src={TestimonialIcon} alt="Image"/></div>
                            <p className="text">Ascend the mountain not to plant your flag, but to embrace the challenge, savour the journey, and marvel at the view. Climb to experience the world, not for the world to notice you. This is why they stand out with exceptional</p>
                            <div className="info">
                                <div>
                                <h4 className="title">Ronald Richards</h4>
                                <p className="sub-title">CEO & Founder</p>
                                </div>
                                <div className="stars">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                </div>
                            </div>
                            </div>
                        </SwiperSlide>
                        </Swiper>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </>
    )
}
export default Testimonials