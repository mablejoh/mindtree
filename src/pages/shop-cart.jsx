import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/PageTitle";
import ShopCart from "../section/ShopCart";

function ShopCartPage() {
    return (
        <>

        <div className="page-wrapper">
          <Layout FooterStyle="three">
            <PageTitle pageName="Shop Cart" />
            <ShopCart />
          </Layout>
        </div>
        
        </>
    );
}
export default ShopCartPage