import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/PageTitle";
import NewsGrid from "../section/NewsGrid";

export default function PageBlogGrid() {

    return (
        <>
        <div className="page-wrapper">
            <Layout FooterStyle="three">
                <PageTitle pageName="News Grid" />
                <NewsGrid />
            </Layout>
        </div>
        </>
    )
}
