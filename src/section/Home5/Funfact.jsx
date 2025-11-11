import React from "react";
import CounterUp from '../../lib/CounterUp';
import FunfactBG from '../../assets/images/icons/pattern-33.jpg';

function Funfact() {
    return (
        <>

        <section className="fun-fact-section-five pull-up">
            <div className="bg-img-pos bg-image" style={{ backgroundImage: `url(${FunfactBG})` }}></div>
            <div className="auto-container">
                <div className="fact-counter">
                    <div className="row">
                        <div className="counter-block-six col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner">                                
                                <div className="icon-box"><i className="icon flaticon-business-060-graph" /></div>
                                <div className="count-box"><span className="count-text"><CounterUp end={990} /></span></div>
                                <h4 className="counter-title">Projects Completed</h4>
                            </div>
                        </div>
                        <div className="counter-block-six col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner">
                                <div className="icon-box"><i className="icon flaticon-business-035-helpline" /></div>
                                <div className="count-box"><span className="count-text"><CounterUp end={370} /></span></div>
                                <h4 className="counter-title">Repeat Customers</h4>
                            </div>
                        </div>
                        <div className="counter-block-six col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner">                                
                                <div className="icon-box"><i className="icon flaticon-business-020-hierarchy" /></div>
                                <div className="count-box"><span className="count-text"><CounterUp end={860} /></span></div>
                                <h4 className="counter-title">Satisfied Customers</h4>
                            </div>
                        </div>
                        <div className="counter-block-six col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                            <div className="inner">
                                <div className="icon-box"><i className="icon flaticon-business-048-coin" /></div>
                                <div className="count-box"><span className="count-text"><CounterUp end={88} /></span></div>
                                <h4 className="counter-title">Team Members</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default Funfact