import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types"; // ✅ For ThemeForest review compliance
import Product1 from "../assets/images/resource/products/1.jpg";
import Product2 from "../assets/images/resource/products/2.jpg";
import Product3 from "../assets/images/resource/products/3.jpg";
import Product4 from "../assets/images/resource/products/4.jpg";

function PortfolioFilter1() {
  const isotopeContainer = useRef(null);
  const isotopeInstance = useRef(null); // ✅ store instance safely
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
            transitionDuration: "0.7s", // ✅ instead of animationOptions
          });
        }
      } catch (error) {
        console.error("Failed to load Isotope:", error);
      }
    };

    loadIsotope();

    // ✅ cleanup on unmount
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

  const activeBtn = (value) =>
    value === filterKey ? "filter active" : "filter";

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
        <ProductCard img={Product1} title="Show Piece" price="$32.00" cats="cat-2" />
        <ProductCard img={Product2} title="Leather Belt" price="$52.00" cats="cat-1 cat-2" />
        <ProductCard img={Product3} title="Sunglasses" price="$43.00" cats="cat-1 cat-2 cat-4" />
        <ProductCard img={Product4} title="Backpack" price="$22.00" cats="cat-1 cat-3" />
        <ProductCard img={Product4} title="Hand Watch" price="$34.00" cats="cat-1 cat-3 cat-5" />
        <ProductCard img={Product3} title="Party Bag" price="$52.00" cats="cat-2 cat-3 cat-4" />
        <ProductCard img={Product2} title="Coffee Mug" price="$25.00" cats="cat-1 cat-2 cat-5" />
        <ProductCard img={Product1} title="Smart Watch" price="$30.00" cats="cat-1 cat-4 cat-5" />
      </div>
    </>
  );
}

// ✅ Extracted product card for cleaner JSX
function ProductCard({ img, title, price, cats }) {
  return (
    <div className={`product-block masonry-item small-column all ${cats} col-lg-4 col-md-6`}>
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

// ✅ Prop validation (ThemeForest requires it if not using TypeScript)
ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  cats: PropTypes.string.isRequired,
};

export default PortfolioFilter1;