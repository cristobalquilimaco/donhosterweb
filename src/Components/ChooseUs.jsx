
import './styles/ChooseUs.css'; 
import icons from '../Utils/icons';


const ChooseUs = () => {


  return (
    <section className="choose-section pt-120 pb-120">
      <div className="container">
        <div className="section-header section-center wow fadeInUp" data-wow-delay="0.2s">
          <h2 className="section-title">
            Why Choose Us
          </h2>
          <p>
            Listed below our awesome hosting packages. You can select any web hosting services below!
          </p>
        </div>
        {/* Replace the following div with your chosen React carousel component */}
        <div className="tweet-slider">
          <div className="choose-item">
            <div className="choose-inner">
              <div className="choose-thumb">
                <img className="i-img" src={icons.i1} alt="i-img" />
              </div>
              <h4 className="title">
                10x Faster Features
              </h4>
              <p className='description_p'>
                Our free web hosting is powered by top...
              </p>
            </div>
          </div>
          <div className="choose-item">
  <div className="choose-inner">
    <div className="choose-thumb">
      <img className="i-img" src={icons.i2} alt="i-img" />
    </div>
    <h4 className="title">
      Feed & High-Security
    </h4>
    <p className='description_p'>
      Our free web hosting is powered by top...
    </p>
  </div>
</div>
<div className="choose-item">
  <div className="choose-inner">
    <div className="choose-thumb">
      <img className="i-img" src={icons.i3} alt="i-img" />
    </div>
    <h4 className="title">
      Worldwide Connection
    </h4>
    <p className='description_p'>
      Our free web hosting is powered by top...
    </p>
  </div>
</div>
<div className="choose-item">
  <div className="choose-inner">
    <div className="choose-thumb">
      <img className="i-img" src={icons.i4} alt="i-img" />
    </div>
    <h4 className="title">
      24/7 Daily Backup
    </h4>
    <p className='description_p'>
      Our free web hosting is powered by top...
    </p>
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
