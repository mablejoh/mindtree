import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/PageTitle";
import ShopDetails from "../section/ShopDetails";

function ShopDetailsPage() {
    return (
        <>

        <div className="page-wrapper">
          <Layout FooterStyle="three">
            <PageTitle pageName="Shop Details" />
            <ShopDetails />
          </Layout>
        </div>

        </>
    );
}
export default ShopDetailsPage