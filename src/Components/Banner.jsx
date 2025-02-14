import { Link } from "react-router-dom";
import "../Components/styles/Banner.css";
import images from "../Utils/images";

const Banner = () => {
  return (
    <div className="container__banner1">
      <img
        className="img__banner__data"
        alt="Banner with data"
        width="100%"
        height="auto"
        srcSet={`
          ${images.bannerdataSmall} 400w,  
          ${images.bannerdata} 1024w
        `}
        sizes="(max-width: 400px) 400px, (max-width: 1024px) 100vw, 1920px"
        style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
        fetchpriority="high"
      />
      
      <div className="row align-items-center">
        <div className="col-xl-6 col-lg-6">
          <div className="banner-content">
            <h1 className="principal_title">Miami Dedicated Servers</h1>
            <p className="principal_description">
              Miami dedicated servers with 99% uptime reliability.
            </p>
            <Link to="/dedicated-servers">
              <button className="btn__to__server">Dedicated servers plans</button>
            </Link>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="banner-thumb wow fadeInRight" style={{ visibility: 'visible', animationName: 'fadeInRight' }}>
            <img
              className="img_banner"
              src={images.server1}
              alt="Server in Miami"
              width="400"
              height="300"
              loading="lazy"  // Lazy loading para la segunda imagen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
