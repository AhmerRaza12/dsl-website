import "../styles.css";

const Topbar = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full bg-black text-white py-3 px-3 z-50"
      style={{ paddingTop: "10px", paddingBottom: "5px" }}
    >
      <marquee direction="left">Website is in progress</marquee>
    </div>
  );
};

export default Topbar;
