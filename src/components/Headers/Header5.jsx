import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NavLinks from '../NavLinks';
import MobileMenu from '../MobileMenu';
import MainLogo from "../../assets/images/logo.png";
import DarkLogo from "../../assets/images/logo-light.png";
import StickyLogo from "../../assets/images/logo.png";
import MobileLogo from "../../assets/images/logo-light.png";

const Header5 = ({ handleOpen, handleRemove, searchToggle, handleToggle, scroll }) => {
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
        <header className={`main-header header-style-five ${scroll ? "fixed-header" : ""} ${searchToggle ? "moblie-search-active" : ""}`}>
            <div className="main-box">
                <div className="logo-box">
                    <div className="logo">
                        <Link to="/">
                            <img src={isDarkMode ? DarkLogo : MainLogo} alt="Image" title="Consultez" />
                        </Link>
                    </div>
                </div>
                <div className="nav-outer">
                    <nav className="nav main-menu">
                        <NavLinks />
                    </nav>
                </div>
                <div className="outer-box">
                    <button className="ui-btn search-btn" onClick={handleToggle}>
                        <i className="icon fal fa-search"></i>
                    </button>
                    <div className="info-box">
                        <div className="call-info">
                            <i className="fa-solid fa-phone ring__animation"></i>
                            <div>
                                <h6 className="title">Phone:</h6>
                                <Link to="#">+00 2222 222 00</Link>
                            </div>
                        </div>
                        <Link className="btn-one" to="/page-contact">
                            Get quote now
                        </Link>
                    </div>
                    <div className="mobile-nav-toggler d-block d-lg-none" onClick={handleOpen}>
                        <i className="icon lnr-icon-bars"></i>
                    </div>
                </div>
            </div>
            <div className="auto-container">
                <div className="mobile-menu">
                    <div className="menu-backdrop" onClick={handleRemove} />
                    <nav className="menu-box">
                        <div className="upper-box">
                            <div className="nav-logo">
                                <Link to="/">
                                    <img src={MobileLogo} alt="Image" />
                                </Link>
                            </div>
                            <div className="close-btn" onClick={handleRemove}>
                                <i className="icon fa fa-times" />
                            </div>
                        </div>
                        <MobileMenu />
                        <ul className="contact-list-one">
                            <li>
                                <div className="contact-info-box">
                                    <i className="icon lnr-icon-phone-handset" />
                                    <span className="title">Call Now</span>
                                    <Link to="#">+92 (8800) - 98670</Link>
                                </div>
                            </li>
                            <li>
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-envelope1" />
                                    <span className="title">Send Email</span>
                                    <Link to="#">help@company.com</Link>
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
                            <li>
                                <Link to="/">
                                    <i className="fab fa-twitter" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <i className="fab fa-facebook-f" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <i className="fab fa-pinterest" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <i className="fab fa-instagram" />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="search-popup">
                    <span className="search-back-drop" onClick={handleToggle} />
                    <button className="close-search" onClick={handleToggle}>
                        <span className="fa fa-times" />
                    </button>
                    <div className="search-inner">
                        <form method="post" action="/">
                            <div className="form-group">
                                <input type="search" name="search-field" defaultValue="search" placeholder="Search..." required />
                                <button type="submit">
                                    <i className="fa fa-search" />
                                </button>
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
                                        <NavLinks />
                                    </div>
                                </nav>
                                <div className="mobile-nav-toggler" onClick={handleOpen}>
                                    <span className="icon lnr-icon-bars" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>
    );
};

export default Header5;