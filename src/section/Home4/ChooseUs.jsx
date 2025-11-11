import React from 'react'
import { Link } from 'react-router-dom';
import ChooseUs1 from '../../assets/images/choose/choose-four-image.png';
import ChooseUs2 from '../../assets/images/choose/choose-four-shape.png';
import ChooseUs3 from '../../assets/images/choose/choose-four-circle-btn.png';
import ChooseUs4 from '../../assets/images/choose/choose-four-info.png';

function ChooseUs() {
    return (
        <>
        <section className="choose-section-four paralax__animation pt-120 pb-120">
            <div className="box-shape">
                <div className="box1 wow slideInUp" data-wow-delay="200ms" data-wow-duration="1500ms"></div>
                <div className="box2 wow slideInLeft" data-wow-delay="200ms" data-wow-duration="1500ms"></div>
            </div>
            <div className="container">
                <div className="sec-title">
                <h6 className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Why Choose us</h6>
                <div className="flex-content">
                    <h2 className="title text-white wow splt-txt" data-splitting>Build a thriving community and <br/> unlock limitless possibilities.</h2>
                    <Link className="btn-one-rounded wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" to="/page-contact">Get started <i className="fa-regular fa-angle-right"></i></Link>
                </div>
                </div>
                <div className="row g-0">
                <div className="col-xl-8">
                    <div className="row g-4">
                    <div className="col-md-5">
                        <div className="choose-block-four">
                        <h4 className="title">Headquarter -</h4>
                        <p className="text">2715 Ash Dr. San Jose, South Dakota 83475</p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="choose-block-four active">
                        <h4 className="title">Email Us -</h4>
                        <p className="text">yourtheme@gmail.com <br/> helptheme@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="choose-block-four">
                        <h4 className="title">The Advantages of Connecting with Us:</h4>
                        <div className="list">
                            <ul>
                            <li>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="10" fill="white" fillOpacity="0.16" />
                                <path
                                    d="M8.37891 13.8438L5.13672 10.6016C4.94141 10.4062 4.94141 10.0742 5.13672 9.87891L5.83984 9.17578C6.03516 8.98047 6.34766 8.98047 6.54297 9.17578L8.75 11.3633L13.4375 6.67578C13.6328 6.48047 13.9453 6.48047 14.1406 6.67578L14.8438 7.37891C15.0391 7.57422 15.0391 7.90625 14.8438 8.10156L9.10156 13.8438C8.90625 14.0391 8.57422 14.0391 8.37891 13.8438Z"
                                    fill="white" />
                                </svg>
                                Guiding Your Business Success
                            </li>
                            <li><svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="10" fill="white" fillOpacity="0.16" />
                                <path
                                    d="M8.37891 13.8438L5.13672 10.6016C4.94141 10.4062 4.94141 10.0742 5.13672 9.87891L5.83984 9.17578C6.03516 8.98047 6.34766 8.98047 6.54297 9.17578L8.75 11.3633L13.4375 6.67578C13.6328 6.48047 13.9453 6.48047 14.1406 6.67578L14.8438 7.37891C15.0391 7.57422 15.0391 7.90625 14.8438 8.10156L9.10156 13.8438C8.90625 14.0391 8.57422 14.0391 8.37891 13.8438Z"
                                    fill="white" />
                                </svg> Evaluate Issues Hindering Your Progress</li>
                            <li><svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="10" fill="white" fillOpacity="0.16" />
                                <path
                                    d="M8.37891 13.8438L5.13672 10.6016C4.94141 10.4062 4.94141 10.0742 5.13672 9.87891L5.83984 9.17578C6.03516 8.98047 6.34766 8.98047 6.54297 9.17578L8.75 11.3633L13.4375 6.67578C13.6328 6.48047 13.9453 6.48047 14.1406 6.67578L14.8438 7.37891C15.0391 7.57422 15.0391 7.90625 14.8438 8.10156L9.10156 13.8438C8.90625 14.0391 8.57422 14.0391 8.37891 13.8438Z"
                                    fill="white" />
                                </svg> Strategic Insights for Business Growth</li>
                            </ul>
                            <ul>
                            <li><svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="10" fill="white" fillOpacity="0.16" />
                                <path
                                    d="M8.37891 13.8438L5.13672 10.6016C4.94141 10.4062 4.94141 10.0742 5.13672 9.87891L5.83984 9.17578C6.03516 8.98047 6.34766 8.98047 6.54297 9.17578L8.75 11.3633L13.4375 6.67578C13.6328 6.48047 13.9453 6.48047 14.1406 6.67578L14.8438 7.37891C15.0391 7.57422 15.0391 7.90625 14.8438 8.10156L9.10156 13.8438C8.90625 14.0391 8.57422 14.0391 8.37891 13.8438Z"
                                    fill="white" />
                                </svg> Available 24/7 to Assist You Anytime</li>
                            <li><svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="10" fill="white" fillOpacity="0.16" />
                                <path
                                    d="M8.37891 13.8438L5.13672 10.6016C4.94141 10.4062 4.94141 10.0742 5.13672 9.87891L5.83984 9.17578C6.03516 8.98047 6.34766 8.98047 6.54297 9.17578L8.75 11.3633L13.4375 6.67578C13.6328 6.48047 13.9453 6.48047 14.1406 6.67578L14.8438 7.37891C15.0391 7.57422 15.0391 7.90625 14.8438 8.10156L9.10156 13.8438C8.90625 14.0391 8.57422 14.0391 8.37891 13.8438Z"
                                    fill="white" />
                                </svg> Expert Consultants Expertise</li>
                            <li><svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="10" fill="white" fillOpacity="0.16" />
                                <path
                                    d="M8.37891 13.8438L5.13672 10.6016C4.94141 10.4062 4.94141 10.0742 5.13672 9.87891L5.83984 9.17578C6.03516 8.98047 6.34766 8.98047 6.54297 9.17578L8.75 11.3633L13.4375 6.67578C13.6328 6.48047 13.9453 6.48047 14.1406 6.67578L14.8438 7.37891C15.0391 7.57422 15.0391 7.90625 14.8438 8.10156L9.10156 13.8438C8.90625 14.0391 8.57422 14.0391 8.37891 13.8438Z"
                                    fill="white" />
                                </svg> Free Consultation to Collaboration</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-xl-4 image-column">
                    <figure className="image">
                    <img src={ChooseUs1} alt="Image"/>
                    <div className="circle-bg">
                        <img className="animation__rotate" src={ChooseUs2} alt="Image"/>
                    </div>
                    <Link to="/page-contact" className="circle-btn">
                        <img data-depth="0.03" src={ChooseUs3} alt="Image"/>
                    </Link>
                    <div className="info">
                        <img className="animation__arryLeftRight" src={ChooseUs4} alt="Image"/>
                    </div>
                    </figure>
                </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default ChooseUs
