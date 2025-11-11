import React from "react";
import { Link } from 'react-router-dom';
import PageTitleBG from '../assets/images/bg/page-title-bg.jpg';


const PageTitle = (props) => {
    return (
        <>
        
        <section className="page-title" style={{ backgroundImage: `url(${PageTitleBG})` }}>
            <div className="auto-container">
                <div className="title-outer">
                    <ul className="page-breadcrumb">
                        <li><Link to="">Home</Link></li>
                        <li>{props.pageName}</li>
                    </ul>
                    <h1 className="title">{props.pageName}</h1>
                </div>
            </div>
        </section>

        </>
    );
};

export default PageTitle;