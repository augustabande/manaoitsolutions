import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = () => {
  const educationDetails = [
    {
      yearRange: "2006 - 2009",
      title: "Master’s degree in Modern Languages and Comparative Literatures",
      place: "Turin University",
      desc: "I have a Master's degree in Modern Languages and Comparative Literatures, where I developed expertise in linguistic studies, literary analysis, and cross-cultural communication.",
    },
    {
      yearRange: "2001 - 2005",
      title: "Bachelor degree in DAMS, Television and New Medias",
      place: "Turin University",
      desc: "I hold a Bachelor's degree in Television and New Media from DAMS (Drama, Art, and Music Studies) at Turin University, where I gained in-depth knowledge of broadcasting, digital media production, and multimedia communication.",
    },
    {
      yearRange: "2019",
      title: "React",
      place: "Online certification",
      desc: "I've completed an in-depth online training course on React, mastering core principles like JSX syntax, components, state and props management, lifecycle methods, and hooks, enabling me to build and optimize dynamic, interactive web applications.",
    },
    {
      yearRange: "2022",
      title: "Angular",
      place: "Online certification",
      desc: "I've completed a comprehensive online training course on Angular, mastering key concepts such as TypeScript, modules, components, services, and directives. This hands-on course equipped me with the skills to build robust single-page applications, adhering to best coding practices and performance optimization techniques in Angular.",
    }
  ];

  const experienceDetails = [
    {
      yearRange: "2022 - current",
      title: "Web developer",
      place: "Freelance",
      desc: "External consultant at the Joint Research Centre - European Commission. Directorate for Sustainable Resources, Food Security Unit – D5. Development and ongoing support for a new platform, following the guidelines and requirements set forth by Directorate-General for Agriculture and Rural Development.",
    },
    {
      yearRange: "2013 - 2021",
      title: "Front-end developer",
      place: "Fincons Group",
      desc: "External consultant at the Joint Research Centre - European Commission. Directorate for Sustainable Resources, Food Security Unit – D5. Contributed significantly to the development of dynamic interfaces for a diverse portfolio of web applications, including the FAS Database, LPIS Web Portal, GAEC Database, GEOGLAM Crop Monitor Partner Survey, and the ASAP Web Portal.",
    },
    /*{
      yearRange: "2013 - 2015",
      title: "Front-end developer",
      place: "Engineering Ingegneria Informatica Spa",
      desc: "External consultant at the JRC - European Commission, Directorate for Sustainable Resources Food Security Unit – D5. Participated in the creation and enhancement of dynamic interfaces for different web applications, such as the FAS Database, LPIS Web Portal, GAEC Database, GEOGLAM Crop Monitor Partner Survey, ASAP Web Portal, CWRS Portal, OTSC Web Database, and WikiCAP, employing a range of technologies including HTML5, ECL, JavaScript, CSS, and jQuery.",
    },*/
    {
      yearRange: "2012 - 2013",
      title: "Web designer",
      place: "European Commission",
      desc: "During my traineeship, I took on the responsibility of developing design specifications for the GAEC web application, leveraging HTML, CSS, JavaScript, and jQuery. This encompassed an array of tasks: search engine optimization, maintenance of style sheets, development and implementation of an intuitive graphical user interface, and rigorous usability testing. My role was integral in creating an optimized, user-friendly interface and conducting comprehensive evaluations to ensure the highest level of usability.",
    },
  ];

  const skills = [
    {
      name: "Web Design",
      percent: 95,
    },
    {
      name: "HTML/CSS",
      percent: 95,
    },
    {
      name: "JavaScript/JQuery",
      percent: 90,
    },
    {
      name: "React JS",
      percent: 70,
    },
    {
      name: "Angular Js",
      percent: 90,
    },
    {
      name: "Bootstrap",
      percent: 95,
    },
    {
      name: "Docker",
      percent: 70,
    },
    {
      name: "PHP",
      percent: 70,
    },
  ];

  return (
    <section id="resume" className="section">
      <div className="container">
        {/* Heading */}
        <p className=" text-center mb-2 wow fadeInUp">
          <span className="bg-primary text-dark px-2">Resume</span>
        </p>
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
          A summary of My Resume
        </h2>
        {/* Heading end*/}
        <div className="row g-5 mt-5">
          {/* My Education */}
          <div className="col-lg-6 wow fadeInUp">
            <h2 className="text-7 fw-600 mb-4 pb-2">My Education</h2>
            <div className="border-start border-2 border-primary ps-3">
              {educationDetails.length > 0 &&
                educationDetails.map((value, index) => (
                  <div key={index}>
                    <h3 className="text-5">{value.title}</h3>
                    <p className="mb-2">
                      {value.place} / {value.yearRange}
                    </p>
                    <p className="text-muted">{value.desc}</p>
                    <hr className="my-4" />
                  </div>
                ))}
            </div>
          </div>
          {/* My Experience */}
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
            <h2 className="text-7 fw-600 mb-4 pb-2">My Experience</h2>
            <div className="border-start border-2 border-primary ps-3">
              {experienceDetails.length > 0 &&
                experienceDetails.map((value, index) => (
                  <div key={index}>
                    <h3 className="text-5">{value.title}</h3>
                    <p className="mb-2">
                      {value.place} / {value.yearRange}
                    </p>
                    <p className="text-muted">{value.desc}</p>
                    <hr className="my-4" />
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* My Skills */}
        <h2 className="text-7 fw-600 mb-4 pb-2 mt-5 wow fadeInUp">My Skills</h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div className="col-md-6 wow fadeInUp" key={index}>
                <p className="fw-500 text-start mb-2">
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div className="progress progress-sm mb-4">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <p className="text-center mt-5 wow fadeInUp">
          <a
            className="btn btn-outline-dark shadow-none rounded-0"
            href={resumeFile}
            download
          >
            Download CV
          </a>
        </p>
      </div>
    </section>
  );
};

export default Resume;
