import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/PageTitle";
import ProjectDetails from "../section/ProjectDetails";

function PageCaseDetails() {

    return (
        <>

        <div className="page-wrapper">
            <Layout FooterStyle="three">
                <PageTitle pageName="Project Details" />
                <ProjectDetails />
            </Layout>
        </div>

        </>
    )
}
export default PageCaseDetails