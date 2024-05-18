import React, { useState, useEffect } from "react";

const images = [
  "https://images.pexels.com/photos/4246123/pexels-photo-4246123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/12725412/pexels-photo-12725412.jpeg",
  "https://images.pexels.com/photos/5025503/pexels-photo-5025503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

const Slideshow = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative h-96 overflow-hidden">
      <div className="absolute inset-0 flex transition-transform duration-1000"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover opacity-70"
            style={{ minWidth: "100%" }}
          />
        ))}
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold text-black tracking-wide">
            We Deliver{" "}
            <span className="text-green-500">International</span> &{" "}
            <span className="text-green-500">Domestic</span> Courier
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <input
            type="text"
            placeholder="Enter your tracking number"
            className="px-4 py-3 rounded-l-md focus:outline-none text-lg"
            style={{ minWidth: "250px" }}
          />
          <button className="px-6 py-3 bg-green-500 text-white rounded-r-md focus:outline-none text-lg">
            Track
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
