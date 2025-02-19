
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
            <div className="img-container-host-big">
  <img className="img_host_big" 
       src={images.hostbig} 
       alt="dedicated server in miami" 
       width="400"   
       height="300"  
       loading="lazy" 
  />
</div>
              <div className="small-host">
                <img className="img_host_small" src={images.hostsmall} alt="dedicated servers" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="animate__1">
              <div className="section-header">
                <h2 className="title-section-description">
                Miami Dedicated Server
                </h2>
                <p>
  With <a href="https://www.donhoster.com/">Dedicated Server Miami</a>, you get high-performance hosting with full control, security, and reliability. Our dedicated server ensure maximum uptime and flexibility, making them ideal for businesses that require stable and powerful infrastructure. Choose DonHoster for seamless hosting solutions tailored to your needs.
</p>

                <Link to="https://donhoster.com/dedicated-servers">
  <button className="btn__to__server">
    Miami Dedicated Server 
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
