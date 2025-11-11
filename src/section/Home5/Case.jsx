import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import CaseImage1 from '../../assets/images/case/case-image1.jpg';
import CaseImage2 from '../../assets/images/case/case-image2.jpg';
import CaseImage3 from '../../assets/images/case/case-image3.jpg';
import CaseImage4 from '../../assets/images/case/case-image4.jpg';

// Swiper settings
const swiperOptions = {
    modules: [Autoplay],
    loop: true,
    spaceBetween: 35,
    speed: 1000,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        767: { slidesPerView: 2 },
        1199: { slidesPerView: 3 },
        1399: { slidesPerView: 4 },
    },
};

// Case study data
const caseItems = [
    {
        id: 1,
        img: CaseImage1,
        category: "Cyber Security",
        title: "Revolutionizing Brand Strategy",
    },
    {
        id: 2,
        img: CaseImage2,
        category: "IT Solution",
        title: "Technology and artificial Maintenance",
    },
    {
        id: 3,
        img: CaseImage3,
        category: "Business Consultation",
        title: "Business Strategy to Cut Costs by 30%",
    },
    {
        id: 4,
        img: CaseImage4,
        category: "Digital Agency",
        title: "Transforming Legacy Systems",
    },
];

function Case ({className}){
    return (
        <section className={`case-section have-combine pt-120 ${className || ''}`}>
            <div className="outer-box">
                <div className="sec-title center mb-50">
                    <h6 className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Case study</h6>
                    <h2 className="title wow splt-txt" data-splitting>Showcasing Project & Solutions <br />for Clients case study.</h2>
                </div>
                <div className="swiper case-slider">
                    <Swiper {...swiperOptions}>
                        {caseItems.concat(caseItems).map((item, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="case-block">
                                <div className="inner-box">
                                    <figure className="image">
                                        <img src={item.img} alt={item.title}/>
                                    </figure>
                                    <div className="content-box">
                                        <span className="sub-title">{item.category}</span>
                                        <h4 className="title">
                                            <Link to="/page-case">{item.title}</Link>
                                        </h4>
                                    </div>
                                    <Link to="/page-case-details" className="arry-btn">
                                        <i className="fa-regular fa-arrow-up-right" />
                                    </Link>
                                    <div className="hover-content">
                                        <span className="sub-title">{item.category}</span>
                                        <h4 className="title"><Link to="/page-case-details">{item.title}</Link></h4>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};
export default Case;