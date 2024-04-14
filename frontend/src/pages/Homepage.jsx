import "../styles.css";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Slideshow from "../components/Slideshow";
import Cardads from "../components/Cardads";
import HeroSection from "../components/HeroSection";
const Homepage = () => {
  return (
    <div className="homepage">
      <Topbar />
      <Navbar />
      <Slideshow className="mt-5" />
      <Cardads />
      <HeroSection />
    </div>
  );
};

export default Homepage;
