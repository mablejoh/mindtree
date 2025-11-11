import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Thumbs, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import TestimonialsShape1 from '../../assets/images/shape/testimonial-four-map.png';
import TestimonialsImage1 from '../../assets/images/testimonial/testimonial-four-hero.png';
import TestimonialsIconImage from '../../assets/images/icon/testimonial-four-icon.png';


function Testimonials() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const swiperOptions = {
        modules: [Autoplay, Thumbs, Navigation],
        slidesPerView: 1,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        thumbs: thumbsSwiper ? { swiper: thumbsSwiper } : undefined,
    };

    return (
        <>
        <section id="testimonial" className="testimonial-section-four paralax__animation">
            <div className="map">
                <img src={TestimonialsShape1} alt="Image"/>
            </div>
            <div className="hero-image">
                <img data-depth="0.01" src={TestimonialsImage1} alt="Image"/>
            </div>
            <div className="container">
                <div className="outer-box">
                <div className="testimonial-block-four">
                    <div className="swiper testimonial-slider-four">
                        <Swiper {...swiperOptions} className="swiper-wrapper">
                            <SwiperSlide className="swiper-slide">
                                <figure className="icon">
                                    <img src={TestimonialsIconImage} alt="Icon"/>
                                </figure>
                                <p className="text">Ascend the mountain not to plant your flag, but to embrace the challenge, savour the journey, and marvel at the view. Climb to experience the world, not for the world to notice you. This is why they stand out with exceptional</p>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <figure className="icon">
                                    <img src={TestimonialsIconImage} alt="Icon"/>
                                </figure>
                                <p className="text">Ascend the mountain not to plant your flag, but to embrace the challenge, savour the journey, and marvel at the view. Climb to experience the world, not for the world to notice you. This is why they stand out with exceptional</p>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <figure className="icon">
                                    <img src={TestimonialsIconImage} alt="Icon"/>
                                </figure>
                                <p className="text">Ascend the mountain not to plant your flag, but to embrace the challenge, savour the journey, and marvel at the view. Climb to experience the world, not for the world to notice you. This is why they stand out with exceptional</p>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="swiper testimonial-slider-thumb-four">
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            slidesPerView={3}
                            spaceBetween={15}
                            watchSlidesProgress={true}
                            className="swiper-wrapper">
                            <SwiperSlide className="swiper-slide">
                                <div className="info">
                                    <h4 className="title">Leslie Alexander</h4>
                                    <p className="sub-title">Business Owner</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="info">
                                    <h4 className="title">Robert J. Hare</h4>
                                    <p className="sub-title">Sr. Product Manager</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="info">
                                    <h4 className="title">Ralph Edwards</h4>
                                    <p className="sub-title">CEO & Founder</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Testimonials