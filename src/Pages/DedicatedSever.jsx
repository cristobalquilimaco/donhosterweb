import dedicatedServer from "../Utils/dedicatedServer";
import icons from "../Utils/icons";
import images from "../Utils/images";
import "../Pages/styles/about.css";
import useScrollEffect from "../hooks/useScrollEffect";
import { Helmet, HelmetProvider } from "react-helmet-async";

const DedicatedSever = () => {
  useScrollEffect(['.animatin'], 0.95);

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Hosted Dedicated Servers - Bare Metal Servers | DonHoster</title>
          <meta 
            name="description" 
            content="Discover high-performance hosted dedicated servers and bare metal servers in Miami with DonHoster. Enjoy the benefits of exclusive physical servers, enhanced security, and reliable connectivity tailored for your business needs." 
          />
          <meta name="keywords" content="dedicated servers, bare metal servers, hosted dedicated servers, Miami data center, high-performance servers, secure servers, business hosting solutions" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://www.donhoster.com/dedicated-servers" />
          <meta property="og:title" content="Hosted Dedicated Servers - Bare Metal Servers | DonHoster" />
          <meta property="og:description" content="Discover high-performance hosted dedicated servers and bare metal servers in Miami with DonHoster. Enjoy the benefits of exclusive physical servers, enhanced security, and reliable connectivity tailored for your business needs." />
          <meta property="og:url" content="https://donhoster.com/dedicated-servers" />
          <meta property="og:image" content="https://donhoster.com/images/dedicated-servers-thumbnail.jpg" />
          <meta property="og:image:alt" content="Hosted Dedicated Servers" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          {/* Verificación de Google y Ahrefs */}
          <meta name="google-site-verification" content="google94b194ab78fb2b51.html" />
          <meta name="ahrefs-site-verification" content="b1b407b17742f4b1f2511abaa6ef60a204af93779773732963c4500166c3efaa" />

          {/* Scripts de Google Tag Manager */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-E8HRCWRKGG"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-E8HRCWRKGG');
            `}
          </script>

          {/* JSON-LD para datos estructurados */}
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "DonHoster",
                "url": "https://donhoster.com",
                "sameAs": [
                  "https://www.facebook.com/DonHoster",
                  "https://twitter.com/DonHoster"
                ]
              }
            `}
          </script>
        </Helmet>

        <div className="about__box">
          <h1 className="about__title">Dedicated servers</h1>
          <h3 className="about__subtitle">
            Listed below our awesome hosting packages. You can select any dedicated server services below!
          </h3>
          <div className="about__p">
            <i className="bx bx-check" /> Total Control &nbsp;
            <i className="bx bx-check" /> 99.9% Availability Guarantee &nbsp;
            <i className="bx bx-check" /> S.O Windows & Linux
          </div>

          <div className="about__banner">
            <img src={images.bannerabout} alt="Dedicated Server Banner" />
          </div>
        </div>

        <section className="pricing-section pt-120 pb-120">
          <div className="container">
            <h2 className="section-title">Our Dedicated Server Plans</h2>
            <div className="row g-4 justify-content-center">
              {dedicatedServer.map(server => (
                <div key={server.id} className="col-xl-3">
                  <div className="pricing-items">
                    <div className="pricing-header">
                      <h5 className="title_plan">{server.name}</h5>
                    </div>
                    <div className="price">
                      <h3 className="plan_price">{server.price} <span>/mo</span></h3>
                    </div>
                    <ul className="pricing-list">
                      {server.features.map((feature, index) => (
                        <li key={index}>
                          <img className="iconcheck" src={icons.check} alt="Check icon" /> {feature}
                        </li>
                      ))}
                    </ul>
                    <a href={server.url}>
                      <button className="choice_plan-btn" aria-label={`Choose ${server.name} Plan`}>Choice Plan</button>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <section className="section__skill">
              <h2 className="features">The Best Features At The Best Price!</h2>
              <div className="description_feat">
                <p className="title_feat">Start Quickly and Easily</p>
                <p>Security and Stability We guarantee stability and security in our servers with 99.9% uptime.</p>
                <p>
                  Dedicated server hosting provides unparalleled control and resources for your online ventures. Unlike shared hosting or VPS services, a dedicated server offers you exclusive access to an entire server, providing optimal performance and security. With a dedicated server, you have complete autonomy to customize hardware specifications, install software, and configure applications according to your precise needs. Choose DonHoster for optimal performance and reliability.
                </p>
              </div>

              <div className="animatin features__skill">
                <ul className="list__skill">
                  <li><i className="skill__icon bx bxs-rocket"></i></li>
                  <li>Powerful and Reliable</li>
                  <li>Our VPS are equipped with enterprise-grade hardware.</li>
                </ul>
                <ul className="list__skill">
                  <li><i className="skill__icon bx bx-shuffle"></i></li>
                  <li>Flexibility</li>
                  <li>Ability to adapt easily to various circumstances.</li>
                </ul>
                <ul className="list__skill">
                  <li><i className="skill__icon bx bxs-server"></i></li>
                  <li>Fast Service</li>
                  <li>High speed local bandwidth flat rate.</li>
                </ul>
              </div>
            </section>
          </div>
        </section>
      </div>
    </HelmetProvider>
  );
};

export default DedicatedSever;
