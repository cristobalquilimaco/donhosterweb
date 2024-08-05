import dedicatedServer from "../Utils/dedicatedServer"
import icons from "../Utils/icons"
import images from "../Utils/images"
import "../Pages/styles/about.css"
import useScrollEffect from "../hooks/useScrollEffect"
import { Helmet, HelmetProvider } from "react-helmet-async"

const DedicatedSever = () => {
  useScrollEffect(['.animatin'], 0.95)


  return (
    <HelmetProvider>
    <div>
    <Helmet>
  <title>Hosted Dedicated Servers - Bare Metal Servers | DonHoster</title>
  <meta 
    name="description" 
    content="Discover high-performance hosted dedicated servers and bare metal servers in Miami with DonHoster. Enjoy the benefits of exclusive physical servers, enhanced security, and reliable connectivity tailored for your business needs." 
  />
  <meta name="keywords" content="dedicated servers, bare metal servers, hosted dedicated servers, Miami data center, high-performance servers, secure servers, business hosting solutions" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://donhoster.com/dedicated-servers" />
  <meta property="og:title" content="Hosted Dedicated Servers - Bare Metal Servers | DonHoster" />
  <meta property="og:description" content="Discover high-performance hosted dedicated servers and bare metal servers in Miami with DonHoster. Enjoy the benefits of exclusive physical servers, enhanced security, and reliable connectivity tailored for your business needs." />
  <meta property="og:url" content="https://donhoster.com/dedicated-servers" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://donhoster.com/images/dedicated-servers-thumbnail.jpg" />
  <meta property="og:image:alt" content="Hosted Dedicated Servers" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
</Helmet>
            <div className="about__box">
        <h1 className="about__title">Dedicated servers</h1>
            <h3 className="about__subtitle">Listed below our awesome hosting packages. You can select any dedicated server services below!</h3>
    <div className="about__p">
        <i className="bx bx-check" /> Total Control  &nbsp;
        <i className="bx bx-check" /> 99.9% Availability Guarantee &nbsp;
        <i className="bx bx-check" /> S.O Windows & Linux
      </div>

    <div className="about__banner">
        <img src={images.bannerabout} alt="" />
    </div>
    </div>
        <section className="pricing-section pt-120 pb-120">
      <div className="container">
        <div className=" row g-4 justify-content-center">
          {dedicatedServer.map(server => (
            <div key={server.id} className="col-xl-3">
              <div className="pricing-items">
                <div className="pricing-header">
                  <h5 className="title_plan">
                    {server.name}
                  </h5>
                </div>
                <div className="price">
                  <h3 className='plan_price'>{server.price} <span>/mo</span></h3>
                </div>
                <ul className="pricing-list">
                  {server.features.map((feature, index) => (
                    <li key={index}>
                      <img className="iconcheck" src={icons.check} alt="pricing-img" /> {feature}
                    </li>
                  ))}
                </ul><a href={server.url}><button className='choice_plan-btn'>Choice Plan</button></a>
              </div>
            </div>
          ))}
        </div>
        <section className="section__skill">
            <p className="features">The Best Features At The Best Price!</p>
            <div className="description_feat">
                <p className="title_feat">Start quickly and easily</p>
                <p>Security and Stability We guarantee stability and security in our servers with 99.9% uptime.</p>
                <p>Dedicated server hosting provides unparalleled control and resources for your online ventures. Unlike shared hosting or VPS services, where resources are distributed among multiple users, a dedicated server offers you exclusive access to an entire server, providing optimal performance and security. With a dedicated server, you have complete autonomy to customize hardware specifications, install software, and configure applications according to your precise needs. Choose DonHoster as your dedicated server provider, where our specialists will assist you in selecting the ideal server configuration tailored to your specific requirements, ensuring optimal performance and reliability for your projects.</p>
            </div>
            <div className="animatin features__skill">
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

export default DedicatedSever