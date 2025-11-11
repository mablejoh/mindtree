import React from "react";
import StrategyImage1 from '../../assets/images/strategy/strategy-two-chart.png';
import StrategyImage2 from '../../assets/images/strategy/strategy-two-image.jpg';

function Strategy() {
    return (
        <>
            <section className="strategy-section-two pt-120">
                <div className="container">
                    <div className="row g-0">
                    <div className="col-xl-6 content-column">
                        <div className="inner-column pb-120">
                        <div className="sec-title mb-30">
                            <h6 className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">STATISTIC</h6>
                            <h2 className="title wow splt-txt" data-splitting>Fuel Your Business for Long-Term Success</h2>
                            <p className="text wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">An invasive species in
                            many parts of the world, originally from Asia, known for its
                            large head and rapid growth.</p>
                        </div>
                        <figure className="image wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <img src={StrategyImage1} alt="Image"/>
                        </figure>
                        </div>
                    </div>
                    <div className="col-xl-6 image-column">
                        <div className="inner-column">
                        <figure className="image tm-gsap-img-parallax">
                            <img src={StrategyImage2} alt="Image"/>
                        </figure>
                        </div>
                        <div className="strategy-block-two">
                        <div className="row g-4">
                            <div className="col-md-6 wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="item light">
                                <h4 className="title">Headquarter -</h4>
                                <p className="text">2972 Westheimer Rd. Santa</p>
                                <p className="text">Ana, Illinois 85486</p>
                            </div>
                            </div>
                            <div className="col-md-6 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="item">
                                <h4 className="title">Email Us -</h4>
                                <p className="text">youremail@example.com</p>
                                <p className="text">themeyou@example.com</p>
                            </div>
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
export default Strategy