import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import BannerImage1 from '../../assets/images/banner/banner-four-shape.png';
import BannerImage2 from '../../assets/images/banner/banner-four-bg-shape.png';


function Banner() {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
        <section id="home" className="banner-section-four">
            <div className="sec-shape">
                <img src={BannerImage1} alt="Image"/>
            </div>
            <div className="bg-shape">
                <img src={BannerImage2} alt="Image"/>
            </div>
            <div className="container">
                <div className="content-box">
                    <h1 className="title wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms"> make sure your business Online <span>succeeds</span></h1>
                    <p className="text wow fadeInUp" data-wow-delay="500ms" data-wow-duration="1500ms">Consultez is where early adopters and innovation seekers discover dynamic, imaginative technology before it hits the mainstream.</p>
                    <div className="btn-wrp">
                        <Link className="btn-one-rounded wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms" to="/page-contact">free consultation</Link>
                        <h6 className="btn-title wow fadeInUp" data-wow-delay="700ms" data-wow-duration="1500ms"><a onClick={() => setOpen(true)} data-fancybox="gallery" data-caption="" className="video-btn"><i className="fa-sharp fa-solid fa-play"></i></a>Watch Video</h6>
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
