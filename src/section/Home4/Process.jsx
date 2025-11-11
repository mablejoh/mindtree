import React, { useState } from 'react';
import ProcessImage1 from '../../assets/images/process/image1.jpg';
import ProcessImage2 from '../../assets/images/process/image2.jpg';

const ProcessTabs = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
        <section className="process-section-four pt-120 pb-120">
            <div className="container">
                <div className="outer-box">
                    <div className="sec-title center mb-50">
                        <h6 className="sub-title">Process</h6>
                        <h2 className="title">Ensure the success of <br /> your business venture.</h2>
                    </div>
                    <div className="process-tab">
                        <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item mb-3 mb-md-0" role="presentation">
                            <button
                            className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
                            onClick={() => handleTabClick('home')}
                            type="button"
                            >
                            Business Analysis
                            <span className="number">01</span>
                            </button>
                        </li>
                        <li className="nav-item mb-3 mb-md-0" role="presentation">
                            <button
                            className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
                            onClick={() => handleTabClick('profile')}
                            type="button"
                            >
                            Business Strategy
                            <span className="number">02</span>
                            </button>
                        </li>
                        <li className="nav-item mb-3 mb-md-0" role="presentation">
                            <button
                            className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`}
                            onClick={() => handleTabClick('contact')}
                            type="button"
                            >
                            Final Execution
                            <span className="number">03</span>
                            </button>
                        </li>
                        </ul>
                    </div>
                    <div className="tab-content mt-30">
                        <div className={`tab-pane fade ${activeTab === 'home' ? 'show active' : ''}`}>
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-7 content-column">
                            <div className="inner-column">
                                <div className="sec-title mb-30">
                                <h2 className="title">Essential Features for
                                    Time Management</h2>
                                <p className="text fs-16">Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque
                                    laudantium
                                    totamto aperiame
                                    eaque ipsa quae ab illo inventore veritatis</p>
                                </div>
                                <div className="list">
                                <ul>
                                    <li>
                                    <i className="fa-solid fa-check"></i> Optimized Sprint Planning
                                    </li>
                                    <li>
                                    <i className="fa-solid fa-check"></i> Continuous Improvement
                                    </li>
                                </ul>

                                <ul>
                                    <li>
                                    <i className="fa-solid fa-check"></i> Incremental Delivery Approach
                                    </li>
                                    <li>
                                    <i className="fa-solid fa-check"></i> Delivering Innovative
                                    </li>
                                </ul>

                                </div>
                            </div>
                            </div>

                            <div className="col-lg-5 image-column">
                            <div className="inner-column">
                                <figure className="image">
                                <svg width="462" height="455" viewBox="0 0 462 455" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                    d="M459.997 221.079C454.897 264.279 435.197 314.479 395.797 337.579C336.297 372.479 341.297 426.079 225.097 449.379C206.997 452.979 189.797 454.579 173.597 454.279C164.897 454.079 156.497 453.379 148.297 452.179C74.3971 441.379 24.6971 390.079 6.49711 328.179C-17.5029 246.679 30.3971 193.379 62.1971 161.179C93.9971 129.079 117.197 28.8789 231.197 5.07893C248.597 1.47893 266.397 -0.421065 284.097 0.0789348C324.697 1.07893 368.897 14.3789 399.497 42.1789C401.797 44.2789 403.997 46.4789 406.197 48.6789C448.897 92.3789 466.897 162.179 459.997 221.079Z"
                                    fill="#1A4137" fillOpacity="0.1" />
                                </svg>
                                <div className="image1">
                                    <img src={ProcessImage1} alt="Image"/>
                                </div>
                                <div className="image2">
                                    <img src={ProcessImage2} alt="Image"/>
                                </div>
                                </figure>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className={`tab-pane fade ${activeTab === 'profile' ? 'show active' : ''}`}>
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-7 content-column">
                            <div className="inner-column">
                                <div className="sec-title mb-30">
                                <h2 className="title">Essential Features for
                                    Time Management</h2>
                                <p className="text fs-16">which is derived from Cicero’s writings but scrambled and adapted for typesetting. It's often used to demonstrate font styles or design elements without distracting from the visuals.</p>
                                </div>
                                <div className="list">
                                <ul>
                                    <li>
                                    <i className="fa-solid fa-check"></i> Optimized Sprint Planning
                                    </li>
                                    <li>
                                    <i className="fa-solid fa-check"></i> Continuous Improvement
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                    <i className="fa-solid fa-check"></i> Incremental Delivery Approach
                                    </li>
                                    <li>
                                    <i className="fa-solid fa-check"></i> Delivering Innovative
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-5 image-column">
                            <div className="inner-column">
                                <figure className="image">
                                <svg width="462" height="455" viewBox="0 0 462 455" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                    d="M459.997 221.079C454.897 264.279 435.197 314.479 395.797 337.579C336.297 372.479 341.297 426.079 225.097 449.379C206.997 452.979 189.797 454.579 173.597 454.279C164.897 454.079 156.497 453.379 148.297 452.179C74.3971 441.379 24.6971 390.079 6.49711 328.179C-17.5029 246.679 30.3971 193.379 62.1971 161.179C93.9971 129.079 117.197 28.8789 231.197 5.07893C248.597 1.47893 266.397 -0.421065 284.097 0.0789348C324.697 1.07893 368.897 14.3789 399.497 42.1789C401.797 44.2789 403.997 46.4789 406.197 48.6789C448.897 92.3789 466.897 162.179 459.997 221.079Z"
                                    fill="#1A4137" fillOpacity="0.1" />
                                </svg>
                                <div className="image1">
                                    <img src={ProcessImage1} alt="Image"/>
                                </div>
                                <div className="image2">
                                    <img src={ProcessImage2} alt="Image"/>
                                </div>
                                </figure>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className={`tab-pane fade ${activeTab === 'contact' ? 'show active' : ''}`}>
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-7 content-column">
                            <div className="inner-column">
                                <div className="sec-title mb-30">
                                <h2 className="title">Essential Features for
                                    Time Management</h2>
                                <p className="text fs-16">Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque
                                    laudantium
                                    totamto aperiame
                                    eaque ipsa quae ab illo inventore veritatis</p>
                                </div>
                                <div className="list">
                                <ul>
                                    <li>
                                    <i className="fa-solid fa-check"></i> Optimized Sprint Planning
                                    </li>
                                    <li>
                                    <i className="fa-solid fa-check"></i> Continuous Improvement
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                    <i className="fa-solid fa-check"></i> Incremental Delivery Approach
                                    </li>
                                    <li>
                                    <i className="fa-solid fa-check"></i> Delivering Innovative
                                    </li>
                                </ul>

                                </div>
                            </div>
                            </div>
                            <div className="col-lg-5 image-column">
                            <div className="inner-column">
                                <figure className="image">
                                <svg width="462" height="455" viewBox="0 0 462 455" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                    d="M459.997 221.079C454.897 264.279 435.197 314.479 395.797 337.579C336.297 372.479 341.297 426.079 225.097 449.379C206.997 452.979 189.797 454.579 173.597 454.279C164.897 454.079 156.497 453.379 148.297 452.179C74.3971 441.379 24.6971 390.079 6.49711 328.179C-17.5029 246.679 30.3971 193.379 62.1971 161.179C93.9971 129.079 117.197 28.8789 231.197 5.07893C248.597 1.47893 266.397 -0.421065 284.097 0.0789348C324.697 1.07893 368.897 14.3789 399.497 42.1789C401.797 44.2789 403.997 46.4789 406.197 48.6789C448.897 92.3789 466.897 162.179 459.997 221.079Z"
                                    fill="#1A4137" fillOpacity="0.1" />
                                </svg>
                                <div className="image1">
                                    <img src={ProcessImage1} alt="Image"/>
                                </div>
                                <div className="image2">
                                    <img src={ProcessImage2} alt="Image"/>
                                </div>
                                </figure>
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

export default ProcessTabs;
