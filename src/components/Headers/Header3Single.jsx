import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NavLinks from '../SingleMenu';
import MobileMenu from '../MobileMenu';
import MainLogo from "../../assets/images/logo.png";
import DarkLogo from "../../assets/images/logo-light.png";
import StickyLogo from "../../assets/images/logo.png";
import MobileLogo from "../../assets/images/logo-light.png";


const Header3 = ({ handleOpen, handleRemove, searchToggle, handleToggle, scroll }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
        useEffect(() => {
            const checkDarkMode = () => {
            const hasDarkClass = document.body.classList.contains('dark-mode');
            setIsDarkMode(hasDarkClass);
        };
        checkDarkMode();
        const observer = new MutationObserver(checkDarkMode);
            observer.observe(document.body, {
            attributes: true,
            attributeFilter: ['class'],
        });
        return () => observer.disconnect();
    }, []);
    return (
        <>
            <header className={`main-header header-style-three ${scroll ? "fixed-header" : ""} ${searchToggle ? "moblie-search-active" : ""}`}>
                <div className="header-top">
                    <div className="auto-container">
                    <div className="top-left">
                        <ul className="info-list">
                        <li><span className="fa-regular fa-clock"></span> Open Hours of City Govt. (Mon - Fri: <span>8.00</span> am -
                            <span>6.00</span> pm)</li>
                        </ul>
                        <ul className="info-list">
                        <li><i className="fa-regular fa-calendar-days"></i> Friday - Jul 27, 2025</li>
                        <li><i className="fa-solid fa-location-dot"></i> 684 West College St. Sun City, USA</li>
                        </ul>
                    </div>

                    <div className="top-right">
                        <ul className="top-social-icon">
                        <li><Link to="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                        <li><Link to="#"><i className="fa-brands fa-instagram"></i></Link></li>
                        <li><Link to="#"><i className="fa-brands fa-x-twitter"></i></Link></li>
                        <li><Link to="#"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="main-box">
                    <div className="logo-box">
                    <div className="logo"><Link to="/"><img src={MainLogo} alt="" title="Consultez"/></Link></div>
                    </div>
                    <div className="nav-outer">
                        <nav className="nav main-menu">
                            <NavLinks/>
                        </nav>
                    </div>
                    <div className="outer-box">
                    <div className="info-box">
                        <div className="call-info">
                        <i className="fa-solid fa-phone ring__animation"></i>
                        <div>
                            <h6 className="title">Phone:</h6>
                            <Link to="#">+00 1900 000 00</Link>
                        </div>
                        </div>
                        <Link className="con-btn" to="/page-contact">Get an Quote <i className="fa-regular fa-angle-right"></i></Link>
                    </div>
                    <div className="mobile-nav-toggler d-block d-lg-none" onClick={handleOpen}><i className="icon lnr-icon-bars"></i></div>
                    </div>
                </div>
                <div className="auto-container">
                    <div className="mobile-menu">
                        <div className="menu-backdrop" onClick={handleRemove} />
                        <nav className="menu-box">
                            <div className="upper-box">
                                <div className="nav-logo"><Link to="/"><img src={MobileLogo} alt="" /></Link></div>
                                <div className="close-btn" onClick={handleRemove}><i className="icon fa fa-times" /></div>
                            </div>
                            <MobileMenu/>
                            <ul className="contact-list-one">
                                <li>
                                    <div className="contact-info-box">
                                        <i className="icon lnr-icon-phone-handset" />
                                        <span className="title">Call Now</span>
                                        <Link to="tel:+92880098670">+92 (8800) - 98670</Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="contact-info-box">
                                        <span className="icon lnr-icon-envelope1" />
                                        <span className="title">Send Email</span>
                                        <Link to="mailto:help@company.com">help@company.com</Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="contact-info-box">
                                        <span className="icon lnr-icon-clock" />
                                        <span className="title">Send Email</span>
                                        Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                                    </div>
                                </li>
                            </ul>
                            <ul className="social-links">
                                <li><Link to="/"><i className="fab fa-twitter" /></Link></li>
                                <li><Link to="/"><i className="fab fa-facebook-f" /></Link></li>
                                <li><Link to="/"><i className="fab fa-pinterest" /></Link></li>
                                <li><Link to="/"><i className="fab fa-instagram" /></Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="search-popup">
                        <span className="search-back-drop"  onClick={handleToggle} />
                        <button className="close-search"  onClick={handleToggle}><span className="fa fa-times" /></button>
                        <div className="search-inner">
                            <form method="post" action="/">
                                <div className="form-group">
                                    <input 
                                        type="search" 
                                        name="search-field" 
                                        defaultValue="search"
                                        placeholder="Search..." 
                                        required 
                                    />
                                    <button type="submit"><i className="fa fa-search" /></button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
                        <div className="auto-container">
                            <div className="inner-container">
                                <div className="logo">
                                    <Link to="/">
                                        <img src={isDarkMode ? DarkLogo : StickyLogo} alt="Logo" />
                                    </Link>
                                </div>
                                <div className="nav-outer">
                                    <nav className="main-menu">
                                        <div className="navbar-collapse show collapse clearfix">
                                            <NavLinks/>
                                        </div>
                                    </nav>
                                    <div className="mobile-nav-toggler" onClick={handleOpen}><span className="icon lnr-icon-bars" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header3;