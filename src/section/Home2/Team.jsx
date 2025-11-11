import React from "react";
import { Link } from "react-router-dom";
import TeamShapeImage1 from '../../assets/images/shape/dual-circle420.png';
import TeamImage1 from '../../assets/images/team/team-two-image1.jpg';
import TeamImage2 from '../../assets/images/team/team-two-image2.jpg';
import TeamImage3 from '../../assets/images/team/team-two-image3.jpg';
import TeamImage4 from '../../assets/images/team/team-two-image4.jpg';

function Team() {
    return (
        <>
        <section className="team-section-two pt-100 pb-100">
            <div className="sec-shape">
                <img className="animation__rotate" src={TeamShapeImage1} alt="Image"/>
            </div>
            <div className="box-shape">
                <div className="box1 wow slideInUp" data-wow-delay="300ms" data-wow-duration="1500ms"></div>
                <div className="box2 wow slideInRight" data-wow-delay="200ms" data-wow-duration="1500ms"></div>
            </div>
            <div className="container">
                <div className="sec-title center mb-50">
                <h6 className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">team member</h6>
                <h2 className="title text-white wow splt-txt" data-splitting>The Visionaries Driving <br/> Our Success</h2>
                </div>
                <div className="row g-4">
                <div className="col-sm-6 col-xl-3 wow bounceInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                    <div className="team-block-two">
                    <div className="inner-box">
                        <div className="image-box">
                        <figure className="image">
                            <img src={TeamImage1} alt="Image"/>
                        </figure>
                        <div className="socials">
                            <i className="fa-solid fa-share-nodes"></i>
                            <ul>
                            <li><Link to="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                            <li><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                            <li><Link to="#"><i className="fa-brands fa-youtube"></i></Link></li>
                            <li><Link to="#"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                            </ul>
                        </div>
                        </div>
                        <div className="content-box">
                        <h4 className="title"><Link to="/page-team-details">Leslie Alexander</Link></h4>
                        <p className="sub-title">Designer</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3 wow bounceInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="team-block-two">
                    <div className="inner-box">
                        <div className="image-box">
                        <figure className="image">
                            <img src={TeamImage2} alt="Image"/>
                        </figure>
                        <div className="socials">
                            <i className="fa-solid fa-share-nodes"></i>
                            <ul>
                            <li><Link to="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                            <li><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                            <li><Link to="#"><i className="fa-brands fa-youtube"></i></Link></li>
                            <li><Link to="#"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                            </ul>
                        </div>
                        </div>
                        <div className="content-box">
                        <h4 className="title"><Link to="/page-team-details">Darlene Robertson</Link></h4>
                        <p className="sub-title">ADMIN</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3 wow bounceInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                    <div className="team-block-two">
                    <div className="inner-box">
                        <div className="image-box">
                        <figure className="image">
                            <img src={TeamImage3} alt="Image"/>
                        </figure>
                        <div className="socials">
                            <i className="fa-solid fa-share-nodes"></i>
                            <ul>
                            <li><Link to="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                            <li><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                            <li><Link to="#"><i className="fa-brands fa-youtube"></i></Link></li>
                            <li><Link to="#"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                            </ul>
                        </div>
                        </div>
                        <div className="content-box">
                        <h4 className="title"><Link to="/page-team-details">Darrell Steward</Link></h4>
                        <p className="sub-title">FOUNDER</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3 wow bounceInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                    <div className="team-block-two">
                    <div className="inner-box">
                        <div className="image-box">
                        <figure className="image">
                            <img src={TeamImage4} alt="Image"/>
                        </figure>
                        <div className="socials">
                            <i className="fa-solid fa-share-nodes"></i>
                            <ul>
                            <li><Link to="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                            <li><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                            <li><Link to="#"><i className="fa-brands fa-youtube"></i></Link></li>
                            <li><Link to="#"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                            </ul>
                        </div>
                        </div>
                        <div className="content-box">
                        <h4 className="title"><Link to="/page-team-details">Arlene McCoy</Link></h4>
                        <p className="sub-title">CEO & FOUNDER</p>
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
export default Team;