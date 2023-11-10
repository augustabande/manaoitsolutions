import React from "react";
const Concept = () => {
  return (
    <section id="concept" className="section bg-light">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-6 d-flex align-items-center justify-content-center order-1 order-lg-0 wow fadeIn">
             {" "}
            <img
              className="img-fluid"
              src="images/faq.png"
              title="FAQ"
              alt="faq"
            />{" "}

            
          </div>
          <div className="col-lg-6 order-0 order-lg-1 wow fadeInUp "
            data-wow-delay="1s"
          >
            {/* Heading */}
            <p className="text-center text-lg-start mb-2">
              <span className="bg-primary text-dark px-2">FAQ</span>
            </p>
            <h2 className="text-10 fw-600 text-center text-lg-start mb-5">
              Have any questions?
            </h2>
            {/* Heading end*/}

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Concept;
