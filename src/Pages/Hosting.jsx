import { Helmet, HelmetProvider } from "react-helmet-async"
import images from "../Utils/images"
import icons from "../Utils/icons"
import hosting from "../Utils/hosting"
import "../Components/styles/Services.css"
import useScrollEffect from "../hooks/useScrollEffect"
import "../Pages/styles/Hosting.css"
import ManagedHosting from "../Components/ManagedHosting"



const Hosting = () => {

  useScrollEffect(['.animatin'], 0.95) 

  return (
    <HelmetProvider>
    <div>
        <Helmet>
        <title>Web Hosting Cpanel - DonHoster</title>
        <meta name="description" content="Dedicated servers in Miami | Dedicated servers give you the advantage of having a physical computer for yourself without sharing it with any other user" />
        </Helmet>
            <div className="about__box">
        <h1 className="about__title">Web Hosting Cpanel</h1>
            <h3 className="about__subtitle">Listed below our awesome hosting packages. You can select any dedicated server services below!</h3>
    <div className="about__p">
        <i className="bx bx-check" /> Cutting-edge hosting  &nbsp;
        <i className="bx bx-check" /> 99.9% Availability Guarantee &nbsp;
        <i className="bx bx-check" /> Money back guarantee
      </div>

    <div className="about__banner">
        <img src={images.bannerabout} alt="" />
    </div>
    </div>
        <section className="pricing-section pt-120 pb-120">
      <div className="container">
        <div className=" row g-4 justify-content-center">
          {hosting.map(server => (
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
          <section className="tools__hosting__description">
            <p className="hosting__title__info">Tools for your projects</p>
            <section className="section__hosting__info">
            <div className="images__wp__hosting">
              <img className="img__project_hosting" src={images.wordpresshosting} alt="" />
            </div>
            <div className="desc__tools">
            <div className="logo__hosting__des">
                  <img className="logo__host__info" src={icons.wplogo} alt="" />
                  <div className="desc__hosting__text">
                  <p className="title__tool__host">WordPress, online store and more</p>
                  <p>Install a wide variety of applications such as Wordpress, Joomla or Prestashop in 1 click so you can create your website or online store easily. In a few minutes you can have your new project configured and ready to use.</p>
                  </div>
            </div>
            <div className="logo__hosting__des">
              <img className="logo__host__info" src={icons.correologo} alt="" />
              <div className="desc__hosting__text">
                  <p className="title__tool__host">Professional email</p>
                  <p>Create personalized email accounts @yourname.com that you can configure in any email application. We also include a powerful web application that you can access from any browser.</p>
                  </div>
            </div>
            </div>
            </section>
          </section>
          {/* -----------------NEW SECTION----------- */}
          <ManagedHosting/>
        <section className="section__skill">
            <p className="features">The Best Features At The Best Price!</p>
            <div className="description_feat">
                <p className="title_feat">Start quickly and easily</p>
                <p>Security and Stability We guarantee stability and security in our servers with 99.9% uptime.</p>
                <p>VPS services are the perfect alternative between a shared hosting service and a dedicated server. With a VPS you have control over a section of a dedicated server to install software and applications according to your needs. Choose NetbyHost. As your semi-dedicated service provider, our specialists will help you select the right configuration according to your requirements.</p>
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

export default Hosting