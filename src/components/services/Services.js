import React from "react";
import "./Services.scss";

const Services = () => {
  return (
    <div id="services" className="section">
      <h1 className="title-1">Our Services</h1>
      <div className="container-flex">
        <div className="container-1">
          <div className="container-top">
            <div className="services-icon">
              <img className="services-img" src="web.png" alt="" />
            </div>
            <div className="title-2">Web Development</div>
          </div>

          <div className="text-1">
            <p>
              We engineer tailored digital platforms aligned with your
              operations and long-term strategy. From concept to deployment, we
              build scalable solutions that move your business forward.
            </p>
          </div>
        </div>
        <div className="container-1">
          <div className="container-top">
            <div className="services-icon">
              <img className="services-img" src="data.png" alt="" />
            </div>
            <div className="title-2">Data Management</div>
          </div>

          <div className="text-1">
            <p>
              We accelerate your digital transformation with resilient and
              scalable cloud architectures. Our team helps your business evolve
              through future-ready infrastructure, intelligent automation, and
              continuous innovation.
            </p>
          </div>
        </div>
        <div className="container-1">
          <div className="container-top">
            <div className="services-icon">
              <img className="services-img" src="cloud.png" alt="" />
            </div>
            <div className="title-2">Cloud Solutions</div>
          </div>

          <div className="text-1">
            <p>
              Accelerate your digital transformation with resilient and scalable
              cloud architectures. We help businesses evolve with future-ready
              infrastructure and smarter automation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
