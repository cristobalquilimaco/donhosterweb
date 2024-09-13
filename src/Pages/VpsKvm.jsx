import vpsKvm from "../Utils/vpsKvm"
import icons from "../Utils/icons"
import images from "../Utils/images"
import "../Pages/styles/VpsKvm.css"
import { Helmet, HelmetProvider } from "react-helmet-async"

const VpsKvm = () => {
  return (
    <HelmetProvider>
          <div className="principal__vps">
          <Helmet>
  <title>Cheap KVM Linux VPS & Windows VPS - DonHoster</title>
  <meta name="description" content="Get affordable KVM VPS with both Linux and Windows support. Enjoy fast, stable servers with Proxmox control panel and 99.9% uptime guarantee. Explore our range of VPS solutions at DonHoster." />
  <meta name="keywords" content="cheap KVM VPS, Linux VPS, Windows VPS, fast VPS, stable VPS, Proxmox VPS, VPS hosting, 99.9% uptime" />
  <meta name="google-site-verification" content="google94b194ab78fb2b51.html" />
  <meta name="ahrefs-site-verification" content="b1b407b17742f4b1f2511abaa6ef60a204af93779773732963c4500166c3efaa" />
  <meta property="og:title" content="Cheap KVM Linux VPS & Windows VPS - DonHoster" />
  <meta property="og:description" content="Get affordable KVM VPS with both Linux and Windows support. Enjoy fast, stable servers with Proxmox control panel and 99.9% uptime guarantee. Explore our range of VPS solutions at DonHoster." />
  <meta property="og:url" content="https://donhoster.com/vps" />
  <meta property="og:image" content="https://donhoster.com/images/vps-thumbnail.jpg" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="DonHoster" />
  <meta property="og:locale" content="en_US" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@your_twitter_account" />
  <meta name="twitter:title" content="Cheap KVM Linux VPS & Windows VPS - DonHoster" />
  <meta name="twitter:description" content="Get affordable KVM VPS with both Linux and Windows support. Enjoy fast, stable servers with Proxmox control panel and 99.9% uptime guarantee." />
  <meta name="twitter:image" content="https://donhoster.com/images/vps-thumbnail.jpg" />
  <link rel="canonical" href="https://donhoster.com/vps" />
  <meta name="robots" content="index, follow" />
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
<div className="about__box">
  <h1 className="about__title">VPS - KVM</h1> 
  {/* Título principal, adecuado para SEO */}
  
  <h3 className="about__subtitle">Designed to meet and exceed your performance expectations.</h3> 
  {/* Subtítulo manteniendo h3 para no romper el CSS */}

  <div className="about__p">
    <i className="bx bx-check" /> VPS Proxmox Control Panel &nbsp;
    <i className="bx bx-check" /> 99.9% Availability Guarantee &nbsp;
    <i className="bx bx-check" /> Windows & Linux OS Support {/* Mejora en la claridad del texto */}
  </div>

  <div className="about__banner">
    <img src={images.bannerabout} alt="Banner showing VPS hosting services with Proxmox control panel" /> 
    {/* Texto alternativo agregado para SEO y accesibilidad */}
  </div>
</div>

<section className="pricing-section pt-110 pb-120">
  <div className="container">
    <h2 className="section-title">Our VPS KVM Plans</h2> 
    {/* Mejora en la semántica y jerarquía del título */}

    <div className="row g-4 justify-content-center">
      {vpsKvm.map(vps => (
        <div key={vps.id} className="col-xl-3">
          <div className="pricing-items">
            <div className="pricing-header">
              <h5 className="title_plan">
                {vps.name} - VPS Plan {/* Título más claro para SEO */}
              </h5>
            </div>
            <div className="price">
              <h3 className="plan_price">{vps.price} <span>/mo</span></h3>
            </div>
            <ul className="pricing-list">
              {vps.features.map((feature, index) => (
                <li key={index}>
                  <img className="iconcheck" src={icons.check} alt="Check icon indicating feature" /> 
                  {feature} {/* Descripción de la imagen para accesibilidad */}
                </li>
              ))}
            </ul>
            <a href={vps.url} className="cmn--btn">
              <button className="choice_plan-btn" aria-label={`Choose ${vps.name} Plan`}>
                Choose Plan {/* Agregado aria-label para accesibilidad */}
              </button>
            </a>
          </div>
        </div>
      ))}
    </div>

    <section className="section__skill">
      <h2 className="features">The Best Features At The Best Price!</h2> 
      {/* Cambié a h2 para una jerarquía semántica correcta */}
      
      <div className="description_feat">
        <p className="title_feat">Start Quickly and Easily</p>
        <p>We guarantee security and stability with 99.9% uptime. VPS hosting offers a reliable solution between shared hosting and dedicated servers, providing you with a dedicated portion of server resources.</p>
        <p>With VPS, you gain full control over your virtual environment. DonHoster ensures high performance and reliability for your online projects with expert guidance in selecting the optimal configuration tailored to your needs.</p> 
        {/* Mejora del contenido para mayor claridad y optimización SEO */}
      </div>

      <div className="features__skill">
        <ul className="list__skill">
          <li><i className="skill__icon bx bxs-rocket"></i></li>
          <li>Powerful and Reliable</li>
          <li>Our VPS servers are equipped with enterprise-grade hardware to ensure smooth performance.</li> 
          {/* Claridad en la descripción */}
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

export default VpsKvm