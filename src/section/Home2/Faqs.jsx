import React, { useState } from "react";
import FaqsImage1 from '../../assets/images/faq/faq-two-image.jpg';
import FaqsImage2 from '../../assets/images/faq/faq-two-info.png';
import FaqsImage3 from '../../assets/images/faq/faq-two-image-shape.png';


const faqItems = [
  {
    number: "01",
    title: "One Program at a Time",
    content:
      "The generated content is consistently free from repetition, unnecessary humour, or superfluous words.",
  },
  {
    number: "02",
    title: "Through Proven Programs",
    content:
      "The generated content is consistently free from repetition, unnecessary humour, or superfluous words.",
  },
  {
    number: "03",
    title: "Transforming Lives",
    content:
      "The generated content is consistently free from repetition, unnecessary humour, or superfluous words.",
  },
];


function Faqs({className}) {
    const [activeIndex, setActiveIndex] = useState(0); // 0 = open first item by default
    const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

    return (
        <>
        <section className={`faq-section-two ${className || ''}`}>
            <div className="container">
                <div className="row g-5 g-lg-0 align-items-end">
                <div className="col-lg-6 image-column">
                    <div className="inner-column">
                    <figure className="image">
                        <img data-tilt data-tilt-max="3" src={FaqsImage1} alt="Image"/>
                    </figure>
                    <div className="info">
                        <img className="animation__arryLeftRight" src={FaqsImage2} alt="Image"/>
                    </div>
                    <div className="shape">
                        <img className="animation__arryUpDown" src={FaqsImage3} alt="Image"/>
                    </div>
                    </div>
                </div>

                <div className="col-lg-6 content-column">
                    <div className="inner-column">
                        <div className="sec-title pb-30">
                            <h6 className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">FAQ’S</h6>
                            <h2 className="title wow splt-txt" data-splitting>frequently ask question</h2>
                            <p className="text wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">While Google Ads is a
                            highly effective advertising platform, it's essential to explore
                            other channels to maximize your
                            ad reach and impact.</p>
                        </div>
                        <div className="faq-two-accordion">
                            <div className="accordion" id="accordionExample2">
                                {faqItems.map((item, index) => (
                                <div
                                    className={`accordion-item wow fadeInDown ${
                                    index === faqItems.length - 1 ? "mb-0" : ""
                                    }`}
                                    key={index}
                                    data-wow-delay={`${index * 200}ms`}
                                    data-wow-duration="1500ms"
                                >
                                    <h2 className="accordion-header">
                                    <button
                                        className={`accordion-button ${
                                        activeIndex === index ? "" : "collapsed"
                                        }`}
                                        type="button"
                                        onClick={() => toggleAccordion(index)}
                                        aria-expanded={activeIndex === index}
                                    >
                                        <span className="number">{item.number}</span> {item.title}
                                    </button>
                                    </h2>
                                    <div
                                    className={`accordion-collapse collapse ${
                                        activeIndex === index ? "show" : ""
                                    }`}
                                    >
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
            </div>
        </section>
        </>
    )
}

export default Faqs