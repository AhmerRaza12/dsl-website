import React, { useState } from "react";
import CakeshImg from "../assets/CAKESH LOGO .png";
import SimpleCake from "../assets/cakesh/CREAM-FLOWERS.png";
import PastriesImg from "../assets/cakesh/PINEAPPLE.png";
import ThemedCakeImg from "../assets/cakesh/PUB-G.png";
import CupcakesImg from "../assets/cakesh/ZOO.png";

const CakeshSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Simple Cakes", "Pastries", "Themed Cakes", "Cupcakes", "Special Orders"];
  const content = [
    "Content for Simple Cakes",
    "Content for Pastries",
    "Content for Themed Cakes",
    "Content for Cupcakes",
    "Content for Special Orders",
  ];

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
              <span className="text-gray-500 border-b-2 border-lime-500 uppercase">Services</span>
              <h2 className="my-4 font-bold text-3xl sm:text-4xl">
                Cakesh <span className="text-lime-500">We Bake Happiness</span>
              </h2>
              <p className="text-gray-500">
                {`"CAKESH"`} is a Pakistani Brand. We care not only about our company, our products and our staff, but also we
                consider each customer a member in this family of CAKESH. Our mission is to make people happy. Making
                delicious cakes, our prices reasonable are all different ways to achieve this goal. Treat yourself with
                the town{`'`}s best freshly baked cakes, brownies, cupcakes and pastries. A number of Flavors to choose from.
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
                <h2 className="text-3xl font-bold lg:text-3xl dark:text-white">Categories</h2>
                <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
                  At Cakesh, we offer a wide variety of freshly baked goodies including cakes, pastries, cupcakes, themed
                  cakes, all crafted to perfection to satisfy your every craving.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
              <a href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-md md:h-80">
                <img
                  src={SimpleCake}
                  loading="lazy"
                  alt="Simple cake"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Simple Cakes</span>
              </a>
              <a href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img
                  src={PastriesImg}
                  loading="lazy"
                  alt="Pastries Image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Pastries</span>
              </a>
              <a href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img
                  src={ThemedCakeImg}
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Themed Cakes</span>
              </a>
              <a href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img
                  src={CupcakesImg}
                  loading="lazy"
                  alt="Photo by Lorenzo Herrera"
                  className="absolute inset-0 h-full w-full object-contain object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Farmaish Cakes</span>
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
        <div className="container mx-auto p-4">
          <div className="flex flex-wrap -mb-px justify-center sm:justify-start">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`px-4 py-2 mb-2 sm:mb-0 sm:mr-2 text-sm font-medium text-center rounded-t-lg border-b-2 ${
                  activeTab === index
                    ? "text-lime-600 border-lime-600"
                    : "text-gray-600 border-transparent hover:text-gray-800 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="p-4 border rounded-lg">
            <p className="text-gray-700 dark:text-gray-300">{content[activeTab]}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CakeshSection;
