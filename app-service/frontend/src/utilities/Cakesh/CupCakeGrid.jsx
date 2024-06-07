import React, { useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import IceCreamCupcake from "../../assets/cakesh/cupcakes/ICE-CREAM.png";
import BabyBorn from "../../assets/cakesh/cupcakes/BABY-BORN.png";
import Biscuitsinside from "../../assets/cakesh/cupcakes/BISCUITS-INSIDE.png";
import CreamCakes from "../../assets/cakesh/cupcakes/cake-34.png";
import CustomizedCupcake from "../../assets/cakesh/cupcakes/CUSTOMIZED-CUP-CAKES.png";
import PlainFlower from "../../assets/cakesh/cupcakes/PLAIN-FLOWER.png";
import PurpleCupCake from "../../assets/cakesh/cupcakes/PURPLE-CUPCAKE.png";
import RedVelvet from "../../assets/cakesh/cupcakes/RED-VELVET.png";
import SkyCreamChocolate from "../../assets/cakesh/cupcakes/SKY-CREAM-CHOCOLATE.png";
import StrawberryCupCake from "../../assets/cakesh/cupcakes/STRAWBERRY.png";
import TruityFruity from "../../assets/cakesh/cupcakes/TRUITY-FRUITY.png";
import VanillaCupCake from "../../assets/cakesh/cupcakes/VANILA-HEART.png";
import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CupCakeGrid = ({ setCupcakeNameslist, setCupcakeslist }) => {
  const [tooltipVisible, setTooltipVisible] = useState(Array(12).fill(false));
  const cupcakeData = [
    { name: "Ice Cream", image: IceCreamCupcake },
    { name: "Baby Born", image: BabyBorn },
    { name: "Biscuits Inside", image: Biscuitsinside },
    { name: "Cream Cakes", image: CreamCakes },
    { name: "Customized Cup Cake", image: CustomizedCupcake },
    { name: "Plain Flower", image: PlainFlower },
    { name: "Purple Cup Cake", image: PurpleCupCake },
    { name: "Red Velvet", image: RedVelvet },
    { name: "Sky Cream Chocolate", image: SkyCreamChocolate },
    { name: "Strawberry Cup Cake", image: StrawberryCupCake },
    { name: "Truity Fruity", image: TruityFruity },
    { name: "Vanilla Cup Cake", image: VanillaCupCake },
  ];

  const handleBtnClick = (cupcake, index) => {
    console.log("added");
    setCupcakeNameslist((prevList) => [...prevList, cupcake.name]);
    setCupcakeslist((prevList) => [...prevList, cupcake.image]);
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
        {cupcakeData.map((cupcake, index) => (
          <div key={index} className="p-2">
            <div className="relative w-60 shadow-md rounded-xl h-72 max-sm:mx-auto">
              <img
                src={cupcake.image}
                alt="Product"
                className="h-56 w-full object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-full">
                <div className="flex justify-between items-center">
                  <div className="relative w-full overflow-hidden text-ellipsis whitespace-nowrap pr-8">
                    <p className="text-lg font-bold text-lime-500 block uppercase hover:text-lime-500 duration-500">
                      {cupcake.name}
                    </p>
                    <div className="absolute bottom-0 left-0 w-2/5 border-b-2 border-black"></div>
                  </div>
                  <button
                    className="relative hover:text-lime-500 duration-500 flex-shrink-0"
                    onClick={() => handleBtnClick(cupcake, index)}
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

CupCakeGrid.propTypes = {
  setCupcakeNameslist: PropTypes.func.isRequired,
  setCupcakeslist: PropTypes.func.isRequired,
};

export default CupCakeGrid;
