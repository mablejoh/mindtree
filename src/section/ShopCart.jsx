import { useState } from 'react';
import { Link } from 'react-router-dom';
import Product1 from '../assets/images/resource/products/1.jpg';
import Product2 from '../assets/images/resource/products/2.jpg';
import Product3 from '../assets/images/resource/products/3.jpg';

function ShopCart() {
  const [quantities, setQuantities] = useState({
    item1: 1,
    item2: 1,
    item3: 1,
  });

  const [couponCode, setCouponCode] = useState('');
  const [status, setStatus] = useState('');

  const handleQuantityChange = (item, change) => {
    setQuantities((prevQuantities) => {
      const newQuantity = prevQuantities[item] + change;
      return {
        ...prevQuantities,
        [item]: newQuantity > 0 ? newQuantity : 1,
      };
    });
  };

  const handleCouponSubmit = (e) => {
    e.preventDefault();
    setStatus(`Coupon "${couponCode}" applied!`);
  };

  const products = [
    { id: 'item1', name: 'Winter Black Jacket', img: Product1, price: 36, size: 'Medium' },
    { id: 'item2', name: 'Swan Crop V-Neck Tee', img: Product2, price: 115, size: 'Small' },
    { id: 'item3', name: 'Blue Solid Casual Shirt', img: Product3, price: 68, size: 'Large' },
  ];

  return (
    <section>
      <div className="container-lg pt-100 pb-100">
        <div className="team-five__wrp">
          <div className="section-content">
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-striped table-bordered tbl-shopping-cart">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Photo</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr key={product.id} className="cart_item">
                          <td className="product-remove">
                            <Link title="Remove this item" className="remove" to="#">
                              ×
                            </Link>
                          </td>
                          <td className="product-thumbnail">
                            <Link to="#">
                              <img alt={product.name} src={product.img} />
                            </Link>
                          </td>
                          <td className="product-name">
                            <Link to="shop-product-details">{product.name}</Link>
                            <ul className="variation">
                              <li className="variation-size">
                                Size: <span>{product.size}</span>
                              </li>
                            </ul>
                          </td>
                          <td className="product-price">
                            <span className="amount">${product.price.toFixed(2)}</span>
                          </td>
                          <td className="product-quantity">
                            <div className="product-details__quantity">
                              <div className="quantity-box">
                                <button
                                  type="button"
                                  className="sub"
                                  onClick={() => handleQuantityChange(product.id, -1)}
                                >
                                  <i className="fa fa-minus"></i>
                                </button>
                                <input
                                  type="number"
                                  id={`qty-${product.id}`}
                                  name={`qty-${product.id}`}
                                  value={quantities[product.id]}
                                  readOnly
                                />
                                <button
                                  type="button"
                                  className="add"
                                  onClick={() => handleQuantityChange(product.id, 1)}
                                >
                                  <i className="fa fa-plus"></i>
                                </button>
                              </div>
                            </div>
                          </td>
                          <td className="product-subtotal">
                            <span className="amount">
                              ${(product.price * quantities[product.id]).toFixed(2)}
                            </span>
                          </td>
                        </tr>
                      ))}

                      {/* Coupon & Update Cart */}
                      <tr className="cart_item">
                        <td colSpan="3">
                          <form className="row g-3 coupon-form" onSubmit={handleCouponSubmit}>
                            <div className="col-auto">
                              <input
                                type="text"
                                id="coupon_code"
                                name="coupon_code"
                                className="input-text form-control mr-1"
                                placeholder="Coupon code"
                                value={couponCode}
                                onChange={(e) => setCouponCode(e.target.value)}
                                autoComplete="off"
                              />
                            </div>
                            <div className="col-auto">
                              <button type="submit" className="apply-button" name="apply_coupon">
                                <span className="btn-title">Apply Coupon</span>
                              </button>
                            </div>
                          </form>
                        </td>
                        <td colSpan="2">&nbsp;</td>
                        <td>
                          <button type="button" className="theme-btn btn-two">
                            <span className="btn-title">Update Cart</span>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopCart;