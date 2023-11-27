import { Helmet, HelmetProvider } from "react-helmet-async"
import Banner from "../Components/Banner"
import ChooseUs from "../Components/ChooseUs"
import SectionDescription from "../Components/SectionDescription"
import Services from "../Components/Services"
import USAOutlineMap from "../Components/USAOutlineMap"
import WhyDonhoster from "../Components/WhyDonhoster"

const Home = () => {
  return (
    <HelmetProvider>
          <div>
            <Helmet>
              <title>DonHoster - Dedicated Server in Miami - Server Hosting</title>
              <meta name="description" content="A brief description of what your page offers or its content. Highlight unique selling points or key features." />
            </Helmet>
        <Banner/>
        <ChooseUs/>
        <Services/>
        <SectionDescription/>
        <WhyDonhoster/>
        <USAOutlineMap/>
    </div>
    </HelmetProvider>

  )
}

export default Home