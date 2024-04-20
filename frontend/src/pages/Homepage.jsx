import "../styles.css";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Slideshow from "../components/Slideshow";
import Cardads from "../components/Cardads";
import HeroSection from "../components/HeroSection";
import DeliveryPartners from "../components/DeliveryPartners";
import ChatContainer from "../components/ChatContainer";
const Homepage = () => {
  return (
    <div className="homepage">
      <Topbar />
      <Navbar />
      <Slideshow className="mt-5" />
      <Cardads />
      <HeroSection />
      <DeliveryPartners />
      <ChatContainer />
    </div>
  );
};

export default Homepage;
