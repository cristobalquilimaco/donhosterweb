import cloudServer from "../Utils/cloudServer";
import icons from "../Utils/icons";
import images from "../Utils/images";
import "../Pages/styles/Cloud.css";
import "../Pages/styles/Hosting.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import FAQSection from "./components/dedicatedservers/FAQSection";
import { cloudFaqs } from "../Utils/faqs/cloudFaqs";

const Cloud = () => {
  return (
    <HelmetProvider>
      <div className="principal__cloud">
        <Helmet>
          <title>Cloud Hosting Miami | DonHoster</title>
          <meta
            name="description"
            content="Discover the best cloud hosting in Miami with DonHoster. Fast, secure, and scalable cloud servers with 99.9% uptime. Perfect for businesses and developers in Miami!"
          />
          <meta
            name="keywords"
            content="cloud hosting Miami, Miami cloud servers, scalable cloud hosting, secure cloud hosting, KVM cloud servers, Proxmox control panel, Windows cloud server, Linux cloud server, VPS hosting Miami"
          />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://www.donhoster.com/cloud" />
          <meta property="og:title" content="Cloud Hosting Miami | DonHoster" />
          <meta
            property="og:description"
            content="Get the best cloud hosting in Miami with DonHoster. Fast, secure, and scalable cloud servers with 99.9% uptime. Perfect for businesses and developers!"
          />
          <meta property="og:url" content="https://donhoster.com/cloud" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://donhoster.com/images/cloud-hosting-thumbnail.jpg"
          />
          <meta
            property="og:image:alt"
            content="Cloud Hosting Miami - Fast and Secure Servers"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          {/* Google and Ahrefs Verification */}
          <meta
            name="google-site-verification"
            content="google94b194ab78fb2b51.html"
          />
          <meta
            name="ahrefs-site-verification"
            content="b1b407b17742f4b1f2511abaa6ef60a204af93779773732963c4500166c3efaa"
          />

          {/* Google Tag Manager Scripts */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-E8HRCWRKGG"
          ></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-E8HRCWRKGG');
            `}
          </script>

          {/* JSON-LD for Structured Data */}
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
          <h1 className="about__title">Cloud Hosting Miami</h1>
          <h2 className="about__subtitle">
            Fast, Secure, and Scalable Cloud Hosting in Miami
          </h2>
          <p className="desc-page-hosting">
            Are you searching for reliable cloud hosting Miami DonHoster offers high-performance cloud servers designed to keep your website fast, secure, and always online.
          </p>
          <div className="about__p">
            <i className="bx bx-check" /> Proxmox Control Panel &nbsp;
            <i className="bx bx-check" /> 99.9% Uptime Guarantee &nbsp;
            <i className="bx bx-check" /> Windows & Linux Support
          </div>

          <div className="about__banner">
            <img
              src={images.bannerabout}
              alt="Fast and Secure Cloud Hosting in Miami"
              width={1200}
              height={630}
              loading="eager"
            />
          </div>
        </div>

        <section className="pricing-section pt-120 pb-120">
          <div className="container">
            <h2 className="section-title">Affordable Cloud Hosting Plans in Miami</h2>
            <p className="description-cloud">
              Choose from our flexible and affordable <strong>cloud hosting plans in Miami</strong>. Whether you need a basic plan for a small project or a powerful server for a growing business, we've got you covered.
            </p>
            <div className="row g-4 justify-content-center">
              {cloudServer.map((cloud) => (
                <div key={cloud.id} className="col-xl-3 card_cloud">
                  <div className="pricing-items">
                    <div className="pricing-header">
                      <h5 className="title_plan">{cloud.name} Plan</h5>
                    </div>
                    <div className="price">
                      <h3 className="plan_price">
                        {cloud.price} <span>/mo</span>
                      </h3>
                    </div>
                    <ul className="pricing-list">
                      {cloud.features.map((feature, index) => (
                        <li key={index}>
                          <img
                            className="iconcheck"
                            src={icons.check}
                            alt="Check icon"
                          />{" "}
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a href={cloud.url} className="cmn--btn">
                      <button
                        className="choice_plan-btn"
                        aria-label={`Choose ${cloud.name} Plan`}
                      >
                        Choose Plan
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <section className="section__skill">
              <h2 className="features">Why Choose DonHoster for Cloud Hosting in Miami?</h2>
              <div className="description_feat">
                <h3 className="title_feat">Simple, Fast, and Reliable</h3>
                <p>
                  Our <a href="https://www.donhoster.com/cloud">cloud hosting Miami</a> is designed to make your life easier. With a **99.9% uptime guarantee**, you can focus on growing your business while we handle the tech stuff.
                </p>
                <p>
                  Need more resources as your business grows? No problem! Our **scalable cloud servers** let you upgrade anytime without downtime.
                </p>
              </div>
              <FAQSection faqs={cloudFaqs} />
              <div className="features__skill">
                <ul className="list__skill">
                  <li><i className="skill__icon bx bxs-rocket"></i></li>
                  <li>High Performance</li>
                  <li>Powered by enterprise-grade hardware for lightning-fast speeds.</li>
                </ul>
                <ul className="list__skill">
                  <li><i className="skill__icon bx bx-shuffle"></i></li>
                  <li>Total Flexibility</li>
                  <li>Easily adjust resources to match your needs.</li>
                </ul>
                <ul className="list__skill">
                  <li><i className="skill__icon bx bxs-server"></i></li>
                  <li>24/7 Support</li>
                  <li>Our team is always here to help you with any questions.</li>
                </ul>
              </div>
            </section>
          </div>
        </section>
      </div>
    </HelmetProvider>
  );
};

export default Cloud;