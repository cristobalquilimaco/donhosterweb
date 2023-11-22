import usaOutline from "../assets/img/USA-Map-PNG.png"; // Importa la imagen del contorno de Estados Unidos
import "../Components/styles/USAOutlineMap.css"

const USAOutlineMap = () => {
  return (
    <div className="principal__USAOutlineMap">
    <div className="usa-map-container">
        <img src={usaOutline} alt="USA Outline" className="usa-outline" />
    </div>
    </div>
  );
};

export default USAOutlineMap;