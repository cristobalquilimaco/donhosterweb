import dedicatedServer from "../Utils/dedicatedServer";
import icons from "../Utils/icons";
import images from "../Utils/images";
import "../Pages/styles/about.css";
import useScrollEffect from "../hooks/useScrollEffect";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "../Pages/styles/vpsKvm.css";
import FAQSection from "./components/dedicatedservers/FAQSection";
import { dedicatedServerFaqs} from '../Utils/faqs/dedicatedServersFaq';

const DedicatedServer = () => {
  useScrollEffect(['.animatin'], 0.95);

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Dedicated Server Hosting | DonHoster</title>
          <meta
  name="description"
  content="Get high-performance dedicated server hosting in Miami with DonHoster. Secure, scalable, and ultra-reliable connectivity."
/>
          <meta name="keywords" content="dedicated servers, bare metal servers, dedicated hosting, Miami data center, high-performance servers, secure servers, business hosting solutions" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://www.donhoster.com/dedicated-servers" />
          <meta property="og:title" content="Dedicated Server Hosting | DonHoster" />
          <meta property="og:description" content="Get high-performance dedicated server hosting in Miami with DonHoster. Secure, scalable, and ultra-reliable connectivity." />
          <meta property="og:url" content="https://www.donhoster.com/dedicated-servers"/>
          <meta property="og:image" content="https://donhoster.com/images/dedicated-servers-thumbnail.jpg" />
          <meta property="og:image:alt" content="High-Performance Dedicated Servers in Miami" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta name="google-site-verification" content="google94b194ab78fb2b51.html" />
          <meta name="ahrefs-site-verification" content="b1b407b17742f4b1f2511abaa6ef60a204af93779773732963c4500166c3efaa" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-E8HRCWRKGG"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-E8HRCWRKGG');
            `}
          </script>
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "DonHoster",
                "url": "https://www.donhoster.com/dedicated-servers",
                "sameAs": [
                  "https://www.facebook.com/DonHoster",
                  "https://twitter.com/DonHoster"
                ]
              }
            `}
          </script>
          <link
    rel="preload"
    href={images.bannerabout}
    as="image"
    fetchpriority="high"
  />
        </Helmet>
        <main className="about__box">
          <h1 className="about__title">Dedicated Server Hosting</h1>
          <p className="about__subtitle">
            Explore our exceptional hosting packages. Choose from our dedicated server services!
          </p>
          <div className="about__p_dedicated">
            <i className="bx bx-check" /> Total Control &nbsp;
            <i className="bx bx-check" /> 99.9% Uptime Guarantee &nbsp;
            <i className="bx bx-check" /> Support for Windows & Linux
          </div>
          <div className="about__banner">
          <img
      src={images.bannerabout}
      alt="High-Performance Dedicated Server Banner"
      width={1200}  // Especifica el ancho exacto
      height={630}  // Especifica el alto exacto
      loading="eager"  // Carga la imagen inmediatamente
    />
          </div>
        </main>
        <section className="pricing-section pt-120 pb-120">
          <div className="container">
            <div className="header-section-dedicated">
            <h2 className="section-title">Miami Dedicated Server Hosting Plans</h2>
              <p>Explore our high-performance dedicated server plans in Miami. Secure, scalable, and built for ultimate reliability.</p>
            </div>
            <div className="row g-4 justify-content-center">
              {dedicatedServer.map(server => (
                <article key={server.id} className="col-xl-3">
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
                          <img className="iconcheck" src={icons.check} alt="Check Icon" /> {feature}
                        </li>
                      ))}
                    </ul>
                    <a href={server.url} aria-label={`Choose ${server.name} Plan`}>
                      <button className="choice_plan-btn">Choose Plan</button>
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <section className="section__skill">
              <h2 className="features">The Best Features at the Best Price!</h2>
              <div className="description_feat">
                <p className="title_feat">Get Started Quickly and Easily</p>
                <p>We guarantee security and stability with a 99.9% uptime.</p>
                <p>
  <a href="https://www.donhoster.com/dedicated-servers">Dedicated server hosting</a> provides unparalleled control and resources for your online ventures. With a dedicated server, you have exclusive access to an entire server, ensuring optimal performance. Choose DonHoster for reliability and performance.
</p>

              </div>
              <FAQSection faqs={dedicatedServerFaqs}/>
              <div className="animatin features__skill">
                <ul className="list__skill">
                  <li><i className="skill__icon bx bxs-rocket"></i></li>
                  <li>Powerful and Reliable</li>
                  <li>Equipped with enterprise-grade hardware.</li>
                </ul>
                <ul className="list__skill">
                  <li><i className="skill__icon bx bx-shuffle"></i></li>
                  <li>Flexibility</li>
                  <li>Adapt easily to various circumstances.</li>
                </ul>
                <ul className="list__skill">
                  <li><i className="skill__icon bx bxs-server"></i></li>
                  <li>Fast Service</li>
                  <li>Flat-rate high-speed local bandwidth.</li>
                </ul>
              </div>
            </section>
          </div>
        </section>
      </div>
    </HelmetProvider>
  );
};

export default DedicatedServer;
