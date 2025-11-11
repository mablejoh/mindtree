import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/PageTitle";
import ShopSidebar from "../section/ShopSidebar";

function ShopSidebarPage() {

    return (
        <>
        
        <div className="page-wrapper">
            <Layout FooterStyle="three">
                <PageTitle pageName="Shop Sidebar" />
                <ShopSidebar />
            </Layout>
        </div>

        </>
    )
}
export default ShopSidebarPage