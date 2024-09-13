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
    <>
      <HelmetProvider>
        <div className="principal__hosting__infor">
          <Helmet>
            <title>Web Hosting with cPanel - DonHoster</title>
            <meta
              name="description"
              content="Explore DonHoster's web hosting solutions with cPanel. Enjoy easy management of your websites with our reliable and scalable hosting plans. Perfect for personal and business use."
            />
            <meta
              name="keywords"
              content="web hosting, cPanel hosting, hosting with cPanel, reliable web hosting, scalable hosting plans, DonHoster hosting"
            />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://donhoster.com/hosting" />
            <meta
              property="og:title"
              content="Web Hosting with cPanel - DonHoster"
            />
            <meta
              property="og:description"
              content="Explore DonHoster's web hosting solutions with cPanel. Enjoy easy management of your websites with our reliable and scalable hosting plans. Perfect for personal and business use."
            />
            <meta property="og:url" content="https://donhoster.com/hosting" />
            <meta property="og:type" content="website" />
            <meta
              property="og:image"
              content="https://donhoster.com/images/web-hosting-cpanel-thumbnail.jpg"
            />
            <meta property="og:image:alt" content="Web Hosting with cPanel" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            {/* Schema Markup for SEO */}
            <script type="application/ld+json">
              {`
                {
                  "@context": "https://schema.org",
                  "@type": "Product",
                  "name": "DonHoster Web Hosting",
                  "description": "Reliable and scalable web hosting with cPanel.",
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
          </Helmet>

          <div className="about__box">
            <h1 className="about__title">Web Hosting Cpanel</h1>
            <h2 className="about__subtitle">
              Listed below are our awesome hosting packages. Select any
              dedicated server services below!
            </h2>
            <div className="about__p">
              <i className="bx bx-check" /> Cutting-edge hosting &nbsp;
              <i className="bx bx-check" /> 99.9% Availability Guarantee &nbsp;
              <i className="bx bx-check" /> Money back guarantee
            </div>

            <div className="about__banner">
              <img
                src={images.bannerabout}
                alt="DonHoster Hosting Banner"
              />
            </div>
          </div>

          <section className="pricing-section pt-120 pb-120">
            <div className="container_hosting_plan">
              <div className=" row g-4 justify-content-center">
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
                              alt="pricing-img"
                            />{" "}
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <a href={server.url}>
                        <button className="choice_plan-btn">
                          Choose the {server.name} Hosting Plan
                        </button>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <section className="tools__hosting__description choose-section pt-120 pb-120">
                <p className="hosting__title__info">
                  Tools for your projects
                </p>
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
                        <p className="title__tool__host">
                          WordPress, online store and more
                        </p>
                        <p>
                          Install a wide variety of applications such as
                          Wordpress, Joomla, or Prestashop in 1 click so you can
                          create your website or online store easily. In a few
                          minutes, you can have your new project configured and
                          ready to use.
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
                        <p className="title__tool__host">
                          Professional email
                        </p>
                        <p>
                          Create personalized email accounts @yourname.com that
                          you can configure in any email application. We also
                          include a powerful web application that you can access
                          from any browser.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </section>

              <ManagedHosting />

              <section className="section__skill">
                <p className="features">The Best Features At The Best Price!</p>
                <div className="description_feat">
                  <p className="title_feat">Start quickly and easily</p>
                  <p className="pp__text__footer">
                    Security and Stability We guarantee stability and security
                    in our servers with 99.9% uptime.
                  </p>
                  <p className="pp__text__footer">
                    VPS hosting stands as a versatile solution nestled between
                    traditional shared hosting and dedicated servers, offering a
                    tailored balance of control and affordability. With a VPS,
                    you command a dedicated portion of server resources,
                    granting you the autonomy to install and configure software
                    and applications to match your unique requirements. Entrust
                    your web hosting needs to DonHoster. As your semi-dedicated
                    service provider, our adept specialists will collaborate
                    closely with you to identify the optimal hosting
                    configuration, ensuring it aligns seamlessly with your
                    website´s demands for performance, security, and
                    scalability.
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
    </>
  );
};

export default Hosting;
