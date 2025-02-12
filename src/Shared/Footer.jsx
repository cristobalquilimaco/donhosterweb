import images from "../Utils/images";
import "../Shared/Styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="container">
        <div className="footer-top pt-120 pb-120">
          <div className="rowg-5">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="widget-items">
                <div className="footer-head">
                  <Link to="/" className="footer-logo">
                    <img className="logo" src={images.logo} alt="Logo de DonHoster - Servidores Dedicados" 
                    width="200" 
                    height="50"
                    />
                  </Link>
                </div>
                <div className="content-area">
                  <p>
                    Here, you’ll discover a treasure trove of invaluable insights and guidelines to maximize your experience with dedicated servers. We offer an array of expert advice and strategies tailored for businesses seeking to elevate their online presence.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="widget-items">
                <div className="footer-head">
                  <h4 className="title">Office</h4>
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
                      <i className='bx bxs-envelope'></i>
                      <a href="mailto:example@example.com">admin@donhoster.com</a>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <i className='bx bxs-location-plus'></i>
                      <span>Miami USA</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl">
              <div className="widget-items">
                <div className="footer-head">
                  <h4 className="title">Quick Links</h4>
                </div>
                <div className="content-area">
                  <ul className="quick-link">
                    <li className="list_footer_menu">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="list_footer_menu">
                      <Link to="/about-donhoster">About us</Link>
                    </li>
                    <li className="list_footer_menu">
                      <Link to="/dedicated-servers">Dedicated server</Link>
                    </li>
                    <li className="list_footer_menu">
                      <Link to="/vps">VPS KVM</Link>
                    </li>
                    <li className="list_footer_menu">
                      <Link to="/cloud">Cloud server</Link>
                    </li>
                    <li className="list_footer_menu">
                      <Link to="https://my.donhoster.com/contact.php">Contact</Link>
                    </li>
                    <li className="list_footer_menu">
                      <Link to="/data-center">Data Center</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="widget-items">
                <div className="footer-head">
                  <h4 className="title">Follow Us</h4>
                </div>
                <div className="content-area">
                  <ul className="footer-social">
                    <li>
                      <Link className="logo__media" to="https://www.facebook.com/Datacenter.Donhoster" aria-label="Visita nuestra página de Facebook">
                        <i className='bx bxl-facebook-square' aria-hidden="true"></i>
                        <span className="social__title">Facebook</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="logo__media" to="https://www.instagram.com/Don_hoster/" aria-label="Visita nuestra cuenta de Instagram">
                        <i className='bx bxl-instagram-alt' aria-hidden="true"></i>
                        <span className="social__title">Instagram</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="logo__media" to="https://twitter.com/Donhoster" aria-label="Visita nuestra cuenta de Twitter">
                        <i className='bx bxl-twitter' aria-hidden="true"></i>
                        <span className="social__title">Twitter</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Copyright ©2023 <Link to="/" className="text-base">DonHoster</Link> All Rights Reserved
          </p>
          <ul className="footer-bottom-link">
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-of-services">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
