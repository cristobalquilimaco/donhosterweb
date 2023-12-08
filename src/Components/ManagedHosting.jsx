import "../Components/styles/ManagedHosting.css"
import images from "../Utils/images"
import "./styles/ChooseUs.css"

const ManagedHosting = () => {
  return (
    <div className="principal__managed__hosting">
        <div className="title__managed__hosting">
            <p className="p__tt title__text__hosting">Servers managed by our technicians</p>
            <p className="p__tt description__hosting__skill">Our team of system administrators is in charge of monitoring and updating the servers located in Spain so that your website and email are always available. Forget about technical details and focus on your project.</p>
        </div>
        <div className="cards__monitorings">
            <div className="card__monitoring">
                <div className="monitorin__img">
                <img className="img__monitoring" src={images.monitoring} alt="" />
                </div>
                <p className="info__tt">24/7 monitoring</p>
                <p className="desc__pp__tt">We have professionals who are in charge of monitoring all web servers, databases and email servers 24 hours a day, 7 days a week to prevent any incident and ensure the availability of your hosting service, one less thing. to worry.</p>
            </div>
            <div className="card__monitoring">
            <div className="monitorin__img">
                <img className="img__monitoring" src={images.backup} alt="" />
                </div>
                <p className="info__tt">Data protection and daily backups</p>
                <p className="desc__pp__tt">All of our hard drives are mirrored. In the event of a physical problem in one of them, your website will continue to function normally. We also make daily and weekly backups external to the server where your website is hosted. Thanks to this we will be able to recover your information in case you make a data loss error..</p>
            </div>
        </div>
    </div>
  )
}

export default ManagedHosting