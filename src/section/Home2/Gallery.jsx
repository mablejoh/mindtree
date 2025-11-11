import React, { useState } from "react";
import { Link } from "react-router-dom";
import GalleryImage1 from "../../assets/images/gellery/gellery-image1.jpg";
import GalleryImage2 from "../../assets/images/gellery/gellery-image2.jpg";
import GalleryImage3 from "../../assets/images/gellery/gellery-image3.jpg";

function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const defaultActiveIndex = 1; // always active (second block)

  const galleryData = [
    { image: GalleryImage1 },
    { image: GalleryImage2 },
    { image: GalleryImage3 },
  ];

  return (
    <section className="gellery-section margin-minus">
      <div className="outer-box">
        {galleryData.map((item, index) => {
          const isActive =
            hoveredIndex === index || (hoveredIndex === null && index === defaultActiveIndex);

          return (
            <div
              key={index}
              className={`gellery-block ${isActive ? "active" : ""}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <figure className="image">
                <img src={item.image} alt={`Gallery ${index + 1}`} />
              </figure>
              <div className="click-btn-wrp">
                <Link className="click-btn" to="/page-case-details">
                  <i className="fa-regular fa-arrow-up-right"></i>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Gallery;
