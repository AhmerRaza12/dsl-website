import "../styles.css";
import PropTypes from 'prop-types'; 
import React from "react";
import { Link, useLocation,  } from "react-router-dom";
import Dsllogo from '../assets/Dsl logo 150x150-new.png';
const Navbar = ({loggedInName}) => {
  // const navigate = useNavigate();
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
      className="sticky top-0 bg-white shadow-md flex items-center justify-between  px-3 py-1 z-40"
      style={{ marginTop: "45px" }} 
    >
      <img src={Dsllogo} alt="Logo" className="mr-4 h-20"  />
     
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
         <Link to="/login"  className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 ease-in-out">
        Login
      </Link>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  loggedInName: PropTypes.string
};

export default Navbar;
