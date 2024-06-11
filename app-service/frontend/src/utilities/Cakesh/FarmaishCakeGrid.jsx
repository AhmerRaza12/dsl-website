import React, { useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Army from '../../assets/cakesh/farmish cake/ARMY.png';
import Doremon from '../../assets/cakesh/farmish cake/DOREMON.png';
import feeder from '../../assets/cakesh/farmish cake/FIDDER.png';
import Guitar from '../../assets/cakesh/farmish cake/GHITAR.png';
import Kidney from '../../assets/cakesh/farmish cake/KIDNEY.png';
import Liver from '../../assets/cakesh/farmish cake/LIVER.png';
import Nikkah from '../../assets/cakesh/farmish cake/NIKKAH.png';
import Pubg from '../../assets/cakesh/farmish cake/PUB G.png';
import TikTok from '../../assets/cakesh/farmish cake/TIK TOK.png';

const FarmaishCakeGrid = ({setFarmaishcakeNameslist,setFarmaishcakeslist}) => {
const [tooltipVisible, setTooltipVisible] = useState(Array(9).fill(false));
  const farmaishcakesdata= [
    { name: "Army", image: Army },
    { name: "Doremon", image: Doremon },
    { name: "Feeder", image: feeder },
    { name: "Guitar", image: Guitar },
    { name: "Kidney", image: Kidney },
    { name: "Liver", image: Liver },
    { name: "Nikkah", image: Nikkah },
    { name: "Pubg", image: Pubg },
    { name: "TikTok", image: TikTok },
  ];
  const handleBtnClick = (cake, index) => {
    console.log("added");
    setFarmaishcakeNameslist((prevList) => [...prevList, cake.name]);
    setFarmaishcakeslist((prevList) => [...prevList, cake.image]);
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
        {farmaishcakesdata.map((cake, index) => (
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
}
FarmaishCakeGrid.propTypes = {
    setFarmaishcakeNameslist: PropTypes.func.isRequired,
    setFarmaishcakeslist: PropTypes.func.isRequired,
  };

export default FarmaishCakeGrid