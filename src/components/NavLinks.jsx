import React from "react";
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <ul className="navigation">
            <li className="dropdown"><Link to="/">Home</Link>
              
              </li>
              <li className="dropdown"><Link to="/page-about">About</Link>
                
                  </li>
                  
                  
              <li className="dropdown"><Link to="#">Services</Link>
                <div className="dropdown-btn"><i className="fa fa-angle-down"></i></div>
                <ul>
                  <li><Link to="/page-services">All Services</Link></li>
                  <li><Link to="/audit-assuarance">AUDIT & ASSURANCE</Link></li>
				  <li><Link to="/business-advisory-services">BUSINESS ADVISORY</Link></li>
				  <li><Link to="/accounting-bookkeeping-service">ACCOUNTING & BOOKKEEPING</Link></li>
				  <li><Link to="/company-setup">COMPANY SETUP</Link></li>
				  <li><Link to="/taxation-service">TAXATION</Link></li>
                </ul>
              </li>
              <li><Link to="/page-testimonial">Testimonial</Link></li>
              <li><Link to="/page-contact">Contact</Link></li>
        </ul>
    );
}

export default Navigation;
