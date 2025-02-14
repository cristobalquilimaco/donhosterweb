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
      <Helmet>
  <title>Premium Dedicated Servers Miami | DonHoster</title>
  <meta
    name="description"
    content="DonHoster provides high-performance dedicated server hosting in Miami with reliable, scalable solutions tailored to your business."
  />
  <meta
    name="keywords"
    content="dedicated servers Miami, VPS hosting Miami, best dedicated servers, reliable VPS, DonHoster, high-performance hosting"
  />
  <meta name="robots" content="index, follow" />
  {/* Cambiar a la URL canónica de la página de inicio si estás en la home */}
  <link rel="canonical" href="https://www.donhoster.com/" />
  
  {/* Cambiar los meta tags para que coincidan con la URL correcta */}
  <meta property="og:title" content="Top Dedicated Servers and VPS Hosting in Miami | DonHoster" />
  <meta property="og:description" content="Discover the best dedicated servers and VPS hosting services in Miami with DonHoster. Enjoy superior performance, reliability, and 24/7 support tailored to your needs." />
  
  {/* Si estás en la página principal, cambia la URL a la principal, no a la dedicada */}
  <meta property="og:url" content="https://www.donhoster.com/" />

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
  
  {/* Script de Google Analytics */}
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-E8HRCWRKGG"></script>
  <script defer>
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-E8HRCWRKGG');
    `}
  </script>

  {/* Preload image (solo si la imagen es crítica para la carga) */}
  <link 
    rel="preload" 
    href="/path/to/img/bannerdataSmall.webp" 
    as="image" 
    type="image/webp" 
    sizes="(max-width: 400px) 400px, (max-width: 1024px) 1024px, 1920px" 
  />
</Helmet>
<div className="container__home">
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
