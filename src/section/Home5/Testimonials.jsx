import React, {useState} from 'react'
import ModalVideo from 'react-modal-video';
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import Thumb1 from '../../assets/images/resource/testi-thumb-1.jpg';
import Thumb2 from '../../assets/images/resource/testi-thumb-2.jpg';
import Thumb3 from '../../assets/images/resource/testi-thumb-3.jpg';
import Thumb4 from '../../assets/images/resource/netflix.png';
import Thumb5 from '../../assets/images/resource/shopify.png';
import Thumb6 from '../../assets/images/resource/spotify.png';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation ],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    pagination:{
        clickable: true,
    },
    loop: true,
    breakpoints : {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1199: {
            items: 3
        },
    }
};


function Testimonials() {
     const [isOpen, setOpen] = useState(false);
    return (
        <>

    <section id="testimonial" className="testimonial-section-five pt-120 pb-120">
      <div className="container-fluid">
        <div className="sec-title center mb-50">
          <h6 className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Testimonial</h6>
          <h2 className="title wow splt-txt" data-splitting>What our customers <br/> say <span>about us</span></h2>
        </div>
        <div className="slider-outer">
          <div className="swiper testimonial-slider-five">
            <Swiper {...swiperOptions} className="swiper-wrapper swiper-dot testimonial-pagination">
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-block-five">
                  <div className="inner-box">
                    <figure className="thumb">
                      <img src={Thumb1} alt="Image"/>
                      <a onClick={() => setOpen(true)} data-fancybox="gallery" className="video-btn playbtnanim"><i className="fa-sharp fa-solid fa-play"></i></a>
                    </figure>
                    <div className="content-box">
                      <div className="logo"><img src={Thumb4} alt="Image"/></div>
                      <div className="text">We get absolutely raving reviews from our sales and customer support teams using close. Even our co- sales founders are very happy. We get absolutely raving reviews from our Even our co- founders are very happy for services</div>
                      <div className="info-box">
                        <div className="user-info">
                          <h4 className="name">Brendan Carroll</h4>
                          <span className="designation">Founder & CEO</span>
                        </div>
                        <div className="rating-info">
                          <div className="rating">4.9</div>
                          <i className="icon fa fa-star"></i>
                        </div>
                      </div>                    
                    </div>
                  </div>
                </div>                
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">  
                <div className="testimonial-block-five">
                  <div className="inner-box">
                    <figure className="thumb">
                      <img src={Thumb2} alt="Image"/>
                      <a onClick={() => setOpen(true)} data-fancybox="gallery" className="video-btn playbtnanim"><i className="fa-sharp fa-solid fa-play"></i></a>
                    </figure>
                    <div className="content-box">
                      <div className="logo"><img src={Thumb5} alt="Image"/></div>
                      <div className="text">We get absolutely raving reviews from our sales and customer support teams using close. Even our co- sales founders are very happy. We get absolutely raving reviews from our Even our co- founders are very happy for services</div>
                      <div className="info-box">
                        <div className="user-info">
                          <h4 className="name">Harleen Quinzel</h4>
                          <span className="designation">Business Owner</span>
                        </div>
                        <div className="rating-info">
                          <div className="rating">4.9</div>
                          <i className="icon fa fa-star"></i>
                        </div>
                      </div>                    
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">  
                <div className="testimonial-block-five">
                  <div className="inner-box">
                    <figure className="thumb">
                      <img src={Thumb3} alt="Image"/>
                      <a onClick={() => setOpen(true)} data-fancybox="gallery" className="video-btn playbtnanim"><i className="fa-sharp fa-solid fa-play"></i></a>
                    </figure>
                    <div className="content-box">
                      <div className="logo"><img src={Thumb6} alt="Image"/></div>
                      <div className="text">We get absolutely raving reviews from our sales and customer support teams using close. Even our co- sales founders are very happy. We get absolutely raving reviews from our Even our co- founders are very happy for services</div>
                      <div className="info-box">
                        <div className="user-info">
                          <h4 className="name">Paula Irving</h4>
                          <span className="designation">CO Founder</span>
                        </div>
                        <div className="rating-info">
                          <div className="rating">4.9</div>
                          <i className="icon fa fa-star"></i>
                        </div>
                      </div>                    
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-block-five">
                  <div className="inner-box">
                    <figure className="thumb">
                      <img src={Thumb1} alt="Image"/>
                      <a onClick={() => setOpen(true)} data-fancybox="gallery" className="video-btn playbtnanim"><i className="fa-sharp fa-solid fa-play"></i></a>
                    </figure>
                    <div className="content-box">
                      <div className="logo"><img src={Thumb4} alt="Image"/></div>
                      <div className="text">We get absolutely raving reviews from our sales and customer support teams using close. Even our co- sales founders are very happy. We get absolutely raving reviews from our Even our co- founders are very happy for services</div>
                      <div className="info-box">
                        <div className="user-info">
                          <h4 className="name">Brendan Carroll</h4>
                          <span className="designation">Founder & CEO</span>
                        </div>
                        <div className="rating-info">
                          <div className="rating">4.9</div>
                          <i className="icon fa fa-star"></i>
                        </div>
                      </div>                    
                    </div>
                  </div>
                </div>                
              </SwiperSlide>
            </Swiper>
            <div className="swiper-dot text-center testimonial-pagination"></div>
          </div>
        </div>        
      </div>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
        </>
    )
}
export default Testimonials