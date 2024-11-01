import { Link } from "react-router-dom";
import "../Components/styles/Banner.css";
import images from "../Utils/images";

const Banner = () => {
  return (
    <div className="container container__banner1" style={{ width: '100%' }}>
<img 
  className="img__banner__data" 
  src={images.bannerdata} 
  alt="Banner with data" 
  width="100%" 
  height="400" 
  loading="lazy" 
/>
      <div className="row align-items-center">
        <div 
          className="col-xl-6 col-lg-6 wow fadeInDown" 
          data-wow-delay="0.1s" 
          style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInDown' }}
        >
          <div className="banner-content">
            <h1 className="principal_title">
              Dedicated <span className="text-base">Server </span> &amp; <span className="text-base-2">VPS Hosting </span>in Our Platform
            </h1>
            <p className="principal_description">
              Our network of data centers in Miami, USA. Connectivity at 99% uptime, Integrated DDoS protection.
            </p>
            <Link to="/dedicated-servers">
              <button className="btn__to__server">See Characteristics of Our Plans</button>
            </Link>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div 
            className="banner-thumb wow fadeInRight" 
            style={{ visibility: 'visible', animationName: 'fadeInRight' }}
          >
            <img 
              className="img_banner" 
              src={images.server1} 
              alt="Server in Miami" 
              width="100%" 
              height="400" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
