
import './styles/ChooseUs.css'; 
import icons from '../Utils/icons';


const ChooseUs = () => {


  return (
    <section className="choose-section pt-0 pb-120">
      <div className="container">
        <div className="section-header section-center wow fadeInUp" data-wow-delay="0.2s">
          <h2 className="section-title">
          Why Choose Donhoster for Dedicated Server Hosting
          </h2>
          <p>
            Listed below our awesome hosting packages. You can select any web hosting services below!
          </p>
        </div>
        <div className="tweet-slider">
          <div className="choose-item">
            <div className="choose-inner">
              <div className="choose-thumb">
                <img className="i-img" src={icons.i1} alt="i-img" width="70"
        height="65"/>
              </div>
              <h4 className="title">
              Blazing-Fast Performance
              </h4>
              <p className='description_p'>
              Experience 10x faster speeds with our top-tier dedicated servers.
              </p>
            </div>
          </div>
          <div className="choose-item">
  <div className="choose-inner">
    <div className="choose-thumb">
      <img className="i-img" src={icons.i2} alt="i-img" width="70"
        height="65"/>
    </div>
    <h4 className="title">
    Unbeatable Security
    </h4>
    <p className='description_p'>
    Protect your data with our high-level security protocols, powered by the latest technology.
    </p>
  </div>
</div>
<div className="choose-item">
  <div className="choose-inner">
    <div className="choose-thumb">
      <img className="i-img" src={icons.i3} alt="i-img" width="70"
        height="65"/>
    </div>
    <h4 className="title">
    Global Connectivity
    </h4>
    <p className='description_p'>
    Enjoy seamless, high-speed connections anywhere in the world with our robust hosting infrastructure.
    </p>
  </div>
</div>
<div className="choose-item">
  <div className="choose-inner">
    <div className="choose-thumb">
      <img className="i-img" src={icons.i4} alt="i-img" width="70"
        height="65"/>
    </div>
    <h4 className="title">
      24/7 Daily Backup
    </h4>
    <p className='description_p'>
    Rest assured with daily backups to keep your data safe and secure, anytime.
    </p>
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
