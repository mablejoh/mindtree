import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CounterUp from '../../lib/CounterUp';
import ModalVideo from 'react-modal-video';
import BannerImage1 from '../../assets/images/banner/banner-11-1.png';
import BannerImage2 from '../../assets/images/banner/banner-1-3.png';
import BannerImage3 from '../../assets/images/banner/banner-1-2.png';

function Banner() {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
        <section id="home" className="banner-section-six">
            <div className="banner-slider banner-slider-home11">
                <div className="banner-slide">
                    <div className="outer-box">
                        <div className="stroke-title">Consultez</div>
                        <div className="info-column wow fadeInLeft" data-delay-in="0.3">
                            <div className="info-box">
                                <div className="inner-box">
                                    <figure className="image-1">
                                        <img src={BannerImage1} alt="Image"/>
                                    </figure>
                                    <div className="info-year">
                                        <div className="number"><CounterUp end={27} />+</div>
                                        <div className="text">Years of <br/>Experience</div>
                                    </div>
                                </div>
                                <div className="text2">Interiox Architects is a comprehensive design firm specializing in architecture, master planning, urban design, interior architecture, space planning, and programming. Our portfolio features</div>
                            </div>
                        </div>
                        <div className="content-column">
                            <div className="content-box">
                                <div className="info-box">
                                    <figure className="image-shape-1 sway_Y__animation">
                                        <img className="w-100" src={BannerImage2} alt="Image"/>
                                    </figure>
                                    <div className="content-info wow fadeInRight" data-delay-in="0.3">
                                        <h1 className="title" data-animation-in="fadeInUp" data-delay-in="0.3">Insurance Consulting <br/><span>Agency</span></h1>
                                        <div className="btn-wrp">
                                        <Link className="btn-two-rounded wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" to="/page-about">Get started <i className="fa-regular fa-angle-right"></i></Link>
                                        <h6 className="btn-title wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms"><a onClick={() => setOpen(true)} data-fancybox="gallery" data-caption="" className="video-btn"><i className="fa-sharp fa-solid fa-play"></i></a>Watch Video</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="image-column">
                            <div className="inner-column wow fadeInRight" data-wow-delay="200ms">
                                <figure className="image-1"><img src={BannerImage3} alt="Image"/></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="Fvae8nxzVz4"
            onClose={() => setOpen(false)}
        />
        </>
    )
}
export default Banner
