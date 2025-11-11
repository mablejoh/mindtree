import React, { useState } from "react";
import StrategyImage1 from '../../assets/images/shape/stategy-globe.png';
import StrategyImage2 from '../../assets/images/strategy/strategy-image.jpg';
import StrategyImage3 from '../../assets/images/strategy/strategy-info.png';

const accordionData = [
    {
    title: "Mainland Company Formation",
    content: "Contact us today for a free consultation and let our experts guide you toward success.",
  },
  {
    title: "Free Zone Company Setup",
    content: "Ready to take your business global? Setting up in a UAE free zone offers a simple, fast, and highly rewarding path.",
  },
  {
    title: "Offshore Company Formation",
    content: "Unlock Global Opportunities with Expert Offshore Company Formation and Accounting.",
  },
  {
    title: "Local Sponsor & PRO Services",
    content: "Partner with us for expert local sponsorship and PRO services, seamlessly integrated with our core accounting solutions.",
  },
  {
    title: "Company Liquidation Services",
    content: "Our team of experienced accountants and financial experts provides comprehensive liquidation services to guide you through every step.",
  },
];


function Strategy (){

    const [activeIndex, setActiveIndex] = useState(0);
    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? -1 : index);
    };

    return (
        <section className="strategy-section">
            <div className="sec-shape">
                <img className="animation__rotateAndScale" src={StrategyImage1} alt="Rotating Shape" />
            </div>
            <div className="row g-5">
                <div className="col-xl-6 image-column">
                    <div className="inner-column">
                        <figure className="image tm-gsap-img-parallax">
                            <img src={StrategyImage2} alt="Strategy Visual" />
                            <div className="info"><img src={StrategyImage3} alt="Info Overlay" /></div>
                        </figure>
                    </div>
                </div>
                <div className="col-xl-6 content-column">
                    <div className="inner-column">
                        <div className="sec-title mb-30">
                        <h6 className="sub-title wow fadeInUp">Business Setup</h6>
                        <h2 className="title wow splt-txt">
                            Driving Success Through Tailored Solutions and Proven Expertise.
                        </h2>
                        </div>

                        <div className="accordion-area">
                        <div className="accordion">
                            {accordionData.map((item, index) => (
                            <div className="accordion-item" key={index}>
                                <h2 className="accordion-header">
                                <button
                                    className={`accordion-button ${activeIndex === index ? "" : "collapsed"}`}
                                    onClick={() => toggleAccordion(index)}
                                >
                                    {item.title}
                                </button>
                                </h2>
                                <div className={`accordion-collapse ${activeIndex === index ? "show" : "collapse"}`}>
                                <div className="accordion-body">
                                    <p className="text">{item.content}</p>
                                </div>
                                </div>
                            </div>
                            ))}
                        </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    );
};

export default Strategy;