import React, { useState } from "react";
import ChooseImage1 from '../../assets/images/choose/choose-image1.jpg';

const ChooseSection = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About Us" },
    { id: "mission", label: "Our Mission" },
    { id: "vision", label: "Our Vision" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <div className="content-box">
            <p className="text">We handle complexities, so you can drive growth and success.</p>
            <div className="list mt-30 mb-50">
              <ul>
                <li><i className="fa-solid fa-check"></i> Optimized Sprint Planning</li>
                <li><i className="fa-solid fa-check"></i> Continuous Improvement</li>
              </ul>
              <ul>
                <li><i className="fa-solid fa-check"></i> Incremental Delivery Approach</li>
                <li><i className="fa-solid fa-check"></i> Delivering Innovative</li>
              </ul>
            </div>
            <Link to="/page-about" className="btn-two">Discover More</Link>
          </div>
        );
      case "mission":
        return (
          <div className="content-box">
            <p className="text">Our mission is to simplify digital transformation.</p>
            {/* Repeat structure if needed */}
          </div>
        );
      case "vision":
        return (
          <div className="content-box">
            <p className="text">Our vision is to lead innovation globally.</p>
            {/* Repeat structure if needed */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="choose-section pt-120 pb-120">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-6 content-column">
            <div className="inner-column">
              <div className="sec-title mb-30">
                <h6 className="sub-title">Mission & Vision</h6>
                <h2 className="title">We handle complexities, so you can drive growth and success.</h2>
              </div>
              <div className="choose-tab">
                <ul className="nav nav-tabs">
                  {tabs.map((tab) => (
                    <li className="nav-item" key={tab.id}>
                      <button
                        className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                        onClick={() => setActiveTab(tab.id)}
                      >
                        {tab.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="tab-content mt-30">{renderContent()}</div>
            </div>
          </div>

          <div className="col-xl-6 image-column">
            <div className="inner-column">
              <figure className="image">
                <img className="wow imageUpToDown" src={ChooseImage1} alt="Image" />
                {/* pie-graphs and counts can go here */}
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseSection;
