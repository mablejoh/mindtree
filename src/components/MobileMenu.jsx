import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const [activeDropdown, setActiveDropdown] = useState("");
  const [activeSubDropdown, setActiveSubDropdown] = useState("");

  const toggleDropdown = (key) => {
    setActiveDropdown((prev) => (prev === key ? "" : key));
  };

  const toggleSubDropdown = (key) => {
    setActiveSubDropdown((prev) => (prev === key ? "" : key));
  };

  const renderSubMenu = (items, keyPrefix) => (
    <ul className="sub-menu" style={{ display: activeSubDropdown === keyPrefix ? "block" : "none" }}>
      {items.map(({ label, to }, index) => (
        <li key={index}>
          <Link to={to}>{label}</Link>
        </li>
      ))}
    </ul>
  );

  return (
    <ul className="navigation">
      {/* Home Menu */}
      

         <li><Link to="/">Home</Link></li> 

      {/* Pages */}
       <li><Link to="/page-about">About</Link></li>

          <li><Link to="/page-testimonial">Testimonials</Link></li>
          
        

      {/* Services */}
      <li className="dropdown">
        <Link to="#">Services</Link>
        <div className="dropdown-btn" onClick={() => toggleDropdown("services")}>
          <i className="fa fa-angle-down"></i>
        </div>
        <ul className="sub-menu" style={{ display: activeDropdown === "services" ? "block" : "none" }}>
          <li><Link to="/audit-assuarance">AUDIT & ASSURANCE</Link></li>
				  <li><Link to="/business-advisory-services">BUSINESS ADVISORY</Link></li>
				  <li><Link to="/accounting-bookkeeping-service">ACCOUNTING & BOOKKEEPING</Link></li>
				  <li><Link to="/company-setup">COMPANY SETUP</Link></li>
				  <li><Link to="/taxation-service">TAXATION</Link></li>
        </ul>
      </li>

     

     

      <li><Link to="/page-contact">Contact</Link></li>
    </ul>
  );
};

export default MobileMenu;
