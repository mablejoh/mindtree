import React from 'react'
import { Link } from 'react-router-dom';
import CounterUp from '../../lib/CounterUp';
import ProfessionalIconImg from '../../assets/images/icon/object-2.png';
import ProfessionalIconImg2 from '../../assets/images/icon/object-1.png';
import ProfessionalImg from '../../assets/images/resource/professional-image.jpg';

function Professional() {
    return (
        <>
    <section className="professional-area bg-theme-color7">
      <div className="floating-img2"><img src={ProfessionalIconImg} alt="Image"/></div>
      <div className="floating-img"><img src={ProfessionalIconImg2} alt="Image"/></div>
      <div className="container-fluid">
        <div className="row g-0 align-items-center">
          <div className="col-xl-6 order-2">
            <div className="professional__image wow">
              <img src={ProfessionalImg} alt="image"/>
              <div className="content">
                <ul>
                  <li className="icon"> 
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.64714 6.41667C6.64714 4.01592 8.60055 2.0625 11.0013 2.0625C13.4021 2.0625 15.3555 4.01592 15.3555 6.41667C15.3555 8.81742 13.4021 10.7708 11.0013 10.7708C8.60055 10.7708 6.64714 8.81742 6.64714 6.41667ZM13.7513 12.1458H8.2513C5.34547 12.1458 2.98047 14.5108 2.98047 17.4167C2.98047 18.8073 4.11072 19.9375 5.5013 19.9375H16.5013C17.8919 19.9375 19.0221 18.8073 19.0221 17.4167C19.0221 14.5108 16.6571 12.1458 13.7513 12.1458Z" fill="#121C27" />
                    </svg>
                  </li>
                  <li className="info">
                    <h3 className="title"><span className="count"><CounterUp end={20} /></span>k+</h3>
                    <div className="text">Happy User</div>
                  </li>
                </ul>
                <ul className="last-item">
                  <li className="icon"> 
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M11.9799 1.5C7.57997 1.5 4.00781 5.07216 4.00781 9.47208C4.00781 13.872 7.57997 17.4442 11.9799 17.4442C16.3798 17.4442 19.952 13.872 19.952 9.47208C19.952 5.07216 16.3798 1.5 11.9799 1.5ZM11.9799 6.7692C11.7574 6.51816 11.5196 6.33192 11.2808 6.19776C10.3431 5.67096 9.33029 5.89152 8.69669 6.42264C7.76453 7.20408 7.59485 8.76168 8.52269 10.3243C9.07061 11.298 10.4391 12.2988 11.6005 12.9478C11.8364 13.0795 12.1234 13.0795 12.3593 12.9478C13.5248 12.2964 14.899 11.2908 15.4431 10.3138C16.3649 8.76168 16.1953 7.20408 15.2631 6.42264C14.6295 5.89152 13.6167 5.67096 12.679 6.19776C12.4402 6.33192 12.2025 6.51816 11.9799 6.76944V6.7692Z" fill="#121C27" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.0331 16.5996C15.608 17.6208 13.8624 18.222 11.9775 18.222C10.0925 18.222 8.347 17.6208 6.92188 16.5996V21.7219C6.92188 22.0145 7.08603 22.2823 7.34692 22.4151C7.60755 22.5478 7.92052 22.523 8.15716 22.351L11.9775 19.5727L15.7978 22.351C16.0344 22.523 16.3474 22.5478 16.6083 22.4151C16.8689 22.2823 17.0331 22.0145 17.0331 21.7219V16.5996Z" fill="#121C27" />
                    </svg>
                  </li>
                  <li className="info">
                    <h3 className="title"><span className="count"><CounterUp end={100} /></span>+</h3>
                    <div className="text">Award Winer</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-5 offset-xl-1">
            <div className="professional__content">
              <div className="sec-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                <h6 className="sub-title style-red">we are consultez</h6>
                <h2 className="title wow splt-txt text-white" data-splitting>Passionate About Help You Achieve <span className="font-weight-300">professionals</span></h2>
                <div className="text text-white">Sed ut perspiciatis unde omnis iste natus voluptatem doloremque laudantium totames aperiam eaque quaesy inventore a tetar bikal architecto beatae vitae dicta.</div>
              </div>
              <div>
                <ul className="mb-40 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                  <li><i className="icon fa-solid fa-check"></i> Real-time insights to drive results.</li>
                  <li><i className="icon fa-solid fa-check"></i> Accept fast payments directly during meetings.</li>
                </ul>
                <Link className="btn-three text-center mt-1 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" to="/page-case">View all projects <span className="icon ps-3 far fa-angle-right"></span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}
export default Professional
