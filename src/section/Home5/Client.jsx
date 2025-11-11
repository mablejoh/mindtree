import React from "react";
import { Link } from 'react-router-dom';
import ClientImage1 from '../../assets/images/clients/1.png';
import ClientImage2 from '../../assets/images/clients/2.png';
import ClientImage3 from '../../assets/images/clients/3.png';
import ClientImage4 from '../../assets/images/clients/4.png';
import ClientImage5 from '../../assets/images/clients/5.png';


function Client() {
    return (
        <>
        <section className="client-section-three pb-0">
            <div className="shape-4"/>
            <div className="auto-container">
                <div className="outer-box">
                    <div className="title-box">
                        <h5 className="title">Trusted By <br/>Top Companies</h5>
                        <i className="icon fa fa-arrow-up-right"></i>
                    </div>
                    <div className="marquee-box">
                        <div className="clients-marquee">
                            <div className="client-block-three">
                                <div className="inner-box">
                                    <figure className="image"><img src={ClientImage1} alt="Image"/></figure>
                                </div>
                            </div>                 
                            <div className="client-block-three">
                                <div className="inner-box">
                                    <figure className="image"><img src={ClientImage2} alt="Image"/></figure>
                                </div>
                            </div>                
                            <div className="client-block-three">
                                <div className="inner-box">
                                    <figure className="image"><img src={ClientImage3} alt="Image"/></figure>
                                </div>
                            </div>                
                            <div className="client-block-three">
                                <div className="inner-box">
                                    <figure className="image"><img src={ClientImage4} alt="Image"/></figure>
                                </div>
                            </div>                 
                            <div className="client-block-three">
                                <div className="inner-box">
                                    <figure className="image"><img src={ClientImage5} alt="Image"/></figure>
                                </div>
                            </div>
                            <div className="client-block-three">
                                <div className="inner-box">
                                    <figure className="image"><img src={ClientImage1} alt="Image"/></figure>
                                </div>
                            </div>                
                            <div className="client-block-three">
                                <div className="inner-box">
                                    <figure className="image"><img src={ClientImage2} alt="Image"/></figure>
                                </div>
                            </div>               
                            <div className="client-block-three">
                                <div className="inner-box">
                                    <figure className="image"><img src={ClientImage3} alt="Image"/></figure>
                                </div>
                            </div>               
                            <div className="client-block-three">
                                <div className="inner-box">
                                    <figure className="image"><img src={ClientImage4} alt="Image"/></figure>
                                </div>
                            </div>                 
                            <div className="client-block-three">
                                <div className="inner-box">
                                    <figure className="image"><img src={ClientImage5} alt="Image"/></figure>
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
export default Client