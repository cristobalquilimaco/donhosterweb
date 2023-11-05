import "../Pages/styles/about.css";
import "../assets/img/banner-about.jpg";
import images from "../Utils/images";

const About = () => {
  return (
    <div className="about__box">
        <h1 className="about__title">THE COMPANY</h1>
            <h3 className="about__subtitle"> Values stem from our focus on customer well-being</h3>
    <div className="about__p">
        <i className="bx bx-check" /> Ethics &nbsp;
        <i className="bx bx-check" /> Responsibility &nbsp;
        <i className="bx bx-check" /> Respect
      </div>

    <div className="about__banner">
        <img src={images.bannerabout} alt="" />
    </div>
        <p>About <span className="about__span">DonHoster C.A,</span></p>
        <br/>
        <br/>
      
    <section className="about__txt">
        <p>It is a company focused on the Internet technology industry. Operating
        since 2015, DonHoster Technology and Innovation in professional
        dedicated servers tailored to your needs, is a provider of web hosting
        services, domain registration, VPS, dedicated servers, colocation, SSL
        certificate; always providing the best customer service and with a quick
        response time for each application. It is a 100% committed company, with
        the vision of being able to offer web hosting services to the digital
        market with the highest quality standards and at the best price.</p>
        <br/>

        <p><span className="about__span">Founded</span> on December, 2017, it has grown from a Miami Hosting company, an
        initiative of a group of young professionals with the desire to provide
        companies and people in Latin America , the United States and now the
        rest of the world, solutions to have an Internet presence. This company
        is not only interested in offering you a product and selling it, but
        also in advising and helping you succeed in the global Internet market.
        It is a company specialized in business virtualization technologies and
        the provision of Internet services accessible to individuals and
        professionals, companies, associations and public entities. Currently,
        its servers are located in a data center in the United States, Miami,
        Florida, which not only has the best connectivity and hardware of the
        highest technology, but is also supervised by our group of security
        experts , which position it among the few hosting companies in Latin
        America and the United States to provide a comprehensive security and
        data protection service to our customers</p>
        <br/>

        <p><span className="about__span">Mission</span>
        <br/>• Offer the best services and the most competitive rates to be a leader in the international community. 
        <br/>• Maintain the necessary operational structure and minimize our costs to guarantee our customers better rates, quality and the best service. </p>
        All this oriented to the search of appropriate technologies that guarantee our competitiveness to establish long-term working relationships with our clients. 
        <br/>
        <span className="about__span">Objective</span> Being a company of excellence, to provide customers with the best service in systems,servers, web designs, networks and computers in general, providing security and guarantee of our work. 
        <br/>
        <br/>

        <span className="about__span">Values that do not characterize:</span> Ethics, Responsibility, Commitment and Respect for our clients.
        <br/>
        <br/>

        <span className="about__span">DonHoster C.A.</span> offers its customers innovative products and services
        designed to complement their business whether professional, independent
        or individual. Come and become the number 1 web hosting operator in the
        World, while maintaining high quality with our services.
    </section>
    </div>
);
};

export default About;
