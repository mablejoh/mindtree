import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/PageTitle";
import Taxation from "../section/Taxation";

function ServiceDetailPage() {

    return (
        <>

        <div className="page-wrapper">
            <Layout HeaderStyle="two" FooterStyle="two">
                <PageTitle pageName="TAXATION SERVICES" />
                <Taxation />
            </Layout>
        </div>

        </>
    )
}
export default ServiceDetailPage