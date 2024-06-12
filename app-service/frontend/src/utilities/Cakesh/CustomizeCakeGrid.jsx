import React, { useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import BlueBird from '../../assets/cakesh/cutomized cake/BLUE BIRD.png';
import Catey from '../../assets/cakesh/cutomized cake/CATEY.png';
import Dhool from '../../assets/cakesh/cutomized cake/DHOOL.png';
import Doll from '../../assets/cakesh/cutomized cake/DOLL.png';
import PakFlag from '../../assets/cakesh/cutomized cake/PAK FLAG.png';
import Rainbow from '../../assets/cakesh/cutomized cake/RAINBOW.png';
import Zoo from '../../assets/cakesh/cutomized cake/ZOO.png';
import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CustomizeCakeGrid = ({ setCustomizedcakeslist, setCustomizedcakeNameslist}) => {
  const [tooltipVisible, setTooltipVisible] = useState(Array(7).fill(false));
  const customizecakesdata = [
    { name: "Blue Bird", image: BlueBird },
    { name: "Catey", image: Catey },
    { name: "Dhool", image: Dhool },
    { name: "Doll", image: Doll },
    { name: "Pak Flag", image: PakFlag },
    { name: "Rainbow", image: Rainbow },
    { name: "Zoo", image: Zoo },
  ];

  const handleBtnClick = (cake, index) => {
    console.log("added");
    setCustomizedcakeNameslist((prevList) => [...prevList, cake.name]);
    setCustomizedcakeslist((prevList) => [...prevList, cake.image]);
    setTooltipVisible((prev) =>
      prev.map((item, i) => (i === index ? true : item))
    );
    setTimeout(() => {
      setTooltipVisible((prev) =>
        prev.map((item, i) => (i === index ? false : item))
      );
    }, 2000);
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 654 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 654, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="w-full mx-auto h-[500px]">
      <Carousel responsive={responsive} showDots={true} infinite={true} swipeable={true} className="h-[500px]">
        {customizecakesdata.map((cake, index) => (
          <div key={index} className="p-2">
            <div className="relative w-60 shadow-md rounded-xl h-72 max-sm:mx-auto">
              <img
                src={cake.image}
                alt="Product"
                className="h-56 w-full object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-full">
                <div className="flex justify-between items-center">
                  <div className="relative w-full overflow-hidden text-ellipsis whitespace-nowrap pr-8">
                    <p className="text-lg font-bold text-lime-500 block uppercase hover:text-lime-500 duration-500">
                      {cake.name}
                    </p>
                    <div className="absolute bottom-0 left-0 w-2/5 border-b-2 border-black"></div>
                  </div>
                  <button
                    className="relative hover:text-lime-500 duration-500 flex-shrink-0"
                    onClick={() => handleBtnClick(cake, index)}
                  >
                    <CiCircleCheck
                      className={`hover:text-lime-500 duration-500 ${
                        tooltipVisible[index] ? "logo-translate" : ""
                      }`}
                      style={{ fontSize: "34px" }}
                    />
                    {tooltipVisible[index] && (
                      <div className="absolute top-0 right-0 mb-5 font-medium bg-lime-500 text-black shadow-md border-2 border-slate-500 text-xs px-3 py-1 rounded-lg transition-opacity duration-300">
                        Added successfully
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

CustomizeCakeGrid.propTypes = {
  setCustomizedcakeNameslist: PropTypes.func.isRequired,
  setCustomizedcakeslist: PropTypes.func.isRequired,
};

export default CustomizeCakeGrid;
