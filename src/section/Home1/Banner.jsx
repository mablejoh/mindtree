import React, { useState } from "react";
import PropTypes from "prop-types";
import DOMPurify from 'dompurify';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import BannerImage1 from '../../assets/images/banner/banner-image1.jpg';
import BannerImage2 from '../../assets/images/banner/banner-image2.jpg';
import BannerImage3 from '../../assets/images/banner/banner-image3.jpg';
import BannerShapeImage from '../../assets/images/shape/banner-arry.png';
import BannerShapeImage2 from '../../assets/images/shape/banner-shape.png';

const slides = [
  {
    Image: BannerImage1,
    subtitle: "Growth, Innovation, and Success",
    title: "transforming <span>business growth</span> Drive Success",
    buttonText: "free consultation",
    text: "Take your brand to new heights Agency offering everything from strategy business.",
  },
  {
    Image: BannerImage2,
    subtitle: "Growth, Innovation, and Success",
    title: "transforming <span>business growth</span> Drive Success",
    buttonText: "free consultation",
    text: "Take your brand to new heights Agency offering everything from strategy business.",
  },
  {
    Image: BannerImage3,
    subtitle: "Growth, Innovation, and Success",
    title: "transforming <span>business growth</span> Drive Success",
    buttonText: "free consultation",
    text: "Take your brand to new heights Agency offering everything from strategy business.",
  },
];

const swiperOptions = {
  modules: [Autoplay, EffectFade],
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  loop: true,
  effect: "fade",
  fadeEffect: { crossFade: true },
  speed: 3000,
};

function BannerSlide({ slide, isActive }) {
  return (
    <div className={`slide-bg ${isActive ? 'active' : ''}`} style={{ backgroundImage: `url(${slide.Image})` }}>
      <div className="container">
        <div className="outer-box">
          <div className="row g-0 align-items-end">
            <div className="col-lg-8 content-column">
              <div className="inner-column">
                <h6 className="sub-title animated fadeInUp" style={{ animationDelay: ".3s" }}>
                  {slide.subtitle}
                </h6>
                <h1
                  className="title animated fadeInUp"
                  style={{ animationDelay: ".5s" }}
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(slide.title) }}
                />
                <Link className="btn-one animated fadeInUp" style={{ animationDelay: ".8s" }} to="/page-contact">
                  {slide.buttonText}
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <p className="text animated fadeInUp" style={{ animationDelay: ".9s" }}>
                {slide.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

BannerSlide.propTypes = {
  slide: PropTypes.object.isRequired,
  isActive: PropTypes.bool,
};

function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="banner-section">
      <div className="arry">
        <img className="animation__arryLeftRight" src={BannerShapeImage} alt="Shape" />
      </div>
      <div className="sec-shape">
        <img src={BannerShapeImage2} alt="Shape" />
      </div>
      <button className="goBottom-btn" onClick={handleScrollToAbout}>
        <svg
          className="animation__arryUpDown"
          width="16"
          height="36"
          viewBox="0 0 16 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.8328 6.33334C13.8328 5.17961 13.4907 4.0518 12.8497 3.09251C12.2088 2.13322 11.2977 1.38555 10.2318 0.944039C9.16591 0.502527 7.99302 0.387008 6.86146 0.612088C5.72991 0.837169 4.69051 1.39274 3.8747 2.20855C3.0589 3.02435 2.50332 4.06375 2.27824 5.19531C2.05316 6.32686 2.16868 7.49975 2.61019 8.56566C3.05171 9.63156 3.79938 10.5426 4.75867 11.1836C5.71795 11.8245 6.84577 12.1667 7.99949 12.1667C9.54602 12.1648 11.0287 11.5496 12.1222 10.4561C13.2158 9.3625 13.831 7.87986 13.8328 6.33334Z"
            fill="white"
          />
          <path
            d="M15.2554 27.4108L8.58869 35.2558C8.51133 35.3332 8.41948 35.3946 8.31839 35.4365C8.2173 35.4783 8.10895 35.4999 7.99953 35.4999C7.8901 35.4999 7.78175 35.4783 7.68066 35.4365C7.57957 35.3946 7.48772 35.3332 7.41036 35.2558L0.743692 28.5891"
            fill="white"
          />
        </svg>
      </button>

      <div className="swiper banner-slider">
        <Swiper
          {...swiperOptions}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <BannerSlide slide={slide} isActive={index === activeIndex} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Banner;