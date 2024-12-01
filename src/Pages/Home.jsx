import { Helmet, HelmetProvider } from "react-helmet-async";
import Banner from "../Components/Banner";
import ChooseUs from "../Components/ChooseUs";
import SectionDescription from "../Components/SectionDescription";
import Services from "../Components/Services";
import USAOutlineMap from "../Components/USAOutlineMap";
import WhyDonhoster from "../Components/WhyDonhoster";
import "../Shared/Styles/Navbar.css"
import "../App.css";

const Home = () => {
  return (
    <HelmetProvider>
      <div className="container__home">
        <Helmet>
          <title>Top Dedicated Servers and VPS Hosting in Miami | DonHoster</title>
          <meta
            name="description"
            content="Discover the best dedicated servers and VPS hosting services in Miami with DonHoster. Enjoy superior performance, reliability, and 24/7 support tailored to your needs."
          />
          <meta
            name="keywords"
            content="dedicated servers Miami, VPS hosting Miami, best dedicated servers, reliable VPS, DonHoster, high-performance hosting"
          />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://www.donhoster.com/" />
          <meta property="og:title" content="Top Dedicated Servers and VPS Hosting in Miami | DonHoster" />
          <meta property="og:description" content="Discover the best dedicated servers and VPS hosting services in Miami with DonHoster. Enjoy superior performance, reliability, and 24/7 support tailored to your needs." />
          <meta property="og:url" content="https://donhoster.com/dedicated-servers-miami" />
          <meta property="og:image" content="https://donhoster.com/images/dedicated-servers-miami-thumbnail.jpg" />
          <meta property="og:image:alt" content="Dedicated Servers in Miami" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="DonHoster" />
          <meta property="og:locale" content="en_US" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@your_twitter_account" />
          <meta name="twitter:title" content="Top Dedicated Servers and VPS Hosting in Miami | DonHoster" />
          <meta name="twitter:description" content="Discover the best dedicated servers and VPS hosting services in Miami with DonHoster. Enjoy superior performance, reliability, and 24/7 support tailored to your needs." />
          <meta name="twitter:image" content="https://donhoster.com/images/dedicated-servers-miami-thumbnail.jpg" />
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "DonHoster",
                "url": "https://donhoster.com/dedicated-servers-miami",
                "description": "Discover the best dedicated servers and VPS hosting services in Miami with DonHoster. Enjoy superior performance, reliability, and 24/7 support tailored to your needs.",
                "publisher": {
                  "@type": "Organization",
                  "name": "DonHoster",
                  "url": "https://donhoster.com"
                },
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://donhoster.com/dedicated-servers-miami"
                },
                "image": "https://donhoster.com/images/dedicated-servers-miami-thumbnail.jpg"
              }
            `}
          </script>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-E8HRCWRKGG"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-E8HRCWRKGG');
            `}
          </script>
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
