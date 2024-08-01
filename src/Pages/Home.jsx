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
          <title>DonHoster - Dedicated Server in Miami - Server Hosting</title>
          <meta
            name="description"
            content="Discover the best dedicated servers in Miami for your web project with DonHoster. Reliable performance and expert support for your hosting needs."
          />
          <link rel="canonical" href="https://donhoster.com/" />
        </Helmet>
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
