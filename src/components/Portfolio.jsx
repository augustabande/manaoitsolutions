import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = () => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const htmlElement = document.getElementsByTagName("html")[0];
  const isRtl = htmlElement.getAttribute("dir") === "rtl";

  const filters = {
    FRONTEND: "FRONT-END",
    FULLSTACK: "FULL STACK",
    ITCONSULTANT: "CONSULTANCY"
  };

  const types = {
    WEBSITE: "website",
  };

  const projectsData = [
    {
      title: "ASAP - Anomaly Hotspots of Agricultural Production",
      type: types.WEBSITE,
      document: {
        projectInfo:
          "As a key Front-End Developer on ASAP - Anomaly Hotspots of Agricultural Production website, I was involved in the website's comprehensive restyling, implemented new user-centric features, and updated the site to meet European Commission's guidelines. Using advanced web technologies, I contributed to improve the user experience, and better accessibility compliance.",
        client: "European Commission",
        technologies: "HTML5, CSS3, Javascript, ECL",
        industry: "Science",
        date: "July 16, 2017",
        url: {
          name: "mars.jrc.ec.europa.eu/asap",
          link: "https://mars.jrc.ec.europa.eu/asap/",
        },

        sliderImages: [
          "images/projects/project-1.jpg",
        ],
      },
      thumbImage: "images/projects/thumb-1.png",
      categories: [filters.FRONTEND],
    },
    {
      title: "Enjoy Trulli",
      type: types.WEBSITE,
      document: {
        projectInfo:
          "For an Italian bed-and-breakfast, I single-handedly spearheaded a full-stack development project, creating a user-friendly website using WordPress and integrating it with a seamless booking system, thereby providing an efficient online solution tailored to the client's specific needs.",
        client: "Enjoy Trulli",
        technologies: "WordPress, HTML5, CSS3, Javascript, PHP",
        industry: "Tourism",
        date: "December 15, 2022",
        url: {
          name: "www.enjoytrulli.com",
          link: "https://www.enjoytrulli.com/",
        },

        sliderImages: [
          "images/projects/project-2.jpg",
        ],
      },
      thumbImage: "images/projects/thumb-2.png",
      categories: [filters.FULLSTACK],
    },{
      title: "Bright Journey",
      type: types.WEBSITE,
      document: {
        projectInfo:
          "In the 'Bright Journey' project, I provided my IT consultancy services, offering essential technical information to outline the project requirements. Furthermore, I was partially involved in the development process, leveraging WordPress to contribute to the creation of an engaging and user-centric website, thus showcasing my ability to offer impactful web solutions in line with specific project needs.",
        client: "VDA",
        technologies: "WordPress, HTML5, CSS3, Javascript, PHP",
        industry: "Tourism",
        date: "June, 2023",
        url: {
          name: "brightjourneyhotels.com",
          link: "https://brightjourneyhotels.com/",
        },

        sliderImages: [
          "images/projects/project-3.jpg",
        ],
      },
      thumbImage: "images/projects/thumb-3.png",
      categories: [filters.ITCONSULTANT], 
    },{
      title: "PUREJOY",
      type: types.WEBSITE,
      document: {
        projectInfo:
          "In 2013, driven by my passion for travel and cultural exploration, I embarked on a self-initiated project to create a personal travel blog. Utilizing WordPress, I designed an interactive platform to share in-depth travelogues, immersive photography, and insightful reviews, encapsulating my journey across various global destinations. This venture not only honed my skills in web design and audience engagement, but it also served as a testament to my enduring enthusiasm for travel and storytelling.",
        client: "Personal project",
        technologies: "WordPress, HTML5, CSS3, Javascript, PHP",
        industry: "Travel",
        date: "January, 2013",
        url: {
          name: "www.bychloe.it",
          link: "https://www.bychloe.it",
        },

        sliderImages: [
          "images/projects/project-5.jpg",
        ],
      },
      thumbImage: "images/projects/thumb-5.png",
      categories: [filters.FULLSTACK],
    },{
      title: "LPIS QA / DECOMMISSIONED",
      type: types.WEBSITE,
      document: {
        projectInfo:
          "In the LPIS project, I served as a front-end developer, applying my technical skills to design and implement user-friendly interfaces, while also ensuring optimal performance and responsiveness, thereby contributing to a high-quality web experience for users.",
        client: "European Commission",
        technologies: "HTML5, CSS3, Javascript, ECL",
        industry: "Science",
        date: "November, 2005",
        url: {
          name: "lpis.jrc.ec.europa.eu/lt",
          link: "https://lpis.jrc.ec.europa.eu/lt/index.html",
        },

        sliderImages: [
          "images/projects/project-4.png",
        ],
      },
      thumbImage: "images/projects/thumb-4.png",
      categories: [filters.FRONTEND],
    },
    {
      title: "QUAP - QUality Assessment Platform",
      type: types.WEBSITE,
      document: {
        projectInfo:
          "In the QUAP project, I focused on front-end development using Angular, integrating the European Commission's eUI framework to create a user-friendly interface for data exchange between EU member states and the Commission. My role involved crafting a responsive design, ensuring seamless data handling, and aligning the platform with EU accessibility and usability standards, significantly enhancing cross-border data interaction and compliance.",
        client: "European Commission",
        technologies: "Angular/eUI, JavaScript, TypeScript, Docker, OpenShift",
        industry: "Science",
        date: "November 1, 2023",
        url: {
          name: "lpis.jrc.ec.europa.eu",
          link: "https://lpis.jrc.ec.europa.eu/lt/index.html",
        },

        sliderImages: [
          "images/projects/project-11.png",
        ],
      },
      thumbImage: "images/projects/thumb-11.png",
      categories: [filters.FRONTEND],
    },
    /*{
      title: "YouTube Video",
      type: types.VIDEO,
      video: {
        vimeo: false,
        id: "PMNnEEEacCg",
      },
      thumbImage: "images/projects/project-3.jpg",

      categories: [filters.YOUTUBE],
    },
    {
      title: "Vimeo Video",
      type: types.VIDEO,
      video: {
        vimeo: true,
        id: "259411563",
      },

      thumbImage: "images/projects/project-4.jpg",
      categories: [filters.VIMEO],
    },
    {
      title: "Detailed Project 2",
      type: types.DOCUMENT,
      document: {
        projectInfo:
          "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
        client: "Ruby Clinton",
        technologies: "iOS, HTML5, CSS3, PHP, Java",
        industry: "Art & Design",
        date: "July 16, 2019",
        url: {
          name: "www.example.com",
          link: "https://www.example.com",
        },
        sliderImages: [
          "images/projects/project-1.jpg",
          "images/projects/project-2.jpg",
        ],
      },
      thumbImage: "images/projects/project-5.jpg",
      categories: [filters.DETAILED],
    },
    {
      title: "Mockups Design 2",
      type: types.IMAGE,

      thumbImage: "images/projects/project-6.jpg",

      categories: [filters.MOCKUPS],
    },*/
  ];

  // initialize an Isotope object with configs
  /*useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
      originLeft: !isRtl,
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);*/
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
      originLeft: !isRtl,
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, [isRtl]); // Include isRtl in the dependency array

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  const getKeyByValue = (value) => {
    return Object.keys(filters).find((key) => filters[key] === value);
  };

  const getFilterClasses = (categories) => {
    if (categories.length > 0) {
      let tempArray = [];
      categories.forEach((category, index) => {
        tempArray.push(getKeyByValue(category));
      });
      return tempArray.join(" ");
    }
  };

  return (
    <>
      <section id="portfolio" className={"section bg-light"}>
        <div className={"container"}>
          {/* Heading */}
          <p className="text-center mb-2 wow fadeInUp">
            <span className="bg-primary text-dark px-2">Portfolio</span>
          </p>
          <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
            Some of my most recent projects
          </h2>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs fw-600 justify-content-start justify-content-md-center border-bottom-0 mb-5 wow fadeInUp"
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " + (filterKey === oneKey ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(oneKey)}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio wow fadeInUp">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      getFilterClasses(project.categories)
                    }
                    key={index}
                  >
                    <div className="portfolio-box">
                      <div className="portfolio-img">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div
                          className="portfolio-overlay"
                          onClick={() => {
                            setSelectedProjectDetails(projectsData[index]);
                            setIsOpen(true);
                          }}
                        >
                          <button className="popup-ajax stretched-link border-0 p-0 ">
                            {" "}
                          </button>
                          <div className="portfolio-overlay-details">
                            <p className="text-primary text-8">
                              {project.type === types.DOCUMENT && (
                                <i className="fas fa-file-alt"></i>
                              )}
                              {project.type === types.IMAGE && (
                                <i className="fas fa-image"></i>
                              )}
                              {project.type === types.VIDEO && (
                                <i className="fas fa-video"></i>
                              )}
                              {project.type === types.WEBSITE && (
                                <i className="fas fa-info-circle"></i>
                              )}
                            </p>
                            <h5 className="text-white text-5">
                              {project?.categories}
                            </h5>
                            <span className="text-light">category</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      {/* Modal */}
      {isOpen && (
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          setIsOpen={setIsOpen}
        ></ProjectDetailsModal>
      )}
    </>
  );
};

export default Portfolio;
