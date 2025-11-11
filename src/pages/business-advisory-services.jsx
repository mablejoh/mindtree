import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/PageTitle";
import BusinessAdvisory from "../section/BusinessAdvisory";

function ServiceDetailPage() {

    return (
        <>

        <div className="page-wrapper">
            <Layout HeaderStyle="two" FooterStyle="two">
                <PageTitle pageName="BUSINESS ADVISORY SERVICES" />
                <BusinessAdvisory />
            </Layout>
        </div>

        </>
    )
}
export default ServiceDetailPage