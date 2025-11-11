import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Autoplay, Thumbs } from 'swiper/modules';
import Details1 from '../assets/images/resource/products/product-details.jpg';
import Details2 from '../assets/images/resource/products/product-details2.jpg';
import Details3 from '../assets/images/resource/products/product-details3.jpg';
import Thumb1 from '../assets/images/resource/testi-2.jpg';
import Thumb2 from '../assets/images/resource/testi-1.jpg';
import Product1 from '../assets/images/resource/products/1.jpg';
import Product2 from '../assets/images/resource/products/2.jpg';
import Product3 from '../assets/images/resource/products/3.jpg';
import Product4 from '../assets/images/resource/products/4.jpg';

function ShopDetails () {  
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
      setActiveIndex(index); // remove the curly braces
  };

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [quantities, setQuantities] = useState({
    item1: 1,
    item2: 1,
    item3: 1
  });

  const handleQuantityChange = (item, change) => {
    setQuantities(prevQuantities => {
      const newQuantity = prevQuantities[item] + change;
      return {
        ...prevQuantities,
        [item]: newQuantity > 0 ? newQuantity : 1
      };
    });
  };

   const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
  
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('');
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setStatus('');
  
      try {
        const response = await fetch('/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
  
        if (response.ok) {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        } else {
          setStatus('Failed to send message.');
        }
      } catch (error) {
        setStatus('Something went wrong.');
      } finally {
        setLoading(false);
      }
      };


  return (
    <>
  <section className="product-details">
    <div className="container pt-120 pb-70">
      <div className="row">
        <div className="col-lg-6 col-xl-6">
          <div className="bxslider">
            <div className="slider-content">
              <Swiper
                spaceBetween={10}
                pagination={{clickable:true}}
                thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                modules={[FreeMode, Navigation,Autoplay, Thumbs]}
                loop= {true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                className="slider-pager">
                <SwiperSlide>
                  <div className="image-box"><img src={Details1} alt="Image"/></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="image-box"><img src={Details2} alt="Image"/></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="image-box"><img src={Details3} alt="Image"/></div>
                </SwiperSlide>
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="slider-pager">
                <SwiperSlide className="product-thumb wide-100">
                  <figure className="image">
                    <img src={Details1} alt="Image"/>
                  </figure>
                </SwiperSlide>
                <SwiperSlide className="product-thumb wide-100">
                  <figure className="image">
                    <img src={Details2} alt="Image"/>
                  </figure>
                </SwiperSlide>
                <SwiperSlide className="product-thumb wide-100">
                  <figure className="image">
                    <img src={Details3} alt="Image"/>
                  </figure>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xl-6 product-info">
          <div className="product-details__top">
            <h3 className="product-details__title">Backpack <span>$76.00</span> </h3>
          </div>
          <div className="product-details__reveiw">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <span>2 Customer Reviews</span>
          </div>
          <div className="product-details__content">
            <p className="product-details__content-text1">Aliquam hendrerit a augue insuscipit. Etiam
							aliquam massa quis des mauris commodo venenatis ligula commodo leez sed blandit
							convallis dignissim onec vel pellentesque neque.</p>
            <p className="product-details__content-text2"><strong>REF.</strong> 4231/406 <br/> Available in store</p>
          </div>

          <div className="product-details__quantity">
            <h3 className="product-details__quantity-title">Choose quantity</h3>
                <div className="quantity-box">
                    <button type="button" className="sub" onClick={() => handleQuantityChange('item1', -1)}>
                      <i className="fa fa-minus" />
                    </button>
                    <input type="number" id="1" value={quantities.item1} readOnly />
                    <button type="button" className="add" onClick={() => handleQuantityChange('item1', 1)}>
                      <i className="fa fa-plus" />
                    </button>
                </div>
          </div>

          <div className="product-details__buttons">
            <div className="product-details__buttons-1">
              <Link to="/shop-cart" className="theme-btn btn-style-one"><span className="btn-title">Add to Cart</span></Link>
            </div>
            <div className="product-details__buttons-2">
              <Link to="/shop-product-details" className="theme-btn btn-style-one"><span className="btn-title">Add to Wishlist</span></Link>
            </div>
          </div>
          <div className="product-details__social">
            <div className="title"><h3>Share with friends</h3></div>
            <ul className="social-icon-one product-share">
              <li><Link to="/"><i className="fab fa-twitter" /></Link></li>
              <li><Link to="/"><i className="fab fa-facebook-f" /></Link></li>
              <li><Link to="/"><i className="fab fa-pinterest" /></Link></li>
              <li><Link to="/"><i className="fab fa-instagram" /></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="product-description">
    <div className="container pt-0 pb-90">
      <div className="product-discription">
        <div className="tabs-box">
          <div className="tab-btn-box text-center">
            <ul className="tab-btns tab-buttons clearfix">
              <li className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(1)} data-tab="#tab1">Description</li>
              <li className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(2)} data-tab="#tab2">Reviews</li>
            </ul>
          </div>
          <div className="tabs-content">
            <div className={activeIndex === 1 ? "tab active-tab" : "tab"} id="tab1">
              <div className="text">
                <h3 className="product-description__title">Description</h3>
                <p className="product-description__text1">Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some injected or words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrang hidden in the </p>
                <div className="product-description__list">
                  <ul className="list-unstyled">
                    <li><p><span className="fa fa-arrow-right"></span> Nam at elit nec neque suscipit gravida.</p></li>
                    <li><p><span className="fa fa-arrow-right"></span> Aenean egestas orci eu maximus tincidunt.</p></li>
                    <li><p><span className="fa fa-arrow-right"></span> Curabitur vel turpis id tellus cursus laoreet.</p></li>
                  </ul>
                </div>
                <p className="product-description__tex2">All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary, making this the first true generator on the Internet. It uses a
                  dictionary of over 200 Latin words, combined with a handful of model sentence structures, to
                  generate Lorem Ipsum which looks reasonable. 
                </p>
              </div>
            </div>
            <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="tab2">
            <div className="customer-comment">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 comment-column">
                        <div className="single-comment-box">
                            <div className="inner-box">
                                <figure className="comment-thumb"><img src={Thumb1} alt="Image" /></figure>
                                <div className="inner">
                                    <ul className="rating clearfix">
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                    </ul>
                                    <h5>Jon D. William, <span>10 Jan, 2023 . 4:00 pm</span></h5>
                                    <p>Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des mauris commodo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 comment-column">
                        <div className="single-comment-box">
                            <div className="inner-box">
                                <figure className="comment-thumb"><img src={Thumb2} alt="Image" /></figure>
                                <div className="inner">
                                    <ul className="rating clearfix">
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                    </ul>
                                    <h5>Aleesha Brown, <span>12 Feb, 2023 . 8:00 pm</span></h5>
                                    <p>Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des mauris commodo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
              <div className="comment-box">
                <h3>Add Your Comments</h3>
                <form id="contact_form" name="contact_form" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label sr-only">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control"
                      rows="5"
                      placeholder="Enter Message"
                      required
                      autoComplete="off"
                    ></textarea>
                  </div>

                  <div className="row">
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label sr-only">Name</label>
                        <input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-control"
                          type="text"
                          placeholder="Enter Name"
                          required
                          autoComplete="name"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label sr-only">Email</label>
                        <input
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control"
                          type="email"
                          placeholder="Enter Email"
                          required
                          autoComplete="email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 column">
                    <div className="review-box clearfix">
                      <p>Your Review</p>
                      <ul className="rating clearfix" role="radiogroup" aria-label="Rating">
                        <li><button type="button" aria-label="1 star"><i className="far fa-star" /></button></li>
                        <li><button type="button" aria-label="2 stars"><i className="far fa-star" /></button></li>
                        <li><button type="button" aria-label="3 stars"><i className="far fa-star" /></button></li>
                        <li><button type="button" aria-label="4 stars"><i className="far fa-star" /></button></li>
                        <li><button type="button" aria-label="5 stars"><i className="far fa-star" /></button></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 column">
                    <div className="form-group clearfix">
                      <div className="custom-controls-stacked">
                        <label htmlFor="saveInfo" className="custom-control material-checkbox">
                          <input
                            id="saveInfo"
                            type="checkbox"
                            className="material-control-input"
                            name="saveInfo"
                          />
                          <span className="material-control-indicator" />
                          <span className="description">
                            Save my name, email, and website in this browser for the next time I comment.
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <input name="form_botcheck" type="hidden" value="" />
                    <button type="submit" className="theme-btn btn-one" disabled={loading}>
                      {loading ? 'Please wait...' : 'Send message'}
                    </button>
                  </div>

                  {status && <p className="mt-3">{status}</p>}
                </form>

              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="related-product">
    <div className="container pt-0 pb-90">
      <h3>Related Products</h3>
      <div className="row">
        <div className="product-block col-lg-3 col-md-6">
          <div className="inner-box">
            <div className="image-box">
              <div className="image"><Link to="/shop-product-details"><img src={Product1} alt="Image"/></Link></div>
              <div className="icon-box">
                <Link to="/shop-product-details" className="ui-btn"><i className="fa fa-heart" /></Link>
                <Link to="/shop-cart" className="ui-btn"><i className="fa fa-shopping-cart" /></Link>
              </div>
            </div>
            <div className="content">
              <h4><Link to="/shop-product-details">Headphone</Link></h4>
              <span className="price">$32.00</span>
                <span className="rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </span>
              </div>
          </div>
        </div>

        <div className="product-block col-lg-3 col-md-6">
          <div className="inner-box">
            <div className="image-box">
              <div className="image"><Link to="/shop-product-details"><img src={Product2} alt="Image"/></Link></div>
              <div className="icon-box">
                <Link to="/shop-product-details" className="ui-btn"><i className="fa fa-heart" /></Link>
                <Link to="/shop-cart" className="ui-btn"><i className="fa fa-shopping-cart" /></Link>
              </div>
            </div>
            <div className="content">
              <h4><Link to="/shop-product-details">Lagage</Link></h4>
              <span className="price">$32.00</span>
              <span className="rating"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></span>
            </div>
          </div>
        </div>

        <div className="product-block col-lg-3 col-md-6">
          <div className="inner-box">
            <div className="image-box">
              <div className="image"><Link to="/shop-product-details"><img src={Product3} alt="Image"/></Link></div>
              <div className="icon-box">
                <Link to="/shop-product-details" className="ui-btn"><i className="fa fa-heart" /></Link>
                <Link to="/shop-cart" className="ui-btn"><i className="fa fa-shopping-cart" /></Link>
              </div>
            </div>
            <div className="content">
              <h4><Link to="/shop-product-details">Watch</Link></h4>
              <span className="price">$32.00</span>
              <span className="rating"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></span>
            </div>
          </div>
        </div>

        <div className="product-block col-lg-3 col-md-6">
          <div className="inner-box">
            <div className="image-box">
              <div className="image"><Link to="/shop-product-details"><img src={Product4} alt="Image"/></Link></div>
              <div className="icon-box">
                <Link to="/shop-product-details" className="ui-btn"><i className="fa fa-heart" /></Link>
                <Link to="/shop-cart" className="ui-btn"><i className="fa fa-shopping-cart" /></Link>
              </div>
            </div>
            <div className="content">
              <h4><Link to="/shop-product-details">SD Card</Link></h4>
              <span className="price">$32.00</span>
              <span className="rating"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

    </>
  );
};
export default ShopDetails
