import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Product1 from '../assets/images/resource/products/1.jpg';
import Product2 from '../assets/images/resource/products/2.jpg';
import Product3 from '../assets/images/resource/products/3.jpg';

const ShopCheckout1 = () => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  })

  const handleClick = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      })
    } else {
      setIsActive({
        status: true,
        key,
      })
    }
  }


  // State for managing form inputs  Checkout Form Code Start
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        email: '',
        address: '',
        apartment: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        orderNotes: ''
    });

    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        // Process form data here (e.g., send to an API or log it)
        console.log(formData);
    };
    // Checkout Form Code End
  return (
    <>

    <section>
      <div className="container pt-80 pb-120">
        <div className="section-content">
          <form id="checkout-form" onSubmit={handleSubmit}>
            <div className="row mt-30">
              <div className="col-md-6">
                <div className="billing-details">
                  <h3 className="mb-30">Billing Details</h3>
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label htmlFor="checkoutfname">First Name</label>
                      <input
                        id="checkoutfname"
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        name="checkoutfname"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="checkoutlname">Last Name</label>
                      <input
                        id="checkoutlname"
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        name="checkoutlname"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label htmlFor="checkoutcname">Company Name</label>
                        <input
                          id="checkoutcname"
                          type="text"
                          className="form-control"
                          placeholder="Company Name"
                          name="checkoutcname"
                          value={formData.companyName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="checkoutemail">Email Address</label>
                        <input
                          id="checkoutemail"
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                          name="checkoutemail"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="checkoutaddress">Address</label>
                        <input
                          id="checkoutaddress"
                          type="text"
                          className="form-control"
                          placeholder="Street address"
                          name="checkoutaddress"
                          value={formData.address}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Apartment, suite, unit etc. (optional)"
                          name="apartment"
                          value={formData.apartment}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="checkoutcity">City</label>
                      <input
                        id="checkoutcity"
                        type="text"
                        className="form-control"
                        placeholder="City"
                        name="checkoutcity"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="checkoutstate">State/Province</label>
                      <select
                        id="checkoutstate"
                        className="form-control"
                        name="checkoutstate"
                        value={formData.state}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select State/Province</option>
                        <option value="Australia">Australia</option>
                        <option value="UK">UK</option>
                        <option value="USA">USA</option>
                      </select>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="checkoutzip">Zip/Postal Code</label>
                      <input
                        id="checkoutzip"
                        type="text"
                        className="form-control"
                        placeholder="Zip/Postal Code"
                        name="checkoutzip"
                        value={formData.zip}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="checkoutcountry">Country</label>
                      <select
                        id="checkoutcountry"
                        className="form-control"
                        name="checkoutcountry"
                        value={formData.country}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Country</option>
                        <option value="Australia">Australia</option>
                        <option value="UK">UK</option>
                        <option value="USA">USA</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <h3>Additional information</h3>
                <label htmlFor="Ocomments">
                  Order notes <span className="optional">(optional)</span>
                </label>
                <textarea
                  id="Ocomments"
                  name="Ocomments"
                  className="form-control"
                  placeholder="Notes about your order, e.g. special notes for delivery."
                  rows="3"
                  value={formData.Ocomments}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="col-md-12 mt-30">
                <h3>Your order</h3>
                <table className="table table-striped table-bordered tbl-shopping-cart">
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Product Name</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="product-thumbnail">
                        <Link to="/shop-product-details">
                          <img alt="product" src={Product1} />
                        </Link>
                      </td>
                      <td className="product-name">
                        <Link to="/shop-product-details">Headphone</Link> x 2
                      </td>
                      <td>
                        <span className="amount">$36.00</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="product-thumbnail">
                        <Link to="/shop-product-details">
                          <img alt="product" src={Product2} />
                        </Link>
                      </td>
                      <td className="product-name">
                        <Link to="/shop-product-details">Lagage</Link> x 3
                      </td>
                      <td>
                        <span className="amount">$115.00</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="product-thumbnail">
                        <Link to="/shop-product-details">
                          <img alt="product" src={Product3} />
                        </Link>
                      </td>
                      <td className="product-name">
                        <Link to="/shop-product-details">Watch</Link> x 1
                      </td>
                      <td>
                        <span className="amount">$68.00</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Cart Subtotal</td>
                      <td>&nbsp;</td>
                      <td>$180.00</td>
                    </tr>
                    <tr>
                      <td>Shipping and Handling</td>
                      <td>&nbsp;</td>
                      <td>Free Shipping</td>
                    </tr>
                    <tr>
                      <td>Order Total</td>
                      <td>&nbsp;</td>
                      <td>$250.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-12 mt-60">
                <div className="payment-method">
                  <h3>Choose a Payment Method</h3>
                  <ul className="accordion-box">
                    <li className="accordion block active-block">
                      <div
                        className={isActive.key === 1 ? "acc-btn active" : "acc-btn"}
                        onClick={() => handleClick(1)}
                        role="button"
                        tabIndex={0}
                        aria-expanded={isActive.key === 1}
                      >
                        <div className="icon-outer">
                          <i className="lnr-icon-chevron-down"></i>
                        </div>
                        Credit Card / Debit Card
                      </div>
                      <div
                        className={isActive.key === 1 ? "acc-content current" : "acc-content"}
                      >
                        <div className="payment-info">
                          <div className="row clearfix">
                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                              <div className="field-input mb-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="Cname"
                                  placeholder="Name on the Card"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                              <div className="field-input mb-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="Cnumber"
                                  placeholder="Card Number"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 column">
                              <div className="field-input mb-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="Edate"
                                  placeholder="Expiry Date"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 column">
                              <div className="field-input mb-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="Scode"
                                  placeholder="Security Code"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 column">
                              <div className="field-input message-btn">
                                <button
                                  type="submit"
                                  name="Sform"
                                  className="theme-btn btn-two"
                                  data-loading-text="Please wait..."
                                >
                                  <span className="btn-title">Make Payment</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="accordion block">
                      <div
                        className={isActive.key === 2 ? "acc-btn active" : "acc-btn"}
                        onClick={() => handleClick(2)}
                        role="button"
                        tabIndex={0}
                        aria-expanded={isActive.key === 2}
                      >
                        <div className="icon-outer">
                          <i className="lnr-icon-chevron-down"></i>
                        </div>
                        Direct Bank Transfer
                      </div>
                      <div
                        className={isActive.key === 2 ? "acc-content current" : "acc-content"}
                      >
                        <div className="payment-info">
                          <p className="mb-0">
                            Make your payment directly into our bank account. Please use your
                            Order ID as the payment reference. Your order won’t be shipped until
                            the funds have cleared in our account.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="accordion block">
                      <div
                        className={isActive.key === 3 ? "acc-btn active" : "acc-btn"}
                        onClick={() => handleClick(3)}
                        role="button"
                        tabIndex={0}
                        aria-expanded={isActive.key === 3}
                      >
                        <div className="icon-outer">
                          <i className="lnr-icon-chevron-down"></i>
                        </div>
                        Cheque Payment
                      </div>
                      <div
                        className={isActive.key === 3 ? "acc-content current" : "acc-content"}
                      >
                        <div className="payment-info">
                          <p className="mb-0">
                            Make your payment directly into our bank account. Please use your
                            Order ID as the payment reference. Your order won’t be shipped until
                            the funds have cleared in our account.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="accordion block">
                      <div
                        className={isActive.key === 4 ? "acc-btn active" : "acc-btn"}
                        onClick={() => handleClick(4)}
                        role="button"
                        tabIndex={0}
                        aria-expanded={isActive.key === 4}
                      >
                        <div className="icon-outer">
                          <i className="lnr-icon-chevron-down"></i>
                        </div>
                        Other Payment
                      </div>
                      <div
                        className={isActive.key === 4 ? "acc-content current" : "acc-content"}
                      >
                        <div className="payment-info">
                          <p className="mb-0">
                            Make your payment directly into our bank account. Please use your
                            Order ID as the payment reference. Your order won’t be shipped until
                            the funds have cleared in our account.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>

    </>
  );
};
export default ShopCheckout1
