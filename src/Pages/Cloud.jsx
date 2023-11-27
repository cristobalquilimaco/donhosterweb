import cloudServer from "../Utils/cloudServer"
import icons from "../Utils/icons"
import images from "../Utils/images"
import "../Pages/styles/Cloud.css"
import { HelmetProvider } from "react-helmet-async"


const Cloud = () => {
  return (
    <HelmetProvider>
          <div>
            <div className="about__box">
        <h1 className="about__title">Cloud hosting</h1>
            <h3 className="about__subtitle">All the flexibility of Cloud technology in 4 simple sizes.</h3>
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
        <div className=" row g-4 justify-content-center card_clud">
          {cloudServer.map(cloud => (
            <div key={cloud.id} className="col-xl-3 card_clud">
              <div className="pricing-items">
                <div className="pricing-header">
                  <h5 className="title_plan">
                    {cloud.name}
                  </h5>
                </div>
                <div className="price">
                  <h3 className='plan_price'>{cloud.price} <span>/mo</span></h3>
                </div>
                <ul className="pricing-list">
                  {cloud.features.map((feature, index) => (
                    <li key={index}>
                      <img className="iconcheck" src={icons.check} alt="pricing-img" /> {feature}
                    </li>
                  ))}
                </ul>
                <a href={cloud.url} className="cmn--btn">
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
                <p>VPS services are the perfect alternative between a shared hosting service and a dedicated server. With a VPS you have control over a section of a dedicated server to install software and applications according to your needs. Choose NetbyHost. As your semi-dedicated service provider, our specialists will help you select the right configuration according to your requirements.</p>
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

export default Cloud