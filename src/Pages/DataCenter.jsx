import "./styles/DataCenter.css"
import images from "../Utils/images"
import icons from "../Utils/icons"
import { Helmet, HelmetProvider } from "react-helmet-async"

const DataCenter = () => {
  return (
    <HelmetProvider>
        <div>
        <Helmet>
            <title>Datacenter in Miami, FL. Infrastructure</title>
              <meta name="description" content="Data Centers. 24/7Hrs monitoring of all critical infrastructure assets. The maximum of technology; Disaster recovery solutions; Miami FL connectivity." />
            </Helmet>
<div className="about__box">
        <h1 className="about__title">DATA CENTERS</h1>
            <h3 className="about__subtitle">Always available, also during disasters.</h3>
    <div className="about__p about__data">
        <i className="bx bx-check" /> The maximum of technology  &nbsp;
        <i className="bx bx-check" /> Unique and strategic solutions &nbsp;
        <i className="bx bx-check" /> Total respect for the environment
      </div>
    <div className="about__banner data__center__banner">
        <img src={images.bannerserver} alt="" />
    </div>
    </div>
    <div className="line__purple_sub"></div>
    <section className="principal__data__center">
        <div className="first__section__data">
        <img className="img__usa__map" src={images.usamap} alt="" />
        <div className="section__info__data">
            <p className="title__info__miami">Miami FL, USA</p>
            <p className="text__info__data__center">Our Miami data centers are at the heart of one of the worlds largest Internet exchanges interconnecting Latin America, the Northeast US and Europe. Provides exceptional hosting solutions offering a high level of infrastructure and connectivity from Miami with innovative and automated technology for small and large businesses offering cloud-based services and guaranteed quality and availability of hosting services and best available hardware distributed in multiple centers of data.

NetcroHosting is committed to meeting the demand of IT. And you offer fast and secure connections with 24/7 availability

Miami Data Center, United States se componer de Surface area 21,000 m² y una Network Capacity 100Gbps+ scalable network capacity, location in downtown Miami, South Florida 36 NE 2nd St #400, Miami, FL 33132.</p>
            <div className="icon__iso__with__des" >
            <img className="icon__iso" src={icons.iconiso} alt="" /> 
            <p>Certified to global standards</p>
            </div>
        </div>
        </div>
        <div className="list__info__data">
        <div className="check__mas__info">
            <div className="img__icon__des__title"><img className="icon__img__check1" src={icons.check} alt="" /><p>Carrier-Neutral data center (Tier1 available).</p></div>
            <div className="img__icon__des__title"><img className="icon__img__check1" src={icons.check} alt="" /><p>Metro Ethernetd services (e.g. MPLS).</p></div>
            <div className="img__icon__des__title"><img className="icon__img__check1" src={icons.check} alt="" /><p>Over 2.000 square meters of data center space.</p></div>
            <div className="img__icon__des__title"><img className="icon__img__check1" src={icons.check} alt="" /><p> 2N+1 Power & Cooling infrastructure.</p></div>
            <div className="img__icon__des__title"><img className="icon__img__check1" src={icons.check} alt="" /><p>1/4-1/2-1/1 secured racks</p></div>
            <div className="img__icon__des__title"><img className="icon__img__check1" src={icons.check} alt="" /><p>320Gbps+ scalable network capacity available</p></div>
            <div className="img__icon__des__title"><img className="icon__img__check1" src={icons.check} alt="" /><p>Dedicated Servers</p></div>
            <div className="img__icon__des__title"><img className="icon__img__check1" src={icons.check} alt="" /><p>Cloud Hosting / Virtual Servers</p></div>
            <div className="img__icon__des__title"><img className="icon__img__check1" src={icons.check} alt="" /><p>Multi 100Mbit/1Gbit/10Gbit connectivity options</p></div>
        </div>

            <div>
                <img className="image__managed" src={images.managed} alt="" />
            </div>

        </div>

    </section>

    </div>
    </HelmetProvider>
    
  )
}

export default DataCenter