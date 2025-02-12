
import { Link } from "react-router-dom";
import "../Components/styles/SectionDescription.css" 
import images from "../Utils/images";

import "../Components/styles/Services.css";
import useScrollEffect from "../hooks/useScrollEffect";

const SectionDescription = () => {

  useScrollEffect(['.animate__1', '.img_host_big'], 0.60)

  return (
    <section className="hosting-section pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hosting-thumb">
              <img className="img_host_big" src={images.hostbig} alt="dedicated server in miami" />
              <div className="small-host">
                <img className="img_host_small" src={images.hostsmall} alt="dedicated servers" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="animate__1 hosting-content">
              <div className="section-header">
                <h2 className="section-title">
                Reliable Dedicated Servers for Business
                </h2>
                <p>
                Whether you need a dedicated server for personal projects or a reliable solution for your business, we’ve got you covered.  
  Our high-performance servers are designed to maximize efficiency, security, and scalability, ensuring seamless operation for your web applications.  
  With exclusive resources, full control, and unmatched reliability, you can focus on growing your business without limitations.
                </p>
                <Link to="https://donhoster.com/dedicated-servers" className="cmn--btn" aria-label="Learn More about Dedicated Servers in Miami">
  <button className="btn_learn_more">
    Dedicated Server 
  </button>
</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionDescription;
