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
  <h2 className="section-title">Miami Dedicated Server Plans</h2>
    <p>
      Explore our high-performance dedicated server hosting plans Miami. Choose the perfect solution for your business needs.
    </p>
</div>
        <div className="animatin row g-4 justify-content-center">
          {plans.map(plan => (
            <div key={plan.id} className="col-xl-3">
              <div className="pricing-items">
                <div className="pricing-header">
                  <h3 className="title_plan">
                    {plan.name}
                  </h3>
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
                      <img className="iconcheck" src={icons.check} alt="pricing-img" width="20"
                        height="20"/> {feature}
                    </li>
                  ))}
                </ul>
                <a href={plan.url} className="cmn--btn">
                  <button className='btn__to__server'>Choice Plan</button>
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