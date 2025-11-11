import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import ServiceDetailsImage from '../assets/images/resource/service-details.jpg';
import ServiceDetailsImage2 from '../assets/images/resource/dubai-mainland-company-formation.png';
import ServiceDetailsImage3 from '../assets/images/resource/business-setup-consultants.png';

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
		title: "Audit & Assurance",
		linkurl: "/audit-assuarance"
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
							<h6 className="sub-title wow fadeInUp bg-transparent ps-0" data-wow-delay="00ms" data-wow-duration="1500ms">BUSINESS SETUP SERVICES</h6>
							<h2 className="title mb-30 wow splt-txt" data-splitting>BUSINESS SETUP </h2>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="project-details__top mt-lg-5">
							<div className="text mb-40">We provide with business setup and company formation services in the UAE. </div>
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
							<p className="mb-30">Our experts in the company incorporation team deals with setting up business in the UAE Free Zones, UAE mainland and offshore. They guide and assist clients to set up their businesses making it a seamless process. </p>
							<div className="service-nr-list">
								<h3 className="mb-5">Service Includes</h3>
								<div className="row">
									<div className="col-lg-6">
									<div className="nr-list mb-5">
										<h4 className="title d-flex align-items-center mb-4"><span>01</span> Mainland Company Formation</h4>
										<p>Forming a mainland company in the UAE is a powerful step toward local market integration and business growth. By partnering with our expert tax consultants, you can navigate the process with confidence and focus on building your business.</p>
										<p>Among the various business jurisdictions available, business setup in Dubai mainland stands out for offering the most operational freedom—particularly for those looking to engage with the local market or explore wider opportunities through business setup in UAE mainland.</p>
									</div>
									</div>
									<div className="col-lg-6">
									<div className="nr-list mb-5">
										<h4 className="title d-flex align-items-center mb-4"><span>02</span> Free Zone Company Setup</h4>
										<p>Ready to take your business global? Setting up in a UAE free zone offers a simple, fast, and highly rewarding path. Enjoy complete ownership of your company, fantastic tax benefits, and a location with unparalleled access to international markets. The easy setup process and flexible business packages make it an ideal choice for entrepreneurs and businesses of all sizes looking to expand their horizons. Free zones provide various office solutions, from flexi-desks to full offices, and have their own independent authorities to regulate companies within their borders. </p>
									</div>
									</div>
									<div className="col-lg-6">
									<div className="nr-list mb-5">
										<h4 className="title d-flex align-items-center mb-4"><span>03</span> Offshore Company Formation</h4>
										<p>Establish your business with confidence. Our accounting consultancy provides end-to-end offshore company formation services, combining strategic advice with seamless execution to help you expand internationally, optimize your tax position, and secure your assets.
										Our team has a deep understanding of international business regulations and offshore jurisdictions. We have a proven track record of helping clients successfully establish and manage their international ventures.
									</p>
									</div>
									</div>
									<div className="col-lg-6">
									<div className="nr-list mb-5">
										<h4 className="title d-flex align-items-center mb-4"><span>04</span> Local Sponsor & PRO Services</h4>
										<p>Compliance and growth, simplified.
										Partner with us for expert local sponsorship and PRO services, seamlessly integrated with our core accounting solutions.
										 </p>
											<p>Your trusted partner for effortless compliance
										Expanding your business or operating in a new region often involves complex legal and administrative procedures. We provide comprehensive Local Sponsor & PRO Services to simplify this process, allowing you to focus on strategic growth.
										 </p>	
										 </div>
									</div>
									<div className="col-lg-6">
									<div className="nr-list mb-5">
										<h4 className="title d-flex align-items-center mb-4"><span>05</span> Company Liquidation Services</h4>
										<p>When the time comes to wind up your company, you need a clear, compliant, and professional process. Our team of experienced accountants and financial experts provides comprehensive liquidation services to guide you through every step. We manage all legal and financial formalities, from valuing assets to dealing with creditors, ensuring a transparent and orderly conclusion to your business affairs. Let us handle the complexities so you can focus on what comes next. </p>
										</div>
									</div>
								</div>
							</div>
							<div className="content mt-40">
								
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