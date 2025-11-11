import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import ServiceDetailsImage from '../assets/images/resource/service-details.jpg';
import ServiceDetailsImage2 from '../assets/images/resource/service-details-2.jpg';
import ServiceDetailsImage3 from '../assets/images/resource/service-details-3.jpg';

const serviceListData = [
	{
		title: "Audit & Assurance",
		linkurl: "/audit-assuarance"
	},
	{
		title: "Accounting & Bookkeeping",
		linkurl: "/accounting-bookkeeping-service"
	},
	{
		title: "Company Setup",
		linkurl: "/company-setup"
	},
	{
		title: "Taxation",
		linkurl: "/taxation-service"
	},
	
];

function ServiceDetails()  {
	const [isOpen, setOpen] = useState(false);
	const [isActive, setIsActive] = useState({
		status: false,
		key: 1,
	});
	const handleToggle = (key) => {
		if (isActive.key === key) {
			setIsActive({
				status: false,
			});
		} else {
			setIsActive({
				status: true,
				key,
			});
		}
	};


	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	});

	const [loading, setLoading] = useState(false);
	const [status, setStatus] = useState('');

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setStatus('');

		try {
			const response = await fetch('/contact', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formData)
			});

			if (response.ok) {
			setStatus('Message sent successfully!');
			setFormData({ name: '', email: '', message: '' });
			} else {
			setStatus('Failed to send message.');
			}
		} catch (error) {
			setStatus('Something went wrong.');
		} finally {
			setLoading(false);
		}
	};



	return (
		<>
		<section className="services-details pt-120 pb-120">
			<div className="container">
				<div className="row align-items-lg-center">
					<div className="col-lg-6">
						<div className="sec-title mb-40">
							<h6 className="sub-title wow fadeInUp bg-transparent ps-0" data-wow-delay="00ms" data-wow-duration="1500ms">BUSINESS ADVISORY SERVICES</h6>
							<h2 className="title mb-30 wow splt-txt" data-splitting>BUSINESS ADVISORY </h2>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="project-details__top mt-lg-5">
							<div className="text mb-40">Our professional business advisory firm in Dubai is offering very reliable business advisory services. </div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-6">
					<div className="section-title"></div>
					</div>
					<div className="col-lg-6">
					<div className="section-title"></div>
					</div>
					<div className="col-lg-12">
					<div className="services-details__content position-relative my-5">
						<img src={ServiceDetailsImage} alt="Image" />
						
					</div>
					</div>
					<div className="col-xl-8 col-lg-8">
						<div className="services-details__content">
							<h3>Overview</h3>
							<p className="mb-30">It operates on a day-to-day basis by assessing the working capital requirements, making accurate business policies and strategic plans. We also help in managing money matters like investments and debts of the company.
							We help our clients in determining the financial structure and analyse the economic benefits.
							</p>
							<div className="service-nr-list">
								
								<div className="row">
									<div className="row align-items-lg-center">
									
									<h4 className="title d-flex align-items-center mb-4"> CFO Services</h4>
									<div className="project-details__top mt-lg-5">
										<div className="text mb-40">We, at Mtree consultancy can support you by providing Virtual CFO services in Dubai and nearby areas, or on a part-time basis according to client requirements and needs. We can provide various outsourced CFO services in the UAE for a very reasonable fee that depends on the scope and needs of the assignment. Our expert team can support you while making strategic decisions.</div>
										<div className="text mb-40">We, at Mtree, understand this challenge of businesses and hence are ready to provide these strategic CFO services in Dubai, United Arab Emirates, at a very cost-effective manner. A strategic CFO would analyse the situation to make better business decisions based on timely and appropriate financial advice. </div>
										<div className="text mb-40">Our team helps the clients to achieve their business goals while building and analysing a solid foundation for the company, leading to sustained growth and development in shareholder wealth by analysing today’s dynamic business environment.</div>
										
									</div>
									<div className="innerpage">
								<ul className="accordion-box wow fadeInRight">
									<li className={isActive.key == 1 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(1)}>
										<div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"}> CFO acts as a business partners
											<div className="icon fa fa-plus"></div>
										</div>
										<div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
											<div className="content">
												<div className="text">Collaborates with other departments ensure their productivity by analysing and linking operational reports with financial data, enabling them to manage their functions more predictively and ultimately adding value to the organization.</div>
											</div>
										</div>
									</li>
									<li className={isActive.key == 2 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(2)}>
										<div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"}>CFO designs the supply chain of the company
											<div className="icon fa fa-plus"></div>
										</div>
										<div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
											<div className="content">
												<div className="text">Designs and optimises the companies supply chain to ensure its remain cost effective and competitive this was just strongly ships with all stakeholders including suppliers and customers and make informed make or buy decision to support strategic and operational goals.</div>
											</div>
										</div>
									</li>
									<li className={isActive.key == 3 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(3)}>
										<div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"}>CFO drives digital transformation in the company 
											<div className="icon fa fa-plus"></div>
										</div>
										<div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
											<div className="content">
												<div className="text">Ca for drives digital transformation company as they are the custodian of financial and operational data which can be brought to a single place analysed through digital tools to provide key insights to management helping them make decisions on a real time basis
												They provide excellent insight into the financial performance of the company by press ending financial reports after in depth analysis the discuss all strategic issues with the border in m/asters and ensure that they approval of concurrence is in place before making any strategic move the cross president and drive the budgets of the company after the approval of the board investors they make in present financial models for new projects of businesses to investors and raise funds
												</div>
											</div>
										</div>
									</li>
									<li className={isActive.key == 4 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(4)}>
										<div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"}>CFO maximises Return on Investment
											<div className="icon fa fa-plus"></div>
										</div>
										<div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
											<div className="content">
												<div className="text">Return on investment made by investors is maximised by optimising revenue and reducing costs by enhancing productivity and efficiency levels in all areas of business they refund by developing and maintaining relationships with banks financial institutions and investors while minimising the cost of capital for raising these funds demand is working capital effectively by optimising the working capital cycle they had foreign currency risk currency risk by selecting the right hedging instruments after monitoring updates and analysing their impact on foreign currency price.</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
								<hr className="mt-4 mb-5 mb-lg-0"/>
								
								<div className="row align-items-lg-center">
									
									<h4 className="title d-flex align-items-center mb-4"> Business Valuation</h4>
									<div className="project-details__top mt-lg-5">
										<div className="text mb-40">There are many reasons for a business owner company needs to know the value of the business to seller buyer business settlement only agitation capital structuring expansion of business EC
										.These benefits help business owners negotiate strategic scale of business together fair prize minimise the financial risk of the management business owners who seek a look first business valuation r series free missing out on important benefits received from comprehensive violation analysis and valuation report performed by violation experts
										</div>
										
									</div>
									
								</div>
								<hr className="mt-4 mb-5 mb-lg-0"/>
								
								<div className="row align-items-lg-center">
									
									<h4 className="title d-flex align-items-center mb-4"> Financial Feasibility Study </h4>
									<div className="project-details__top mt-lg-5">
										<div className="text mb-40">A comprehensive study to determine if a proposed project or business idea is financially viable. It evaluates the project's potential for profitability and its ability to generate positive cash flow by forecasting revenues, estimating costs, identifying risks, and determining funding needs.
										</div>
										
									</div>
									
								</div>
								<hr className="mt-4 mb-5 mb-lg-0"/>
								
								<div className="row align-items-lg-center">
									
									<h4 className="title d-flex align-items-center mb-4"> Mergers and Acquisitions</h4>
									<div className="project-details__top mt-lg-5">
										<div className="text mb-40">All-in-One Financial Feasibility and Planning
										</div>
										<div className="text mb-40">"Our financial feasibility analysis software helps you identify potential financial risks and challenges before you invest significant resources. With robust financial forecasting and budgeting tools, you can build realistic, sustainable economic models that increase your chances of success and attract serious investors"
										</div>
									</div>
									
								</div>
								<hr className="mt-4 mb-5 mb-lg-0"/>
								
								<div className="row align-items-lg-center">
									
									<h4 className="title d-flex align-items-center mb-4"> Trade Finance</h4>
									<div className="project-details__top mt-lg-5">
										<div className="text mb-40">"Your accounting partner for seamless international trade."
										</div>
										<div className="text mb-40">We guide your clients through the selection and implementation of modern trade finance software. Integrating these platforms with existing accounting systems provides real-time financial visibility, automates processes, and centralizes documentation for all trade finance instruments.
										</div>
										<div className="text">
										<h3 className="mb-4">Why partner with us?</h3>
										<ul className="outcome-list mb-5">
										<li><i className="fal fa-check"></i> •	Expert Guidance: Go beyond basic bookkeeping to offer strategic financial advice that directly impacts your clients' bottom line.</li>
										<li><i className="fal fa-check"></i> •	Enhanced Reporting: Provide enhanced financial reporting that includes transparent and accurate insights into your clients' international trade activities.</li>
										<li><i className="fal fa-check"></i> •	Client Confidence: Equip your accounting practice with the specialized knowledge to advise and empower clients with complex global operations.</li>
										<li><i className="fal fa-check"></i> •	Scalable Services: Offer a scalable solution for businesses of all sizes, from SMEs entering new markets to larger corporations managing high volumes of trade transactions.</li>
										</ul>
									</div>
									</div>
									
								</div>
								<hr className="mt-4 mb-5 mb-lg-0"/>
								
								<div className="row align-items-lg-center">
									
									<h4 className="title d-flex align-items-center mb-4"> TRUST FOUNTATION</h4>
									<div className="project-details__top mt-lg-5">
										<div className="text mb-40">“Next-Generation Accounting for Charitable Foundations”
										</div>
										<div className="text mb-40">We handle the numbers so you can focus on your cause. Our accounting consultants provide reliable, transparent, and accurate financial services for trusts and foundations. We keep your accounts compliant and your deadlines under control, ensuring peace of mind for you and your board. We focus on 
										</div>
										<ul className="project-list mb-5">
										<li className="d-flex align-items-center"><i className="icon fa-classic fa-solid fa-check fa-fw"></i> Timely bookkeeping</li>
										<li className="d-flex align-items-center"><i className="icon fa-classic fa-solid fa-check fa-fw"></i> Expert tax preparation</li>
										<li className="d-flex align-items-center"><i className="icon fa-classic fa-solid fa-check fa-fw"></i> Financial reporting</li>
										<li className="d-flex align-items-center"><i className="icon fa-classic fa-solid fa-check fa-fw"></i> Audit preparation </li>
										</ul>
									</div>
									
								</div>
								<hr className="mt-4 mb-5 mb-lg-0"/>
								
								<div className="row align-items-lg-center">
									
									<h4 className="title d-flex align-items-center mb-4"> Special Purpose Vehicles</h4>
									<div className="project-details__top mt-lg-5">
										<div className="text mb-40">“Simplify your SPV administration. Contact us today for a consultation.”</div>
									</div>
									
								</div>
								<hr className="mt-4 mb-5 mb-lg-0"/>
								
								<div className="row align-items-lg-center">
									
									<h4 className="title d-flex align-items-center mb-4"> Segregated Companies</h4>
									<div className="project-details__top mt-lg-5">
										<div className="text mb-40">Our consulting services provide clarity and control over your entire corporate structure. We specialize in aggregating financial data across distinct legal entities while maintaining the integrity and legal firewalls of each segregated account. Our expertise ensures a single, transparent view of your group's performance, allowing you to meet regulatory obligations with confidence.</div>
									</div>
									
								</div>
								<hr className="mt-4 mb-5 mb-lg-0"/>
								
								<div className="row align-items-lg-center">
									
									<h4 className="title d-flex align-items-center mb-4"> 0% Tax Planning</h4>
									<div className="project-details__top mt-lg-5">
										<div className="text mb-40">Tired of high tax burdens? Our expert accounting and strategic tax planning help you maximize every available deduction, exemption, and credit. We create legally compliant strategies to minimize your tax liability—or even achieve a 0% tax outcome—so you keep more of your hard-earned revenue.</div>
									</div>
									
								</div>
								<hr className="mt-4 mb-5 mb-lg-0"/>
								
								</div>
							</div>
							
							
						</div>
					</div>
					<div className="col-lg-4">
						<div className="service-sidebar mt-5 mt-lg-0">
							<div className="sidebar-widget service-sidebar-single">
							<div className="sidebar-service-list mb-30">
								<h4 className="title">Other Services</h4>
								<ul>
									{serviceListData.map((eachitem, index) => (
									<li key={index}><Link className={(index === 0) ? 'current': ''} to={eachitem.linkurl}><i className="far fa-arrow-right" /><span>{eachitem.title}</span></Link></li>
									))}
								</ul>
							</div>
							<div className="sidebar-service-list mb-30">
								<h4 className="title">Contact With us</h4>
								<ul className="address">
								<li>M Floor ,Saeed Tower 2 Al Ebdaa’ Street Trade Centre First</li>
								<li>Dubai, UAE</li>
								<li><Link to="#">mdpalakkil@gmail.com</Link></li>
								<li><Link to="#">+971 558917678</Link></li>
								</ul>
							</div>
							<div className="sidebar-service-list">
								<h4 className="title">Send Enquiry</h4>
								<form onSubmit={handleSubmit}>
									<div className="row">
										<div className="col-sm-12">
										<div className="mb-20">
											<input
											className="form-control"
											type="text"
											name="name"
											placeholder="Your Name"
											value={formData.name}
											onChange={handleChange}
											required
											/>
										</div>
										</div>
										<div className="col-sm-12">
										<div className="mb-20">
											<input
											className="form-control"
											type="email"
											name="email"
											placeholder="Email Address"
											value={formData.email}
											onChange={handleChange}
											required
											/>
										</div>
										</div>
										<div className="col-sm-12">
										<div className="mb-20">
											<textarea
											className="form-control"
											name="message"
											rows="5"
											placeholder="Write a Message"
											value={formData.message}
											onChange={handleChange}
											required
											/>
											<button type="submit" className="btn-two rounded-1 mt-30">
											Send Message Us
											</button>
										</div>
										</div>
									</div>
								</form>
							</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
		</>
	);
};

export default ServiceDetails;