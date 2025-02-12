import icons from "../Utils/icons"
import "../Components/styles/WhyDonhoster.css"
import useScrollEffect from "../hooks/useScrollEffect"
import "../Components/styles/Services.css"
import { Link } from "react-router-dom"

const WhyDonhoster = () => {

    useScrollEffect(['.animatin', '.animatin_reverse'], 0.60)

  return (
    <div className="principal__whydonhoster">
        <img className="icon__whydondonhoster" src={icons.iconbanner} alt="donhoster data center" 
        width="300"
        height="100"
        />
        <h2 className="title__why"><span className="color__why">¿Why</span> DonHoster?</h2>
        <section className="principal__info_why">
        <div className="first__section__info">
  <article className="info__why__donhoster animatin">
    <div className="icon__border__info line__border1">
      <img className="icon__info_why" src={icons.internetglobal} alt="" />
    </div>
    <div className="article__info_description">
      <h3 className="info__description">Infrastructure That Matters</h3>
      <p className="info__description">
        Our Miami data centers ensure fast, secure, and low-latency connectivity, keeping your business online without interruptions.
      </p>
    </div>
  </article>

  <article className="info__why__donhoster animatin_reverse">
    <div className="icon__border__info line__border2">
      <img className="icon__info_why" src={icons.automation} alt="" />
    </div>
    <div className="article__info_description">
      <h3 className="info__description">Automation On Your Terms</h3>
      <p className="info__description">
        Stay in control of your hosting. Automate what you need while keeping full flexibility over your servers and services.
      </p>
    </div>
  </article>
</div>

<div className="icon__banner__desktop">
  <img src={icons.iconbanner} alt="" />
</div>

<div className="first__section__info">
  <article className="info__why__donhoster info__why__reverse animatin">
    <div className="icon__border__info line__border3">
      <img className="icon__info_why" src={icons.customized} alt="" />
    </div>
    <div className="article__info_description2">
      <h3 className="info__description text__info__reverse">Security You Can Trust</h3>
      <p className="info__description text__info__reverse">
        Protect your business with advanced security systems, proactive monitoring, and expert support to prevent threats.
      </p>
    </div>
  </article>

  <article className="info__why__donhoster info__why__reverse animatin_reverse">
    <div className="icon__border__info line__border4">
      <img className="icon__info_why" src={icons.worldSuport} alt="" />
    </div>
    <div className="article__info_description2">
      <h3 className="info__description text__info__reverse">24/7 Expert Support</h3>
      <p className="info__description text__info__reverse">
        Our world-class team is available 24/7, ensuring your business stays operational with fast and reliable assistance.
      </p>
    </div>
  </article>
</div>

        </section>
        <Link to="https://donhoster.com/cloud" className="cmn--btn" aria-label="Learn More about Dedicated Servers in Miami">
  <button className="btn_learn_more">
    About Us 
  </button>
</Link>
    </div>
  )
}

export default WhyDonhoster