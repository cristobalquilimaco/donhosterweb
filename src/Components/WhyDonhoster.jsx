import icons from "../Utils/icons"
import "../Components/styles/WhyDonhoster.css"

icons

const WhyDonhoster = () => {
  return (
    <div className="principal__whydonhoster">
        <img className="icon__whydondonhoster" src={icons.iconbanner} alt="" />
        <h1 className="title__why"><span className="color__why">¿Why</span> DonHoster?</h1>
        <section>
            <article>
                <img className="icon__info_why" src={icons.internetglobal} alt="" />
                <p>INFRASTRUCTURE WHERE IT MATTERS</p>
                <p>At DonHoster, we’ve got you covered. Our data centers and cloud infrastructure provide your business with reliable, low-latency connectivity that will keep you connected no matter where you or your data are.</p>
            </article>
            <article>
                <img className="icon__info_why" src={icons.automation} alt="" />
                <p>AUTOMATION WHEN YOU WANT IT</p>
                <p>At Colohouse, we believe that you should be in control of your products and services. That’s why we put you in the driver’s seat and let you decide how much control you want.</p>
            </article>
            <article>
                <img className="icon__info_why" src={icons.customized} alt="" />
                <p>SECURITY THAT YOU CAN COUNT ON</p>
                <p>We prioritize your data security. Our advanced systems and expert team provide protection against potential threats, giving you peace of mind to focus on your business.</p>
            </article>
            <article>
                <img className="icon__info_why" src={icons.worldSuport} alt="" />
                <p>PEOPLE WHEN YOU NEED IT</p>
                <p>Our support team is available 24/7. Our Service Level Agreement ensures you can hold us to the highest of standards and annual compliance audits. Our world-class Remote Hands offering will never leave you or your business unattended.</p>
            </article>
        </section>
    </div>
  )
}

export default WhyDonhoster