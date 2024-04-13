import "../styles.css";

const Navbar = () => {
  return (
    <nav
      className="sticky top-0 bg-white shadow-md flex items-center justify-between px-6 py-3 z-40"
      style={{ marginTop: "45px" }} 
    >
      <div className="flex items-center">
        <img src="logo.png" alt="Logo" className="h-8 mr-4" />
      </div>
      <ul className="flex items-center space-x-6">
        <li>
          <a
            href="#"
            className="text-black text-lg hover:text-green-600 transition duration-300 ease-in-out active-link"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-black text-lg hover:text-green-600 transition duration-300 ease-in-out"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-black text-lg hover:text-green-600 transition duration-300 ease-in-out"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-black text-lg hover:text-green-600 transition duration-300 ease-in-out"
          >
            Cakesh
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-black text-lg hover:text-green-600 transition duration-300 ease-in-out"
          >
            Feelings
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-black text-lg hover:text-green-600 transition duration-300 ease-in-out"
          >
            Contact Us
          </a>
        </li>
      </ul>

      <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 ease-in-out">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
