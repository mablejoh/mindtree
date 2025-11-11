import React from "react";
import { Link } from "react-router-dom";
import TeamShapeImage from '../../assets/images/shape/team-shape.png';
import TeamImage1 from '../../assets/images/team/team-image1.jpg';
import TeamImage2 from '../../assets/images/team/team-image2.jpg';
import TeamImage3 from '../../assets/images/team/team-image3.jpg';
import TeamImage4 from '../../assets/images/team/team-image4.jpg';

	const teamMembers = [
	{
		name: "Guy Hawkins",
		role: "Admin",
		image: TeamImage1,
		delay: "0ms",
	},
	{
		name: "Jacob Jones",
		role: "Manager",
		image: TeamImage2,
		delay: "200ms",
	},
	{
		name: "Kristin Watson",
		role: "Consultant",
		image: TeamImage3,
		delay: "400ms",
	},
	{
		name: "Bessie Cooper",
		role: "Founder",
		image: TeamImage4,
		delay: "600ms",
	},
];

function Team (){
	return (
		<section className="team-section pt-120 pb-120">
			<div className="team-shape wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms" >
				<img className="sway__animation" src={TeamShapeImage} alt="Team Shape" />
			</div>
			<div className="container">
				<div className="sec-title center mb-50">
					<h6 className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Top Consultant</h6>
					<h2 className="title wow splt-txt" data-wow-delay="200ms" data-wow-duration="1500ms" data-splitting >Enhance Your Experience with <br /> Expert Consulting</h2>
				</div>
				<div className="row g-4">
					{teamMembers.map((member, index) => (
					<div className="col-md-6 col-xl-3 wow fadeInUp" key={index} data-wow-delay={member.delay} data-wow-duration="1500ms" >
						<div className="team-block">
							<div className="inner-box">
								<figure className="image">
									<img src={member.image} alt={member.name} />
								</figure>
								<div className="socials">
									<i className="fa-solid fa-plus" />
									<ul>
										<li><Link to="/"><i className="fa-brands fa-facebook-f" /></Link></li>
										<li><Link to="/"><i className="fa-brands fa-instagram" /></Link></li>
										<li><Link to="/"><i className="fa-brands fa-linkedin-in" /></Link></li>
										<li><Link to="/"><i className="fa-brands fa-behance" /></Link></li>
									</ul>
								</div>
								<div className="content-box">
									<h4 className="title"><Link to="/page-team-details">{member.name}</Link></h4>
									<p className="sub-title">{member.role}</p>
								</div>
							</div>
						</div>
					</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Team;
