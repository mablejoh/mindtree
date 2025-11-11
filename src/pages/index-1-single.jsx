import React from "react";
import Layout from '../layouts/Layout';
import Banner from '../section/Home1/Banner';
import About from '../section/Home1/About';
import Service from "../section/Home1/Service";
import Choose from "../section/Home1/Choose";
import Growth from "../section/Home1/Growth";
import Processing from "../section/Home1/Processing";
import Case from "../section/Home1/Case";
import Strategy from "../section/Home1/Strategy";
import Team from "../section/Home1/Team";
import Faqs from "../section/Home1/Faqs";
import Testimonial from "../section/Home1/Testimonial";
import News from "../section/Home1/News";

function Home1Single() {
    return (
        <>
        
        <div className="page-wrapper">
            <Layout HeaderStyle="onesingle">
                <Banner />
                <About />
                <Service />
                <Choose />
                <Growth />
                <Processing />
               
                <Strategy />
                <Team />
                
                <Testimonial />
                
            </Layout>
        </div>

        </>
    );
}
export default Home1Single