import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import BannerImage1 from '../../assets/images/banner/banner-four-image.jpg';
import BannerImage2 from '../../assets/images/banner/banner-four-image2.jpg';
import BannerImage3 from '../../assets/images/banner/banner-four-image3.jpg';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation ],
    slidesPerView: 1,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    loop: true,
    navigation:{
        clickable: true,
        prevEl: ".banner-slider-four-prev",
        nextEl: ".banner-slider-four-next",
    },
    breakpoints : {
        0: {
            items: 1
        },
        600: {
            items: 1,
        },
        1024: {
            items: 1
        },
        1200: {
            items: 1
        },
    }
};

function BannerHero() {
    return (
        <>
            <section className="banner-hero-four">
                <div className="container">
                    <div className="image-box">
                        <div className="swiper banner-slider-four wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                <SwiperSlide className="swiper-slide">
                                    <figure className="image">
                                        <img src={BannerImage1} alt="Image" />
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <figure className="image">
                                        <img src={BannerImage2} alt="Image" />
                                    </figure>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <figure className="image">
                                        <img src={BannerImage3} alt="Image" />
                                    </figure>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <button className="arry-btn banner-slider-four-prev"><i className="fa-solid fa-arrow-left"></i></button>
                <button className="arry-btn banner-slider-four-next"><i className="fa-solid fa-arrow-right"></i></button>
            </section>
        </>
    )
}
export default BannerHero
