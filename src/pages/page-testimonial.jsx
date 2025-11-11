import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/PageTitle";
import Testimonials from "../section/Home3/Testimonials";

function TestimonialsPage() {

    return (
        <>
        
        <div className="page-wrapper">
            <Layout FooterStyle="three">
                <PageTitle pageName="Testimonials" />
                <Testimonials className="mt-120 mb-120"/>
            </Layout>
        </div>

        </>
    )
}
export default TestimonialsPage