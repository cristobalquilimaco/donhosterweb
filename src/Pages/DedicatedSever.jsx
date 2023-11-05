import dedicatedServer from "../Utils/dedicatedServer"
import icons from "../Utils/icons"
import images from "../Utils/images"

const DedicatedSever = () => {
  return (
    <div>
            <div className="about__box">
        <h1 className="about__title">Dedicated servers</h1>
            <h3 className="about__subtitle">Listed below our awesome hosting packages. You can select any dedicated server services below!</h3>
    <div className="about__p">
        <i className="bx bx-check" /> Total Control  &nbsp;
        <i className="bx bx-check" /> 99.9% Availability Guarantee &nbsp;
        <i className="bx bx-check" /> S.O Windows & Linux
      </div>

    <div className="about__banner">
        <img src={images.bannerabout} alt="" />
    </div>
    </div>
        <section className="pricing-section pt-120 pb-120">
      <div className="container">
        <div className="row g-4 justify-content-center">
          {dedicatedServer.map(server => (
            <div key={server.id} className="col-xl-3">
              <div className="pricing-items">
                <div className="pricing-header">
                  <h5 className="title_plan">
                    {server.name}
                  </h5>
                  <p className='plan_description'>
                    {server.description}
                  </p>
                </div>
                <div className="price">
                  <h3 className='plan_price'>{server.price} <span>/mo</span></h3>
                </div>
                <ul className="pricing-list">
                  {server.features.map((feature, index) => (
                    <li key={index}>
                      <img className="iconcheck" src={icons.check} alt="pricing-img" /> {feature}
                    </li>
                  ))}
                </ul>
                <a href="#0" className="cmn--btn">
                  <button className='choice_plan-btn'>Choice Plan</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default DedicatedSever