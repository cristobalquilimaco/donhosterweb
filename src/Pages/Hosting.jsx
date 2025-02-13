import { Helmet, HelmetProvider } from "react-helmet-async";
import images from "../Utils/images";
import icons from "../Utils/icons";
import hosting from "../Utils/hosting";
import "../Components/styles/Services.css";
import useScrollEffect from "../hooks/useScrollEffect";
import "../Pages/styles/Hosting.css";
import ManagedHosting from "../Components/ManagedHosting";

const Hosting = () => {
  useScrollEffect(['.animatin'], 0.95);

  return (
    <HelmetProvider>
<Helmet> 
  <title>Managed cPanel Hosting - DonHoster</title>
  <meta
    name="description"
    content="Get secure and reliable Managed cPanel Hosting with DonHoster. Enjoy easy website management, high performance, and expert support."
  />
  <meta
    name="keywords"
    content="Managed cPanel Hosting, reliable hosting in Miami, cPanel hosting, scalable hosting, business web hosting"
  />
  <meta name="robots" content="index, follow" />
  <meta name="google-site-verification" content="google94b194ab78fb2b51.html" />
  <meta name="ahrefs-site-verification" content="b1b407b17742f4b1f2511abaa6ef60a204af93779773732963c4500166c3efaa" />
  <link rel="canonical" href="https://www.donhoster.com/hosting" />
  
  <meta property="og:title" content="Managed cPanel Hosting - DonHoster" />
  <meta
    property="og:description"
    content="Get secure and reliable Managed cPanel Hosting with DonHoster. Enjoy easy website management, high performance, and expert support."
  />
  <meta property="og:url" content="https://donhoster.com/hosting" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://donhoster.com/images/managed-cpanel-hosting.jpg"
  />
  <meta property="og:image:alt" content="Managed cPanel Hosting with DonHoster" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  {/* Schema Markup for SEO */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Managed cPanel Hosting - DonHoster",
        "description": "Secure and reliable Managed cPanel Hosting for businesses and individuals. Enjoy high performance, 24/7 support, and easy website management.",
        "offers": {
          "@type": "Offer",
          "url": "https://donhoster.com/hosting",
          "priceCurrency": "USD",
          "price": "19.99",
          "availability": "https://schema.org/InStock"
        }
      }
    `}
  </script>
  
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-E8HRCWRKGG"></script>
  <script>
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-E8HRCWRKGG');
    `}
  </script>
</Helmet>
        <div className="principal__hosting__infor">
        <div className="about__box">
          <h1 className="about__title">Managed cPanel Hosting</h1>
          <h2 className="about__subtitle">
            Reliable, scalable, and easy to manage hosting with cPanel.
          </h2>
          <p className="desc-page-hosting">
          Our <strong>Managed cPanel Hosting</strong> ensures high performance, security, and effortless website management, making it ideal for businesses and individuals alike.
          </p>
          <div className="about__p__hosting">
            <i className="bx bx-check" /> Cutting-edge hosting &nbsp;
            <i className="bx bx-check" /> 99.9% Availability Guarantee &nbsp;
            <i className="bx bx-check" /> Money back guarantee
          </div>

          <div className="about__banner">
            <img className="img-banner-hosting"
              src={images.bannerabout}
              alt="DonHoster Hosting Banner"
            />
          </div>
        </div>
        <section className="pricing-section  mt-3">
        <h2 className="section-title">Managed cPanel Hosting Plans</h2>
        <p className="section-description">
  Get reliable <strong>Managed cPanel Hosting</strong> with top performance. Choose your plan and manage everything easily with cPanel.
</p>
          <div className="container_hosting_plan mt-4">
            <div className="row g-4 justify-content-center">
              {hosting.map((server) => (
                <div key={server.id} className="col__hosting">
                  <div className="pricing-items">
                    <div className="pricing-header">
                      <h5 className="title_plan">{server.name}</h5>
                    </div>
                    <div className="price">
                      <h3 className="plan_price">
                        {server.price} <span>/mo</span>
                      </h3>
                    </div>
                    <ul className="pricing-list">
                      {server.features.map((feature, index) => (
                        <li key={index}>
                          <img
                            className="iconcheck"
                            src={icons.check}
                            alt="Check icon indicating feature"
                          />{" "}
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a href={server.url}>
                      <button className="choice_plan-btn">
                        Choose Plan
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <section className="tools__hosting__description choose-section pt-120 pb-120 mt-5">
              <h2 className="hosting__title__info">
              cPanel Hosting Tools for Websites and Online Stores
              </h2>
              <section className="section__hosting__info">
                <div className="images__wp__hosting">
                  <img
                    className="img__project_hosting"
                    src={images.wordpresshosting}
                    alt="WordPress Hosting Solution"
                  />
                </div>
                <div className="desc__tools">
                  <div className="logo__hosting__des">
                    <img
                      className="logo__host__info"
                      src={icons.wplogo}
                      alt="WordPress Logo"
                    />
                    <div className="desc__hosting__text">
                      <h3 className="title__tool__host">
                        WordPress, online store and more
                      </h3>
                      <p>
            Install popular CMSs like WordPress, Joomla, or PrestaShop with a single click. Easily create your website or online store and get it up and running in minutes.
          </p>
                    </div>
                  </div>
                  <div className="logo__hosting__des">
                    <img
                      className="logo__host__info"
                      src={icons.correologo}
                      alt="Email Logo"
                    />
                    <div className="desc__hosting__text">
                      <h3 className="title__tool__host">
                      Professional Email Accounts
                      </h3>
                      <p>
            Set up custom email accounts with your domain (e.g., @yourcompany.com) and manage them through any email client. Access your email with our powerful web application from any browser.
          </p>
                    </div>
                  </div>
                </div>
              </section>
            </section>
            <ManagedHosting />
            <section className="section__skill">
            <h2 className="features">The Best Features at the Best Price</h2>
<div className="description_feat">
  <h3 className="title_feat">Get Started with Managed cPanel Hosting</h3>
  <p className="pp__text__footer">
  Managed cPanel Hosting with 99.9% uptime and top security.
</p>
  <p className="pp__text__footer">
  With Managed cPanel Hosting, you get full control of your website while our experts manage the technical side. Perfect for blogs or growing businesses, our solutions provide flexibility, reliability, and security, letting you focus on your business without worrying about server maintenance.
</p>
</div>
              <div className="animatin features__skill">
                <ul className="list__skill">
                  <li>
                    <i className="skill__icon bx bxs-rocket" />
                  </li>
                  <li>Powerful and Reliable</li>
                  <li>
                    Our VPS are equipped with enterprise-grade hardware.
                  </li>
                </ul>
                <ul className="list__skill">
                  <li>
                    <i className="skill__icon bx bx-shuffle" />
                  </li>
                  <li>Flexibility</li>
                  <li>Ability to adapt easily to various circumstances.</li>
                </ul>
                <ul className="list__skill">
                  <li>
                    <i className="skill__icon bx bxs-server" />
                  </li>
                  <li>Fast Service</li>
                  <li>High-speed local bandwidth flat rate.</li>
                </ul>
              </div>
            </section>
          </div>
        </section>
      </div>
    </HelmetProvider>
  );
};

export default Hosting;
