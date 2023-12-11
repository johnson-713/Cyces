import AdditionalFeatures from "../../Components/AdditionalFeatures/AdditionalFeatures";
import BrandLogos from "../../Components/BrandLogos/BrandLogos";
import Footer from "../../Components/Footer/Footer";
import FooterAbove from "../../Components/FooterAbove/FooterAbove";
import Header from "../../Components/Header/Header";
import HubCard from "../../Components/HubCard/HubCard";
import Secondary from "../../Components/Secondary/Secondary";
import TryOut from "../../Components/TryOut/TryOut";
import UseProperties from "../../Components/UseProperties/UseProperties";
import Uses from "../../Components/Uses/Uses";


const MainPage = () => {
  return (
    <div>
      <Header />
      <Secondary />
      <BrandLogos />
      <Uses />
      <TryOut />
      <AdditionalFeatures />
      <UseProperties />
      <HubCard />
      <FooterAbove />
      <Footer />
    </div>
  )
}

export default MainPage;
