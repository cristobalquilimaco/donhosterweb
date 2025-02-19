import { Helmet, HelmetProvider } from "react-helmet-async";
import "../Components/styles/Banner.css"
import "../Components/styles/Services.css"
import "../Components/styles/ChooseUs.css"
import SectionDescription from "../Components/SectionDescription";
import useScrollEffect from '../hooks/useScrollEffect';

import USAOutlineMap from "../Components/USAOutlineMap";
import WhyDonhoster from "../Components/WhyDonhoster";
import "../Shared/Styles/Navbar.css"
import "../App.css";
import images from "../Utils/images";
import { Link } from "react-router-dom";
import icons from "../Utils/icons";
import plans from "../Utils/plans";



const Home = () => {
  useScrollEffect(['.animate__1', '.img_host_big'], 0.60)
  return (
    <HelmetProvider>    
      <Helmet>
  <title>Premium Dedicated Server Miami | DonHoster</title>
  <meta
    name="description"
    content="DonHoster provides high-performance dedicated server hosting in Miami with reliable, scalable solutions tailored to your business."
  />
  <meta
    name="keywords"
    content="dedicated servers Miami, VPS hosting Miami, best dedicated servers, reliable VPS, DonHoster, high-performance hosting"
  />
  <meta name="robots" content="index, follow" />
  {/* Cambiar a la URL canónica de la página de inicio si estás en la home */}
  <link rel="canonical" href="https://www.donhoster.com/" />
  
  {/* Cambiar los meta tags para que coincidan con la URL correcta */}
  <meta property="og:title" content="Top Dedicated Servers and VPS Hosting in Miami | DonHoster" />
  <meta property="og:description" content="Discover the best dedicated servers and VPS hosting services in Miami with DonHoster. Enjoy superior performance, reliability, and 24/7 support tailored to your needs." />
  
  {/* Si estás en la página principal, cambia la URL a la principal, no a la dedicada */}
  <meta property="og:url" content="https://www.donhoster.com/" />

  <meta property="og:image:alt" content="Dedicated Servers in Miami" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="DonHoster" />
  <meta property="og:locale" content="en_US" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@your_twitter_account" />
  <meta name="twitter:title" content="Top Dedicated Servers and VPS Hosting in Miami | DonHoster" />
  <meta name="twitter:description" content="Discover the best dedicated servers and VPS hosting services in Miami with DonHoster. Enjoy superior performance, reliability, and 24/7 support tailored to your needs." />
  <meta name="twitter:image" content="https://donhoster.com/images/dedicated-servers-miami-thumbnail.jpg" />
  
  {/* Script de Google Analytics */}
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-E8HRCWRKGG"></script>
  <script defer>
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-E8HRCWRKGG');
    `}
  </script>

  {/* Preload image (solo si la imagen es crítica para la carga) */}
  <link 
    rel="preload" 
    href="/path/to/img/bannerdataSmall.webp" 
    as="image" 
    type="image/webp" 
    sizes="(max-width: 400px) 400px, (max-width: 1024px) 1024px, 1920px" 
  />
</Helmet>
<div className="container__home">
  {/* HERO */}
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
      />
      
      <div className="row align-items-center">
        <div className="col-xl-6 col-lg-6">
          <div className="banner-content">
            <h1 className="principal_title">Miami Dedicated Servers</h1>
            <p className="principal_description">
              Miami dedicated servers with 99% uptime reliability.
            </p>
            <Link to="/dedicated-servers">
              <button className="btn__to__server">Miami Dedicated Server Plans</button>
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
    {/* CHOSE US */}
    <section className="choose-section pt-0 pb-120">
      <div className="container">
        <div className="section-header section-center wow fadeInUp" data-wow-delay="0.2s">
          <h2 className="section-title">
          Why Choose Donhoster for Dedicated Server Hosting
          </h2>
          <p>
            Listed below our awesome hosting packages. You can select any web hosting services below!
          </p>
        </div>
        <div className="tweet-slider">
          <div className="choose-item">
            <div className="choose-inner">
              <div className="choose-thumb">
                <img className="i-img" src={icons.i1} alt="i-img" width="68" height="68"/>
              </div>
              <h3 className="title">
              Blazing-Fast Performance
              </h3>
              <p className='description_p'>
              Experience 10x faster speeds with our top-tier dedicated servers.
              </p>
            </div>
          </div>
          <div className="choose-item">
  <div className="choose-inner">
    <div className="choose-thumb">
      <img className="i-img" src={icons.i2} alt="i-img" width="68" height="68"/>
    </div>
    <h3 className="title">
    Unbeatable Security
    </h3>
    <p className='description_p'>
    Protect your data with our high-level security protocols, powered by the latest technology.
    </p>
  </div>
</div>
<div className="choose-item">
  <div className="choose-inner">
    <div className="choose-thumb">
      <img className="i-img" src={icons.i3} alt="i-img" width="68" height="68"/>
    </div>
    <h3 className="title">
    Global Connectivity
    </h3>
    <p className='description_p'>
    Enjoy seamless, high-speed connections anywhere in the world with our robust hosting infrastructure.
    </p>
  </div>
</div>
<div className="choose-item">
  <div className="choose-inner">
    <div className="choose-thumb">
      <img className="i-img" src={icons.i4} alt="i-img" width="68" height="68"/>
    </div>
    <h3 className="title">
      24/7 Daily Backup
    </h3>
    <p className='description_p'>
    Rest assured with daily backups to keep your data safe and secure, anytime.
    </p>
  </div>
</div>
        </div>
      </div>
    </section>
        {/* SERVICES */}
        <section className="pricing-section pt-120 pb-120">
      <div className="services-container">
      <div className="section-header section-center">
  <h2 className="section-title">Miami Dedicated Server Plans</h2>
    <p>
      Explore our high-performance dedicated server hosting plans Miami. Choose the perfect solution for your business needs.
    </p>
</div>
        <div className="animatin row g-4 justify-content-center">
          {plans.map(plan => (
            <div key={plan.id} className="col-xl-3">
              <div className="pricing-items">
                <div className="pricing-header">
                  <h3 className="title_plan">
                    {plan.name}
                  </h3>
                  <p className='plan_description'>
                    {plan.description}
                  </p>
                </div>
                <div className="price">
                  <h4 className='plan_price'>{plans.price}/mo</h4>
                </div>
                <ul className="pricing-list">
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <img className="iconcheck" src={icons.check} alt="pricing-img" width="20"
                        height="20"/> {feature}
                    </li>
                  ))}
                </ul>
                <a href={plan.url} className="cmn--btn">
                  <button className='btn__to__server'>Choice Plan</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

        <SectionDescription />
        <WhyDonhoster />
        <USAOutlineMap />
</div>

    </HelmetProvider>
  );
};

export default Home;
