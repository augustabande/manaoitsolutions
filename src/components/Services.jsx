import React from "react";

const Services = () => {
  // services details
  const services = [
    {
      name: "Web Development",
      desc: "I can bring your next project to life by creating robust and dynamic websites that meet your specific requirements and goals. From front-end development to back-end programming, I ensure a seamless user experience and smooth functionality.",
      icon: "fas fa-palette",
    },
    {
      name: "Web Design",
      desc: "I can craft visually stunning and user-friendly interfaces that capture the essence of your brand. From choosing the right color schemes to creating intuitive layouts, I focus on delivering engaging designs that leave a lasting impression on your audience.",
      icon: "fas fa-desktop",
    },
    {
      name: "UI/UX Design",
      desc: "I can optimize the usability and accessibility of your website or application. By conducting user research, wireframing, and prototyping, I ensure a seamless and intuitive user journey that enhances customer satisfaction and achieves your business objectives.",
      icon: "fas fa-pencil-ruler",
    },
    {
      name: "Data Visualization",
      desc: "I can help you transform complex data sets into clear, interactive visual representations. By employing cutting-edge tools and techniques, I enable you to effectively communicate insights, trends, and patterns to your target audience.",
      icon: "fas fa-paint-brush",
    },
    {
      name: "Business Analysis",
      desc: "I collaborate closely with you to understand your project requirements and objectives. By conducting thorough analysis and gathering valuable insights, I ensure that your project aligns with your business goals and maximizes its potential for success.",
      icon: "fas fa-chart-area",
    },
    {
      name: "SEO Analysis",
      desc: "I can optimize your website for search engines (SEO) to enhance its visibility and drive organic traffic. I can help your website rank higher in search engine results, attract more qualified visitors, and increase your online presence. ",
      icon: "fas fa-bullhorn",
    },
  ];

  return (
    <section id="services" className="section bg-light">
      <div className="container">
        {/* Heading */}
        <p className=" text-center mb-2 wow fadeInUp">
          <span className="bg-primary text-light px-2">What I Do?</span>
        </p>
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
          How I can help your next project
        </h2>
        
        {/* Heading end*/}
        <div className="row gy-5 mt-5">
          {services.length > 0 &&
            services.map((service, index) => (
              <div className="col-sm-6 col-lg-4 wow fadeInUp" key={index}>
                <div className="featured-box text-center px-md-4">
                  <div className="featured-box-icon text-primary text-13">
                    {" "}
                    <i className={service.icon} />
                  </div>
                  <h3 className="text-6 fw-600 mb-3">{service.name}</h3>
                  <p className="text-muted mb-0">{service.desc} </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
