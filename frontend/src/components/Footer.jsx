import React from "react";
import Dsllogo from "../assets/DSL LOGO WITH TAGLINE.png";
import { Link } from "react-router-dom";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {
  CiFacebook,
  CiInstagram,
  CiLinkedin,
  CiTwitter,
  CiYoutube,
} from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="p-4 bg-white-200 sm:p-6 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="grid grid-cols-4 gap-4 sm:gap-2 sm:grid-cols-4">
            <div className="mb-6 md:mb-0 w-48">
              <Link href="/" className="flex ">
                <img src={Dsllogo} className="mr-3 h-40 w-40" alt="DSL Logo" />
              </Link>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Addresses
              </h2>
              <ul className="text-gray-700 dark:text-gray-400">
                <li className="mb-2">
                  <span className="">
                    {" "}
                    <HiOutlineLocationMarker className="inline-block w-4 h-4 mr-1 text-green-500" />
                    Shop GF-41/22 Lavish Mall, near Teen Talwar, Block 8
                    Clifton, Karachi, 75000
                  </span>
                </li>
                <li className="mb-2">
                  <span className="">
                    {" "}
                    <HiOutlineLocationMarker className="inline-block w-4 h-4 mr-1 text-green-500" />
                    Shop G-66 New Jama Mall, M.A Jinnah Rd, Karachi, 75000
                  </span>
                </li>
                <li className="mb-2">
                  <span className="">
                    {" "}
                    <HiOutlineLocationMarker className="inline-block w-4 h-4 mr-1 text-green-500" />
                    Shop GF-41/22 Lavish Mall, near Teen Talwar, Block 8
                    Clifton, Karachi, 75000
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                CONTACT US
              </h2>
              <ul className="text-green-600 dark:text-gray-400">
                <li className="mb-2">
                  <a
                    href="tel:0304-111-4401"
                    className="hover:underline text-green-500"
                  >
                    0304-1114401
                  </a>
                </li>
                <li className="mb-2">
                  <span className="font-bold inline-block">
                    For Complaints:
                  </span>
                  <a
                    href="mailto:cs@dslcourier.com"
                    className="inline-block hover:underline text-green-500"
                  >
                    {" "}
                    cs@dslcourier.com
                  </a>
                </li>
                <li className="mb-2">
                  <span className="font-bold inline-block">
                    Pickup Shipments:
                  </span>
                  <a
                    href="mailto:cs@dslcourier.com"
                    className="inline-block hover:underline text-green-500"
                  >
                    {" "}
                    pickup@dslcourier.com
                  </a>
                </li>
                <li className="mb-2">
                  <span className="font-bold inline-block">Cake Service:</span>
                  <a
                    href="mailto:cs@dslcourier.com"
                    className="inline-block hover:underline text-green-500"
                  >
                    {" "}
                    cakesh@dslcourier.com
                  </a>
                </li>
                <li className="mb-2">
                  <span className="font-bold inline-block">Gift Service:</span>
                  <a
                    href="mailto:cs@dslcourier.com"
                    className="inline-block hover:underline text-green-500"
                  >
                    {" "}
                    feelings@dslcourier.com
                  </a>
                </li>
                <li className="mb-2">
                  <span className="font-bold inline-block">Accounts:</span>
                  <a
                    href="mailto:cs@dslcourier.com"
                    className="inline-block hover:underline text-green-500"
                  >
                    {" "}
                    billing@dslcourier.com
                  </a>
                </li>
                <li className="mb-2">
                  <span className="font-bold inline-block"> Corporate Sales:</span>
                  <a
                    href="mailto:cs@dslcourier.com"
                    className="inline-block hover:underline text-green-500"
                  >
                    {" "}
                    sales@dslcourier.com
                  </a>
                </li>
                <li className="mb-2">
                  <span className="font-bold inline-block">Marketing:</span>
                  <a
                    href="mailto:cs@dslcourier.com"
                    className="inline-block hover:underline text-green-500"
                  >
                    {" "}
                    info@dslcourier.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                CONTACT US
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-2">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className=" text-green-600 font-bold text-lg"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className=" text-green-600 font-bold text-lg"
                  >
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className=" text-green-600 font-bold text-lg"
                  >
                    Services
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className=" text-green-600 font-bold text-lg"
                  >
                    Cakesh
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className=" text-green-600 font-bold text-lg"
                  >
                    Feelings
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className=" text-green-600 font-bold text-lg"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:justify-evenly justify-evenly ">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 ">
            © 2022{" "}
            <a href="/" className="hover:underline">
              DSL Courier™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex  space-x-6 sm:justify-evenly sm:mt-0">
            <a
              href="https://www.facebook.com/dslcourier"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <CiFacebook className="w-6 h-6 " />
            </a>
            <a
              href="https://www.instagram.com/dslcourier"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <CiInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/dslcourier"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <CiLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.twitter.com/dslcourier"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <CiTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCS3nE5TvKd0PkHCg-qN_Uvw"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
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
