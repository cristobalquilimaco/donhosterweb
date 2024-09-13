import "./styles/DataCenter.css"
import images from "../Utils/images"
import icons from "../Utils/icons"
import { Helmet, HelmetProvider } from "react-helmet-async"

const DataCenter = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Miami Data Center - State-of-the-Art Infrastructure | DonHoster</title>
          <meta
            name="description"
            content="Explore DonHoster's Miami data center offering cutting-edge infrastructure with 24/7 monitoring, disaster recovery solutions, and reliable connectivity. Ensure maximum uptime and security for your critical assets."
          />
          <meta name="keywords" content="Miami data center, data center infrastructure, disaster recovery, 24/7 monitoring, reliable connectivity, DonHoster data center" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://donhoster.com/data-center" />
          <meta property="og:title" content="Miami Data Center - State-of-the-Art Infrastructure | DonHoster" />
          <meta property="og:description" content="Explore DonHoster's Miami data center offering cutting-edge infrastructure with 24/7 monitoring, disaster recovery solutions, and reliable connectivity. Ensure maximum uptime and security for your critical assets." />
          <meta property="og:url" content="https://donhoster.com/data-center" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://donhoster.com/images/miami-data-center-thumbnail.jpg" />
          <meta property="og:image:alt" content="Miami Data Center Infrastructure" />
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
          <h1 className="about__title">DATA CENTERS</h1>
          <h3 className="about__subtitle">Always available, also during disasters.</h3>
          <div className="about__p about__data">
            <i className="bx bx-check" /> The maximum of technology &nbsp;
            <i className="bx bx-check" /> Unique and strategic solutions &nbsp;
            <i className="bx bx-check" /> Total respect for the environment
          </div>
          <div className="about__banner data__center__banner">
            <img src={images.bannerserver} alt="Data center banner" />
          </div>
        </div>

        <div className="line__purple_sub"></div>

        <section className="principal__data__center">
          <div className="first__section__data">
            <img className="img__usa__map" src={images.usamap} alt="USA Map" />
            <div className="section__info__data">
              <p className="title__info__miami">Miami FL, USA</p>
              <p className="text__info__data__center">
                Our Miami data centers are at the heart of one of the world's largest Internet exchanges interconnecting Latin America, the Northeast US, and Europe. Provides exceptional hosting solutions offering a high level of infrastructure and connectivity from Miami with innovative and automated technology for small and large businesses offering cloud-based services and guaranteed quality and availability of hosting services and best available hardware distributed in multiple data centers.
                <br />
                DonHoster is committed to meeting the demand of IT. You will have fast and secure connections with 24/7 availability.
                <br />
                Miami Data Center, United States comprises a surface area of 21,000 m² and a network capacity of 100Gbps+ scalable network capacity, located in downtown Miami, South Florida, 36 NE 2nd St #400, Miami, FL 33132.
              </p>
              <div className="icon__iso__with__des">
                <img className="icon__iso" src={icons.iconiso} alt="ISO certified" />
                <p>Certified to global standards</p>
              </div>
            </div>
          </div>

          <div className="list__info__data">
            <div className="check__mas__info">
              {[
                "Carrier-Neutral data center (Tier1 available).",
                "Metro Ethernet services (e.g. MPLS).",
                "Over 2.000 square meters of data center space.",
                "2N+1 Power & Cooling infrastructure.",
                "1/4-1/2-1/1 secured racks",
                "320Gbps+ scalable network capacity available",
                "Dedicated Servers",
                "Cloud Hosting / Virtual Servers",
                "Multi 100Mbit/1Gbit/10Gbit connectivity options",
              ].map((feature, index) => (
                <div key={index} className="img__icon__des__title">
                  <img className="icon__img__check1" src={icons.check} alt="Check icon" />
                  <p>{feature}</p>
                </div>
              ))}
            </div>

            <div>
              <img className="image__managed" src={images.managed} alt="Managed services" />
            </div>
          </div>
        </section>
      </div>
    </HelmetProvider>
  )
}

export default DataCenter;
