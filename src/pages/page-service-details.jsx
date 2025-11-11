import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/PageTitle";
import ServiceDetails from "../section/ServiceDetails";

function ServiceDetailPage() {

    return (
        <>

        <div className="page-wrapper">
            <Layout HeaderStyle="onesingle" FooterStyle="two">
                <PageTitle pageName="AUDIT AND COMPLIANCE SERVICES" />
                <ServiceDetails />
            </Layout>
        </div>

        </>
    )
}
export default ServiceDetailPage