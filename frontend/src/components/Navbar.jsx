import "../styles.css";
import PropTypes from 'prop-types'; 
import { Link, useLocation } from "react-router-dom";

const Navbar = ({loggedInName}) => {
  const location = useLocation();
  // const handleActiveLink = (e) => {
  //   const links = document.querySelectorAll(".active-link");
  //   links.forEach((link) => {
  //     link.classList.remove("active-link");
  //   });
  //   e.target.classList.add("active-link");
  // }
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
          <Link
            to="/"
            className={`text-black text-lg hover:text-green-600 transition duration-300 ease-in-out
            ${location.pathname=='/'? 'active-link':''} `}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`text-black text-lg hover:text-green-600 transition duration-300 ease-in-out
            ${location.pathname=='/about'? 'active-link':''}`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className={`text-black text-lg hover:text-green-600 transition duration-300 ease-in-out 
            ${location.pathname=='/services'? 'active-link':''}`}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/cakesh"
            className={`text-black text-lg hover:text-green-600 transition duration-300 ease-in-out 
             ${location.pathname=='/cakesh'? 'active-link':''}`}
          >
            Cakesh
          </Link>
        </li>
        <li>
          <Link
            to="/feelings"
            className={`text-black text-lg hover:text-green-600 transition duration-300 ease-in-out
            ${location.pathname=='/feelings'? 'active-link':''}`}
          
          >
            Feelings
          </Link>
        </li>
        <li>
          <Link
            to="/contact" 
            className={`text-black text-lg hover:text-green-600 transition duration-300 ease-in-out
            ${location.pathname=='/contact'? 'active-link':''}`}
            
          >
          </Link>
        </li>
      </ul>
      {loggedInName ? 
      (
          <p className="text-black">Welcome, <span className="text-green-500">{loggedInName}</span></p>    
      ):(
         <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 ease-in-out">
        Login
      </button>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  loggedInName: PropTypes.string
};

export default Navbar;
