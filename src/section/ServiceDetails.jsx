import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import ServiceDetailsImage from '../assets/images/resource/service-details.jpg';
import ServiceDetailsImage2 from '../assets/images/resource/auditing.jpg';
import ServiceDetailsImage3 from '../assets/images/resource/fraud_detection.jpg';

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
							<h6 className="sub-title wow fadeInUp bg-transparent ps-0" data-wow-delay="00ms" data-wow-duration="1500ms">AUDIT AND COMPLIANCE SERVICES</h6>
							<h2 className="title mb-30 wow splt-txt" data-splitting>AUDIT & ASSURANCE </h2>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="project-details__top mt-lg-5">
							<div className="text mb-40">Audit and assurance service in the UAE is much more than verifying just figures and numbers. Audit and assurance systematic review and inspection of the Entity’s accounts and controls. Generally, these are performed by external parties to get a clear view and information about the company.</div>
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
							<p className="mb-30">Since business owners, investors are busy with their core operating activities, the overall performance. Internal activities and affairs are not checked or verified. This is where audit and assurance service plays a vital role in serving stakeholders with reasonable assurance on the face of the business.</p>
							<p className="mb-30">The Audit is providing the opinion on the financial statements and is to ensure the information provided is accurate and accepted worldwide in line with the International Standards of Auditing.</p>
							<div className="service-nr-list">
								<h3 className="mb-5">Service Includes</h3>
								<div className="row">
									<div className="col-lg-6">
									<div className="nr-list mb-5">
										<h4 className="title d-flex align-items-center mb-4"><span>01</span> Due Diligence Audit</h4>
										<p>Diligence audit is the investigation audit or examination of a business or person before signing a contract, or an act with a certain standard of care. During a Due Diligence Audit, the analysis or review could be carried out for a potential objective for the merger, acquisition, privatisation or similar corporate finance transactions, usually by a buyer.</p>
									</div>
									</div>
									<div className="col-lg-6">
									<div className="nr-list mb-5">
										<h4 className="title d-flex align-items-center mb-4"><span>02</span> Fraud investigation audit</h4>
										<p>Fraud is a falsification of records and documents with intention to deceive others. Fraud is generally committed by employees, vendors, customers or other persons in relation to them. Such frauds are mainly against business or company to gain some undue advantage, financial gain, or with an intention spoil the goodwill and reputation in the market. Hence it can be identified only with the minute inspection.</p>
									</div>
									</div>
									<div className="col-lg-6">
									<div className="nr-list mb-5">
										<h4 className="title d-flex align-items-center mb-4"><span>03</span> Internal Audit Services</h4>
										<p>Internal Auditing is an activity carried on by the internal auditor to meet the management requirements of information. It is an independent objective assurance and consulting activity intended to add value and develop an organisation’s operation. It is an independent appraisal activity within an organization for the review of operations as a service to the organization.</p>
									</div>
									</div>
									<div className="col-lg-6">
									<div className="nr-list mb-5">
										<h4 className="title d-flex align-items-center mb-4"><span>04</span> Operational audit services</h4>
										<p>Operational audit services provide a systematic review of an organization's internal processes, policies, and systems to assess their efficiency, effectiveness, and alignment with strategic objectives. They differ from traditional financial audits by focusing on business workflows, resource management, and risk rather than just financial accuracy. </p>
									</div>
									</div>
									<div className="col-lg-6">
									<div className="nr-list mb-5">
										<h4 className="title d-flex align-items-center mb-4"><span>05</span> AML/CFT Compliance Services</h4>
										<p>Our team help organizations meet regulations by providing solutions for risk assessment, transaction monitoring, customer due diligence (KYC), and sanctions screening, often involving consultancy, policy development, and technology implementation.</p>
									</div>
									</div>
								</div>
							</div>
							<div className="content mt-40">
								<div className="text">
									<h3 className="mb-4">Service Outcome</h3>
									<ul className="outcome-list mb-5">
									<li><i className="fal fa-check"></i>A due diligence process will help the buyers pay more than the actual purchase price or, in the seller's case, receiving less than a reasonable price.</li>
									<li><i className="fal fa-check"></i> Fraud investigation Audit helps in preventing & detecting frauds.</li>
									<li><i className="fal fa-check"></i> Internal Audit helps a business to achieve its objectives by bringing a methodical, meticulous, and disciplined approach to assess and enhance the effectiveness of risk management, control, and governance processes.</li>
									<li><i className="fal fa-check"></i> Operational Auditing helps To achieve improved profitability. </li>
									<li><i className="fal fa-check"></i> AML/CFT Compliance Services helps to avoid any risk of exposure to money laundering and terrorism funding activities. </li>
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