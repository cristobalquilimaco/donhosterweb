import { Link } from "react-router-dom";
import usaOutline from "../assets/img/USA-Map-PNG.png"; // Importa la imagen del contorno de Estados Unidos
import "../Components/styles/USAOutlineMap.css"

const USAOutlineMap = () => {
  return (
    <div className="principal__USAOutlineMap">
        <p className="location_title"><span className="color__location">Location</span> Matters</p>
        <p className="info__location">Our Miami data centers are at the heart of one of the worlds largest Internet exchanges interconnecting Latin America, the Northeast US and Europe. Provides exceptional hosting solutions offering a high level of infrastructure and connectivity from Miami with innovative and automated technology for small and large businesses offering cloud-based services and guaranteed quality and availability of hosting services and best available hardware distributed in multiple centers of data.</p>
    <div className="usa-map-container">
    <i className='bx bxs-location-plus location__icon__btn'></i>
        <img src={usaOutline} alt="USA Outline" className="usa-outline" />
    </div>
    <Link to="/dedicated-server" className="cmn--btn" aria-label="Learn More about Dedicated Servers in Miami">
  <button className="btn_learn_more">
    Our Data Center 
  </button>
</Link>
    </div>
  );
};

export default USAOutlineMap;