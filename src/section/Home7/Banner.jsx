import React from 'react'
import CounterUp from '../../lib/CounterUp';
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import BannerBgImage from '../../assets/images/banner/banner-seven-image.jpg';
import BannerImage from '../../assets/images/banner/banner-five-bg-shape.png';
import BannerImage2 from '../../assets/images/banner/recept.jpg';
import BannerUserImage1 from '../../assets/images/banner/banner-user1.png';
import BannerUserImage2 from '../../assets/images/banner/banner-user2.png';
import BannerUserImage3 from '../../assets/images/banner/banner-user3.png';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation ],
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    navigation:{
        clickable: true,
        prevEl: ".banner-slider-five-prev",
        nextEl: ".banner-slider-five-next",
    },
    loop: true,    
};

function Banner() {
    return (
        <>

    <section id="home" className="banner-section-seven">
      <div className="container-fluid">
        <div className="swiper banner-slider-five">
          <Swiper {...swiperOptions} className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="outer-box">
                <div className="banner-bg" style={{ backgroundImage: `url(${BannerBgImage})` }}></div>
                <div className="banner-shape-bg"><img src={BannerImage} alt="Image"/></div>
                <div className="banner-recept"><img src={BannerImage2} alt="Image"/></div>
                <div className="banner-content">
                  <h1 className="banner-title"><span>Redefining</span> business <br/>strategy for the <span>modern era</span></h1>
                  <div className="info wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                    <div className="user">
                      <ul>
                        <li><img src={BannerUserImage1} alt="Image"/></li>
                        <li><img src={BannerUserImage2} alt="Image"/></li>
                        <li><img src={BannerUserImage3} alt="Image"/></li>
                        <li>30k</li>
                      </ul>
                      <h6 className="user-title">Our 30k Satisfaction Clients</h6>
                    </div>
                    <div className="funfact-box">
                      <div className="content-box">
                        <div className="count-box"><span className="count-text" data-stop="90" data-speed="2000"><CounterUp end={90} /></span>%</div>
                        <div className="text">Business Consulting</div>
                      </div>
                      <div className="content-box margin-minus">
                        <div className="count-box"><span className="count-text" data-stop="85" data-speed="2000"><CounterUp end={85} /></span>%</div>
                        <div className="text">Financial Planning</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="outer-box">
                <div className="banner-bg" style={{ backgroundImage: `url(${BannerBgImage})` }}></div>
                <div className="banner-shape-bg"><img src={BannerImage} alt="Image"/></div>
                <div className="banner-recept"><img src={BannerImage2} alt="Image"/></div>
                <div className="banner-content">
                  <h1 className="banner-title"><span>Redefining</span> business <br/>strategy for the <span>modern era</span></h1>
                  <div className="info wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                    <div className="user">
                      <ul>
                        <li><img src={BannerUserImage1} alt="Image"/></li>
                        <li><img src={BannerUserImage2} alt="Image"/></li>
                        <li><img src={BannerUserImage3} alt="Image"/></li>
                        <li>30k</li>
                      </ul>
                      <h6 className="user-title">Our <span>30k</span> Satisfaction Clients</h6>
                    </div>
                    <div className="funfact-box">
                      <div className="content-box">
                        <div className="count-box"><span className="count-text" data-stop="90" data-speed="2000"><CounterUp end={90} /></span>%</div>
                        <div className="text">Business Consulting</div>
                      </div>
                      <div className="content-box margin-minus">
                        <div className="count-box"><span className="count-text" data-stop="85" data-speed="2000"><CounterUp end={85} /></span>%</div>
                        <div className="text">Financial Planning</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="outer-box">
                <div className="banner-bg" style={{ backgroundImage: `url(${BannerBgImage})` }}></div>
                <div className="banner-shape-bg"><img src={BannerImage} alt="Image"/></div>
                <div className="banner-recept"><img src={BannerImage2} alt="Image"/></div>
                <div className="banner-content">
                  <h1 className="banner-title"><span>Redefining</span> business <br/>strategy for the <span>modern era</span></h1>
                  <div className="info wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                    <div className="user">
                      <ul>
                        <li><img src={BannerUserImage1} alt="Image"/></li>
                        <li><img src={BannerUserImage2} alt="Image"/></li>
                        <li><img src={BannerUserImage3} alt="Image"/></li>
                        <li>30k</li>
                      </ul>
                      <h6 className="user-title">Our <span>30k</span> Satisfaction Clients</h6>
                    </div>
                    <div className="funfact-box">
                      <div className="content-box">
                        <div className="count-box"><span className="count-text" data-stop="90" data-speed="2000"><CounterUp end={90} /></span>%</div>
                        <div className="text">Business Consulting</div>
                      </div>
                      <div className="content-box margin-minus">
                        <div className="count-box"><span className="count-text" data-stop="85" data-speed="2000"><CounterUp end={85} /></span>%</div>
                        <div className="text">Financial Planning</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="btn-wrp">
            <button className="banner-slider-five-prev"><i className="fa-regular fa-angle-left"></i></button>
            <button className="banner-slider-five-next"><i className="fa-regular fa-angle-right"></i></button>
          </div>
        </div>        
      </div>
    </section>

        </>
    )
}
export default Banner
