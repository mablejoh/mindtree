import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/PageTitle";
import Pricing from "../section/PricingInner/Pricing";

function PricingPage() {

    return (
        <>
        <div className="page-wrapper">
            <Layout FooterStyle="three">
                <PageTitle pageName="Pricing" />
                <Pricing />
            </Layout>
        </div>
        </>
    )
}
export default PricingPage