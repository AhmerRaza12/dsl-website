import "../styles.css";
import Topbar from "../components/Topbar";
// import Slideshow from "../components/Slideshow";
import Cardads from "../components/Cardads";
import HeroSection from "../components/HeroSection";
import DeliveryPartners from "../components/DeliveryPartners";
import ChatContainer from "../components/ChatContainer";
import CustomerForms from "../components/CustomerForms";
import Deliver from "../components/Deliver";
import MapSection from "../components/MapSection";
import Slideshow from "../components/Slideshow";
const Homepage = () => {
  return (
    <div className="homepage">
      <Topbar />
      
      <Slideshow />
      <Cardads />
      <HeroSection />
      <CustomerForms/>
      <DeliveryPartners />
      <ChatContainer />
      <Deliver/>
      <MapSection />
    </div>
  );
};

export default Homepage;
