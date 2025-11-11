import React from 'react'
import { Link } from 'react-router-dom';
import ServiceBgImage from '../../assets/images/service/service-bg.jpg';
import ServiceImage1 from '../../assets/images/shape/service-five-shape.png';

function Service() {
    return (
        <>
        <section id="service" className="service-section-five pt-120 pb-120 fix bg-cover" style={{ backgroundImage: `url(${ServiceBgImage})` }}>
          <div className="shape-bg"><img src={ServiceImage1} alt="Image"/></div>
          <div className="auto-container">
            <div className="sec-title center">
              <h6 className="sub-title wow fadeInUp">
                <span className="triangle triangle1"></span>
                <span className="triangle triangle2"></span>
                Service area
              </h6>
              <h2 className="title text-white wow fadeInUp" data-wow-delay=".2s">Institutional-Grade Portfolio <br/> Management Services</h2>
            </div>
          </div>
          <div className="service-wrapper">
            <div className="row">
              <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                <div className="service-card-items">
                  <div className="icon">
                    <svg className="animated-svg" xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                      <g clipPath="url(#clip0_1_1831)">
                      <path d="M24.1122 6.86822C33.0161 7.14324 40.1145 14.4508 40.1145 23.3824C40.1145 32.5071 32.7175 39.9041 23.5928 39.9041C14.6541 39.9041 7.3428 32.7946 7.07779 23.8827C7.06405 23.4206 6.67837 23.0573 6.21634 23.071C5.75432 23.0847 5.39094 23.4704 5.40467 23.9324C5.69658 33.7484 13.7484 41.5779 23.5928 41.5779C33.6419 41.5779 41.7883 33.4316 41.7883 23.3824C41.7883 13.5459 33.971 5.49812 24.1639 5.19523C23.7019 5.18097 23.3158 5.54393 23.3015 6.00592C23.2872 6.4679 23.6502 6.854 24.1122 6.8683L24.1122 6.86822Z" fill="white"/>
                      <path d="M2.66583 19.598H19.598V2.66583C10.4395 3.09002 3.09002 10.4395 2.66583 19.598ZM0.972656 20.4349C0.972656 9.68606 9.68606 0.972656 20.4349 0.972656C20.8971 0.972656 21.2718 1.34735 21.2718 1.80958V20.4349C21.2718 20.8971 20.8971 21.2718 20.4349 21.2718H1.80958C1.34735 21.2718 0.972656 20.8971 0.972656 20.4349Z" fill="white"/>
                      <path d="M23.0939 6.05128V22.6257C23.0939 22.8539 22.9037 23.0442 22.6755 23.0442H6.28224C5.82001 23.0442 5.44531 23.4189 5.44531 23.8811C5.44531 24.3433 5.82001 24.718 6.28224 24.718H22.6755C23.8282 24.718 24.7678 23.7784 24.7678 22.6257V6.05128C24.7678 5.58905 24.3931 5.21436 23.9308 5.21436C23.4686 5.21436 23.0939 5.58905 23.0939 6.05128Z" fill="white"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_1_18315">
                        <rect width="41.8462" height="41.8462" fill="white" transform="translate(0.554688 0.553711)"/>
                      </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="content">
                    <h3><Link to="/page-service-details">Business Consulting</Link></h3>
                    <p>
                      We promise cost-effective business consulting solutions designed to help you lower expenses and boost profits.
                    </p>
                    <Link to="/page-service-details" className="link-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="68" viewBox="0 0 34 68" fill="none">
                        <g clipPath="url(#clip0_1_1837)">
                        <path d="M32.4322 35.3862H-32.4293C-33.2009 35.3862 -33.8242 34.7629 -33.8242 33.9913C-33.8242 33.2198 -33.2009 32.5964 -32.4293 32.5964H29.0627L20.5976 24.1313C20.0527 23.5864 20.0527 22.7016 20.5976 22.1567C21.1425 21.6118 22.0273 21.6118 22.5722 22.1567L33.4217 33.0062C33.8227 33.4072 33.9404 34.0044 33.7225 34.5275C33.5045 35.0462 32.9945 35.3862 32.4322 35.3862Z" fill="white"/>
                        <path d="M21.5696 46.2479C21.2121 46.2479 20.8547 46.1127 20.5844 45.8381C20.0396 45.2932 20.0396 44.4084 20.5844 43.8635L31.447 33.0009C31.9919 32.4561 32.8767 32.4561 33.4216 33.0009C33.9665 33.5458 33.9665 34.4307 33.4216 34.9756L22.5591 45.8381C22.2844 46.1127 21.927 46.2479 21.5696 46.2479Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1_18373">
                          <rect width="34" height="68" fill="white"/>
                        </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="service-card-items">
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M8.93637 16.6847L3.29688 20.1597L20.4354 29.9723L36.6917 20.1595L31.3042 16.8705M36.6917 13.5487L20.4354 3.63916L3.64971 13.5487L20.4354 23.4582L36.6917 13.5487Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.93638 16.6847L3.29688 20.1597L20.4354 29.9723L36.6917 20.1595L31.3042 16.8705M9.17779 23.4003L3.53829 26.8748L20.6767 36.6879L36.9331 26.8748L31.5456 23.5859M36.6917 13.5487L20.4354 3.63916L3.64971 13.5487L20.4354 23.4582L36.6917 13.5487Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  </div>
                  <div className="content">
                    <h3><Link to="/page-service-details">Invest Propose</Link></h3>
                    <p>
                      We promise cost-effective business consulting solutions designed to help you lower expenses and boost profits.
                    </p>
                    <Link to="/page-service-details" className="link-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="68" viewBox="0 0 34 68" fill="none">
                        <g clipPath="url(#clip0_1_1837)">
                        <path d="M32.4322 35.3862H-32.4293C-33.2009 35.3862 -33.8242 34.7629 -33.8242 33.9913C-33.8242 33.2198 -33.2009 32.5964 -32.4293 32.5964H29.0627L20.5976 24.1313C20.0527 23.5864 20.0527 22.7016 20.5976 22.1567C21.1425 21.6118 22.0273 21.6118 22.5722 22.1567L33.4217 33.0062C33.8227 33.4072 33.9404 34.0044 33.7225 34.5275C33.5045 35.0462 32.9945 35.3862 32.4322 35.3862Z" fill="white"/>
                        <path d="M21.5696 46.2479C21.2121 46.2479 20.8547 46.1127 20.5844 45.8381C20.0396 45.2932 20.0396 44.4084 20.5844 43.8635L31.447 33.0009C31.9919 32.4561 32.8767 32.4561 33.4216 33.0009C33.9665 33.5458 33.9665 34.4307 33.4216 34.9756L22.5591 45.8381C22.2844 46.1127 21.927 46.2479 21.5696 46.2479Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1_18372">
                          <rect width="34" height="68" fill="white"/>
                        </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                <div className="service-card-items">
                  <div className="icon">
                    <svg width="34" height="29" viewBox="0 0 34 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.2188 13.2676V25.377C25.2188 26.5488 24.2812 27.4863 23.1094 27.4863H3.10937C1.9375 27.4863 1 26.5488 1 25.377V13.2676C1 12.0957 1.9375 11.1582 3.10937 11.1582H23.1094C24.2812 11.1582 25.2188 12.0957 25.2188 13.2676Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1 15.4551H25.2188" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.32812 8.03316L8.8125 2.56441C9.125 1.39253 10.2969 0.767535 11.4687 1.08003L30.6875 6.23629C31.8594 6.54879 32.4844 7.72066 32.1719 8.89253L29.0469 20.6113" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.1875 4.67383L31.625 10.9238" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>

                  </div>
                  <div className="content">
                    <h3><Link to="/page-service-details">Accounting</Link></h3>
                    <p>
                      We promise cost-effective business consulting solutions designed to help you lower expenses and boost profits.
                    </p>
                    <Link to="/page-service-details" className="link-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="68" viewBox="0 0 34 68" fill="none">
                        <g clipPath="url(#clip0_1_1837)">
                        <path d="M32.4322 35.3862H-32.4293C-33.2009 35.3862 -33.8242 34.7629 -33.8242 33.9913C-33.8242 33.2198 -33.2009 32.5964 -32.4293 32.5964H29.0627L20.5976 24.1313C20.0527 23.5864 20.0527 22.7016 20.5976 22.1567C21.1425 21.6118 22.0273 21.6118 22.5722 22.1567L33.4217 33.0062C33.8227 33.4072 33.9404 34.0044 33.7225 34.5275C33.5045 35.0462 32.9945 35.3862 32.4322 35.3862Z" fill="white"/>
                        <path d="M21.5696 46.2479C21.2121 46.2479 20.8547 46.1127 20.5844 45.8381C20.0396 45.2932 20.0396 44.4084 20.5844 43.8635L31.447 33.0009C31.9919 32.4561 32.8767 32.4561 33.4216 33.0009C33.9665 33.5458 33.9665 34.4307 33.4216 34.9756L22.5591 45.8381C22.2844 46.1127 21.927 46.2479 21.5696 46.2479Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1_18376">
                          <rect width="34" height="68" fill="white"/>
                        </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                <div className="service-card-items">
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M7.5 17.0625H28.1875H32.5V32.5H9.6875C8.5 32.5 7.5 31.5 7.5 30.3125V14.125C7.5 12.9375 8.5 11.9375 9.6875 11.9375H28.0625V17.0625" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M28.0625 26.625H32.5V22.1875H28.0625C26.875 22.1875 25.875 23.1875 25.875 24.375C25.875 25.625 26.875 26.625 28.0625 26.625Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="content">
                    <h3><Link to="/page-service-details">Career Development</Link></h3>
                    <p>
                      We promise cost-effective business consulting solutions designed to help you lower expenses and boost profits.
                    </p>
                    <Link to="/page-service-details" className="link-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="68" viewBox="0 0 34 68" fill="none">
                        <g clipPath="url(#clip0_1_1837)">
                        <path d="M32.4322 35.3862H-32.4293C-33.2009 35.3862 -33.8242 34.7629 -33.8242 33.9913C-33.8242 33.2198 -33.2009 32.5964 -32.4293 32.5964H29.0627L20.5976 24.1313C20.0527 23.5864 20.0527 22.7016 20.5976 22.1567C21.1425 21.6118 22.0273 21.6118 22.5722 22.1567L33.4217 33.0062C33.8227 33.4072 33.9404 34.0044 33.7225 34.5275C33.5045 35.0462 32.9945 35.3862 32.4322 35.3862Z" fill="white"/>
                        <path d="M21.5696 46.2479C21.2121 46.2479 20.8547 46.1127 20.5844 45.8381C20.0396 45.2932 20.0396 44.4084 20.5844 43.8635L31.447 33.0009C31.9919 32.4561 32.8767 32.4561 33.4216 33.0009C33.9665 33.5458 33.9665 34.4307 33.4216 34.9756L22.5591 45.8381C22.2844 46.1127 21.927 46.2479 21.5696 46.2479Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1_1837">
                          <rect width="34" height="68" fill="white"/>
                        </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-know-box wow fadeInUp" data-wow-delay=".3s">
              <div className="icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.9987 16.6663H31.6654L13.332 36.6663L18.332 21.6663H8.33203L21.6654 3.33301L19.9987 16.6663Z" fill="#063232"/>
                </svg>
              </div>
              <p>We Strive To Lead The way In  The business <Link to="/page-services">Know All Services <i className="fa-regular fa-arrow-right"></i></Link></p>
            </div>
          </div>
        </section>
        </>
    )
}
export default Service
