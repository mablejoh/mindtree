import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import BrandImage1 from '../../assets/images/brand/brand-two-image1.png';
import BrandImage2 from '../../assets/images/brand/brand-two-image2.png';
import BrandImage3 from '../../assets/images/brand/brand-two-image3.png';
import BrandImage4 from '../../assets/images/brand/brand-two-image4.png';
import BrandImage5 from '../../assets/images/brand/brand-two-image5.png';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation ],
    slidesPerView: 5,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints : {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1024: {
            items: 3
        },
        1200: {
            items: 5
        },
    }
};

function Brand() {
    return (
        <>
        <section className="brand-section-two pt-60">
            <div className="container">
                <div className="outer-box">
                    <div className="swiper brand-slider">
                        <Swiper {...swiperOptions} className="swiper-wrapper">
                            <SwiperSlide className="swiper-slide">
                                <div className="brand-block">
                                    <Link to="#"><img src={BrandImage1} alt="Image" /></Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="brand-block">
                                    <Link to="#"><img src={BrandImage2} alt="Image" /></Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="brand-block">
                                    <Link to="#"><img src={BrandImage3} alt="Image" /></Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="brand-block">
                                    <Link to="#"><img src={BrandImage4} alt="Image" /></Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="brand-block">
                                    <Link to="#"><img src={BrandImage5} alt="Image" /></Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="brand-block">
                                    <Link to="#"><img src={BrandImage1} alt="Image" /></Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="brand-block">
                                    <Link to="#"><img src={BrandImage2} alt="Image" /></Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="brand-block">
                                    <Link to="#"><img src={BrandImage3} alt="Image" /></Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="brand-block">
                                    <Link to="#"><img src={BrandImage4} alt="Image" /></Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="brand-block">
                                    <Link to="#"><img src={BrandImage5} alt="Image" /></Link>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Brand
