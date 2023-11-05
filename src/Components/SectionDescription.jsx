
import "../Components/styles/SectionDescription.css" 
import images from "../Utils/images";

const SectionDescription = () => {
  return (
    <section className="hosting-section pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hosting-thumb">
              <img className="img_host_big" src={images.hostbig} alt="host-img" />
              <div className="small-host">
                <img className="img_host_small" src={images.hostsmall} alt="s-img" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hosting-content">
              <div className="section-header">
                <h1 className="section-title">
                  We Provide Dedicated server
                </h1>
                <p>
                Whether you are in search of a dedicated server for your personal projects or you require a robust solution for your business needs, our dedicated server services are the perfect choice. We offer powerful and exclusively assigned servers that will not only boost the performance and efficiency of your web applications but will also give you the peace of mind of having a secure and high-performing infrastructure. With our dedicated servers, you ll gain complete control, security, and the capacity your business needs to expand without limitations
                </p>
                <a href="about.html" className="cmn--btn"> {/* Asegúrate de que 'about.html' sea una ruta válida en tu aplicación React */}
                  <button className="btn_learn_more">
                    Learn More
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionDescription;
