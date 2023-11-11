import React from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQs = () => {
  const faqsData = [
    {
      question: "What services do you offer as a web developer?",
      answer:
        "As a web developer with expertise in working for International Organizations and scientific portals, I offer a wide range of services. My areas of specialization include website design and development tailored to the unique needs of international organizations. I can create user-friendly and visually appealing websites for scientific portals, ensuring seamless navigation and accessibility. Additionally, I provide services such as front-end development, back-end development, website maintenance, e-commerce development, responsive design, and more. I am dedicated to delivering custom solutions that align with your organization's goals and requirements.",
    },
    {
      question: "What is the typical process for developing a website?",
      answer:
        "The website development process typically involves several key steps. It begins with gathering requirements and discussing your project goals. Then, I create a design concept and present it for your feedback. Once the design is approved, I proceed with front-end and back-end development, followed by rigorous testing and optimization. Finally, I launch the website and provide ongoing support and maintenance as needed.",
    },
    {
      question: "Can you work with existing websites or platforms?",
      answer:
        "Yes, I can work with existing websites or platforms. Whether you need updates and modifications to an existing website or integration of new features, I am proficient in various web technologies and can collaborate with your current setup to enhance its functionality and user experience.",
    },
    {
      question: "Do you provide website maintenance and support?",
      answer:
        "Absolutely! I offer website maintenance and support services to ensure your website runs smoothly and stays up to date. This includes regular backups, security updates, bug fixes, content updates, performance optimization, and general technical support. I can provide tailored maintenance packages based on your specific requirements.",
    },
  ];

  return (
    <section id="faq" className="section bg-light">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-6 order-1 order-lg-0 wow fadeInUp">
            {/* Heading */}
            <p className="text-center text-lg-start mb-2">
              <span className="bg-primary text-light px-2">FAQ</span>
            </p>
            <h2 className="text-10 fw-600 text-center text-lg-start mb-5">
              Have any questions?
            </h2>
            {/* Heading end*/}

            <Accordion flush defaultActiveKey="0">
              {faqsData.length > 0 &&
                faqsData.map((faq, index) => (
                  <Accordion.Item eventKey={index} key={index}>
                    <Accordion.Header>{faq.question}</Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    ></Accordion.Body>
                  </Accordion.Item>
                ))}
            </Accordion>
          </div>
          <div
            className="col-lg-6 d-flex align-items-center justify-content-center order-0 order-lg-1 wow fadeIn"
            data-wow-delay="1s"
          >
            {" "}
            <img
              className="img-fluid"
              src="images/faq.png"
              title="FAQ"
              alt="faq"
            />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
