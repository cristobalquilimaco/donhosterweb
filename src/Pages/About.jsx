import "../Pages/styles/about.css";
import "../assets/img/banner-about.jpg";
import images from "../Utils/images";
import { Helmet, HelmetProvider } from "react-helmet-async";

const About = () => {
    return (
        <HelmetProvider>
            <div className="about__box">
                <Helmet>
                    <title>Discover the Story of DonHoster | About Us - DonHoster LLC</title>
                    <meta name="description" content="Learn more about DonHoster LLC, a telecommunications and IT consulting company based in Portland, Oregon. Explore our values, mission, and objectives." />
                    <meta name="keywords" content="DonHoster, telecommunications, IT consulting, Data Center services, Portland, Oregon, cloud services, colocation services" />
                    <script type="application/ld+json">
                        {`
                        {
                            "@type": "Organization",
                            "name": "DonHoster LLC",
                            "description": "Telecommunications and IT consulting company in Portland, Oregon",
                            "url": "https://www.donhoster.com",
                        }
                        `}
                    </script>
                    <link rel="canonical" href="https://donhoster.com/" />
                </Helmet>

                <h1 className="about__title">THE COMPANY</h1>
                <h3 className="about__subtitle">Values stem from our focus on customer well-being</h3>
                <div className="about__p">
                    <i className="bx bx-check" /> Ethics &nbsp;
                    <i className="bx bx-check" /> Responsibility &nbsp;
                    <i className="bx bx-check" /> Respect
                </div>

                <div className="about__banner">
                    <img src={images.bannerabout} alt="DonHoster - Providing Telecommunications and IT Consulting Services" />
                </div>

                <p className="about__pp">About <span className="about__span">DonHoster LLC,</span></p>
                <br />      
        <section className="about__txt">
        <p><strong>DonHoster</strong> is a company created in 2017, as a provider of telecommunications, Data Center service and IT consulting, in Portland, Oregon.</p>
        <p><strong className="title_fund">Foundation</strong></p>
        <p>It was born in March 2016, as an idea to provide telecommunications services to a community in Portland, Oregon, to local businesses seeking to expand their profits, without imagining the growth that this would achieve later; and that is why for the year 2017, based on the growth and the demands for services that we obtained, we are forced to move to Miami Florida, associating ourselves with a Data Center; thus emerging in May 2017 officially and online Don Hoster.</p>
        <p><strong className="title_fund">Mission</strong></p>
        <p>Provide IT consulting, Internet services and networks.</p>
        <p>Provide colocation services and dedicated servers.</p>
        <p>Provide services in the cloud, with the best standards of quality and speed.</p>
        <p>For companies, corporations, medium and small businesses, and ordinary people.</p>
        <p><strong className="title_fund">Objectives</strong></p>
        <p>Our objectives, more than business, are always focused on and by customers, always giving the maximum so that they are surprised and satisfied with our products and the attention provided, that these are of the best quality, safe and fast, with the best equipment. quality.</p>
        <p><strong className="title_fund">values</strong></p>
        <p>Ethics, Respect, responsibility, commitment and always being at the forefront with services and the best range in Technology.</p>
        <p><strong>Don Hoster</strong>, the telecommunications company that thinks about its customers; because they are valuable, we strive to innovate and meet all your expectations and more.</p>
        </section>
    </div>
        </HelmetProvider>
    
  );
};

export default About;
