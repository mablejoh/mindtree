import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import BannerImage1 from '../../assets/images/banner/banner-three-image1.jpg';
import BannerImage2 from '../../assets/images/shape/banner-arry.png';


function Banner() {
     const [isOpen, setOpen] = useState(false);
    return (
        <>
        <section id="home" className="banner-section-three">
            <div className="container">
                <div className="row g-0 align-items-end">
                    <div className="col-xl-8 content-column">
                        <div className="inner-column">
                        <h1 className="title wow splt-txt" data-splitting><span className="font-weight-400 d-block">next generation</span> corporate & business consulting agency</h1>
                        <p className="text wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">Consultez is the destination where early adopters & innovation enthusiasts discover cutting-edge technology before mainstream. </p>
                        <div className="btn-wrp">
                            <a className="btn-one-rounded wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms" href="/page-about">Get started <i className="fa-regular fa-angle-right"></i></a>
                            <a onClick={() => setOpen(true)} data-fancybox="gallery" data-caption="" className="video-btn wow fadeInLeft playbtnanim" data-wow-delay="400ms" data-wow-duration="1500ms"><i className="fa-sharp fa-solid fa-play"></i></a>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="bg-image tm-gsap-img-parallax"><img src={BannerImage1} alt="Image"/></div>
                <div className="arry"><img className="animation__arryLeftRight" src={BannerImage2} alt="Image"/></div>
            </div>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
        </>
    )
}
export default Banner
