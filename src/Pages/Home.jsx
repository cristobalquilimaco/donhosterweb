import { Helmet, HelmetProvider } from "react-helmet-async";
import Banner from "../Components/Banner";
import ChooseUs from "../Components/ChooseUs";
import SectionDescription from "../Components/SectionDescription";
import Services from "../Components/Services";
import USAOutlineMap from "../Components/USAOutlineMap";
import WhyDonhoster from "../Components/WhyDonhoster";
import "../App.css";

const Home = () => {
  return (
    <HelmetProvider>
      <div className="container__home">
      <Helmet>
        <title>Dedicated Servers in Miami - DonHoster</title>
        <meta
    name="description"
    content="Explore DonHoster's top-tier dedicated servers in Miami. Enjoy exceptional performance, reliability, and 24/7 expert support tailored for your web hosting needs."
  />
        <meta name="keywords" content="dedicated servers, Miami dedicated servers, server hosting, reliable servers, DonHoster hosting, web hosting Miami" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://donhoster.com/dedicated-servers-miami" />
        <meta property="og:title" content="Dedicated Servers in Miami - DonHoster" />
        <meta property="og:description" content="Explore DonHoster's top-tier dedicated servers in Miami. Enjoy exceptional performance, reliability, and 24/7 expert support tailored for your web hosting needs." />
        <meta property="og:url" content="https://donhoster.com/dedicated-servers-miami" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://donhoster.com/images/dedicated-servers-miami-thumbnail.jpg" />
        <meta property="og:image:alt" content="Dedicated Servers in Miami" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Helmet>
      <h1 className="sr-only">Dedicated Servers and VPS Hosting in Miami | DonHoster</h1> {/* Encabezado oculto */}
        <Banner />
        <ChooseUs />
        <Services />
        <SectionDescription />
        <WhyDonhoster />
        <USAOutlineMap />
      </div>
    </HelmetProvider>
  );
};

export default Home;
