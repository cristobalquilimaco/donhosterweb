import vpsKvm from "../Utils/vpsKvm"
import icons from "../Utils/icons"
import images from "../Utils/images"
import "../Pages/styles/VpsKvm.css"
import "../Pages/styles/Hosting.css"
import { Helmet, HelmetProvider } from "react-helmet-async"
import FAQSection from "./components/dedicatedservers/FAQSection"
import { vpsKvmFaqs } from "../Utils/faqs/vpsFaqs"

const VpsKvm = () => {
  return (
    <HelmetProvider>
          <div className="principal__vps">
          <Helmet>
  <title>VPS KVM Hosting | Fast & Secure KVM VPS - DonHoster</title>
  
  <meta name="description" content="Get high-performance KVM VPS hosting with Linux & Windows support. Enjoy dedicated resources, Proxmox control panel, and 99.9% uptime. Choose DonHoster for reliable VPS Hosting KVM." />
  
  <meta name="keywords" content="VPS KVM, KVM VPS Hosting, VPS Hosting KVM, Linux KVM VPS, Windows KVM VPS, Proxmox VPS, fast KVM VPS, secure VPS hosting" />

  <meta property="og:title" content="VPS KVM Hosting | Fast & Secure KVM VPS - DonHoster" />
  <meta property="og:description" content="High-performance VPS KVM hosting with dedicated resources, Linux & Windows support, and Proxmox control panel. Get the best KVM VPS hosting at DonHoster." />
  <meta property="og:url" content="https://www.donhoster.com/vps-kvm" />
  <meta property="og:image" content="https://donhoster.com/images/vps-kvm-thumbnail.jpg" />
  
  <meta name="twitter:title" content="VPS KVM Hosting | Fast & Secure KVM VPS - DonHoster" />
  <meta name="twitter:description" content="Boost your online presence with high-speed KVM VPS Hosting. Dedicated resources, Linux & Windows support, and 99.9% uptime guarantee." />
  <meta name="twitter:image" content="https://donhoster.com/images/vps-kvm-thumbnail.jpg" />

  <link rel="canonical" href="https://www.donhoster.com/vps-kvm" />
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
  <h1 className="about__title">VPS KVM Hosting</h1> 
  {/* Título principal, adecuado para SEO */}
  <h2 className="about__subtitle">Optimize Your Projects with KVM VPS Hosting</h2> 
  {/* Subtítulo manteniendo h3 para no romper el CSS */}
    <p className="desc-page-hosting">Enjoy fast, secure, and scalable VPS KVM hosting with 99.9% uptime.</p>
  <div className="about-vps-kvm-hosting">
    <i className="bx bx-check"/> <p>VPS Proxmox Control Panel</p>
    <i className="bx bx-check"/> <p>99.9% Availability Guarantee</p>
    <i className="bx bx-check"/> <p>Windows & Linux OS Support</p> {/* Mejora en la claridad del texto */}
  </div>

  <div className="about__banner">
    <img src={images.bannerabout} alt="Banner showing VPS hosting services with Proxmox control panel" /> 
    {/* Texto alternativo agregado para SEO y accesibilidad */}
  </div>
</div>

<section className="pricing-section pt-110 pb-120">
<h2 className="section-title mt-4">VPS KVM Hosting Plans</h2>
<p className="section-description">Power up your website with our VPS KVM hosting plans. Speed, security, and flexibility, all in one place.</p> 
  <div className="container container_vps_plan mt-4">
    <div className="row g-3 justify-content-center mb-5">
      {vpsKvm.map(vps => (
        <div key={vps.id} className="col-xl-3">
          <div className="pricing-items">
            <div className="pricing-header">
              <h3 className="title_plan">
                {vps.name} - VPS Plan {/* Título más claro para SEO */}
              </h3>
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
              <button className="btn__to__server" aria-label={`Choose ${vps.name} Plan`}>
                Choose Plan {/* Agregado aria-label para accesibilidad */}
              </button>
            </a>
          </div>
        </div>
      ))}
    </div>
      
    <section className="section__skill">
    <h2 className="features">The Best Features At The Best Price!</h2> 
<div className="description_feat">
  <h3 className="title_feat">Powerful, Secure, and Hassle-Free</h3>
  <p>Enjoy 99.9% uptime with top-tier security and stability. Our VPS KVM hosting gives you dedicated resources, ensuring fast performance and reliability—perfect for growing websites and businesses.</p>
</div>
<FAQSection faqs={vpsKvmFaqs}/>
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