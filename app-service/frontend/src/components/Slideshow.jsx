import React, { useState,useEffect } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "http://images.unsplash.com/photo-1604605801370-3396f9bd9cf0?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "http://images.unsplash.com/photo-1609143739217-01b60dad1c67?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "http://images.unsplash.com/photo-1646143542229-8f8b9ad26747?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "http://plus.unsplash.com/premium_photo-1661526833843-248a2f8fe129?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "http://images.unsplash.com/photo-1607227063002-677dc5fdf96f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 margin">
      <div className="flex h-full flex-col items-center justify-center">
        <h2 className="mb-4 text-center text-3xl font-bold text-balance">
          We Deliver <span className="text-lime-500">International</span> &{" "}
          <span className="text-lime-500">Domestic</span> Courier
        </h2>
        <div className="flex space-x-2">
          <input
            type="text"
            id="email"
            className="w-[200px] uppercase rounded-md bg-gray-50 p-3 text-center text-sm text-black placeholder:text-slate-200 outline-none focus:ring-2 focus:ring-green-500"
            placeholder="DSLFX20245678"
          />
          <button className="px-4 py-2 bg-lime-500 rounded-md text-black outline-none focus:ring-2 focus:ring-green-500">
            Track
          </button>
        </div>
      </div>

      <div className="relative w-full pr-2">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              className={`absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-700 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
              alt={`Slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`h-3 w-3 rounded-full ${
                index === currentSlide ? "bg-white" : "bg-gray-300"
              }`}
              aria-current={index === currentSlide}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>

        <button
          type="button"
          className="group absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
          onClick={prevSlide}
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
            <MdNavigateBefore />
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
          onClick={nextSlide}
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
            <MdNavigateNext />
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </section>
  );
};

export default Slideshow;
