import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Details1 from '../assets/images/resource/team-details.jpg';

function TeamDetails() {

		const [formData, setFormData] = useState({
			form_name: '',
			form_email: '',
			form_subject: '',
			form_phone: '',
			form_message: '',
			form_botcheck: '',
		});
	
		const [loading, setLoading] = useState(false);
		const [status, setStatus] = useState('');
	
		const handleChange = (e) => {
			const { name, value } = e.target;
			setFormData(prev => ({ ...prev, [name]: value }));
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
				setFormData({ name: '', email: '', subject: '', phone: '', message: '' });
				} else {
				setStatus('Failed to send message.');
				}
			} catch (error) {
				setStatus('Something went wrong.');
			} finally {
				setLoading(false);
			}
		};

		const handleReset = () => {
			setFormData({
			form_name: '',
			form_email: '',
			form_subject: '',
			form_phone: '',
			form_message: '',
			form_botcheck: '',
			});
		};


	return (
		<>
			<section className="team-details pt-120">
				<div className="container pb-100">
					<div className="team-details__top pb-70">
						<div className="row">
							<div className="col-xl-6 col-lg-6">
								<div className="team-details__top-left">
									<div className="team-details__top-img"><img src={Details1} alt="Image" />
										<div className="team-details__big-text" />
									</div>
								</div>
							</div>
							<div className="col-xl-6 col-lg-6">
								<div className="team-details__top-right">
									<div className="team-details__top-content">
										<h3 className="team-details__top-name">Alen Hispro</h3>
										<p className="team-details__top-title">Chief Attorney</p>
										<p className="team-details__top-text-1">I help my clients stand out and they help me grow.</p>
										<div className="team-details-contact mb-30">
											<h5 className="mb-0">Email Address</h5>
											<div ><span>needhelp@yourdomain.com</span></div>
										</div>
										<div className="team-details-contact mb-30">
											<h5 className="mb-0">Phone Number</h5>
											<div ><span>+012-3456-789</span></div>
										</div>
										<div className="team-details-contact">
											<h5 className="mb-0">Web Address</h5>
											<div ><span>www.yourdomain.com</span></div>
										</div>
										<div className="team-details__social"> 
											<Link to="/"><i className="fab fa-twitter" /></Link> 
											<Link to="/"><i className="fab fa-facebook" /></Link> 
											<Link to="/"><i className="fab fa-pinterest-p" /></Link> 
											<Link to="/"><i className="fab fa-instagram" /></Link> 
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="team-details__bottom pt-100">
						<div className="row">
							<div className="col-xl-6 col-lg-6">
								<div className="team-details__bottom-left">
									<h4 className="team-details__bottom-left-title">Personal Experience</h4>
									<p className="team-details__bottom-left-text">When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries architecto dolorem ipsum quia</p>
								</div>
							</div>
							<div className="col-xl-6 col-lg-6">
								<div className="team-details__bottom-right">
									<div className="team-details__progress">
										<div className="team-details__progress-single">
											<h4 className="team-details__progress-title">Latest Boat Experience</h4>
											<div className="bar">
												<div className="bar-inner count-bar"  data-width={90} style={{width: `90%`}}>
													<div className="count-text" data-speed={3000} data-stop={90}>90%</div>
												</div>
											</div>
										</div>
										<div className="team-details__progress-single">
											<h4 className="team-details__progress-title">Sailing Boat Experience</h4>
											<div className="bar">
												<div className="bar-inner count-bar" data-width={80} style={{width: `80%`}}>
													<div className="count-text" data-speed={3000} data-stop={80}>80%</div>
												</div>
											</div>
										</div>
										<div className="team-details__progress-single">
											<h4 className="team-details__progress-title">Power Boat Experience</h4>
											<div className="bar marb-0">
												<div className="bar-inner count-bar" data-width={75} style={{width: `75%`}}>
													<div className="count-text" data-speed={3000} data-stop={75}>75%</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="team-contact-form pt-120 pb-110">
				<div className="container">
					<div className="sec-title mb-5 text-center">
						<span className="sub-title">Contact With Us Now</span>
						<h2 className="section-title__title mt-10">Feel Free to Write Our <br /> Tecnology Experts</h2>
					</div>
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<form id="contact_form" name="contact_form" method="get" onSubmit={handleSubmit}>
								<div className="row">
									<div className="col-sm-6">
									<div className="mb-3">
										<input
										name="form_name"
										className="form-control"
										type="text"
										placeholder="Enter Name"
										value={formData.form_name}
										onChange={handleChange}
										required
										/>
									</div>
									</div>
									<div className="col-sm-6">
									<div className="mb-3">
										<input
										name="form_email"
										className="form-control"
										type="email"
										placeholder="Enter Email"
										value={formData.form_email}
										onChange={handleChange}
										required
										/>
									</div>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-6">
									<div className="mb-3">
										<input
										name="form_subject"
										className="form-control"
										type="text"
										placeholder="Enter Subject"
										value={formData.form_subject}
										onChange={handleChange}
										required
										/>
									</div>
									</div>
									<div className="col-sm-6">
									<div className="mb-3">
										<input
										name="form_phone"
										className="form-control"
										type="text"
										placeholder="Enter Phone"
										value={formData.form_phone}
										onChange={handleChange}
										/>
									</div>
									</div>
								</div>
								<div className="mb-3">
									<textarea
									name="form_message"
									className="form-control"
									rows="5"
									placeholder="Enter Message"
									value={formData.form_message}
									onChange={handleChange}
									required
									></textarea>
								</div>
								<input
									name="form_botcheck"
									type="hidden"
									value={formData.form_botcheck}
								/>
								<div className="mb-3 text-center">
									<button type="submit" className="btn-two wow fadeInUp me-2">
									<span className="btn-title">Send message</span>
									</button>
									<button type="button" onClick={handleReset} className="btn-one wow fadeInUp me-2">
									<span className="btn-title">Reset</span>
									</button>
									{status && <p className="mt-3">{status}</p>}
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>

		</>
	);
};

export default TeamDetails;