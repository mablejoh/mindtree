import React from "react";
import { Link } from "react-router-dom";
import ProcessImage1 from '../../assets/images/shape/dual-circle.png';

const processingSteps = [
  {
    number: "01",
    title: "Strategic Growth",
    text: "Your Source for Market Trends & Business Intelligence",
    delay: "00ms",
  },
  {
    number: "02",
    title: "Fuel Innovation",
    text: "Sparking Innovation, Shaping Tomorrow successful",
    delay: "200ms",
  },
  {
    number: "03",
    title: "Financial Planning",
    text: "Helping You Stay on Track with Accurate Estimates",
    delay: "400ms",
  },
  {
    number: "04",
    title: "Sustainable Success",
    text: "Amazing Support! with lot of ele demos to choose from top",
    delay: "600ms",
  },
];

const Processing = () => {
  return (
    <section className="processing-section pt-120 pb-120">
      <div className="shape"><img src={ProcessImage1} alt="Decorative rotating dual circle" className="animation__rotate" /></div>
      <div className="container">
        <div className="sec-title center mb-50">
          <h6 className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">How It Works</h6>
          <h2 className="title wow splt-txt" data-splitting>Connect, Collaborate, & Create <br /> Limitless Opportunities.</h2>
        </div>
        <div className="outer-box">
          <div className="row g-0">
            {processingSteps.map((item, index) => (
              <div className="col-sm-6 col-xl-3 wow fadeInUp" key={index} data-wow-delay={item.delay} data-wow-duration="1500ms">
                <div className="processing-block">
                  <div className={`inner-box ${index === 3 ? "last-block" : ""}`}>
                    <h3 className="number">{item.number}</h3>
                    <h4 className="title">{item.title}</h4>
                    <p className="text">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h5 className="sec-text mt-50 wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
          Embrace Innovation, Adapt Quickly, and Lead with Confidence.
          <Link to="/page-contact">Consult Now</Link>
        </h5>
      </div>
    </section>
  );
};

export default Processing;
