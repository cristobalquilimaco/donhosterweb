import { Link } from "react-router-dom";
import "../Components/styles/Banner.css";
import images from "../Utils/images";
import { Helmet } from "react-helmet-async";

const Banner = () => {
  return (
    <>
      <Helmet>
        {/* Pre-cargar la imagen clave */}
        <link rel="preload" href={images.bannerdata} as="image" />
      </Helmet>

      <div className="container__banner1">
        {/* Pre-cargar la imagen principal, usando srcSet para la responsividad */}
        <img
          className="img__banner__data"
          alt="Banner with data"
          width="100%"
          height="400"
          loading="lazy"  // Prioriza la carga de esta imagen
          srcSet={`${images.bannerdataSmall} 480w, ${images.bannerdataMedium} 1024w, ${images.bannerdataLarge} 1920w`}
          sizes="(max-width: 480px) 480px, (max-width: 1024px) 1024px, 1920px"
          style={{ objectFit: 'cover' }}  // Asegura que la imagen no se distorsione
        />

        <div className="row align-items-center">
        <div
  className="col-xl-6 col-lg-6"
  style={{ animationName: "none" }}  // Desactiva la animación para la carga inicial
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
                height="500"
                loading="lazy"  // Lazy loading para la segunda imagen
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
