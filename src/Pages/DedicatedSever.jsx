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
        <title>Hosted Dedicated Servers - Bare Metal Servers</title>
        <meta name="description" content="Dedicated servers in Miami | Dedicated servers give you the advantage of having a physical computer for yourself without sharing it with any other user" />
        <meta name="keywords" content="dedicated servers, cheap dedicated server, Miami data center, disaster recovery, connectivity" />
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