import React from "react";
import Layout from '../layouts/Layout';
import TeamGrid from "../section/TeamGrid";
import PageTitle from "../section/PageTitle";

function TeamsGrid() {

    return (
        <>

        <div className="page-wrapper">
            <Layout FooterStyle="three">
                <PageTitle pageName="Team Grid" />
                <TeamGrid />
            </Layout>
        </div>

        </>
    )
}
export default TeamsGrid