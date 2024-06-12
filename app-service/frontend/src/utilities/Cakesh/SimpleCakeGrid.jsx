import React, { useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BlackForestHeartChery from '../../assets/cakesh/simple cake/BLACK FOREST HEART CHERY.png';
import ChocFlower from '../../assets/cakesh/simple cake/CHOCOLATE FLOWER.png';
import CoffeeWithButterCream from '../../assets/cakesh/simple cake/COFFEE WITH BUTTERCREAM.png';
import CreamFlowers from '../../assets/cakesh/simple cake/CREAM FLOWERS.png';
import ExtraChocVanila from '../../assets/cakesh/simple cake/EXTRA CHOCOLATE VANILA.png';
import FruityRedVelvet from '../../assets/cakesh/simple cake/FRUITY RED VELVET.png';
import FudgeChoc from '../../assets/cakesh/simple cake/FUDGE CHOCOLATE.png';
import MaltChoc from '../../assets/cakesh/simple cake/MALT CHOCOLATE.png';
import MangoVanilaFlower from '../../assets/cakesh/simple cake/MANGO VANILA FLOWER.png';
import RedFlowerWithWhiteDot from '../../assets/cakesh/simple cake/RED FLOWER WITH WHITE DOT.png';
import RedVelvet from '../../assets/cakesh/simple cake/RED VELVET.png';
import WhiteChocRedVelvet from '../../assets/cakesh/simple cake/WHITE CHOCOLATE RED VELVET.png';
const SimpleCakeGrid = ({ setSimplecakeNameslist, setSimplecakeslist }) => {
    const [tooltipVisible, setTooltipVisible] = useState(Array(12).fill(false));
    const simplecakesdata = [
        { name: "Black Forest Heart Cherry", image: BlackForestHeartChery },
        { name: "Chocolate Flower", image: ChocFlower },
        { name: "Coffee With Butter Cream", image: CoffeeWithButterCream },
        { name: "Cream Flowers", image: CreamFlowers },
        { name: "Extra Chocolate Vanila", image: ExtraChocVanila },
        { name: "Fruity Red Velvet", image: FruityRedVelvet },
        { name: "Fudge Chocolate", image: FudgeChoc },
        { name: "Malt Chocolate", image: MaltChoc },
        { name: "Mango Vanila Flower", image: MangoVanilaFlower },
        { name: "Red Flower With White Dot", image: RedFlowerWithWhiteDot },
        { name: "Red Velvet", image: RedVelvet },
        { name: "White Chocolate Red Velvet", image: WhiteChocRedVelvet },
    ];
    const handleBtnClick = (cake, index) => {
        console.log("added");
        setSimplecakeNameslist((prevList) => [...prevList, cake.name]);
        setSimplecakeslist((prevList) => [...prevList, cake.image]);
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
            {simplecakesdata.map((cake, index) => (
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
SimpleCakeGrid.propTypes = {
    setSimplecakeNameslist: PropTypes.func.isRequired,
    setSimplecakeslist: PropTypes.func.isRequired,
};
export default SimpleCakeGrid;
