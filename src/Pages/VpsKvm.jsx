import vpsKvm from "../Utils/vpsKvm"
import icons from "../Utils/icons"
import images from "../Utils/images"

const VpsKvm = () => {
  return (
    <div>
            <div className="about__box">
        <h1 className="about__title">VPS - KVM</h1>
            <h3 className="about__subtitle">Designed to meet and exceed your performance expectations.</h3>
    <div className="about__p">
        <i className="bx bx-check" /> VPS Proxmox Control Panel  &nbsp;
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
          {vpsKvm.map(vps => (
            <div key={vps.id} className="col-xl-3">
              <div className="pricing-items">
                <div className="pricing-header">
                  <h5 className="title_plan">
                    {vps.name}
                  </h5>
                  <p className='plan_description'>
                    {vps.description}
                  </p>
                </div>
                <div className="price">
                  <h3 className='plan_price'>{vps.price} <span>/mo</span></h3>
                </div>
                <ul className="pricing-list">
                  {vps.features.map((feature, index) => (
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

export default VpsKvm