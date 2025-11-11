import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import FaqsImage1 from '../../assets/images/faq/faq-image1.jpg';
import FaqsImage2 from '../../assets/images/shape/faq-map.png';

const accordionData = [
  {
    title: "How Can Business Consulting Benefit My Company?",
    content: "Business consulting helps identify growth opportunities, streamline operations, and improve profitability.",
  },
  {
    title: "What Are the Costs of Your Consulting Services?",
    content: "Costs vary based on project scope. We offer flexible pricing models tailored to your needs.",
  },
  {
    title: "How Do You Measure the Success of a Project?",
    content: "We use KPIs, ROI analysis, and client feedback to evaluate project outcomes.",
  },
  {
    title: "Do You Provide Remote Consulting Services?",
    content: "Yes, we offer remote consulting via video calls, collaborative tools, and secure platforms.",
  },
  {
    title: "What Industries Do You Specialize In?",
    content: "We specialize in finance, healthcare, technology, and retail sectors.",
  },
];

function AccordionItem({ title, content, isActive, onClick }) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className={`accordion-button ${isActive ? "" : "collapsed"}`}
          onClick={onClick}
          aria-expanded={isActive}
        >
          {title}
        </button>
      </h2>
      <div className={`accordion-collapse ${isActive ? "show" : "collapse"}`}>
        <div className="accordion-body">
          <p className="text">{content}</p>
        </div>
      </div>
    </div>
  );
}

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

function Faqs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <section className="faq-section">
      <div className="row g-0">
        <div className="col-xl-4 d-none d-xl-block image-column">
          <div className="inner-column">
            <figure className="image">
              <img className="wow" src={FaqsImage1} alt="FAQ Visual" loading="lazy" />
            </figure>
          </div>
        </div>
        <div className="col-xl-8 content-column">
          <div className="inner-column">
            <div className="map-shape">
              <img src={FaqsImage2} alt="Map Shape" loading="lazy" />
            </div>
            <div className="row g-5 align-items-center">
              <div className="col-lg-5">
                <div className="sec-title">
                  <h6 className="sub-title wow fadeInUp">FAQ’S</h6>
                  <h2 className="title text-white wow splt-txt">Frequently Asked Questions</h2>
                  <p className="text text-white wow fadeInUp">
                    Consultez is the hub for early adopters and innovation enthusiasts, offering vibrant, imaginative technology before it becomes mainstream.
                  </p>
                  <Link className="btn-one-light border-0 wow fadeInUp rounded-0 mt-50" to="/page-contact">
                    Get a quote
                  </Link>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="faq-accordion">
                  <div className="accordion" role="tablist">
                    {accordionData.map((item, index) => (
                      <AccordionItem
                        key={index}
                        title={item.title}
                        content={item.content}
                        isActive={activeIndex === index}
                        onClick={() => toggleAccordion(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faqs;