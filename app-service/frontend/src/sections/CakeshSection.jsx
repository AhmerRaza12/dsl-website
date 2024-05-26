import React, { useState } from "react";
import CakeshImg from "../assets/CAKESH LOGO .png";
import SimpleCake from "../assets/cakesh/CREAM-FLOWERS.png";
import PastriesImg from "../assets/cakesh/PINEAPPLE.png";
import ThemedCakeImg from "../assets/cakesh/PUB-G.png";
import CupcakesImg from "../assets/cakesh/ZOO.png";
import CupCakeGrid from "../utilities/Cakesh/CupCakeGrid";

const CakeshSection = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index) => {
    if (activeTab !== index) {
      setActiveTab(index);
    }
  };

  return (
    <>
      <section className="margin">
        <div className="sm:flex items-center max-w-screen-lg">
          <div className="sm:w-1/2 p-3">
            <div className="image object-center text-center">
              <img className="h-[400px]" src={CakeshImg} alt="Cakesh logo" />
            </div>
          </div>
          <div className="sm:w-1/2 p-3">
            <div className="text">
              <span className="text-gray-500 border-b-2 border-lime-500 uppercase">
                Services
              </span>
              <h2 className="my-4 font-bold text-3xl sm:text-4xl">
                Cakesh <span className="text-lime-500">We Bake Happiness</span>
              </h2>
              <p className="text-gray-500">
                {`"CAKESH"`} is a Pakistani Brand. We care not only about our
                company, our products and our staff, but also we consider each
                customer a member in this family of CAKESH. Our mission is to
                make people happy. Making delicious cakes, our prices reasonable
                are all different ways to achieve this goal. Treat yourself with
                the town{`'`}s best freshly baked cakes, brownies, cupcakes and
                pastries. A number of Flavors to choose from.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="margin-left-right">
        <div className="bg-white dark:bg-gray-800 h-fit py-3 sm:py-8 lg:py-12 px-3">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
              <div className="flex items-center gap-12">
                <h2 className="text-3xl font-bold lg:text-3xl dark:text-white">
                  Categories
                </h2>
                <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
                  At Cakesh, we offer a wide variety of freshly baked goodies
                  including cakes, pastries, cupcakes, themed cakes, all crafted
                  to perfection to satisfy your every craving.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-md md:h-80"
              >
                <img
                  src={SimpleCake}
                  loading="lazy"
                  alt="Simple cake"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  Simple Cakes
                </span>
              </a>
              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
              >
                <img
                  src={PastriesImg}
                  loading="lazy"
                  alt="Pastries Image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  Pastries
                </span>
              </a>
              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
              >
                <img
                  src={ThemedCakeImg}
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  Themed Cakes
                </span>
              </a>
              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
              >
                <img
                  src={CupcakesImg}
                  loading="lazy"
                  alt="Photo by Lorenzo Herrera"
                  className="absolute inset-0 h-full w-full object-contain object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  Farmaish Cakes
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="margin">
        <h1 className="my-5 lg:text-5xl text-2xl md:text-4xl font-bold tracking-tight text-gray-900 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-lime-600 to-gray-900">
            Place your Order
          </span>
        </h1>
        <section className="md:flex sm:flex flex lg:flex md:flex-col sm:flex-col flex-col lg:flex-col pb-[80px]  md:items-stretch sm:items-stretch items-stretch lg:items-start md:flex-nowrap sm:flex-nowrap flex-nowrap lg:flex-nowrap md:w-[auto] sm:w-[auto] w-[auto] lg:w-auto md:h-[auto] sm:h-[auto] h-[auto] lg:h-auto md:overflow-visible sm:overflow-visible overflow-visible lg:overflow-auto md:static sm:static static lg:static">
          <div className="flex flex-row gap-2 items-center justify-center flex-wrap border-2 rounded-xl w-fit mx-auto px-6 py-3 max-sm:py-1 max-sm:border-none bg-green-50 max-sm:bg-white">
            <button
              onClick={() => handleTabClick(1)}
              type="button"
              className={`flex rounded-lg uppercase flex-row items-center justify-center focus:outline-none border-none px-3 py-2 ${
                activeTab === 1 ? "active-tab" : "inactive-tab"
              }  `}
            >
              <span className="text-md font-normal">Cupcake</span>
            </button>
            <button
              onClick={() => handleTabClick(2)}
              type="button"
              className={`flex rounded-lg uppercase flex-row items-center justify-center focus:outline-none  px-3 py-2 ${
                activeTab === 2 ? "active-tab" : "inactive-tab"
              }  `}
            >
              <span className="text-md font-normal">Customized Cake</span>
            </button>
            <button
              onClick={() => handleTabClick(3)}
              type="button"
              className={`flex rounded-lg uppercase flex-row items-center justify-center focus:outline-none border-none px-3 py-2 ${
                activeTab === 3 ? "active-tab" : "inactive-tab"
              }  `}
            >
              <span className="text-md font-normal">Farmaish Cake</span>
            </button>
            <button
              onClick={() => handleTabClick(4)}
              type="button"
              className={`flex rounded-lg uppercase flex-row items-center justify-center focus:outline-none border-none px-3 py-2 ${
                activeTab === 4 ? "active-tab" : "inactive-tab"
              }  `}
            >
              <span className="text-md font-normal">pastry</span>
            </button>
            <button
              onClick={() => handleTabClick(5)}
              type="button"
              className={`flex rounded-lg uppercase flex-row items-center justify-center focus:outline-none border-none px-3 py-2 ${
                activeTab === 5 ? "active-tab" : "inactive-tab"
              } `}
            >
              <span className="text-md font-normal">simple cake</span>
            </button>
          </div>
          {/* show cupcake grid below the tabs when cupcake/ tab 1 is clicked */}
          {activeTab === 1 && <CupCakeGrid />}
          

        </section>
      </section>
    </>
  );
};

export default CakeshSection;
