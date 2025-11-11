import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import ServiceDetailsImage from '../assets/images/resource/service-details.jpg';
import ServiceDetailsImage2 from '../assets/images/resource/transfer-pricing-advisory-uae.jpg';
import ServiceDetailsImage3 from '../assets/images/resource/excise-tax-uae-advisory-services.jpg';

const serviceListData = [
	{
		title: "Business Advisory",
		linkurl: "/business-advisory-services"
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
		title: "Audit & Assurance",
		linkurl: "/audit-assuarance"
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
							<h6 className="sub-title wow fadeInUp bg-transparent ps-0" data-wow-delay="00ms" data-wow-duration="1500ms">TAXATION SERVICES</h6>
							<h2 className="title mb-30 wow splt-txt" data-splitting>TAXATION </h2>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="project-details__top mt-lg-5">
							<div className="text mb-40">VAT services in the UAE, Registered Tax Agent in the UAE with the Federal Tax Authority (FDA) as Emirates National Chartered Accountants Co. and can represent your business in fulfilling the tax obligation.</div>
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
							<p className="mb-30">We undertake VAT registration and help your company to obtain the Tax Registration Number. Support and guidance for VAT Return submission on quarterly and monthly basis. Our experts shall visit your office and make the necessary checks on documents and ensure compliance. </p>
							<div className="service-nr-list">
								<h3 className="mb-5">Service Includes</h3>
								<div className="row">
									<div className="col-lg-6">
									<div className="nr-list mb-5">
										<h4 className="title d-flex align-items-center mb-4"><span>01</span> Indirect Tax</h4>
										<p>An indirect tax is a tax levied on goods and services, not directly on an individual's or company's income. The tax is collected from an intermediary, such as a manufacturer or retailer, who then passes the tax burden to the end consumer by including it in the final purchase price. We help realise this situation and make necessary changes.</p>
									</div>
									</div>
									<div className="col-lg-6">
									<div className="nr-list mb-5">
										<h4 className="title d-flex align-items-center mb-4"><span>02</span> Excise tax (UAE)</h4>
										<p>Excise tax is an indirect tax levied in the UAE on specific goods that are considered harmful to human health and the environment. Introduced in 2017 and overseen by the Federal Tax Authority (FTA), its primary purpose is to discourage consumption and generate revenue for public services. Our experts in tax dealings help with all excise taxes services.</p>
									</div>
									</div>
									<div className="col-lg-6">
									<div className="nr-list mb-5">
										<h4 className="title d-flex align-items-center mb-4"><span>03</span> Value Added Tax (VAT) -UAE</h4>
										<p>Value Added Tax (VAT) in the United Arab Emirates (UAE) is a general consumption tax of 5% on most goods and services. Businesses collect VAT from consumers and remit it to the government, acting as tax agents. 
										
										</p>
									
									</div>
									</div>
									<div className="col-lg-6">
									<div className="nr-list mb-5">
										<h4 className="title d-flex align-items-center mb-4"><span>04</span> Customs Duty</h4>
										<p>The standard customs duty in the UAE is a 5% ad valorem rate on the CIF (cost, insurance, and freight) value of most imported goods, though certain items like alcohol and tobacco have higher rates. We help companies or individuals in dealing with the customs duty rules and regulations.</p>
									</div>
									</div>
									<div className="col-lg-6">
									<div className="nr-list mb-5">
										<h4 className="title d-flex align-items-center mb-4"><span>05</span> International Taxation</h4>
										<p>We also deal with all kinds of international taxation rules needed for various organizations in the UAE. The UAE's move toward greater tax transparency has solidified its position as a mature and robust jurisdiction for international business. As your trusted tax consultants, we offer the technical expertise and strategic insight required to navigate this evolving landscape with confidence. We partner with you to transform international tax challenges into opportunities for growth, ensuring your business remains compliant, competitive, and profitable in the global market.</p>
									</div>
									</div>
									<div className="col-lg-6">
									<div className="nr-list mb-5">
										<h4 className="title d-flex align-items-center mb-4"><span>06</span> Transfer Pricing (UAE)</h4>
										<p>Our pricing strategy is rooted in a commitment to delivering quantifiable value and building a long-term partnership with our clients. We begin with a consultation to understand your specific circumstances and provide a clear, upfront proposal that aligns with your budget and business objectives. At Mtree, we ensure that the cost of our services is a sound investment in your company's financial health and future.</p>
									</div>
									</div>
									<div className="col-lg-6">
									<div className="nr-list mb-5">
										<h4 className="title d-flex align-items-center mb-4"><span>07</span> Corporate Tax (UAE)</h4>
										<p>Effective tax planning allows a company to legally and ethically minimize its tax burden, enabling it to reinvest capital back into the business for future expansion. This includes maximizing eligible deductions and credits, structuring transactions in a tax-efficient manner, and leveraging available tax benefits. The resulting cost savings can be channelled into research and development, hiring talent, or scaling operations, giving your business a significant competitive edge.</p>
									</div>
									</div>
								</div>
							</div>
							<div className="content mt-40">
								<div className="text">
									<h3 className="mb-4">VAT experts come with necessary action such as</h3>
									<ul className="outcome-list mb-5">
									<li><i className="fal fa-check"></i> Exports of goods and services outside the UAE.</li>
									<li><i className="fal fa-check"></i> International transport.</li>
									<li><i className="fal fa-check"></i> The first supply of new residential buildings within three years of completion.</li>
									<li><i className="fal fa-check"></i> Certain services in healthcare and education. </li>
									</ul>
								</div>
									<div className="feature-list my-5">
										<div className="row clearfix">
											<div className="col-md-6 column">
												<img className="mb-3" src={ServiceDetailsImage2} alt="images" />
											</div>
											<div className="col-md-6 column">
												<img className="mb-3" src={ServiceDetailsImage3} alt="images" />
											</div>
										</div>
									</div>
							</div>
							<div className="innerpage">
								<ul className="accordion-box wow fadeInRight">
									<li className={isActive.key == 1 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(1)}>
										<div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"}>1. Do you offer marketing contracts or relationships?
											<div className="icon fa fa-plus"></div>
										</div>
										<div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
											<div className="content">
												<div className="text">Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
											</div>
										</div>
									</li>
									<li className={isActive.key == 2 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(2)}>
										<div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"}>2. What kind of marketing efforts do you specialize ?
											<div className="icon fa fa-plus"></div>
										</div>
										<div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
											<div className="content">
												<div className="text">Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
											</div>
										</div>
									</li>
									<li className={isActive.key == 3 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(3)}>
										<div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"}>3. Can I use the demos made by Ewebot?
											<div className="icon fa fa-plus"></div>
										</div>
										<div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
											<div className="content">
												<div className="text">Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
											</div>
										</div>
									</li>
									<li className={isActive.key == 4 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(4)}>
										<div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"}>4. What everybody ought to know about digital marketing?
											<div className="icon fa fa-plus"></div>
										</div>
										<div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
											<div className="content">
												<div className="text">Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
											</div>
										</div>
									</li>
								</ul>
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