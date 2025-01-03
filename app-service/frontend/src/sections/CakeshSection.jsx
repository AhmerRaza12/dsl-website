import React, { useState, useEffect } from "react";
import CakeshImg from "../assets/CAKESH LOGO .png";
import SimpleCake from "../assets/cakesh/CREAM-FLOWERS.png";
import PastriesImg from "../assets/cakesh/PINEAPPLE.png";
import ThemedCakeImg from "../assets/cakesh/PUB-G.png";
import CupcakesImg from "../assets/cakesh/ZOO.png";
import CupCakeGrid from "../utilities/Cakesh/CupCakeGrid";
import CustomizeCakeGrid from "../utilities/Cakesh/CustomizeCakeGrid";
import FarmaishCakeGrid from "../utilities/Cakesh/FarmaishCakeGrid";
import PastryGrid from "../utilities/Cakesh/PastryGrid";
import SimpleCakeGrid from "../utilities/Cakesh/SimpleCakeGrid";
const CakeshSection = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [cupcakeslist, setCupcakeslist] = useState([]);
  const [cupcakeNameslist, setCupcakeNameslist] = useState([]);
  const [customizedcakeNameslist, setCustomizedcakeNameslist] = useState([]);
  const [customizedcakeslist, setCustomizedcakeslist] = useState([]);
  const [cupcakeQuantities, setCupcakeQuantities] = useState([]);
  const [customizedcakeQuantities, setCustomizedcakeQuantities] = useState([]);
  const [farmaishcakeNameslist, setFarmaishcakeNameslist] = useState([]);
  const [farmaishcakeslist, setFarmaishcakeslist] = useState([]);
  const [farmaishcakeQuantities, setFarmaishcakeQuantities] = useState([]);
  const [pastryNameslist, setPastryNameslist] = useState([]);
  const [pastrylist, setPastrylist] = useState([]);
  const [pastryQuantities, setPastryQuantities] = useState([]);
  const [simplecakeNameslist, setSimplecakeNameslist] = useState([]);
  const [simplecakeslist, setSimplecakeslist] = useState([]);
  const [simplecakeQuantities, setSimplecakeQuantities] = useState([]);

  useEffect(() => {
    setCupcakeQuantities(Array(cupcakeslist.length).fill(1));
  }, [cupcakeslist.length]);
  
  useEffect(() => {
    setCustomizedcakeQuantities(Array(customizedcakeslist.length).fill(1));
  }, [customizedcakeslist.length]);
  
  useEffect(() => {
    setFarmaishcakeQuantities(Array(farmaishcakeslist.length).fill(1));
  }, [farmaishcakeslist.length]);

  useEffect(() => {
    setPastryQuantities(Array(pastrylist.length).fill(1));
  }, [pastrylist.length]);

  useEffect(() => {
    setSimplecakeQuantities(Array(simplecakeslist.length).fill(1));
  }, [simplecakeslist.length]);

  const handleTabClick = (index) => {
    if (activeTab !== index) {
      setActiveTab(index);
    }
  };

  const handleIncrement = (event, index) => {
    event.preventDefault();
    if (index < cupcakeslist.length) {
      setCupcakeQuantities((prevQuantities) =>
        prevQuantities.map((qty, i) => (i === index ? qty + 1 : qty))
      );
    } else if (index < cupcakeslist.length + customizedcakeslist.length) {
      const newIndex = index - cupcakeslist.length;
      setCustomizedcakeQuantities((prevQuantities) =>
        prevQuantities.map((qty, i) => (i === newIndex ? qty + 1 : qty))
      );
    } else if (index < cupcakeslist.length + customizedcakeslist.length + farmaishcakeslist.length) {
      const newIndex = index - cupcakeslist.length - customizedcakeslist.length;
      setFarmaishcakeQuantities((prevQuantities) =>
        prevQuantities.map((qty, i) => (i === newIndex ? qty + 1 : qty))
      );
    } else if (index < cupcakeslist.length + customizedcakeslist.length + farmaishcakeslist.length + pastrylist.length) {
      const newIndex = index - cupcakeslist.length - customizedcakeslist.length - farmaishcakeslist.length;
      setPastryQuantities((prevQuantities) =>
        prevQuantities.map((qty, i) => (i === newIndex ? qty + 1 : qty))
      );
    } else {
      const newIndex = index - cupcakeslist.length - customizedcakeslist.length - farmaishcakeslist.length - pastrylist.length;
      setSimplecakeQuantities((prevQuantities) =>
        prevQuantities.map((qty, i) => (i === newIndex ? qty + 1 : qty))
      );
    }
  };

  const handleDecrement = (event, index) => {
    event.preventDefault();
    if (index < cupcakeslist.length) {
      setCupcakeQuantities((prevQuantities) =>
        prevQuantities.map((qty, i) => (i === index && qty > 1 ? qty - 1 : qty))
      );
    } else if (index < cupcakeslist.length + customizedcakeslist.length) {
      const newIndex = index - cupcakeslist.length;
      setCustomizedcakeQuantities((prevQuantities) =>
        prevQuantities.map((qty, i) => (i === newIndex && qty > 1 ? qty - 1 : qty))
      );
    } else if (index < cupcakeslist.length + customizedcakeslist.length + farmaishcakeslist.length) {
      const newIndex = index - cupcakeslist.length - customizedcakeslist.length;
      setFarmaishcakeQuantities((prevQuantities) =>
        prevQuantities.map((qty, i) => (i === newIndex && qty > 1 ? qty - 1 : qty))
      );
    } else if (index < cupcakeslist.length + customizedcakeslist.length + farmaishcakeslist.length + pastrylist.length) {
      const newIndex = index - cupcakeslist.length - customizedcakeslist.length - farmaishcakeslist.length;
      setPastryQuantities((prevQuantities) =>
        prevQuantities.map((qty, i) => (i === newIndex && qty > 1 ? qty - 1 : qty))
      );
    } else {
      const newIndex = index - cupcakeslist.length - customizedcakeslist.length - farmaishcakeslist.length - pastrylist.length;
      setSimplecakeQuantities((prevQuantities) =>
        prevQuantities.map((qty, i) => (i === newIndex && qty > 1 ? qty - 1 : qty))
      );
    }
  };
  
  const handleDelete = (index) => {
    if (index < cupcakeslist.length) {
      setCupcakeslist(cupcakeslist.filter((_, i) => i !== index));
      setCupcakeNameslist(cupcakeNameslist.filter((_, i) => i !== index));
      setCupcakeQuantities(cupcakeQuantities.filter((_, i) => i !== index));
    } else if (index < cupcakeslist.length + customizedcakeslist.length) {
      const newIndex = index - cupcakeslist.length;
      setCustomizedcakeslist(customizedcakeslist.filter((_, i) => i !== newIndex));
      setCustomizedcakeNameslist(customizedcakeNameslist.filter((_, i) => i !== newIndex));
      setCustomizedcakeQuantities(customizedcakeQuantities.filter((_, i) => i !== newIndex));
    } else if (index < cupcakeslist.length + customizedcakeslist.length + farmaishcakeslist.length) {
      const newIndex = index - cupcakeslist.length - customizedcakeslist.length;
      setFarmaishcakeslist(farmaishcakeslist.filter((_, i) => i !== newIndex));
      setFarmaishcakeNameslist(farmaishcakeNameslist.filter((_, i) => i !== newIndex));
      setFarmaishcakeQuantities(farmaishcakeQuantities.filter((_, i) => i !== newIndex));
    } else if (index < cupcakeslist.length + customizedcakeslist.length + farmaishcakeslist.length + pastrylist.length) {
      const newIndex = index - cupcakeslist.length - customizedcakeslist.length - farmaishcakeslist.length;
      setPastrylist(pastrylist.filter((_, i) => i !== newIndex));
      setPastryNameslist(pastryNameslist.filter((_, i) => i !== newIndex));
      setPastryQuantities(pastryQuantities.filter((_, i) => i !== newIndex));
    } else {
      const newIndex = index - cupcakeslist.length - customizedcakeslist.length - farmaishcakeslist.length - pastrylist.length;
      setSimplecakeslist(simplecakeslist.filter((_, i) => i !== newIndex));
      setSimplecakeNameslist(simplecakeNameslist.filter((_, i) => i !== newIndex));
      setSimplecakeQuantities(simplecakeQuantities.filter((_, i) => i !== newIndex));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Gather form data
    const formData = new FormData(event.target);
  
    // Extract form fields
    const customerData = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      address: formData.get('address'),
      consignee: {
        name: formData.get('consignee_name'),
        phone: formData.get('consignee_phone'),
        email: formData.get('consignee_email'),
        address: formData.get('consignee_address'),
      },
      message: formData.get('message'),
    };
  
   
    const allCakesList = [...cupcakeslist, ...customizedcakeslist, ...farmaishcakeslist, ...pastrylist, ...simplecakeslist];
    const allCakesNamesList = [...cupcakeNameslist, ...customizedcakeNameslist, ...farmaishcakeNameslist, ...pastryNameslist, ...simplecakeNameslist];
    const allQuantities = [...cupcakeQuantities, ...customizedcakeQuantities, ...farmaishcakeQuantities, ...pastryQuantities, ...simplecakeQuantities];
  
    const orderDetails = allCakesList.map((item, index) => ({
      item,
      name: allCakesNamesList[index],
      quantity: allQuantities[index],
    }));
  
   
    console.log('Customer Data:', customerData);
    console.log('Order Details:', orderDetails);
  

  };

  const renderOrderDetails = () => {
    const allCakesList = [...cupcakeslist, ...customizedcakeslist, ...farmaishcakeslist, ...pastrylist, ...simplecakeslist];
    const allCakesNamesList = [...cupcakeNameslist, ...customizedcakeNameslist, ...farmaishcakeNameslist , ...pastryNameslist, ...simplecakeNameslist];
    const allQuantities = [...cupcakeQuantities, ...customizedcakeQuantities, ...farmaishcakeQuantities, ...pastryQuantities, ...simplecakeQuantities];
  
    return (
      <div className="py-8 w-full sm:w-1/2 relative bg-gray-200">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold mb-4 text-center">Order Details</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="bg-white rounded-lg shadow-md p-4 w-full">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-semibold">Product</th>
                    <th className="text-left font-semibold">Quantity</th>
                    <th className="text-left font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {allCakesList.map((item, index) => (
                    <tr key={index}>
                      <td className="py-4 ">
                        <div className="flex items-center">
                          <img className="h-16 w-16 mr-4 " src={item} alt="Product" />
                          <span className="font-semibold">{allCakesNamesList[index]}</span>
                        </div>
                      </td>
                      <td className="py-4">
                        <div className="flex items-center">
                          <button
                            onClick={(event) => handleDecrement(event, index)}
                            className="py-1 px-2 mr-2 focus:text-lime-400 text-4xl"
                          >
                            -
                          </button>
                          <span className="text-center w-3">{allQuantities[index]}</span>
                          <button
                            onClick={(event) => handleIncrement(event, index)}
                            className="py-1 px-2 ml-2 focus:text-lime-400 text-4xl text-center"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-4">
                        <button
                          onClick={() => handleDelete(index)}
                          className="text-slate-800 hover:text-red-500 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-lg font-medium px-2 py-2 inline-flex space-x-1 items-center"
                        >
                          <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                          </span>
                          <span className="hidden md:inline-block">Delete</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
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
                  alt="Pastries"
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
                  alt="Themed cake"
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
                  alt="Cupcakes"
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
        <section className="flex flex-col lg:items-start pb-[80px] items-stretch overflow-auto">
          <div className="flex flex-row gap-2 items-center justify-center flex-wrap border-2 rounded-xl w-fit mx-auto px-6 py-3 max-sm:py-1 max-sm:border-none bg-green-50 max-sm:bg-white">
            <button
              onClick={() => handleTabClick(1)}
              type="button"
              className={`flex rounded-lg uppercase flex-row items-center justify-center focus:outline-none px-3 py-2 ${
                activeTab === 1 ? "active-tab" : "inactive-tab"
              }`}
            >
              <span className="text-md font-normal">Cupcake</span>
            </button>
            <button
              onClick={() => handleTabClick(2)}
              type="button"
              className={`flex rounded-lg uppercase flex-row items-center justify-center focus:outline-none px-3 py-2 ${
                activeTab === 2 ? "active-tab" : "inactive-tab"
              }`}
            >
              <span className="text-md font-normal">Customized Cake</span>
            </button>
            <button
              onClick={() => handleTabClick(3)}
              type="button"
              className={`flex rounded-lg uppercase flex-row items-center justify-center focus:outline-none px-3 py-2 ${
                activeTab === 3 ? "active-tab" : "inactive-tab"
              }`}
            >
              <span className="text-md font-normal">Farmaish Cake</span>
            </button>
            <button
              onClick={() => handleTabClick(4)}
              type="button"
              className={`flex rounded-lg uppercase flex-row items-center justify-center focus:outline-none px-3 py-2 ${
                activeTab === 4 ? "active-tab" : "inactive-tab"
              }`}
            >
              <span className="text-md font-normal">Pastry</span>
            </button>
            <button
              onClick={() => handleTabClick(5)}
              type="button"
              className={`flex rounded-lg uppercase flex-row items-center justify-center focus:outline-none px-3 py-2 ${
                activeTab === 5 ? "active-tab" : "inactive-tab"
              }`}
            >
              <span className="text-md font-normal">Simple Cake</span>
            </button>
          </div>
          {activeTab === 1 && (
            <CupCakeGrid
              setCupcakeslist={setCupcakeslist}
              setCupcakeNameslist={setCupcakeNameslist}
            />
          )}
          {activeTab === 2 && (
            <CustomizeCakeGrid
              setCustomizedcakeslist={setCustomizedcakeslist}
              setCustomizedcakeNameslist={setCustomizedcakeNameslist}
            />
          )}
          {activeTab === 3 && (
            <FarmaishCakeGrid
              setFarmaishcakeslist={setFarmaishcakeslist}
              setFarmaishcakeNameslist={setFarmaishcakeNameslist}
            />
          )}
          {activeTab === 4 && (
            <PastryGrid
              setPastrylist={setPastrylist}
              setPastryNameslist={setPastryNameslist}
            />
          )}
          {activeTab === 5 && (
            <SimpleCakeGrid
              setSimplecakeslist={setSimplecakeslist}
              setSimplecakeNameslist={setSimplecakeNameslist}
            />
          )}
        </section>
      </section>
      <section className="margin">
      <form onSubmit={handleSubmit}>
  <div className="flex justify-center p-6 gap-4 max-sm:block">
    {renderOrderDetails()}
    <div className="mx-auto w-1/2 bg-white max-sm:w-full">
      <div className="flex flex-row gap-2 max-md:flex-none max-md:block">
        <div className="mb-2">
          <label htmlFor="name" className="mb-3 block text-base font-medium text-[#62ca54]">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#61ca4cdc] focus:shadow-md"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#62ca54]">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Enter your phone number"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#61ca4cdc] focus:shadow-md"
          />
        </div>
      </div>

      <div className="mb-2">
        <label htmlFor="email" className="mb-3 block text-base font-medium text-[#62ca54]">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#61ca4cdc] focus:shadow-md"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="address" className="mb-3 block text-base font-medium text-[#62ca54]">
          Your Address
        </label>
        <input
          type="text"
          name="address"
          id="address"
          placeholder="Enter Your Address"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#61ca4cdc] focus:shadow-md"
        />
      </div>

      <div className="mb-5 pt-3">
        <label className="mb-5 block text-base font-semibold text-[#62ca54] sm:text-xl">Consignee Details</label>
        <div className="flex flex-row gap-2 max-md:flex-none max-md:block">
          <div className="mb-2">
            <label htmlFor="consignee_name" className="mb-3 block text-base font-medium text-[#62ca54]">
              Consignee Name
            </label>
            <input
              type="text"
              name="consignee_name"
              id="consignee_name"
              placeholder="Enter Consignee Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#61ca4cdc] focus:shadow-md"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="consignee_phone" className="mb-3 block text-base font-medium text-[#62ca54]">
              Consignee Number
            </label>
            <input
              type="text"
              name="consignee_phone"
              id="consignee_phone"
              placeholder="Enter Consignee Number"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#61ca4cdc] focus:shadow-md"
            />
          </div>
        </div>

        <div className="mb-2">
          <label htmlFor="consignee_email" className="mb-3 block text-base font-medium text-[#62ca54]">
            Consignee Email
          </label>
          <input
            type="email"
            name="consignee_email"
            id="consignee_email"
            placeholder="Enter Consignee email"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#61ca4cdc] focus:shadow-md"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="consignee_address" className="mb-3 block text-base font-medium text-[#62ca54]">
            Consignee Address
          </label>
          <input
            type="text"
            name="consignee_address"
            id="consignee_address"
            placeholder="Enter Consignee Address"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#61ca4cdc] focus:shadow-md"
          />
        </div>
      </div>
      <div className="mb-2">
        <label htmlFor="message" className="mb-3 block text-base font-medium text-[#62ca54]">
          Message For Consignee
        </label>
        <textarea
          rows={2}
          name="message"
          id="message"
          placeholder="Enter message for consignee"
          className="w-full border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#687280] outline-none focus:border-[#61ca4cdc] focus:shadow-md resize-none rounded-md"
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          className="hover:shadow-form w-full rounded-md bg-[#61ca4cdc] py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          Place Order
        </button>
      </div>
    </div>
  </div>
</form>;
        </section>
    </>
  );
};

export default CakeshSection;