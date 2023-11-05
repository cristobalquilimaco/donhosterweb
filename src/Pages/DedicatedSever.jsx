import dedicatedServer from "../Utils/dedicatedServer"
import icons from "../Utils/icons"

const DedicatedSever = () => {
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
            Dedicated servers
          </h1>
          <p>
            Listed below our awesome hosting packages. You can select any dedicated server services below!
          </p>
        </div>
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