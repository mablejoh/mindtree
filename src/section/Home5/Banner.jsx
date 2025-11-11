import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import BannerImage1 from '../../assets/images/shape/banner-five-shape.png';
import BannerImage2 from '../../assets/images/banner/banner-five-image.jpg';


function Banner() {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
        <section id="home" className="banner-section-five">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="content-box">
                        <div className="content-outer">
                            <div className="shape-image"><img src={BannerImage1} alt="Image"/></div>
                            <h1 className="title wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms"><span>next generation</span> corporate & Finance consulting <span>agency</span></h1>
                            <p className="text wow fadeInUp" data-wow-delay="500ms" data-wow-duration="1500ms">Consultez is the destination where early adopters & innovation enthusiasts discover cutting-edge technology before mainstream.</p>
                            <div className="btn-wrp">
                            <Link className="btn-one-rounded wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms" to="/page-contact">Get started</Link>
                            <h6 className="btn-title wow fadeInUp" data-wow-delay="700ms" data-wow-duration="1500ms"><a onClick={() => setOpen(true)} data-fancybox="gallery" data-caption="" className="video-btn"><i className="fa-sharp fa-solid fa-play"></i></a>Watch Video</h6>
                            </div>
                            <div className="box-shape">
                            <div className="box1 wow slideInUp" data-wow-delay="300ms" data-wow-duration="1500ms"></div>
                            <div className="box2 wow slideInRight" data-wow-delay="200ms" data-wow-duration="1500ms"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="image-box">
                        <img src={BannerImage2} alt="Image"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
        </>
    )
}
export default Banner
