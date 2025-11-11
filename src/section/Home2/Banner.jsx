import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import BannerImage1 from '../../assets/images/banner/banner-two-shape.png';
import BannerImage2 from '../../assets/images/banner/banner-two-image.png';
import BannerImage3 from '../../assets/images/banner/banner-two-circle.png';
import BannerImage4 from '../../assets/images/banner/banner-two-info1.png';
import BannerImage5 from '../../assets/images/banner/banner-two-info2.png';
import BannerImage6 from '../../assets/images/banner/banner-two-info3.png';
import BannerImage7 from '../../assets/images/banner/banner-two-star.png';

function Banner() {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
        <section id="home" className="banner-section-two paralax__animation">
            <div className="sec-shape">
                <img data-depth="0.03" src={BannerImage1} alt="Image"/>
            </div>
            <div className="container">
                <div className="row g-0 align-items-center">
                <div className="col-lg-6 content-column">
                    <div className="inner-column">
                        <div className="content-box">
                            <h6 className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Innovation and
                            Creativity</h6>
                            <h1 className="title wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">business <span>Consultant</span> & growth Solution</h1>
                            <p className="text wow fadeInUp" data-wow-delay="500ms" data-wow-duration="1500ms">Consultez is the place where early adopters and innovation enthusiasts discover vibrant, imaginative technology before it reaches </p>
                            <div className="btn-wrp">
                            <Link className="btn-two-rounded wow fadeInLeft" data-wow-delay="500ms" data-wow-duration="1500ms" to="/page-about">Get started <i className="fa-regular fa-angle-right"></i></Link>
                            <a className="video-btn playbtnanim wow fadeInLeft" data-wow-delay="700ms" data-wow-duration="1500ms" onClick={() => setOpen(true)}><i className="fa-sharp fa-solid fa-play"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 image-column">
                    <figure className="image">
                        <img className="animation__arryLeftRight wow" src={BannerImage2} alt="Image"/>
                        <img className="circle-bg" src={BannerImage3} alt="Image"/>
                        <div className="info1">
                            <img data-depth="0.05" src={BannerImage4} alt="Image"/>
                        </div>
                        <div className="info2"><img data-depth="0.03" src={BannerImage5} alt="Image"/></div>
                        <div className="info3">
                            <img data-depth="0.01" src={BannerImage6} alt="Image"/>
                        </div>
                        <div className="star1"><img src={BannerImage7} alt="Image"/></div>
                        <div className="star2"><img src={BannerImage7} alt="Image"/></div>
                    </figure>
                </div>
                </div>
            </div>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
        </>
    )
}
export default Banner
