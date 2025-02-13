import "../Components/styles/ManagedHosting.css"
import images from "../Utils/images"
import "./styles/ChooseUs.css"

const ManagedHosting = () => {
  return (
<div className="principal__managed__hosting">
  <div className="title__managed__hosting">
    <h2 className="p__tt title__text__hosting">
    Reliable cPanel Hosting with Expert Support
    </h2>
    <p className="p__tt description__hosting__skill">
      Our team of system administrators ensures your hosting is always secure and running smoothly. With our <a href="https://www.donhoster.com/hosting" target="_blank" rel="noopener noreferrer"><strong>Managed cPanel Hosting</strong></a>, your website and email will stay available, so you can focus on your business.
    </p>
  </div>
  <div className="cards__monitorings">
    <div className="card__monitoring">
      <div className="monitorin__img">
        <img className="img__monitoring" src={images.monitoring} alt="24/7 server monitoring" />
      </div>
      <p className="info__tt">24/7 Server Monitoring</p>
      <p className="desc__pp__tt">
        Our experts monitor your hosting, databases, and email services around the clock to prevent any incidents and ensure the availability of your service. Rest easy knowing your hosting is always in good hands.
      </p>
    </div>
    <div className="card__monitoring">
      <div className="monitorin__img">
        <img className="img__monitoring" src={images.backup} alt="Backup and data protection" />
      </div>
      <p className="info__tt">Data Protection & Daily Backups</p>
      <p className="desc__pp__tt">
        With mirrored hard drives and external daily and weekly backups, your website is protected from data loss. In case of issues, we can quickly restore your information. Trust us to keep your data safe.
      </p>
    </div>
  </div>
</div>


  )
}

export default ManagedHosting