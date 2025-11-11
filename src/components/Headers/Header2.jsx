import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NavLinks from '../NavLinks';
import MobileMenu from '../MobileMenu';
import MainLogo from "../../assets/images/logo.png";
import DarkLogo from "../../assets/images/logo-light.png";
import StickyLogo from "../../assets/images/logo.png";
import MobileLogo from "../../assets/images/logo-light.png";

const Header2 = ({ handleOpen, handleRemove, searchToggle, handleToggle, scroll }) => {
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

    const [currency, setCurrency] = useState('USD');
    const [language, setLanguage] = useState('English');

    const handleCurrencyChange = (e) => {
        setCurrency(e.target.value);
    };

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };


    return (
        <>
        <header className={`main-header header-style-two ${scroll ? "fixed-header" : ""} ${searchToggle ? "moblie-search-active" : ""}`}>
            <div className="header-top">
                <div className="auto-container">
                    <div className="top-left">
                        <ul className="info-list">
                            <li><i className="fa-solid fa-envelope"/> <Link to="/">needhelp@company.com</Link></li>
                            <li><i className="fa-solid fa-location-dot"/> 6391 Elgin St. Celina, Delaware 10299</li>
                        </ul>
                    </div>
                    <div className="top-right">
                        <div className="select-box">
                            {/* Currency Dropdown */}
                            <div className="money">
                                <label htmlFor="currency" className="sr-only">Select Currency</label>
                                <select
                                name="currency"
                                id="currency"
                                value={currency}
                                onChange={handleCurrencyChange}
                                className="nice-select"
                                >
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                                <option value="BDT">BDT</option>
                                </select>
                            </div>

                            {/* Language Dropdown */}
                            <div className="language">
                                <label htmlFor="language" className="sr-only">Select Language</label>
                                <select
                                name="language"
                                id="language"
                                value={language}
                                onChange={handleLanguageChange}
                                className="nice-select"
                                >
                                <option value="English">English</option>
                                <option value="Bangla">Bangla</option>
                                <option value="Hindi">Hindi</option>
                                </select>
                            </div>
                        </div>

                    <ul className="top-social-icon">
                        <li><Link to="/"><i className="fa-brands fa-facebook-f"/></Link></li>
                        <li><Link to="/"><i className="fa-brands fa-instagram"/></Link></li>
                        <li><Link to="/"><i className="fa-brands fa-x-twitter"/></Link></li>
                        <li><Link to="/"><i className="fa-brands fa-linkedin-in"/></Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="main-box">
            <div className="logo-box">
                <div className="logo">
                    <Link to="/">
                        <img src={isDarkMode ? DarkLogo : MainLogo} alt="Image" title="Consultez"/>
                    </Link>
                </div>
            </div>
            <div className="nav-outer">
                <nav className="nav main-menu">
                    <NavLinks/>
                </nav>
            </div>
            <div className="outer-box">
                <div className="info-box">
                    <Link className="btn-one-light" to="/page-contact">Contact Now</Link>
                </div>
                <div className="mobile-nav-toggler" onClick={handleOpen}><i className="fa-light fa-bars-staggered"/></div>
            </div>
        </div>
            <div className="auto-container">
                {/* Mobile Menu */}
                <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleRemove} />
                <nav className="menu-box">
                    <div className="upper-box">
                    <div className="nav-logo"><Link to="/"><img src={MobileLogo} alt="Image"/></Link></div>
                    <div className="close-btn" onClick={handleRemove}><i className="icon fa fa-times"/></div>
                    </div>
                <ul className="navigation clearfix d-block d-lg-none">
                    <MobileMenu/>
                </ul>
                <div className="content-box d-none d-lg-block">
                    <h4 className="title">About Us</h4>
                    <p className="text">Consultez is the go-to hub for early adopters and innovation enthusiasts, offering cutting technology widely.</p>
                </div>
                    <ul className="contact-list-one">
                        <li>
                            <div className="contact-info-box">
                            <i className="icon lnr-icon-phone-handset"/>
                            <span className="title">Call Now</span>
                            <Link to="/">+92 (8800) - 98670</Link>
                            </div>
                        </li>
                        <li>
                            <div className="contact-info-box">
                            <span className="icon lnr-icon-envelope1"/>
                            <span className="title">Send Email</span>
                            <Link to="/">help@company.com</Link>
                            </div>
                        </li>
                        <li>
                            <div className="contact-info-box">
                            <span className="icon lnr-icon-clock"/>
                            <span className="title">Send Email</span>
                            Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                            </div>
                        </li>
                    </ul>
                    <ul className="social-links">
                        <li><Link to="/"><i className="fab fa-x-twitter"/></Link></li>
                        <li><Link to="/"><i className="fab fa-facebook-f"/></Link></li>
                        <li><Link to="/"><i className="fab fa-pinterest"/></Link></li>
                        <li><Link to="/"><i className="fab fa-instagram"/></Link></li>
                    </ul>
                </nav>
                </div>
                <div className="search-popup">
                <span className="search-back-drop" onClick={handleToggle}/>
                <button className="close-search" onClick={handleToggle}><span className="fa fa-times"/></button>
                <div className="search-inner">
                    <form method="post" action="/">
                        <div className="form-group">
                            <input type="search" name="search-field" placeholder="Search..." required=""/>
                            <button type="submit"><i className="fa fa-search"/></button>
                        </div>
                    </form>
                </div>
                </div>
                {/* <!-- End Header Search --> */}

                {/* <!-- Sticky Header  --> */}
                <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
                <div className="auto-container">
                    <div className="inner-container">
                    <div className="logo">
                        <Link to="/">
                            <img src={isDarkMode ? DarkLogo : StickyLogo} alt="Logo"/>
                        </Link>
                    </div>
                    <div className="nav-outer">
                        <nav className="main-menu">
                        <div className="navbar-collapse show collapse clearfix">
                            <ul className="navigation clearfix">
                            <NavLinks/>
                            </ul>
                        </div>
                        </nav>
                        {/* <!--Mobile Navigation Toggler--> */}
                        <div className="mobile-nav-toggler" onClick={handleOpen}><span className="icon lnr-icon-bars"/></div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </header>
        </>
    );
};

export default Header2;