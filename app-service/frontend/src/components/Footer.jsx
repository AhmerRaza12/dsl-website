import React from "react";
import Dsllogo from "../assets/DSL LOGO WITH TAGLINE.png";
import { Link } from "react-router-dom";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {CiFacebook,CiInstagram,CiLinkedin,CiTwitter,CiYoutube} from "react-icons/ci";


const Footer = () => {
  return (
    <footer className="p-4 bg-gray-900 sm:p-6 dark:bg-gray-900">
      
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="grid grid-cols-4 gap-4 max-sm:gap-2 max-sm:grid-cols-1">
            <div className="mb-6 md:mb-0 w-40">
              <Link to="/" className="flex ">
                <img src={Dsllogo} className=" h-40 w-40" alt="DSL Logo" />
              </Link>
              
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Addresses
              </h2>
              <ul className="text-gray-700 dark:text-gray-400">
                <li className="mb-2">
                  <span className="">
                    {" "}
                    <HiOutlineLocationMarker className="inline-block w-4 h-4 mr-1 text-lime-500" />
                    Shop GF-41/22 Lavish Mall, near Teen Talwar, Block 8
                    Clifton, Karachi, 75000
                  </span>
                </li>
                <li className="mb-2">
                  <span className="">
                    {" "}
                    <HiOutlineLocationMarker className="inline-block w-4 h-4 mr-1 text-lime-500" />
                    Shop G-66 New Jama Mall, M.A Jinnah Rd, Karachi, 75000
                  </span>
                </li>
                <li className="mb-2">
                  <span className="">
                    {" "}
                    <HiOutlineLocationMarker className="inline-block w-4 h-4 mr-1 text-lime-500" />
                    Shop GF-41/22 Lavish Mall, near Teen Talwar, Block 8
                    Clifton, Karachi, 75000
                  </span>
                </li>
              </ul>
            </div>
            <div>
  <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
    CONTACT US
  </h2>
  <ul className="text-lime-400 dark:text-gray-400">
    <li className="mb-2">
      <a href="tel:0304-111-4401" className="hover:underline text-lime-500">
        0304-1114401
      </a>
    </li>
    <li className="mb-2">
      <span className="font-bold">For Complaints:</span>
      <a href="mailto:cs@dslcourier.com" className="hover:underline text-lime-500">
        {" "}
        cs@dslcourier.com
      </a>
    </li>
    <li className="mb-2">
      <span className="font-bold">Pickup Shipments:</span>
      <a href="mailto:pickup@dslcourier.com" className="hover:underline text-lime-500">
        {" "}
        pickup@dslcourier.com
      </a>
    </li>
    <li className="mb-2">
      <span className="font-bold">Cake Service:</span>
      <a href="mailto:cakesh@dslcourier.com" className="hover:underline text-lime-500">
        {" "}
        cakesh@dslcourier.com
      </a>
    </li>
    <li className="mb-2">
      <span className="font-bold">Gift Service:</span>
      <a href="mailto:feelings@dslcourier.com" className="hover:underline text-lime-500">
        {" "}
        feelings@dslcourier.com
      </a>
    </li>
    <li className="mb-2">
      <span className="font-bold">Accounts:</span>
      <a href="mailto:billing@dslcourier.com" className="hover:underline text-lime-500">
        {" "}
        billing@dslcourier.com
      </a>
    </li>
    <li className="mb-2">
      <span className="font-bold">Corporate Sales:</span>
      <a href="mailto:sales@dslcourier.com" className="hover:underline text-lime-500">
        {" "}
        sales@dslcourier.com
      </a>
    </li>
    <li className="mb-2">
      <span className="font-bold">Marketing:</span>
      <a href="mailto:info@dslcourier.com" className="hover:underline text-lime-500">
        {" "}
        info@dslcourier.com
      </a>
    </li>
  </ul>
</div>

<div className="text-center sm:text-left">
  <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
    Top Links
  </h2>
  <ul className="text-gray-600 dark:text-gray-400 sm:text-left text-center flex flex-col sm:items-start items-center">
    <li className="mb-2">
      <Link
        to='/'
        className=" text-lime-600 font-bold text-lg transition duration-300 ease-in-out hover:text-lime-400"
      >
        Home
      </Link>
    </li>
    <li className="mb-2">
      <Link
        to='/about'
        href="https://www.dslcourier.com/about-us/"
        className=" text-lime-600 font-bold text-lg transition duration-300 ease-in-out hover:text-lime-400"
      >
        About Us
      </Link>
    </li>
    <li className="mb-2">
      <Link
        to='/services'
        href="https://www.dslcourier.com/services/"
        className=" text-lime-600 font-bold text-lg transition duration-300 ease-in-out hover:text-lime-400"
      >
        Services
      </Link>
    </li>
    <li className="mb-2">
      <Link
        to='/cakesh'
        href="https://www.dslcourier.com/cakesh/"
        className=" text-lime-600 font-bold text-lg transition duration-300 ease-in-out hover:text-lime-400"
      >
        Cakesh
      </Link>
    </li>
    <li className="mb-2">
      <Link
        to='/feelings'
        href="https://www.dslcourier.com/feelings/"
        className=" text-lime-600 font-bold text-lg transition duration-300 ease-in-out hover:text-lime-400"
      >
        Feelings
      </Link>
    </li>
    <li className="mb-2">
      <Link
        to='/contact'
        href="https://www.dslcourier.com/contact-us/"
        className=" text-lime-600 font-bold text-lg transition duration-300 ease-in-out hover:text-lime-400"
      >
        Contact Us
      </Link>
    </li>
  </ul>
</div>


            
            
          </div>
        </div>
        <hr className="h-1 mt-4 mb-2 bg-lime-500 border-0 dark:bg-gray-700 w-3/4 mx-auto"/>
        <div className="sm:flex sm:justify-evenly justify-evenly ">
        
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 ">
            © 2024{" "}
            <a href="/" className="hover:underline">
              
              DSL Courier™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex  space-x-6  max-sm:justify-end max-sm:mt-5 max-sm:mb-10">
            <a
              href="https://www.facebook.com/dslcourier"
              className="text-gray-500 hover:text-lime-400 dark:hover:text-white"
            >
              <CiFacebook className="w-6 h-6 " />
            </a>
            <a
              href="https://www.instagram.com/dslcourier"
              className="text-gray-500 hover:text-lime-400 dark:hover:text-white"
            >
              <CiInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/dslcourier"
              className="text-gray-500 hover:text-lime-400 dark:hover:text-white"
            >
              <CiLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.twitter.com/dslcourier"
              className="text-gray-500 hover:text-lime-400 dark:hover:text-white"
            >
              <CiTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCS3nE5TvKd0PkHCg-qN_Uvw"
              className="text-gray-500 hover:text-lime-400 dark:hover:text-white"
            >
              <CiYoutube className="w-6 h-6" />
            </a>
          </div>
          
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
