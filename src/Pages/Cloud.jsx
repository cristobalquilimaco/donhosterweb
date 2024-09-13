import cloudServer from "../Utils/cloudServer"
import icons from "../Utils/icons"
import images from "../Utils/images"
import "../Pages/styles/Cloud.css"
import { Helmet, HelmetProvider } from "react-helmet-async"

const Cloud = () => {
  return (
    <HelmetProvider>
      <div className="principal__cloud">
        <Helmet>
          <title>Cloud Hosting - KVM Cloud Servers in Miami | DonHoster</title>
          <meta name="description" content="Discover flexible and scalable KVM-based cloud hosting solutions in Miami with DonHoster. Our cloud servers come with Proxmox control panel, 99.9% uptime guarantee, and full support for both Windows and Linux operating systems." />
          <meta name="keywords" content="cloud hosting, KVM cloud servers, Proxmox control panel, Miami cloud hosting, Windows cloud server, Linux cloud server, VPS hosting" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://donhoster.com/cloud" />
          <meta property="og:title" content="Cloud Hosting - KVM Cloud Servers in Miami | DonHoster" />
          <meta property="og:description" content="Discover flexible and scalable KVM-based cloud hosting solutions in Miami with DonHoster. Our cloud servers come with Proxmox control panel, 99.9% uptime guarantee, and full support for both Windows and Linux operating systems." />
          <meta property="og:url" content="https://donhoster.com/cloud" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://donhoster.com/images/cloud-hosting-thumbnail.jpg" />
          <meta property="og:image:alt" content="KVM Cloud Servers in Miami" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </Helmet>

        <div className="about__box">
          <h1 className="about__title">Cloud Hosting</h1> 
          {/* Título principal para SEO */}
          
          <h3 className="about__subtitle">All the flexibility of Cloud technology in 4 simple sizes.</h3> 
          {/* Subtítulo manteniendo h3 */}
          
          <div className="about__p">
            <i className="bx bx-check" /> VPS Proxmox Control Panel &nbsp;
            <i className="bx bx-check" /> 99.9% Availability Guarantee &nbsp;
            <i className="bx bx-check" /> Windows & Linux OS Support {/* Claridad en el contenido */}
          </div>

          <div className="about__banner">
            <img src={images.bannerabout} alt="Cloud Hosting Banner" /> 
            {/* Texto alternativo para SEO */}
          </div>
        </div>

        <section className="pricing-section pt-120 pb-120">
          <div className="container">
            <h2 className="section-title">Our Cloud Hosting Plans</h2> 
            {/* Mejora semántica */}
            
            <div className="row g-4 justify-content-center card_clud">
              {cloudServer.map(cloud => (
                <div key={cloud.id} className="col-xl-3 card_clud">
                  <div className="pricing-items">
                    <div className="pricing-header">
                      <h5 className="title_plan">{cloud.name} - Cloud Plan</h5>
                      {/* Título más claro para SEO */}
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
              {/* Cambié a h2 para mayor jerarquía */}
              
              <div className="description_feat">
                <p className="title_feat">Start quickly and easily</p>
                <p>We guarantee security and stability with 99.9% uptime. Cloud hosting presents an ideal solution, bridging the gap between traditional shared hosting and dedicated servers.</p>
                <p>With cloud hosting, you gain access to scalable and flexible resources, allowing you to adjust capacity as needed. Choose DonHoster for high performance and reliability, with expert guidance in choosing the optimal configuration.</p>
              </div>

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
  );
}

export default Cloud;
