import "./styles/DataCenter.css"
import images from "../Utils/images"
import icons from "../Utils/icons"

const DataCenter = () => {
  return (
    <div>
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

    <section className="principal__data__center">
        <img className="img__usa__map" src={images.usamap} alt="" />
        <div>
            <p>Miami FL, USA</p>
            <p>Our Miami data centers are at the heart of one of the world's largest Internet exchanges interconnecting Latin America, the Northeast US and Europe. Provides exceptional hosting solutions offering a high level of infrastructure and connectivity from Miami with innovative and automated technology for small and large businesses offering cloud-based services and guaranteed quality and availability of hosting services and best available hardware distributed in multiple centers of data.

NetcroHosting is committed to meeting the demand of IT. And you offer fast and secure connections with 24/7 availability

Miami Data Center, United States se componer de Surface area 21,000 m² y una Network Capacity 100Gbps+ scalable network capacity, location in downtown Miami, South Florida 36 NE 2nd St #400, Miami, FL 33132.</p>
            <div>
            <img src={icons} alt="" /> 
            <p>Certified to global standards</p>
            </div>
            
        </div>
    </section>

    </div>
  )
}

export default DataCenter