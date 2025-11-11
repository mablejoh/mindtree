import { useEffect, useState } from "react";
import BackToTop from "../components/BackToTop";

// Import all footer components
import Footer from "../components/Footers/Footer";
import Footer2 from "../components/Footers/Footer2";
import Footer3 from "../components/Footers/Footer3";
import Footer4 from "../components/Footers/Footer4";
import Footer5 from "../components/Footers/Footer5";
import Footer6 from "../components/Footers/Footer6";

// Import all header components
import Header from "../components/Headers/Header";
import HeaderSingle from "../components/Headers/HeaderSingle";
import Header2 from "../components/Headers/Header2";
import Header2Single from "../components/Headers/Header2Single";
import Header3 from "../components/Headers/Header3";
import Header3Single from "../components/Headers/Header3Single";
import Header4 from "../components/Headers/Header4";
import Header4Single from "../components/Headers/Header4Single";
import Header5 from "../components/Headers/Header5";
import Header5Single from "../components/Headers/Header5Single";
import Header6 from "../components/Headers/Header6";
import Header6Single from "../components/Headers/Header6Single";
import Header7 from "../components/Headers/Header7";
import Header7Single from "../components/Headers/Header7Single";

const Layout = ({ children, HeaderStyle, FooterStyle, styleMode }) => {
    const [searchToggle, setSearchToggled] = useState(false);
    const [scroll, setScroll] = useState(0);
    const handleToggle = () => setSearchToggled(!searchToggle);
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    }, [scroll]);

    const handleOpen = () => {
        document.body.classList.add("mobile-menu-visible");
    };
    const handleRemove = () => {
        document.body.classList.remove("mobile-menu-visible");
    };

    useEffect(() => {
        if (styleMode === "Dark") {
            document.body.classList.add("dark-mode");
        }else {
            document.body.classList.remove("dark-mode");
        }
    }, [styleMode]);


    // **Header Selection**
    const renderHeader = () => {
        switch (HeaderStyle) {
            default: return <Header handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />;
            case "onesingle": return <HeaderSingle handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />;
            case "two": return <Header handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />;
            case "twosingle": return <Header2Single handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />;
            case "three": return <Header3 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />;
            case "threesingle": return <Header3Single handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />;
            case "four": return <Header4 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />;
            case "foursingle": return <Header4Single handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />;
            case "five": return <Header5 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />;
            case "fivesingle": return <Header5Single handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />;
            case "six": return <Header6 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />;
            case "sixsingle": return <Header6Single handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />;
            case "seven": return <Header7 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />;
            case "sevensingle": return <Header7Single handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />;
        }
    };

    // **Footer Selection**
    const renderFooter = () => {
        switch (FooterStyle) {
            default: return <Footer />;
            case "two": return <Footer2 />;
            case "three": return <Footer3 />;
            case "four": return <Footer4 />;
            case "five": return <Footer5 />;
            case "six": return <Footer6 />;
        }
    };

    return (
        <>
            {renderHeader()}
            {children}
            {renderFooter()}
            <BackToTop />
        </>
    );
};

export default Layout;
