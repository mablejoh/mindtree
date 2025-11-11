import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/PageTitle";
import FaqInner from "../section/FaqInner";

function FaqPage() {

    return (
        <>

        <div className="page-wrapper">
            <Layout FooterStyle="three">
                <PageTitle pageName="FAQ" />
                <FaqInner />
            </Layout>
        </div>
        
        </>
    )
}
export default FaqPage