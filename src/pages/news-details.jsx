import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/PageTitle";
import BlogDetails from "../section/BlogDetails";

export default function PageBlogDetails() {

    return (
        <>

        <div className="page-wrapper">
            <Layout FooterStyle="three">
                <PageTitle pageName="Blog Details" />
                <BlogDetails />
            </Layout>
        </div>

        </>
    )
}
