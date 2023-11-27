import { Link } from "react-router-dom";
import usaOutline from "../assets/img/USA-Map-PNG.png"; // Importa la imagen del contorno de Estados Unidos
import "../Components/styles/USAOutlineMap.css"
import useScrollEffect from "../hooks/useScrollEffect";
import "../Components/styles/Services.css"

const USAOutlineMap = () => {

    useScrollEffect(['.animatin'], 60)

  return (
    <div className="principal__USAOutlineMap">
        <p className="location_title animatin"><span className="color__location">Location</span> Matters</p>
        <p className="info__location animatin">Our Miami data center serves as a pivotal hub within one of the worlds largest Internet exchanges, linking Latin America, the Northeast US. It offers cutting-edge hosting solutions, boasting top-tier infrastructure and connectivity. Our innovative, automated technology caters to businesses of all sizes, providing cloud-based services with assured quality, availability, and the best hardware spread across multiple data centers.</p>
    <div className="usa-map-container animatin">
    <i className='bx bxs-location-plus location__icon__btn'></i>
        <img src={usaOutline} alt="USA Outline" className="usa-outline" />
    </div>
    <Link to="/data-center" className="cmn--btn" aria-label="Learn More about Dedicated Servers in Miami">
  <button className="btn_learn_more">
    Our Data Center 
  </button>
</Link>
    </div>
  );
};

export default USAOutlineMap;