import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import BlogImage1 from '../../assets/images/blog/blog-image1.jpg';
import BlogImage2 from '../../assets/images/blog/blog-image2.jpg';
import BlogImage3 from '../../assets/images/blog/blog-image3.jpg';

const blogData = [
  {
    id: 1,
    image: BlogImage1,
    author: 'Devoid .H',
    comments: 'Comments (03)',
    title: 'Complete Guide Business Insurance perfect',
    link: '/news-details',
  },
  {
    id: 2,
    image: BlogImage2,
    author: 'Robert .Q',
    comments: 'Comments (03)',
    title: 'How Scale Your Business Without Losing Quality',
    link: '/news-details',
  },
  {
    id: 3,
    image: BlogImage3,
    author: 'Beckhum .H',
    comments: 'Comments (03)',
    title: 'The Entrepreneur Guide to Work-Life Balance',
    link: '/news-details',
  },
  {
    id: 4,
    image: BlogImage2,
    author: 'Robert .Q',
    comments: 'Comments (03)',
    title: 'How Scale Your Business Without Losing Quality',
    link: '/news-details',
  },
  {
    id: 5,
    image: BlogImage3,
    author: 'Beckhum .H',
    comments: 'Comments (03)',
    title: 'The Entrepreneur Guide to Work-Life Balance',
    link: '/news-details',
  },
];

const swiperOptions = {
  modules: [Pagination],
  pagination: {
    el: '.blog-pagination',
    clickable: true,
  },
  spaceBetween: 30,
  loop: true,
  speed: 1000,
  breakpoints: {
    0: { slidesPerView: 1 },
    576: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
  },
};

function News ({className}){
  return (
    <>
    <section id="news" className={`blog-section pb-120 ${className || ''}`}>
      <div className="container">
        <div className="sec-title mb-50">
          <h6 className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">New & Blogs</h6>
          <div className="flex-content">
            <h2 className="title wow splt-txt" data-splitting>Our News & Blogs</h2>
            <Link to="/news-grid" className="btn-two wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">All News & Blogs</Link>
          </div>
        </div>

        <div className="swiper blog-slider">
          <Swiper {...swiperOptions} className="swiper-wrapper">
            {blogData.map(({ id, image, author, comments, title, link }) => (
              <SwiperSlide key={id} className="swiper-slide">
                <div className="blog-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <img src={image} alt="Blog" />
                      </figure>
                    </div>
                    <div className="content-box">
                      <ul className="info">
                        <li><Link to="#0">{author}</Link></li>
                        <li><Link to="#0">{comments}</Link></li>
                      </ul>
                      <h4 className="title"><Link to={link}>{title}</Link></h4>
                      <Link to={link} className="arry-btn">Read More</Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-dot text-center blog-pagination mt-40" />
        </div>
      </div>
    </section>
    </>
  );
};

export default News;