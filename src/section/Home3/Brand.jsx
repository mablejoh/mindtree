import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import BrandImage1 from '../../assets/images/brand/brand-two-image1.png';
import BrandImage2 from '../../assets/images/brand/brand-two-image2.png';
import BrandImage3 from '../../assets/images/brand/brand-two-image3.png';
import BrandImage4 from '../../assets/images/brand/brand-two-image4.png';
import BrandImage5 from '../../assets/images/brand/brand-two-image5.png';

const swiperOptions = {
  modules: [Autoplay, Navigation],
  slidesPerView: 5,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  spaceBetween: 30,
  speed: 1000,
  breakpoints : {
        0: {
            items: 1
        },
        767: {
            items: 2
        },
        991: {
            items: 3
        },
        1200: {
            items: 4
        },
        1350: {
            items: 5
        }
    }
};

function Brand() {
    return (
        <>
        <section className="brand-section-two pb-120">
            <div className="container">
                <div className="outer-box">
                    <div className="swiper brand-slider">
                        <Swiper {...swiperOptions} className="swiper-wrapper">
                            <SwiperSlide>
                                <div className="brand-block">
                                <Link to="#"><img src={BrandImage1} alt="Image"/></Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-block">
                                <Link to="#"><img src={BrandImage2} alt="Image"/></Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-block">
                                <Link to="#"><img src={BrandImage3} alt="Image"/></Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-block">
                                <Link to="#"><img src={BrandImage4} alt="Image"/></Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-block">
                                <Link to="#"><img src={BrandImage5} alt="Image"/></Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-block">
                                <Link to="#"><img src={BrandImage1} alt="Image"/></Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-block">
                                <Link to="#"><img src={BrandImage2} alt="Image"/></Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-block">
                                <Link to="#"><img src={BrandImage3} alt="Image"/></Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-block">
                                <Link to="#"><img src={BrandImage4} alt="Image"/></Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-block">
                                <Link to="#"><img src={BrandImage5} alt="Image"/></Link>
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