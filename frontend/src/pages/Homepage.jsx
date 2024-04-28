import "../styles.css";
import Topbar from "../components/Topbar";

import Slideshow from "../components/Slideshow";
import Cardads from "../components/Cardads";
import HeroSection from "../components/HeroSection";
import DeliveryPartners from "../components/DeliveryPartners";
import ChatContainer from "../components/ChatContainer";
import CustomerForms from "../components/CustomerForms";
import Deliver from "../components/Deliver";

const Homepage = () => {
  return (
    <div className="homepage">
      <Topbar />
      
      <Slideshow className="mt-5" />
      <Cardads />
      <HeroSection />
      <CustomerForms/>
      <DeliveryPartners />
      <ChatContainer />
      <Deliver/>
    </div>
  );
};

export default Homepage;
