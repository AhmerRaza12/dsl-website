import "../styles.css";
import PropTypes from 'prop-types'; 
import React, { useState, useEffect,useRef} from "react";
import { Link, useLocation } from "react-router-dom";
import Dsllogo from '../assets/Dsl logo 150x150-new.png';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  let loggedInName= sessionStorage.getItem('username');
  const dropdownRef = useRef(null);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };


  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  const handleLogout = async () => {
    sessionStorage.removeItem('username');
    const response = await fetch('http://127.0.0.1:5000/admin/logout', {
      method: 'POST',
      credentials: 'include'
    });
    if (response.ok) {
      sessionStorage.removeItem('username');
      loggedInName = null;
      console.log('Logout successful');
      window.location.reload();  
    } else {
      console.error('Logout failed');
    }
  };


  


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isAdminRoute = location.pathname.startsWith('/admin');

  const userLinks = (
    <>
      <Link to="/" className={`text-black text-lg hover:text-green-600 transition duration-300 ease-in-out ${location.pathname === '/' ? 'active-link' : ''}`}>Home</Link>
      <Link to="/about" className={`text-black text-lg hover:text-green-600 transition duration-300 ease-in-out ${location.pathname === '/about' ? 'active-link' : ''}`}>About</Link>
      <Link to="/services" className={`text-black text-lg hover:text-green-600 transition duration-300 ease-in-out ${location.pathname === '/services' ? 'active-link' : ''}`}>Services</Link>
      <Link to="/cakesh" className={`text-black text-lg hover:text-green-600 transition duration-300 ease-in-out ${location.pathname === '/cakesh' ? 'active-link' : ''}`}>Cakesh</Link>
      <Link to="/feelings" className={`text-black text-lg hover:text-green-600 transition duration-300 ease-in-out ${location.pathname === '/feelings' ? 'active-link' : ''}`}>Feelings</Link>
      <Link to="/contact" className={`text-black text-lg hover:text-green-600 transition duration-300 ease-in-out ${location.pathname === '/contact' ? 'active-link' : ''}`}>Contact</Link>
    </>
  );

  const adminLinks = (
    <>
      <Link to="/admin/retail-booking" className={`text-black text-lg hover:text-green-600 transition duration-300 ease-in-out ${location.pathname === '/admin/retail-booking' ? 'active-link' : ''}`}>Retail Booking</Link>
      <Link to="/admin/booking-list" className={`text-black text-lg hover:text-green-600 transition duration-300 ease-in-out ${location.pathname === '/admin/booking-list' ? 'active-link' : ''}`}>Booking List</Link>
      <Link to="/admin/track-entry" className={`text-black text-lg hover:text-green-600 transition duration-300 ease-in-out ${location.pathname === '/admin/track-entry' ? 'active-link' : ''}`}>Track Entry</Link>
      <Link to="/admin/update-booking" className={`text-black text-lg hover:text-green-600 transition duration-300 ease-in-out ${location.pathname === '/admin/update-booking' ? 'active-link' : ''}`}>Update Booking</Link>
    </>
  );

  return (
    <nav className="sticky top-0 bg-white shadow-md flex items-center justify-between px-3 py-1 z-40" style={{ marginTop: "45px" }}>
      <img src={Dsllogo} alt="Logo" className="mr-4 h-20" />
      
      <div className="hidden md:flex items-center space-x-6">
        {isAdminRoute ? adminLinks : userLinks}
      </div>

      <div className="flex items-center space-x-4">
      {loggedInName ? (
          <div className="relative" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="hidden md:block text-black">
              Welcome, <span className="text-green-500 cursor-pointer">{loggedInName}</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-50">
                <ul className="py-1">
                  <li>
                    <Link to="/profile" className="block px-4 py-2 text-black hover:bg-gray-200" onClick={closeDropdown}>Profile</Link>
                  </li>
                  <Link
                      to="/"
                      className="block px-4 py-2 text-black hover:bg-gray-200"
                      onClick={handleLogout}
                    >
                      Logout
                    </Link>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 ease-in-out">Login</Link>
        )}
        
        <button className="md:hidden flex items-center" onClick={toggleDrawer}>
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={closeDrawer}></div>
      )}

      <div className={`fixed top-10 right-0 h-full bg-white shadow-lg z-50 transform ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out w-[200px]`}>
        <div className="flex items-center justify-between p-4">
          <img src={Dsllogo} alt="Logo" className="h-12" />
          <button onClick={closeDrawer}>
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <ul className="flex flex-col items-start space-y-4 p-6">
          {isAdminRoute ? adminLinks : userLinks}
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  loggedInName: PropTypes.string
};

export default Navbar;
