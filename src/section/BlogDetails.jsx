import { useState } from 'react';
import { Link } from 'react-router-dom';
import NewsDetailsImage from '../assets/images/resource/news-details.jpg';
import Thumb1 from '../assets/images/resource/testi-1.jpg';
import Thumb2 from '../assets/images/resource/testi-2.jpg';
import News1 from '../assets/images/resource/blog1-1.jpg';
import News2 from '../assets/images/resource/blog1-2.jpg';
import News3 from '../assets/images/resource/blog1-3.jpg';

function BlogOne() {

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
		<section className="blog-details pt-120 pb-120">
			<div className="container">
				<div className="row">
					<div className="col-xl-8 col-lg-7">
						<div className="blog-details__left">
							<div className="blog-details__img">
								<img src={NewsDetailsImage} alt="Image"/>
								<div className="blog-details__date">
									<span className="day">28</span>
									<span className="month">Aug</span>
								</div>
							</div>
							<div className="blog-details__content">
								<ul className="list-unstyled blog-details__meta">
									<li><Link to="/news-details"><i className="fas fa-user-circle"/> Admin</Link> </li>
									<li><Link to="/news-details"><i className="fas fa-comments"/> 02
											Comments</Link>
									</li>
								</ul>
								<h3 className="blog-details__title">Delivering the best web design agency</h3>
								<p className="blog-details__text-2">Mauris non dignissim purus, ac commodo diam. Donec sit
									amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus
									nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus
									interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet
									pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.
								</p>
								<p className="blog-details__text-2">Mauris non dignissim purus, ac commodo diam. Donec sit
									amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus
									nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus
									interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet
									pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.
								</p>
								<p className="blog-details__text-2">Mauris non dignissim purus, ac commodo diam. Donec sit
									amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus
									nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus
									interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet
									pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.
								</p>
							</div>
							<div className="blog-details__bottom">
								<p className="blog-details__tags"> <span>Tags</span> <Link to="/news-details">Business</Link> <Link to="/news-details">Agency</Link> </p>
								<div className="blog-details__social-list"> <Link to="/news-details"><i className="fa fa-x"/></Link> <Link to="/news-details"><i className="fab fa-facebook"/></Link> <Link to="/news-details"><i className="fab fa-pinterest-p"/></Link> <Link to="/news-details"><i className="fab fa-instagram"/></Link> </div>
							</div>
							<div className="nav-links">
								<div className="prev">
									<Link to="/news-details" rel="prev">Bring to the table win-win survival strategies</Link>
								</div>
								<div className="next">
									<Link to="/news-details" rel="next">How to lead a healthy &amp; well-balanced life</Link>
								</div>
							</div>
							<div className="comment-one">
								<h3 className="comment-one__title">2 Comments</h3>
								<div className="comment-one__single">
									<div className="comment-one__image"> <img src={Thumb2} alt="Image"/> </div>
									<div className="comment-one__content">
										<h3>Kevin Martin</h3>
										<p>Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla.
											Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla,
											sollicitudin at euismod.
										</p>
										<Link to="/news-details" className="theme-btn btn-style-two comment-one__btn"><span className="btn-title">Reply</span></Link>
									</div>
								</div>
								<div className="comment-one__single">
									<div className="comment-one__image"> <img src={Thumb1} alt="Image"/> </div>
									<div className="comment-one__content">
										<h3>Sarah Albert</h3>
										<p>Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla.
											Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla,
											sollicitudin at euismod.
										</p>
										<Link to="/news-details" className="theme-btn btn-style-two comment-one__btn"><span className="btn-title">Reply</span></Link>
									</div>
								</div>
								<div className="comment-form">
									<h3 className="comment-form__title mb-30">Leave a Comment</h3>
									<form id="contact_form" name="contact_form" onSubmit={handleSubmit}>
										<div className="row">
											{/* Name Field */}
											<div className="col-sm-6">
											<div className="mb-3">
												<label htmlFor="name" className="form-label">Name</label>
												<input
												id="name"
												name="name"
												value={formData.name}
												onChange={handleChange}
												type="text"
												className="form-control"
												placeholder="Enter Name"
												required
												autoComplete="name"
												/>
											</div>
											</div>
											{/* Email Field */}
											<div className="col-sm-6">
											<div className="mb-3">
												<label htmlFor="email" className="form-label">Email</label>
												<input
												id="email"
												name="email"
												value={formData.email}
												onChange={handleChange}
												type="email"
												className="form-control"
												placeholder="Enter Email"
												required
												autoComplete="email"
												/>
											</div>
											</div>
										</div>
										{/* Message Field */}
										<div className="mb-3">
											<label htmlFor="message" className="form-label">Message</label>
											<textarea
											id="message"
											name="message"
											value={formData.message}
											onChange={handleChange}
											className="form-control"
											rows="5"
											placeholder="Enter Message"
											required
											autoComplete="off"
											></textarea>
										</div>
										{/* Submit */}
										<div className="mb-3">
											<input name="form_botcheck" type="hidden" value="" />
											<button type="submit" className="btn-one" disabled={loading}>
											{loading ? "Please wait..." : "Submit Comment"}
											</button>
											{status && <p className="mt-3">{status}</p>}
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-lg-5">
						<div className="sidebar">
							<div className="sidebar__single sidebar__search">
								<form action="#" className="sidebar__search-form" role="search">
									<label htmlFor="sidebarSearch" className="sr-only">
										Search
									</label>
									<input
										id="sidebarSearch"
										name="q"
										type="search"
										placeholder="Search here"
										autoComplete="on"
										required
									/>
									<button type="submit" aria-label="Submit search">
										<i className="far fa-search" />
									</button>
								</form>
							</div>
							<div className="sidebar__single sidebar__post">
								<h3 className="sidebar__title">Latest Posts</h3>
								<ul className="sidebar__post-list list-unstyled">
									<li>
										<div className="sidebar__post-image"> <img src={News1} alt="Image"/> </div>
										<div className="sidebar__post-content">
											<h3> <span className="sidebar__post-content-meta"><i className="fas fa-user-circle"/>Admin</span> <Link to="/news-details">How Scale Your Business Without Losing Quality</Link>
											</h3>
										</div>
									</li>
									<li>
										<div className="sidebar__post-image"> <img src={News2} alt="Image"/> </div>
										<div className="sidebar__post-content">
											<h3> <span className="sidebar__post-content-meta"><i className="fas fa-user-circle"/>Admin</span> <Link to="/news-details">Why Networking is Crucial for Business Growth</Link> </h3>
										</div>
									</li>
									<li>
										<div className="sidebar__post-image"> <img src={News3} alt="Image"/> </div>
										<div className="sidebar__post-content">
											<h3> <span className="sidebar__post-content-meta"><i className="fas fa-user-circle"/>Admin</span> <Link to="/news-details">10 Proven Strategies to Scale</Link> </h3>
										</div>
									</li>
								</ul>
							</div>
							<div className="sidebar__single sidebar__category">
								<h3 className="sidebar__title">Categories</h3>
								<ul className="sidebar__category-list list-unstyled">
									<li><Link to="/news-details">Customer Engagement<span className="icon-right-arrow"></span></Link> </li>
									<li className="active"><Link to="/news-details">Entrepreneurship<span className="icon-right-arrow"></span></Link></li>
									<li><Link to="/news-details">Finance<span className="icon-right-arrow"></span></Link> </li>
									<li><Link to="/news-details">Investment<span className="icon-right-arrow"></span></Link> </li>
									<li><Link to="/news-details">Management<span className="icon-right-arrow"></span></Link> </li>
								</ul>
							</div>
							<div className="sidebar__single sidebar__tags">
								<h3 className="sidebar__title">Tags</h3>
								<div className="sidebar__tags-list"><Link to="#">Advisor</Link><Link to="#">Branding</Link><Link to="#">Economy</Link><Link to="#">Experience</Link><Link to="#">Freelancing</Link></div>
							</div>
							<div className="sidebar__single sidebar__comments">
								<h3 className="sidebar__title">Recent Comments</h3>
								<ul className="sidebar__comments-list list-unstyled">
									<li>
										<div className="sidebar__comments-icon"> <i className="fas fa-comments"/> </div>
										<div className="sidebar__comments-text-box">
											<p>A wordpress commenter on <br/> launch new mobile app</p>
										</div>
									</li>
									<li>
										<div className="sidebar__comments-icon"> <i className="fas fa-comments"/> </div>
										<div className="sidebar__comments-text-box">
											<p> <span>John Doe</span> on template:</p>
											<h5>comments</h5>
										</div>
									</li>
									<li>
										<div className="sidebar__comments-icon"> <i className="fas fa-comments"/> </div>
										<div className="sidebar__comments-text-box">
											<p>A wordpress commenter on <br/> launch new mobile app</p>
										</div>
									</li>
									<li>
										<div className="sidebar__comments-icon"> <i className="fas fa-comments"/> </div>
										<div className="sidebar__comments-text-box">
											<p> <span>John Doe</span> on template:</p>
											<h5>comments</h5>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		</>
	);
};

export default BlogOne;