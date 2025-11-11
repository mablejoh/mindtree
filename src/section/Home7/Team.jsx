import React from 'react';
import { Link } from 'react-router-dom';
import TeamImage1 from '../../assets/images/team/team-four-image1.jpg';
import TeamImage2 from '../../assets/images/team/team-four-image2.jpg';
import TeamImage3 from '../../assets/images/team/team-four-image3.jpg';
import TeamShapemage from '../../assets/images/shape/team-shape-five.png';

const Team = () => {

  return (
        <section className="team-section-four pt-120 pb-120">
          <div className="container">
            <div className="sec-title mb-50">
              <h6 className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">team member</h6>
              <div className="flex-content">
                <h2 className="title wow splt-txt" data-splitting>Meet Our Expert Team <br/> Members</h2>
                <Link className="btn-one-rounded wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" to="/page-contact">more Services <i className="fa-regular fa-angle-right"></i></Link>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-sm-6 col-xl-4 wow bounceInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                <div className="team-block-four">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <img src={TeamImage1} alt="Image"/>
                        <div className="shape-image">
                          <img src={TeamShapemage} alt="Image"/>
                        </div>
                      </figure>                  
                    </div>
                    <div className="content-box">
                      <h4 className="title"><Link to="/page-team-details">Ronald Richards</Link></h4>
                      <p className="sub-title">CEO & Founder</p>
                      <div className="socials">
                        <ul>
                          <li><Link to="#"><i className="fa-brands fa-behance"></i></Link></li>
                          <li><Link to="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                          <li><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                          <li><Link to="#"><i className="fa-brands fa-x-twitter"></i></Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-4 wow bounceInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                <div className="team-block-four">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <img src={TeamImage2} alt="Image"/>
                        <div className="shape-image">
                          <img src={TeamShapemage} alt="Image"/>
                        </div>
                      </figure>                  
                    </div>
                    <div className="content-box">
                      <h4 className="title"><Link to="/page-team-details">Kristin Watson</Link></h4>
                      <p className="sub-title">CEO & Founder</p>
                      <div className="socials">
                        <ul>
                          <li><Link to="#"><i className="fa-brands fa-behance"></i></Link></li>
                          <li><Link to="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                          <li><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                          <li><Link to="#"><i className="fa-brands fa-x-twitter"></i></Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-xl-4 wow bounceInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                <div className="team-block-four">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <img src={TeamImage3} alt="Image"/>
                        <div className="shape-image">
                          <img src={TeamShapemage} alt="Image"/>
                        </div>
                      </figure>                  
                    </div>
                    <div className="content-box">
                      <h4 className="title"><Link to="/page-team-details">Kathryn Murphy</Link></h4>
                      <p className="sub-title">CEO & Founder</p>
                      <div className="socials">
                        <ul>
                          <li><Link to="#"><i className="fa-brands fa-behance"></i></Link></li>
                          <li><Link to="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                          <li><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                          <li><Link to="#"><i className="fa-brands fa-x-twitter"></i></Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
};

export default Team;
