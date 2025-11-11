import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import Product1 from "../assets/images/resource/products/1.jpg";
import Product2 from "../assets/images/resource/products/2.jpg";
import Product3 from "../assets/images/resource/products/3.jpg";
import Product4 from "../assets/images/resource/products/4.jpg";
import Product5 from "../assets/images/resource/products/5.jpg";
import Product6 from "../assets/images/resource/products/6.jpg";
import Product7 from "../assets/images/resource/products/7.jpg";
import Product8 from "../assets/images/resource/products/8.jpg";

const products = [
  { img: Product1, title: "Show Piece", price: "$32.00", cats: "cat-2" },
  { img: Product2, title: "Leather Belt", price: "$52.00", cats: "cat-1 cat-2" },
  { img: Product3, title: "Sunglasses", price: "$42.00", cats: "cat-1 cat-2 cat-4" },
  { img: Product4, title: "Backpack", price: "$22.00", cats: "cat-1 cat-3" },
  { img: Product5, title: "Hand Watch", price: "$34.00", cats: "cat-1 cat-3 cat-5" },
  { img: Product6, title: "Party Bag", price: "$25.00", cats: "cat-2 cat-3 cat-4" },
  { img: Product7, title: "Coffee Mug", price: "$20.00", cats: "cat-1 cat-2 cat-5" },
  { img: Product8, title: "Smart Watch", price: "$40.00", cats: "cat-1 cat-4 cat-5" },
];

function PortfolioFilter1() {
  const isotopeContainer = useRef(null);
  const isotopeInstance = useRef(null); // ✅ useRef instead of useState
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    let isMounted = true;

    const loadIsotope = async () => {
      try {
        const { default: Isotope } = await import("isotope-layout");
        if (isMounted && isotopeContainer.current) {
          isotopeInstance.current = new Isotope(isotopeContainer.current, {
            itemSelector: ".masonry-item",
            percentPosition: true,
            masonry: {
              columnWidth: ".masonry-item",
            },
            transitionDuration: "0.7s", // ✅ modern way
          });
        }
      } catch (error) {
        console.error("Failed to load Isotope:", error);
      }
    };

    loadIsotope();

    // ✅ cleanup
    return () => {
      isMounted = false;
      if (isotopeInstance.current) {
        isotopeInstance.current.destroy();
        isotopeInstance.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (isotopeInstance.current) {
      isotopeInstance.current.arrange({
        filter: filterKey === "*" ? "*" : `.${filterKey}`,
      });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);
  const activeBtn = (value) => (value === filterKey ? "filter active" : "filter");

  return (
    <>
      {/* ✅ Filter Tabs */}
      <div className="filters clearfix">
        <ul className="filter-tabs filter-btns clearfix">
          <li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>
            All
          </li>
          <li className={activeBtn("cat-1")} onClick={handleFilterKeyChange("cat-1")}>
            Cyber
          </li>
          <li className={activeBtn("cat-2")} onClick={handleFilterKeyChange("cat-2")}>
            Digital
          </li>
          <li className={activeBtn("cat-3")} onClick={handleFilterKeyChange("cat-3")}>
            Software
          </li>
          <li className={activeBtn("cat-4")} onClick={handleFilterKeyChange("cat-4")}>
            Technology
          </li>
          <li className={activeBtn("cat-5")} onClick={handleFilterKeyChange("cat-5")}>
            Development
          </li>
        </ul>
      </div>

      {/* ✅ Grid Items */}
      <div className="items-container row" ref={isotopeContainer}>
        {products.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </>
  );
}

function ProductCard({ img, title, price, cats }) {
  return (
    <div
      className={`product-block masonry-item small-column all ${cats} col-lg-3 col-md-6`}
    >
      <div className="inner-box">
        <div className="image-box">
          <div className="image">
            <Link to="/shop-product-details">
              <img src={img} alt={title} />
            </Link>
          </div>
          <div className="icon-box">
            <Link to="/shop-product-details" className="ui-btn">
              <i className="fa fa-heart"></i>
            </Link>
            <Link to="/shop-cart" className="ui-btn">
              <i className="fa fa-shopping-cart"></i>
            </Link>
          </div>
        </div>
        <div className="content">
          <h4>
            <Link to="/shop-product-details">{title}</Link>
          </h4>
          <span className="price">{price}</span>
          <span className="rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

// ✅ Prop validation
ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  cats: PropTypes.string.isRequired,
};

export default PortfolioFilter1;
