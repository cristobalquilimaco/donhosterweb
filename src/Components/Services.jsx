import icons from '../Utils/icons';
import plans from '../Utils/plans';
import "../Components/styles/Services.css"

import useScrollEffect from '../hooks/useScrollEffect';

const Services = () => {

useScrollEffect(['.animatin'], 0.75)

  return (
    <section className="pricing-section pt-120 pb-120">
      <div className="container">
        <div className="section-header section-center">
          <h1 className="section-title">
            Our Plans
          </h1>
          <p>
            Listed below our awesome hosting packages. You can select any dedicated server services below!
          </p>
        </div>
        <div className="animatin row g-4 justify-content-center">
          {plans.map(plan => (
            <div key={plan.id} className="col-xl-3">
              <div className="pricing-items">
                <div className="pricing-header">
                  <h5 className="title_plan">
                    {plan.name}
                  </h5>
                  <p className='plan_description'>
                    {plan.description}
                  </p>
                </div>
                <div className="price">
                  <h3 className='plan_price'>{plan.price} <span>/mo</span></h3>
                </div>
                <ul className="pricing-list">
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <img className="iconcheck" src={icons.check} alt="pricing-img" /> {feature}
                    </li>
                  ))}
                </ul>
                <a href={plan.url} className="cmn--btn">
                  <button className='choice_plan-btn'>Choice Plan</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;