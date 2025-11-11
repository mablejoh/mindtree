import React from "react";
import { Link } from "react-router-dom";
import TeamShape from '../assets/images/shape/team-shape.png';
import TeamImage1 from '../assets/images/team/team-image1.jpg';
import TeamImage2 from '../assets/images/team/team-image2.jpg';
import TeamImage3 from '../assets/images/team/team-image3.jpg';
import TeamImage4 from '../assets/images/team/team-image4.jpg';


const TeamGrid = () => {
  return (
    <section className="team-section pt-120 pb-120">
        <div className="team-shape wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
        <img className="sway__animation" src={TeamShape} alt="Image"/>
        </div>
        <div className="container">
        <div className="row g-4">
            <div className="col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
            <div className="team-block">
                <div className="inner-box">
                <figure className="image">
                    <img src={TeamImage1} alt="Image"/>
                </figure>
                <div className="socials">
                    <i className="fa-solid fa-plus"></i>
                    <ul>
                    <li><Link to="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                    <li><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                    <li><Link to="#"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                    <li><Link to="#"><i className="fa-brands fa-behance"></i></Link></li>
                    </ul>
                </div>
                <div className="content-box">
                    <h4 className="title"><Link to="/page-team-details">Guy Hawkins</Link></h4>
                    <p className="sub-title">Admin</p>
                </div>
                </div>
            </div>
            </div>
            <div className="col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="team-block">
                <div className="inner-box">
                <figure className="image">
                    <img src={TeamImage2} alt="Image"/>
                </figure>
                <div className="socials">
                    <i className="fa-solid fa-plus"></i>
                    <ul>
                    <li><Link to="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                    <li><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                    <li><Link to="#"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                    <li><Link to="#"><i className="fa-brands fa-behance"></i></Link></li>
                    </ul>
                </div>
                <div className="content-box">
                    <h4 className="title"><Link to="/page-team-details">Jacob Jones</Link></h4>
                    <p className="sub-title">Manager</p>
                </div>
                </div>
            </div>
            </div>
            <div className="col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
            <div className="team-block">
                <div className="inner-box">
                <figure className="image">
                    <img src={TeamImage3} alt="Image"/>
                </figure>
                <div className="socials">
                    <i className="fa-solid fa-plus"></i>
                    <ul>
                    <li><Link to="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                    <li><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                    <li><Link to="#"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                    <li><Link to="#"><i className="fa-brands fa-behance"></i></Link></li>
                    </ul>
                </div>
                <div className="content-box">
                    <h4 className="title"><Link to="/page-team-details">Kristin Watson</Link></h4>
                    <p className="sub-title">Consultant</p>
                </div>
                </div>
            </div>
            </div>
            <div className="col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
            <div className="team-block">
                <div className="inner-box">
                <figure className="image">
                    <img src={TeamImage4} alt="Image"/>
                </figure>
                <div className="socials">
                    <i className="fa-solid fa-plus"></i>
                    <ul>
                    <li><Link to="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                    <li><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                    <li><Link to="#"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                    <li><Link to="#"><i className="fa-brands fa-behance"></i></Link></li>
                    </ul>
                </div>
                <div className="content-box">
                    <h4 className="title"><Link to="/page-team-details">Bessie Cooper</Link></h4>
                    <p className="sub-title">Founder</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
  );
};

export default TeamGrid;
