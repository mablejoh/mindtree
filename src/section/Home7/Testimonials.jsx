import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import ShapeImage1 from '../../assets/images/shape/testimonial-shape-six.png';
import TestimonialsImage from '../../assets/images/testimonial/testimonial-image5.jpg';
import ImageIcon1 from '../../assets/images/icon/testimonial-three-icon.png';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation ],
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    navigation:{
        clickable: true,
        prevEl: ".testimonial-prev-six",
        nextEl: ".testimonial-next-six",
    },
    loop: true,
};


function Testimonials() {
    return (
        <>
        <section id="testimonial" className="testimonial-section-six pb-120">
          <div className="outer-box">
            <div className="shape-image">
              <img src={ShapeImage1} alt="Image"/>
            </div>
            <div className="row g-5">
              <div className="col-xl-6 image-column">
                <div className="inner-column">
                  <figure className="image">
                    <img src={TestimonialsImage} alt="Image"/>
                  </figure>
                </div>
              </div>
              <div className="col-xl-6 content-column">
                <div className="inner-column">
                  <div className="content-box">
                    <div className="sec-title mb-30">
                      <h6 className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Testimonial</h6>
                      <div className="flex-content">
                        <h2 className="title wow splt-txt" data-splitting>What our customers <br/>say <span className="font-weight-300">about us</span></h2>
                        <div className="btn-wrp">
                          <button className="testimonial-prev-six"><i className="fa-regular fa-angle-left"></i></button>
                          <button className="testimonial-next-six"><i className="fa-regular fa-angle-right"></i></button>
                        </div>
                      </div>
                    </div>
                    <div className="swiper testimonial-slider-six">
                      <Swiper {...swiperOptions} className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                          <div className="testimonial-block-six">
                            <div className="quort"><i className=""></i></div>
                            <p className="text">Ascend the mountain not to plant your flag, but to embrace the challenge, savour the journey, and marvel at the view. Climb to experience the world, not for the world to notice you. This is why they stand out journey, and marvel at the view experience the world, not to notice</p>
                            <div className="info">
                              <h4 className="title">Robert J. Hare/<span>Business Owner</span></h4>
                              <img src={ImageIcon1} alt="Icon"/>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="testimonial-block-six">
                            <p className="text">Ascend the mountain not to plant your flag, but to embrace the challenge, savour the journey, and marvel at the view. Climb to experience the world, not for the world to notice you. This is why they stand out journey, and marvel at the view experience the world, not to notice</p>
                            <div className="info">
                              <h4 className="title">Kathryn Murphy/<span>Web Designer</span></h4>
                              <img src={ImageIcon1} alt="Icon"/>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="testimonial-block-six">
                            <p className="text">Ascend the mountain not to plant your flag, but to embrace the challenge, savour the journey, and marvel at the view. Climb to  experience the world, not for the world to notice you. This is why they stand out journey, and marvel at the view experience the world, not to notice</p>
                            <div className="info">
                              <h4 className="title">Dianne Russell/<span>Junior manager</span></h4>
                              <img src={ImageIcon1} alt="Icon"/>
                            </div>
                          </div>
                        </SwiperSlide>
                      </Swiper>
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
export default Testimonials