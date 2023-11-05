import "../Components/styles/Banner.css"
import images from "../Utils/images";

const Banner = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xl-6 col-lg-6 wow fadeInDown" data-wow-delay="0.1s" style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInDown' }}>
          <div className="banner-content">
            <h1 className="principal_title">
              Unlimited <span className="text-base">Domain</span> &amp; <span className="text-base-2">Hosting</span> in Our
              Platform
            </h1>
            <p className="principal_description">
              Listed below our awesome hosting packages. You can select any web hosting services below!
            </p>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="banner-thumb wow fadeInRight" style={{ visibility: 'visible', animationName: 'fadeInRight' }}>
            <img className="img_banner" src={images.he} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
