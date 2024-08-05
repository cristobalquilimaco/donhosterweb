import icons from "../Utils/icons"
import "../Components/styles/WhyDonhoster.css"
import useScrollEffect from "../hooks/useScrollEffect"
import "../Components/styles/Services.css"
import { Link } from "react-router-dom"

const WhyDonhoster = () => {

    useScrollEffect(['.animatin', '.animatin_reverse'], 0.60)

  return (
    <div className="principal__whydonhoster">
        <img className="icon__whydondonhoster" src={icons.iconbanner} alt="" />
        <h1 className="title__why"><span className="color__why">¿Why</span> DonHoster?</h1>
        <section className="principal__info_why">
            <div className="first__section__info">
            <article className="info__why__donhoster animatin">
                <div className="icon__border__info line__border1">
                <img className="icon__info_why" src={icons.internetglobal} alt="" />
                </div>
                <div className="article__info_description">
                <p className="info__description">INFRASTRUCTURE WHERE IT MATTERS</p>
                <p className="info__description">At DonHoster, we’ve got you covered. Our data centers and cloud infrastructure provide your business with reliable, low-latency connectivity that will keep you connected no matter where you or your data are.</p>
                </div> 
            </article>
            <article className="info__why__donhoster animatin_reverse">
                <div className="icon__border__info line__border2">
                <img className="icon__info_why" src={icons.automation} alt="" />
                </div>
                <div className="article__info_description">
                <p className="info__description">AUTOMATION WHEN YOU WANT IT</p>
                <p className="info__description">At DonHoster, we believe that you should be in control of your products and services. That’s why we put  you in the driver’s seat and let you decide how much control you want.</p>
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
                <p className="info__description text__info__reverse">SECURITY THAT YOU CAN COUNT ON</p>
                <p className="info__description text__info__reverse">We prioritize your data security. Our advanced systems and expert team provide protection against potential threats, giving you peace of mind to focus on your business.</p>
                </div>
            </article>
            <article className="info__why__donhoster info__why__reverse animatin_reverse">
                <div className="icon__border__info line__border4">
                <img className="icon__info_why" src={icons.worldSuport} alt="" />
                </div>
                <div className="article__info_description2">
                <p className="info__description text__info__reverse">PEOPLE WHEN YOU NEED IT</p>
                <p className="info__description text__info__reverse">Our support team is available 24/7. Our Service Level Agreement ensures you can hold us to the highest of standards and annual compliance audits. Our world-class Remote Hands offering will never leave you or your business unattended.</p>
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