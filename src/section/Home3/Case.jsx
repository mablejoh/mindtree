import React from 'react'
import { Link } from 'react-router-dom';
import CaseShapeImage from '../../assets/images/shape/case-three-shape.png';
import CaseImage1 from '../../assets/images/case/case-three-image1.jpg';
import CaseImage2 from '../../assets/images/case/case-three-image2.jpg';
import CaseImage3 from '../../assets/images/case/case-three-image3.jpg';
import CaseImage4 from '../../assets/images/case/case-three-image4.jpg';

function Case() {
    return (
        <>
            <section className="case-section-three">
                <div className="sec-shape">
                    <img className="sway_Y__animation" src={CaseShapeImage} alt="Image"/>
                </div>
                <div className="box-shape">
                    <div className="box1 wow slideInUp" data-wow-delay="200ms" data-wow-duration="1500ms"></div>
                    <div className="box2 wow slideInLeft" data-wow-delay="200ms" data-wow-duration="1500ms"></div>
                </div>
                <div className="outer-box">
                    <div className="content-column">
                    <div className="inner-column">
                        <div className="sec-title mb-30">
                        <h6 className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Case studies</h6>
                        <h2 className="title text-white wow splt-txt" data-splitting>Passionate About Help
                            You Achieve <span className="font-weight-300">Success</span></h2>
                        <p className="text text-white wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Sed ut perspiciatis unde omnis iste natus voluptatem doloremque laudantium totames aperiam eaque quaesy inventore a tetar bikal architecto beatae vitae dicta.</p>
                        </div>
                        <ul className="info wow fadeInDown" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <li>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="#C6D936" />
                            <path
                                d="M8.37891 13.8438L5.13672 10.6016C4.94141 10.4062 4.94141 10.0742 5.13672 9.87891L5.83984 9.17578C6.03516 8.98047 6.34766 8.98047 6.54297 9.17578L8.75 11.3633L13.4375 6.67578C13.6328 6.48047 13.9453 6.48047 14.1406 6.67578L14.8438 7.37891C15.0391 7.57422 15.0391 7.90625 14.8438 8.10156L9.10156 13.8438C8.90625 14.0391 8.57422 14.0391 8.37891 13.8438Z"
                                fill="black" />
                            </svg>
                            Real-time insights to drive results.
                        </li>
                        <li>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="#C6D936" />
                            <path
                                d="M8.37891 13.8438L5.13672 10.6016C4.94141 10.4062 4.94141 10.0742 5.13672 9.87891L5.83984 9.17578C6.03516 8.98047 6.34766 8.98047 6.54297 9.17578L8.75 11.3633L13.4375 6.67578C13.6328 6.48047 13.9453 6.48047 14.1406 6.67578L14.8438 7.37891C15.0391 7.57422 15.0391 7.90625 14.8438 8.10156L9.10156 13.8438C8.90625 14.0391 8.57422 14.0391 8.37891 13.8438Z"
                                fill="black" />
                            </svg>
                            Accept fast payments directly during meetings.
                        </li>
                        </ul>
                        <Link className="btn-one-rounded mt-50 wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms"
                        to="/page-case">View all projects <i className="fa-regular fa-angle-right"></i></Link>
                    </div>
                    </div>
                    <div className="image-column">
                    <div className="row g-0">
                        <div className="col-sm-6">
                        <div className="case-block-three overlay-anim">
                            <figure className="image">
                            <img src={CaseImage1} alt="Image"/>
                            </figure>
                            <Link className="icon" to="/page-case-details"><i className="fa-solid fa-arrow-up-right"></i></Link>
                            <div className="content">
                            <h5 className="title"><Link to="/page-case-details">HR Development</Link></h5>
                            <h4 className="sub-title"><Link to="/page-case">All</Link></h4>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-6">
                        <div className="case-block-three overlay-anim">
                            <figure className="image">
                            <img src={CaseImage2} alt="Image"/>
                            </figure>
                            <Link className="icon" to="/page-case-details"><i className="fa-solid fa-arrow-up-right"></i></Link>
                            <div className="content">
                            <h5 className="title"><Link to="/page-case-details">HR Development</Link></h5>
                            <h4 className="sub-title"><Link to="/page-case">All</Link></h4>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-6">
                        <div className="case-block-three overlay-anim">
                            <figure className="image">
                            <img src={CaseImage3} alt="Image"/>
                            </figure>
                            <Link className="icon" to="/page-case-details"><i className="fa-solid fa-arrow-up-right"></i></Link>
                            <div className="content">
                            <h5 className="title"><Link to="/page-case-details">HR Development</Link></h5>
                            <h4 className="sub-title"><Link to="/page-case">All</Link></h4>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-6">
                        <div className="case-block-three overlay-anim">
                            <figure className="image">
                            <img src={CaseImage4} alt="Image"/>
                            </figure>
                            <Link className="icon" to="/page-case-details"><i className="fa-solid fa-arrow-up-right"></i></Link>
                            <div className="content">
                            <h5 className="title"><Link to="/page-case-details">HR Development</Link></h5>
                            <h4 className="sub-title"><Link to="/page-case">All</Link></h4>
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
export default Case
