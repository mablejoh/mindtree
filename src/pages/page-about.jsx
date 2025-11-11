import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/PageTitle";
import About from "../section/Home3/About";
import Services from "../section/Home3/Services";
import Contact from "../section/AboutUs/Contact";

function AboutUs() {

    return (
        <>

        <div className="page-wrapper">
            <Layout HeaderStyle="two" FooterStyle="two">
                <PageTitle pageName="About Us" />
                <About/>
                <Services/>
                
                <Contact/>
               
            </Layout>
        </div>

        </>
    )
}
export default AboutUs