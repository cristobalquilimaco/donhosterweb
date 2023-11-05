import vpsKvm from "../Utils/vpsKvm"
import icons from "../Utils/icons"

const VpsKvm = () => {
  return (
    <div>
        <section className="banner_section">
        </section>
        <section className="pricing-section pt-120 pb-120">
      <div className="choose-bg">
  
      </div>
      <div className="container">
        <div className="section-header section-center">
          <h1 className="section-title">
            VPS - KVM
          </h1>
          <p>
          Designed to meet and exceed your performance expectations.
          </p>
          <p>
          VPS Proxmox Control Panel  99.9% Availability Guarantee  S.O Windows & Linux
          </p>
        </div>
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