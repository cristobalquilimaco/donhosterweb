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
  <meta name="google-site-verification" content="your-google-verification-code" />
  <meta name="ahrefs-site-verification" content="your-ahrefs-verification-code" />
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
</Helmet>

            <div className="about__box">
        <h1 className="about__title">VPS - KVM</h1>
            <h3 className="about__subtitle">Designed to meet and exceed your performance expectations.</h3>
    <div className="about__p">
        <i className="bx bx-check" /> VPS Proxmox Control Panel  &nbsp;
        <i className="bx bx-check" /> 99.9% Availability Guarantee &nbsp;
        <i className="bx bx-check" /> S.O Windows & Linux
      </div>

    <div className="about__banner">
        <img src={images.bannerabout} alt="" />
    </div>
    </div>
        <section className="pricing-section pt-120 pb-120">
      <div className="container">
        <div className="row g-4 justify-content-center">
          {vpsKvm.map(vps => (
            <div key={vps.id} className="col-xl-3">
              <div className="pricing-items">
                <div className="pricing-header">
                  <h5 className="title_plan">
                    {vps.name}
                  </h5>
                </div>
                <div className="price">
                  <h3 className='plan_price'>{vps.price} <span>/mo</span></h3>
                </div>
                <ul className="pricing-list">
                  {vps.features.map((feature, index) => (
                    <li key={index}>
                      <img className="iconcheck" src={icons.check} alt="pricing-img" /> {feature}
                    </li>
                  ))}
                </ul>
                <a href={vps.url} className="cmn--btn">
                  <button className='choice_plan-btn'>Choice Plan</button>
                </a>
              </div>
            </div>
          ))}
        </div>
        <section className="section__skill">
            <p className="features">The Best Features At The Best Price!</p>
            <div className="description_feat">
                <p className="title_feat">Start quickly and easily</p>
                <p>Security and Stability We guarantee stability and security in our servers with 99.9% uptime.</p>
                <p>VPS hosting offers a balanced solution between shared hosting and dedicated servers, providing users with a dedicated portion of server resources. With a VPS, you gain full control over your virtual environment, allowing you to install and configure software and applications to suit your specific needs. Choose DonHoster as your VPS hosting provider. Our team of experts will guide you in selecting the optimal configuration tailored to your requirements, ensuring high performance and reliability for your online projects.</p>
            </div>
            <div className="features__skill">
                <ul className="list__skill">
                    <li><i className='skill__icon bx bxs-rocket' ></i></li>
                    <li>Power full and Reliable</li>
                    <li>Our VPS are equipped with enterprise-grade hardware.</li>
                </ul>
                <ul className="list__skill">
                <li><i className='skill__icon bx bx-shuffle'></i></li>
                <li>Flexibility</li>
                <li>Ability to adapt easily to various circumstances.</li>
                </ul>
                <ul className="list__skill">
                <li><i className='skill__icon bx bxs-server'></i></li>
                <li>Fast Service</li>
                <li>High speed local bandwidth flat rate.</li>
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