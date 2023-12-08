import "../Components/styles/ManagedHosting.css"
import images from "../Utils/images"
import "./styles/ChooseUs.css"

const ManagedHosting = () => {
  return (
    <div className="principal__managed__hosting ">
        <div className="title__managed__hosting">
            <p>Servers managed by our technicians</p>
            <p>Our team of system administrators is in charge of monitoring and updating the servers located in Spain so that your website and email are always available. Forget about technical details and focus on your project.</p>
        </div>
        <div className="cards__monitorings">
            <div className="card__monitoring">
                <img className="img__monitoring" src={images.monitoring} alt="" />
                <p>24/7 monitoring</p>
                <p>We have professionals who are in charge of monitoring all web servers, databases and email servers 24 hours a day, 7 days a week to prevent any incident and ensure the availability of your hosting service, one less thing. to worry.</p>
            </div>
            <div className="card__monitoring">
                <img className="img__monitoring" src={images.backup} alt="" />
                <p>24/7 monitoring</p>
                <p>We have professionals who are in charge of monitoring all web servers, databases and email servers 24 hours a day, 7 days a week to prevent any incident and ensure the availability of your hosting service, one less thing. to worry.</p>
            </div>
        </div>
    </div>
  )
}

export default ManagedHosting