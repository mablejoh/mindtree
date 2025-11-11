import React, { useState } from "react";
import StrategyImage1 from '../../assets/images/shape/stategy-globe.png';
import StrategyImage2 from '../../assets/images/strategy/strategy-image.jpg';
import StrategyImage3 from '../../assets/images/strategy/strategy-info.png';

const AccordionItem = ({ index, isOpen, title, content, toggle }) => (
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className={`accordion-button ${isOpen ? "" : "collapsed"}`}
        type="button"
        onClick={() => toggle(index)}
      >
        {title}
      </button>
    </h2>
    <div className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}>
      <div className="accordion-body">
        <p className="text">{content}</p>
      </div>
    </div>
  </div>
);

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0); // default to first item open

  const toggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const accordionData = [
    {
      title: "Ensure Financial Continuity",
      content: "Drive innovation faster with world-class tech teams. We'll connect you with a fully remote team.",
    },
    {
      title: "Define Your Consulting Niche",
      content: "Drive innovation faster with world-class tech teams. We'll connect you with a fully remote team.",
    },
    {
      title: "Build Your Value Proposition",
      content: "Drive innovation faster with world-class tech teams. We'll connect you with a fully remote team.",
    },
    {
      title: "Expert Financial Guidance",
      content: "Drive innovation faster with world-class tech teams. We'll connect you with a fully remote team.",
    },
  ];


    return (
        <section className="strategy-section style-two">
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
                            <h6 className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms" >Business strategy</h6>
                            <h2 className="title light wow splt-txt" data-splitting>Financial Success Through Tailored Strategies</h2>
                            <p className="text text-white">Consultants help individuals create long-term strategies for managing their personal finances This includes</p>
                        </div>
                        <div className="accordion-area">
                            <div className="accordion" id="accordionExample">
                                {accordionData.map((item, index) => (
                                <AccordionItem
                                    key={index}
                                    index={index}
                                    isOpen={openIndex === index}
                                    title={item.title}
                                    content={item.content}
                                    toggle={toggle}
                                />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accordion;