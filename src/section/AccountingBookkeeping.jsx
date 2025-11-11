import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import ServiceDetailsImage from '../assets/images/resource/service-details.jpg';
import ServiceDetailsImage2 from '../assets/images/resource/backlog-accounting-services.jpg';
import ServiceDetailsImage3 from '../assets/images/resource/standard-operating-procedure.jpg';

const serviceListData = [
	{
		title: "Business Advisory",
		linkurl: "/business-advisory-services"
	},
	{
		title: "Audit & Assurance",
		linkurl: "/audit-assuarance"
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
							<h6 className="sub-title wow fadeInUp bg-transparent ps-0" data-wow-delay="00ms" data-wow-duration="1500ms">ACCOUNTING & BOOKKEEPING SERVICES</h6>
							<h2 className="title mb-30 wow splt-txt" data-splitting>ACCOUNTING & BOOKKEEPING </h2>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="project-details__top mt-lg-5">
							<div className="text mb-40">Expert accounting and bookkeeping firm based in Dubai offering a complete of accounting outsourcing services in the UAE. </div>
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
							<p className="mb-30">The implementation of International Financial Reporting Standard (IFRS) has streamlined our accounting and bookkeeping aspects.</p>
							<p className="mb-30">We provide our accounting services to all business segments and individuals with a better result.</p>
							<div className="service-nr-list">
								<h3 className="mb-5">Service Includes</h3>
								<div className="row">
									<div className="col-lg-6">
									<div className="nr-list mb-5">
										<h4 className="title d-flex align-items-center mb-4"><span>01</span> Backlog Accounting Services</h4>
										<p>Backlog accounting services help businesses get their neglected, delayed, or incomplete financial records up to date. These services are done by our expert team which is crucial for business owners who have fallen behind on tasks like recording transactions, reconciling accounts, or filing taxes due to a lack of time, resources, or internal capacity.</p>
									</div>
									</div>
									<div className="col-lg-6">
									<div className="nr-list mb-5">
										<h4 className="title d-flex align-items-center mb-4"><span>02</span> Fixed Asset Management</h4>
										<p>Backlog accounting services help businesses get their neglected, delayed, or incomplete financial records up to date. These services are done by our expert team which is crucial for business owners who have fallen behind on tasks like recording transactions, reconciling accounts, or filing taxes due to a lack of time, resources, or internal capacity.</p>
									</div>
									</div>
									<div className="col-lg-6">
									<div className="nr-list mb-5">
										<h4 className="title d-flex align-items-center mb-4"><span>03</span> Standard Operating Procedures (SOP)</h4>
										<p>We do detailed, step-by-step written instructions that guide employees through routine tasks and processes to ensure consistency, efficiency, and quality. They serve as a go-to guide for employees, reducing errors, supporting training, ensuring regulatory compliance, and preserving institutional knowledge within an organization. </p>
									</div>
									</div>
									<div className="col-lg-6">
									<div className="nr-list mb-5">
										<h4 className="title d-flex align-items-center mb-4"><span>04</span> Inventory verification services</h4>
										<p>We provide a comprehensive audit of a company's stock to ensure the physical inventory matches the recorded data, identify discrepancies, and improve overall management. Benefits include preventing revenue loss, enhancing financial reporting accuracy, and improving operational efficiency. </p>
									</div>
									</div>
									
								</div>
							</div>
							<div className="content mt-40">
								<div className="text">
									<h3 className="mb-4">Service Outcome</h3>
									<ul className="outcome-list mb-5">
									<li><i className="fal fa-check"></i> Improve the efficiency and productivity of the company because we can perform non-core tasks efficiently with qualified personnel.</li>
									<li><i className="fal fa-check"></i> Access to the latest technology without investing in large amounts of money to own accounting software.</li>
									<li><i className="fal fa-check"></i> The service of more experienced professionals will be available at a lower cost.</li>
									<li><i className="fal fa-check"></i> Additional Staff benefit costs can be eliminated </li>
									<li><i className="fal fa-check"></i> The difficulty of training accountants and the transition process from the existing accountant to a new accountant during replacement can be eliminated. </li>
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