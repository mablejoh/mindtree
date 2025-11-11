import React from "react";
import Layout from '../layouts/Layout';
import ProjectGrid from "../section/ProjectGrid";
import PageTitle from "../section/PageTitle";

 function PageCase() {

    return (
        <>

        <div className="page-wrapper">
            <Layout FooterStyle="three">
                <PageTitle pageName="Case Study" />
                <ProjectGrid />
            </Layout>
        </div>

        </>
    )
}
export default PageCase