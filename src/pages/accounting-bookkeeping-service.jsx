import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/PageTitle";
import AccountingBookkeeping from "../section/AccountingBookkeeping";

function ServiceDetailPage() {

    return (
        <>

        <div className="page-wrapper">
            <Layout HeaderStyle="two" FooterStyle="two">
                <PageTitle pageName="ACCOUNTING & BOOKKEEPING SERVICES" />
                <AccountingBookkeeping />
            </Layout>
        </div>

        </>
    )
}
export default ServiceDetailPage