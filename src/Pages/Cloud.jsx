import cloudServer from "../Utils/cloudServer"
import icons from "../Utils/icons"
import images from "../Utils/images"
import "../Pages/styles/Cloud.css"
import "../Pages/styles/Hosting.css"
import { Helmet, HelmetProvider } from "react-helmet-async"
import FAQSection from "./components/dedicatedservers/FAQSection"
import { cloudFaqs } from "../Utils/faqs/cloudFaqs"

const Cloud = () => {
  return (
    <HelmetProvider>
      <div className="principal__cloud">
        <Helmet>
          <title>Cloud Hosting Miami | DonHoster</title>
          <meta name="description" content="Experience high-performance Cloud Hosting Miami with DonHoster. Enjoy scalable KVM cloud servers, 99.9% uptime, and full support for Windows & Linux, powered by Proxmox" />
          <meta name="keywords" content="cloud hosting, KVM cloud servers, Proxmox control panel, Miami cloud hosting, Windows cloud server, Linux cloud server, VPS hosting" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://www.donhoster.com/cloud" />
          <meta property="og:title" content="Cloud Hosting - KVM Cloud Servers in Miami | DonHoster" />
          <meta property="og:description" content="Discover flexible and scalable KVM-based cloud hosting solutions in Miami with DonHoster. Our cloud servers come with Proxmox control panel, 99.9% uptime guarantee, and full support for both Windows and Linux operating systems." />
          <meta property="og:url" content="https://donhoster.com/cloud" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://donhoster.com/images/cloud-hosting-thumbnail.jpg" />
          <meta property="og:image:alt" content="KVM Cloud Servers in Miami" />
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
          <h1 className="about__title">Cloud Hosting Miami</h1> 
          <h2 className="about__subtitle">Miami Cloud Hosting with Instant Deployment</h2>
          <p className="desc-page-hosting">Scale your business with fast and reliable cloud hosting in Miami. Simple, secure, and built for growth</p>
          <div className="about__p">
            <i className="bx bx-check" /> VPS Proxmox Control Panel &nbsp;
            <i className="bx bx-check" /> 99.9% Availability Guarantee &nbsp;
            <i className="bx bx-check" /> Windows & Linux OS Support
          </div>

          <div className="about__banner">
            <img src={images.bannerabout} alt="Cloud Hosting Banner" />
          </div>
        </div>

        <section className="pricing-section pt-120 pb-120">
          <div className="container">
            <h2 className="section-title">Our Cloud Hosting Plans</h2>
            <p className="description-cloud">Optimize your online presence with fast and secure cloud hosting solutions in Miami.</p>
            <div className="row g-4 justify-content-center">
              {cloudServer.map(cloud => (
                <div key={cloud.id} className="col-xl-3 card_cloud">
                  <div className="pricing-items">
                    <div className="pricing-header">
                      <h5 className="title_plan">{cloud.name} - Cloud Plan</h5>
                    </div>
                    <div className="price">
                      <h3 className="plan_price">{cloud.price} <span>/mo</span></h3>
                    </div>
                    <ul className="pricing-list">
                      {cloud.features.map((feature, index) => (
                        <li key={index}>
                          <img className="iconcheck" src={icons.check} alt="Check icon indicating feature" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a href={cloud.url} className="cmn--btn">
                      <button className="choice_plan-btn" aria-label={`Choose ${cloud.name} Plan`}>
                        Choose Plan
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <section className="section__skill">
              <h2 className="features">The Best Features At The Best Price!</h2>
              <div className="description_feat">
              <h3 className="title_feat">Launch Your Cloud Server with Ease</h3>
<p>Enjoy secure and stable cloud hosting with a 99.9% uptime guarantee. The perfect balance between shared hosting and dedicated servers.</p>
<p>Scale your resources as your needs grow. With DonHoster, you get high performance, flexibility, and expert support to help you choose the best setup.</p>
</div>
              <FAQSection faqs={cloudFaqs}/>
              <div className="features__skill">
                <ul className="list__skill">
                  <li><i className="skill__icon bx bxs-rocket"></i></li>
                  <li>Powerful and Reliable</li>
                  <li>Our VPS servers are equipped with enterprise-grade hardware to ensure smooth performance.</li>
                </ul>
                <ul className="list__skill">
                  <li><i className="skill__icon bx bx-shuffle"></i></li>
                  <li>Flexibility</li>
                  <li>Our VPS adapts easily to various requirements and offers scalability.</li>
                </ul>
                <ul className="list__skill">
                  <li><i className="skill__icon bx bxs-server"></i></li>
                  <li>Fast Service</li>
                  <li>High-speed local bandwidth with a flat rate structure for consistent performance.</li>
                </ul>
              </div>
            </section>
          </div>
        </section>
      </div>
    </HelmetProvider>
  )
}

export default Cloud;
