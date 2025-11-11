import React from 'react'
import { Link } from 'react-router-dom';
import ServicesBG from '../../assets/images/icons/pattern-32.png';
import Image1 from '../../assets/images/resource/service8-1.jpg';
import Image2 from '../../assets/images/resource/service8-2.jpg';
import Image3 from '../../assets/images/resource/service8-3.jpg';
import Image4 from '../../assets/images/resource/service8-4.jpg';

function Services() {
    return (
        <>

        <section id='services' className="services-section-eight">
            <div className="bg-image" style={{backgroundImage: `url(${ServicesBG})`}} ></div>
            <div className="auto-container">
                <div className="row gx-4">
                    <div className="service-block-eight col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <i className="icon flaticon-business-049-presentation" />
                                <div className="image"><img src={Image1} alt="" /></div>
                            </div>
                            <div className="content">
                                <h3 className="title"><Link to="/page-services">UI / UX <br />Creative Design</Link></h3>
                                <div className="text">Envisioneer user friendly supply chains and cross unit imperative. Authoritativel fabricate and holistic.</div>
                            </div>
                        </div>
                    </div>
                    <div className="service-block-eight style-two col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <i className="icon flaticon-business-020-hierarchy" />
                                <div className="image"><img src={Image2} alt="" /></div>
                            </div>
                            <div className="content">
                                <h3 className="title"><Link to="/page-services">Visual <br />Graphic Design</Link></h3>
                                <div className="text">Envisioneer user friendly supply chains and cross unit imperative. Authoritativel fabricate and holistic.</div>
                            </div>
                        </div>
                    </div>
                    <div className="service-block-eight style-three col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <i className="icon flaticon-business-048-coin" />
                                <div className="image"><img src={Image3} alt="" /></div>
                            </div>
                            <div className="content">
                                <h3 className="title"><Link to="/page-services">Strategy & <br />Digital Marketing</Link></h3>
                                <div className="text">Envisioneer user friendly supply chains and cross unit imperative. Authoritativel fabricate and holistic.</div>
                            </div>
                        </div>
                    </div>
                    <div className="service-block-eight style-four col-md-6 col-sm-12 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <i className="icon flaticon-business-060-graph" />
                                <div className="image"><img src={Image4} alt="" /></div>
                            </div>
                            <div className="content">
                                <h3 className="title"><Link to="/page-services">Effextive <br />Business Growth</Link></h3>
                                <div className="text">Envisioneer user friendly supply chains and cross unit imperative. Authoritativel fabricate and holistic.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default Services
