import icons from "../Utils/icons"
import "../Components/styles/WhyDonhoster.css"
import useScrollEffect from "../hooks/useScrollEffect"
import "../Components/styles/Services.css"

const WhyDonhoster = () => {

    useScrollEffect(['.animatin', '.animatin_reverse'], 0.60)

  return (
    <div className="principal__whydonhoster">
        <img className="icon__whydondonhoster" src={icons.iconbanner} alt="" />
        <h1 className="title__why"><span className="color__why">¿Why</span> DonHoster?</h1>
        <section className="principal__info_why">
            <article className="info__why__donhoster animatin">
                <img className="icon__info_why" src={icons.internetglobal} alt="" />
                <p className="title__info__why">INFRASTRUCTURE WHERE IT MATTERS</p>
                <p className="info__description">At DonHoster, we’ve got you covered. Our data centers and cloud infrastructure provide your business with reliable, low-latency connectivity that will keep you connected no matter where you or your data are.</p>
            </article>
            <article className="info__why__donhoster animatin_reverse">
                <img className="icon__info_why" src={icons.automation} alt="" />
                <p className="title__info__why">AUTOMATION WHEN YOU WANT IT</p>
                <p className="info__description">At DonHoster, we believe that you should be in control of your products and services. That’s why we put you in the driver’s seat and let you decide how much control you want.</p>
            </article>
            <article className="info__why__donhoster animatin">
                <img className="icon__info_why" src={icons.customized} alt="" />
                <p className="title__info__why">SECURITY THAT YOU CAN COUNT ON</p>
                <p className="info__description">We prioritize your data security. Our advanced systems and expert team provide protection against potential threats, giving you peace of mind to focus on your business.</p>
            </article>
            <article className="info__why__donhoster animatin_reverse">
                <img className="icon__info_why" src={icons.worldSuport} alt="" />
                <p className="title__info__why">PEOPLE WHEN YOU NEED IT</p>
                <p className="info__description">Our support team is available 24/7. Our Service Level Agreement ensures you can hold us to the highest of standards and annual compliance audits. Our world-class Remote Hands offering will never leave you or your business unattended.</p>
            </article>
        </section>
    </div>
  )
}

export default WhyDonhoster