import React from "react";
import { Link } from 'react-router-dom';
import TeamImage1 from '../../assets/images/shape/team-three-text.png';
import Team1 from '../../assets/images/team/team-three-image1.jpg';
import Team2 from '../../assets/images/team/team-three-image2.jpg';
import Team3 from '../../assets/images/team/team-three-image3.jpg';
import Team4 from '../../assets/images/team/team-three-image4.jpg';

function Teams() {
    return (
        <>
        <section className="team-section-three pb-120">
            <div className="team-three-text">
                <img className="wow slideInLeft" data-wow-delay="1s" data-wow-duration="1500ms" src={TeamImage1} alt="Image"/>
            </div>
            <div className="container">
                <div className="sec-title mb-50">
                <h6 className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">team member</h6>
                <div className="flex-content">
                    <h2 className="title wow splt-txt" data-splitting>The Visionaries Driving <br/> Our Success</h2>
                    <Link className="btn-one-rounded wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" to="/page-contact">Get started <i className="fa-regular fa-angle-right"></i></Link>
                </div>
                </div>
                <div className="row g-4">
                <div className="col-sm-6 col-xl-3 wow bounceInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                    <div className="team-block-three">
                    <div className="inner-box">
                        <div className="image-box">
                        <figure className="image">
                            <img src={Team1} alt="Image"/>
                        </figure>
                        <div className="socials">
                            <ul>
                            <li><Link to="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                            <li><Link to="#"><i className="fa-sharp fa-solid fa-x"></i></Link></li>
                            <li><Link to="#"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                            <li><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                            </ul>
                        </div>
                        </div>
                        <div className="content-box">
                        <h4 className="title"><Link to="/page-team-details">Ronald Richards</Link></h4>
                        <p className="sub-title">CEO & Founder</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3 wow bounceInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="team-block-three">
                    <div className="inner-box">
                        <div className="image-box">
                        <figure className="image">
                            <img src={Team2} alt="Image"/>
                        </figure>
                        <div className="socials">
                            <ul>
                            <li><Link to="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                            <li><Link to="#"><i className="fa-sharp fa-solid fa-x"></i></Link></li>
                            <li><Link to="#"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                            <li><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                            </ul>
                        </div>
                        </div>
                        <div className="content-box">
                        <h4 className="title"><Link to="/page-team-details">Marvin McKinney</Link></h4>
                        <p className="sub-title">Senior Manager</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3 wow bounceInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                    <div className="team-block-three">
                    <div className="inner-box">
                        <div className="image-box">
                        <figure className="image">
                            <img src={Team3} alt="Image"/>
                        </figure>
                        <div className="socials">
                            <ul>
                            <li><Link to="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                            <li><Link to="#"><i className="fa-sharp fa-solid fa-x"></i></Link></li>
                            <li><Link to="#"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                            <li><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                            </ul>
                        </div>
                        </div>
                        <div className="content-box">
                        <h4 className="title"><Link to="/page-team-details">Kathryn Murphy</Link></h4>
                        <p className="sub-title">Web Designer</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3 wow bounceInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                    <div className="team-block-three">
                    <div className="inner-box">
                        <div className="image-box">
                        <figure className="image">
                            <img src={Team4} alt="Image"/>
                        </figure>
                        <div className="socials">
                            <ul>
                            <li><Link to="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                            <li><Link to="#"><i className="fa-sharp fa-solid fa-x"></i></Link></li>
                            <li><Link to="#"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                            <li><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                            </ul>
                        </div>
                        </div>
                        <div className="content-box">
                        <h4 className="title"><Link to="/page-team-details">Dianne Russell</Link></h4>
                        <p className="sub-title">Junior manager</p>
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
export default Teams