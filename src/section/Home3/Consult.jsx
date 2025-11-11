import React from 'react'
import { Link } from 'react-router-dom';
import ConsultImage from '../../assets/images/shape/consult-shape.png';
import ConsultBgImage from '../../assets/images/bg/consult-bg.jpg';


function Consult() {
    return (
        <>
        <section className="consult-section pt-120 pb-120" style={{backgroundImage: `url(${ConsultBgImage})`}}>
        <div className="sec-shape">
            <img className="animation__rotate" src={ConsultImage} alt="Image"/>
        </div>
        <div className="container">
            <div className="sec-title center">
            <h6 className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Consulting</h6>
            <h2 className="title text-white wow splt-txt" data-splitting>The Future of Corporate and Business Solutions</h2>
            <div className="btn-wrp mt-30">
                <Link className="btn-two-rounded wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" to="/page-about">Discover More <i className="fa-regular fa-arrow-up-right"></i></Link>
                <Link className="btn-one-rounded wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms" to="/page-contact">Get A Quote <i className="fa-regular fa-arrow-up-right"></i></Link>
            </div>
            </div>
        </div>
        </section>
        </>
    )
}
export default Consult
