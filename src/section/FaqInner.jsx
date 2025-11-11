import React, { useState } from 'react';

const Faqs = () => {

     // Manage the state to track which accordion is open
     const [activeIndex, setActiveIndex] = useState(null);
     const [activeIndex2, setActiveIndex2] = useState(null);
 
     // Toggle function for accordion items
     const toggleAccordion = (index) => {
         setActiveIndex(activeIndex === index ? null : index);
     };
     // Toggle function for accordion items
     const toggleAccordion2 = (index2) => {
         setActiveIndex2(activeIndex2 === index2 ? null : index2);
     };

    // Accordion data
    const faqs = [
        {
            question: "What warranties do I have for installation?",
            answer: "There are many variations of passages of available, but the majority have suffered alteration in some form.Try to use reusable bags, containers, and water bottles, and recycle items that can't be reused."
        },
        {
            question: "What is included in your services?",
            answer: "There are many variations of passages of available, but the majority have suffered alteration in some form.Try to use reusable bags, containers, and water bottles, and recycle items that can't be reused."
        },
        {
            question: "What are the payment methods?",
            answer: "There are many variations of passages of available, but the majority have suffered alteration in some form.Try to use reusable bags, containers, and water bottles, and recycle items that can't be reused."
        },
        {
            question: "How fast I get my order?",
            answer: "There are many variations of passages of available, but the majority have suffered alteration in some form.Try to use reusable bags, containers, and water bottles, and recycle items that can't be reused."
        },
    ];

    const faqs2 = [
        {
            question: "Produce Your Own Clean Save The Environment",
            answer: "Reduce, reuse, and recycle: This is a classic but effective way to reduce waste and conserve resources. Try to use reusable bags, containers, and water bottles, and recycle items that can't be reused."
        },
        {
            question: "On-Site Service And Support For Certification",
            answer: "On-site service and support for refers to the assistance provided to companies or that are seeking for their products, services, or processes. This assistance can include everything from the to providing on-site training and support during the process."
        },
        {
            question: "Light Source For Stable Conversion Efficiency",
            answer: "In the context of solar energy, a light source for stable conversion efficiency refers to a source of light that provides a consistent and predictable output, which can be used to test and optimize the performance of solar cells and panels. This is important because the efficiency of solar cells and panels can vary depending on the intensity and wavelength of the light they receive, so it is crucial to use a stable light source to ensure accurate and reliable measurements"
        },
        {
            question: "Do You Give Guarantee And After Sales Service?",
            answer: "Guarantees are a form of assurance that a product or service will meet certain expectations or standards, and if they don't, the company will either repair or replace the product or provide a refund. Guarantees can vary depending on the product or service, and may be limited by certain terms and conditions."
        },
    ];


    return (
        <>
        <section className="faqs-section-home1 innerpage pt-120 pb-100">
            <div className="auto-container">
                <div className="row">
                <div className="faq-column col-lg-6">
                    <div className="sec-title mb-30">
                        <h3>Service Faq</h3>
                    </div>
                    <div className="inner-column">
                    <ul className="accordion-box style-two wow fadeInLeft">
                        {faqs.map((faq, index) => (
                        <li key={index} className={`accordion block ${activeIndex === index ? 'active-block' : ''}`}>
                            <div className={`acc-btn border-bottom-0 ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleAccordion(index)}>
                                {faq.question}
                                <div className="icon far fa-angle-down"></div>
                            </div>
                            <div className={`acc-content ${activeIndex === index ? 'current' : ''}`}>
                                <div className="content">
                                    <div className="text">{faq.answer}</div>
                                </div>
                            </div>
                        </li>
                        ))}
                    </ul>
                    </div>
                </div>
                <div className="faq-column col-lg-6">
                    <div className="sec-title mb-30">
                        <h3>Research Faq</h3>
                    </div>
                    <div className="inner-column">
                    <ul className="accordion-box style-two wow fadeInLeft">
                            {faqs2.map((faq, index2) => (
                            <li key={index2} className={`accordion block pl-30 pr-30 ${activeIndex2 === index2 ? 'active-block' : ''}`}>
                                <div className={`acc-btn border-bottom-0 ${activeIndex2 === index2 ? 'active' : ''}`} onClick={() => toggleAccordion2(index2)}>
                                    {faq.question}
                                    <div className="icon far fa-angle-down"></div>
                                </div>
                                <div className={`acc-content ${activeIndex2 === index2 ? 'current' : ''}`}>
                                    <div className="content">
                                        <div className="text">{faq.answer}</div>
                                    </div>
                                </div>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Faqs;