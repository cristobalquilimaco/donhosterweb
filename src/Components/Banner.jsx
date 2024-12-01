import { Link } from "react-router-dom";
import "../Components/styles/Banner.css";
import images from "../Utils/images";

const Banner = () => {
  return (
    <div className="container container__banner1">
      {/* Pre-cargar la imagen clave */}
      <img
        className="img__banner__data"
        src={images.bannerdata}
        alt="Banner with data"
        width="100%"
        height="400"
        loading="lazy"
        style={{ objectFit: 'cover' }}  // Asegura que la imagen no se distorsione
      />
      <div className="row align-items-center">
        <div 
          className="col-xl-6 col-lg-6 wow fadeInDown" 
          data-wow-delay="0.1s" 
          style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInDown' }}
        >
          <div className="banner-content">
            <h1 className="principal_title">
            Miami dedicated servers
            </h1>
            <p className="principal_description">
            Miami dedicated servers with 99% uptime reliability.
            </p>
            <Link to="/dedicated-servers">
              <button className="btn__to__server">Dedicated servers plans</button>
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
              loading="lazy"  // Lazy loading para la segunda imagen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
