import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    message: "",
    service: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", date: "", message: "", service: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section-four">
      <div className="container">
        <div className="outer-box">
          <div className="sec-title center mb-50">
            <h6 className="sub-title wow fadeInUp">Get in touch</h6>
            <h2 className="title wow splt-txt" data-splitting>
              Book An Appointment
            </h2>
            <p className="text wow fadeInUp" data-wow-delay="200ms">
              By submitting this form you are agreeing to our Privacy Policy,
              <br /> We guarantee not to disclose your information.
            </p>
          </div>

          <div className="contact-block-four">
            <form onSubmit={handleSubmit}>
              <div className="row g-4">

                {/* Name */}
                <div className="col-lg-6">
                  <div className="input-field">
                    <div className="icon">
                      <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.554688 19.25C0.554688 15.384 4.00514 12.25 8.26148 12.25C12.5179 12.25 15.9683 15.384 15.9683 19.25H14.0416C14.0416 16.3505 11.4537 14 8.26148 14C5.06922 14 2.48139 16.3505 2.48139 19.25H0.554688ZM8.26148 11.375C5.06798 11.375 2.48139 9.02563 2.48139 6.125C2.48139 3.22438 5.06798 0.875 8.26148 0.875C11.455 0.875 14.0416 3.22438 14.0416 6.125C14.0416 9.02563 11.455 11.375 8.26148 11.375ZM8.26148 9.625C10.3905 9.625 12.1149 8.05875 12.1149 6.125C12.1149 4.19125 10.3905 2.625 8.26148 2.625C6.13248 2.625 4.40809 4.19125 4.40809 6.125C4.40809 8.05875 6.13248 9.625 8.26148 9.625ZM16.2416 12.865C18.9204 13.9616 20.785 16.408 20.785 19.25H18.8583C18.8583 17.1185 17.4598 15.2837 15.4508 14.4612L16.2416 12.865ZM15.5793 2.98656C17.5042 3.7074 18.8583 5.42816 18.8583 7.4375C18.8583 9.94893 16.743 12.0096 14.0416 12.2304V10.469C15.6761 10.2569 16.9316 8.981 16.9316 7.4375C16.9316 6.22943 16.1625 5.18528 15.0444 4.68681L15.5793 2.98656Z" fill="#092D3C" /></svg>
                      </div>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name" // valid autocomplete
                    />
                    <label htmlFor="name" className="sr-only">Your Name</label>
                  </div>
                </div>

                {/* Email */}
                <div className="col-lg-6">
                  <div className="input-field">
                    <div className="icon"> 
                      <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M22.4031 0.875C22.9859 0.875 23.4582 1.30406 23.4582 1.83333V17.173C23.4582 17.6987 22.9778 18.125 22.4118 18.125H3.40273C2.8248 18.125 2.35629 17.6986 2.35629 17.173V16.2083H21.348V4.99583L12.9073 11.8958L2.35629 3.27083V1.83333C2.35629 1.30406 2.82868 0.875 3.41139 0.875H22.4031ZM8.68687 12.375V14.2917H0.246094V12.375H8.68687ZM5.52158 7.58333V9.5H0.246094V7.58333H5.52158ZM20.89 2.79167H4.92454L12.9073 9.31725L20.89 2.79167Z" fill="#092D3C" /> </svg>
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email" // valid autocomplete
                    />
                    <label htmlFor="email" className="sr-only">Email Address</label>
                  </div>
                </div>

                {/* Date */}
                <div className="col-lg-6">
                  <div className="input-field date-wrapper">
                    <input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      autoComplete="off" // valid autocomplete for date/birthday
                    />
                    <label htmlFor="date" className="sr-only">Select a date</label>
                  </div>
                </div>

                {/* Service */}
                <div className="col-lg-6">
                  <div className="input-field two">
                    <label htmlFor="service" className="sr-only">Select Service</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      autoComplete="off" // valid for dropdowns
                    >
                      <option value="">Select Services</option>
                      <option value="uiux">UI/UX Design</option>
                      <option value="webdev">Web Developer</option>
                      <option value="marketing">Marketing Manager</option>
                      <option value="webdesign">Web Designer</option>
                      <option value="finance">Financial Advice</option>
                    </select>
                    <i className="fa fa-chevron-down" />
                  </div>
                </div>

                {/* Message */}
                <div className="col-lg-12">
                  <div className="input-field textarea-feild">
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Write Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                    <label htmlFor="message" className="sr-only">Message</label>
                    <div className="icon"> 
                      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4.20621 14.8885L15.3724 4.7464L13.8154 3.33218L2.64921 13.4743V14.8885H4.20621ZM5.11829 16.8885H0.447266V12.6458L13.0369 1.21086C13.4669 0.820339 14.1639 0.820339 14.5939 1.21086L17.708 4.03929C18.1379 4.42981 18.1379 5.06298 17.708 5.4535L5.11829 16.8885ZM0.447266 18.8885H20.2647V20.8885H0.447266V18.8885Z" fill="#092D3C" /> </svg>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn-one mt-4 mx-auto"
                      data-animation="fadeInUp"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Free Consultation"}
                      <i className="fa-solid fa-angle-right ms-2" />
                    </button>
                    {status && <p className="mt-3">{status}</p>}
                  </div>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="google-map">
        <iframe
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="Google Map"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;