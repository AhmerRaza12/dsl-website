import "../styles.css";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Slideshow from "../components/Slideshow";
const Homepage = () => {
  return (
    <div className="homepage">
      <Topbar />
      <Navbar />
      <Slideshow className="mt-5" />
    </div>
  );
};

export default Homepage;
