import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/PageTitle";
import ServiceGrid from "../section/ServiceGrid";

function ServicesPage() {

    return (
        <>

        <div className="page-wrapper">
            <Layout HeaderStyle="two" FooterStyle="two">
                <PageTitle pageName="Services" />
                <ServiceGrid />
            </Layout>
        </div>

        </>
    )
}
export default ServicesPage