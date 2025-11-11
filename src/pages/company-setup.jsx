import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/PageTitle";
import CompanySetup from "../section/CompanySetup";

function ServiceDetailPage() {

    return (
        <>

        <div className="page-wrapper">
            <Layout HeaderStyle="two" FooterStyle="two">
                <PageTitle pageName="COMPANY SETUP" />
                <CompanySetup />
            </Layout>
        </div>

        </>
    )
}
export default ServiceDetailPage