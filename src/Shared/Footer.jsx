 import images from "../Utils/images";
 import "../Shared/Styles/Footer.css"

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="container">
        <div className="footer-top pt-120 pb-120">
          <div className="rowg-5">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="widget-items">
                <div className="footer-head">
                  <a href="#0" className="footer-logo">
                    <img className="logo" src={images.logo} alt="logo-img" />
                  </a>
                </div>
                <div className="content-area">
                  <p>
                  Here, you ll discover a treasure trove of invaluable insights and guidelines to maximize your experience with dedicated servers. We offer an array of expert advice and strategies tailored for businesses seeking to elevate their online presence.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="widget-items">
                <div className="footer-head">
                  <h4 className="title">
                    Office
                  </h4>
                </div>
                <div className="content-area">
                  <ul className="footer-contact-list">
                    <li>
                      <div className="icon">
                        <i className="fas fa-phone"></i>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <i className='bx bxs-envelope' ></i>
                      <a href="mailto:example@example.com">
                        admin@donhoster.com
                      </a>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <i className='bx bxs-location-plus' ></i>
                      <span>Miami Usa</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl">
              <div className="widget-items">
                <div className="footer-head">
                  <h4 className="title">
                    Quick Links
                  </h4>
                </div>
                <div className="content-area">
                  <ul className="quick-link">
                    <li className="list_footer_menu">
                      <a href="index.html">
                        Home
                      </a>
                    </li>
                    <li className="list_footer_menu">
                      <a href="about.html">
                        About us
                      </a>
                    </li>
                    <li className="list_footer_menu">
                      <a href="domainname.html">
                        Dedicated server
                      </a>
                    </li>
                    <li className="list_footer_menu">
                      <a href="#0">
                        VPS KVM
                      </a>
                    </li>
                    <li className="list_footer_menu">
                      <a href="hosting.html">
                        Cloud server
                      </a>
                    </li>
                    <li className="list_footer_menu">
                      <a href="contact.html">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="widget-items">
                <div className="footer-head">
                  <h4 className="title">
                    Newsletter
                  </h4>
                </div>
                <p>
                  Subscribe our newsletter to get our latest update & news
                </p>
                <form className="mail-wrapper">
                  <input type="text" placeholder="Your Mail Address" />
                  <button type="submit" value="Submit" className="cmn--btn">
                  <i className='bx bxs-rocket' ></i>
                  </button>
                </form>
                <div className="content-area">
                  <ul className="footer-social">
                    <li>
                      <a href="#0">
                      <i className='bx bxl-facebook-square'></i>
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                      <i className='bx bxl-instagram-alt' ></i>
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                      <i className='bx bxl-twitter' ></i>
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                      <i className='bx bxl-vimeo' ></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright ©2023 <a href="#0" className="text-base">DonHoster</a> All Rights Reserved </p>
          <ul className="footer-bottom-link">
            <li>
              <a href="#0">
                Support
              </a>
            </li>
            <li>
              <a href="#0">
                Services
              </a>
            </li>
            <li>
              <a href="#0">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
