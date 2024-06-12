import React, { useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ChocInsideCream from '../../assets/cakesh/pastry/CHOCOLATE INSIDE CREAM LYER.png';
import ChocWithCherry from '../../assets/cakesh/pastry/CHOCOLATE WITH CHERY.png';
import CreamJam from '../../assets/cakesh/pastry/CREAM JAM.png';
import CreamJelly from '../../assets/cakesh/pastry/CREAM JELLY.png';
import DarkChocWithVan from '../../assets/cakesh/pastry/DARK CHOCOLATE WITH VANILA.png';
import MangoWithCherry from '../../assets/cakesh/pastry/MANGO WITH CHERY.png';
import Pineapple from '../../assets/cakesh/pastry/PINEAPPLE.png';
import RedBerry from '../../assets/cakesh/pastry/RED BERRY.png';
import RedVanilla from '../../assets/cakesh/pastry/RED VANILA.png';
import RedVelvet from '../../assets/cakesh/pastry/RED VELVET.png';

const PastryGrid = ({ setPastryNameslist, setPastrylist }) => {
    const [tooltipVisible, setTooltipVisible] = useState(Array(10).fill(false));
    const pastrydata = [
        { name: "Chocolate Inside Cream", image: ChocInsideCream },
        { name: "Chocolate With Cherry", image: ChocWithCherry },
        { name: "Cream Jam", image: CreamJam },
        { name: "Cream Jelly", image: CreamJelly },
        { name: "Dark Chocolate With Vanilla", image: DarkChocWithVan },
        { name: "Mango With Cherry", image: MangoWithCherry },
        { name: "Pineapple", image: Pineapple },
        { name: "Red Berry", image: RedBerry },
        { name: "Red Vanilla", image: RedVanilla },
        { name: "Red Velvet", image: RedVelvet },
    ];
    const handleBtnClick = (cake, index) => {
        console.log("added");
        setPastryNameslist((prevList) => [...prevList, cake.name]);
        setPastrylist((prevList) => [...prevList, cake.image]);
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
            {pastrydata.map((cake, index) => (
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
    PastryGrid.propTypes = {
        setPastryNameslist: PropTypes.func.isRequired,
        setPastrylist: PropTypes.func.isRequired,
    };
    
    export default PastryGrid