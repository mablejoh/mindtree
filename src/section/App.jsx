import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home1Single from "./pages/index-1-single";
import NewsDetails from "./pages/news-details";
import NewsGrid from "./pages/news-grid";
import PageError from "./pages/page-404";
import PageAbout from "./pages/page-about";
import PageContact from "./pages/page-contact";
import PageFaq from "./pages/page-faq";
import PagePricing from "./pages/page-pricing";
import PageCaseDetails from "./pages/page-case-details";
import PageCase from "./pages/page-case";
import PageServiceDetails from "./pages/audit-assuarance";
import PageServices from "./pages/page-services";
import PageTeamDetails from "./pages/page-team-details";
import PageTeam from "./pages/page-team";
import PageTestimonial from "./pages/page-testimonial";
import BusinessAdvisoryService from "./pages/business-advisory-services";
import AccountingBookkeepingService from "./pages/accounting-bookkeeping-service";
import CompanySetup from "./pages/company-setup";
import TaxationService from "./pages/taxation-service";
import ShopProducts from "./pages/shop-products";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home1Single />} />
        <Route path="/news-details" element={<NewsDetails />} />
        <Route path="/news-grid" element={<NewsGrid />} /> 
        <Route path="*" element={<PageError />} />
        <Route path="/news-grid" element={<NewsGrid />} />
        <Route path="/page-about" element={<PageAbout />} />
        <Route path="/page-contact" element={<PageContact />} />
        <Route path="/page-faq" element={<PageFaq />} />
        <Route path="/page-pricing" element={<PagePricing />} />
        <Route path="/page-case-details" element={<PageCaseDetails />} />
        <Route path="/page-case" element={<PageCase />} />
        <Route path="/audit-assuarance" element={<PageServiceDetails />} />
        <Route path="/page-services" element={<PageServices />} />
        <Route path="/page-team-details" element={<PageTeamDetails />} />
        <Route path="/page-team" element={<PageTeam />} />
        <Route path="/page-testimonial" element={<PageTestimonial />} />
        <Route path="/business-advisory-services" element={<BusinessAdvisoryService />} /> 
        <Route path="/accounting-bookkeeping-service" element={<AccountingBookkeepingService />} />
        <Route path="/company-setup" element={<CompanySetup />} />
        <Route path="/taxation-service" element={<TaxationService />} />
        <Route path="/shop-products" element={<ShopProducts />} /> 
      </Routes>
    </Router>
  );
}

export default App;