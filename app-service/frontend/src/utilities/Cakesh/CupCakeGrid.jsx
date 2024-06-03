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
import PropTypes from 'prop-types';


import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CupCakeGrid = ({ setCupcakeNameslist, setCupcakeslist }) => {
    const [tooltipVisible, setTooltipVisible] = useState(Array(12).fill(false)); 

    // Define cupcake data
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
        setCupcakeNameslist(prevList => [...prevList, cupcake.name]);
        setCupcakeslist(prevList => [...prevList, cupcake.image]);
        
        setTooltipVisible(prev => prev.map((item, i) => i === index ? true : item));
        
        setTimeout(() => {
            setTooltipVisible(prev => prev.map((item, i) => i === index ? false : item));
        }, 2000);
    };
    



    return (
        <div className="w-full  mx-auto ">
        < Carousel  showArrows={false}  swipeable={true} showThumbs={false}>
            {cupcakeData.map((cupcake, index) => (
                <div key={index}  className=" h-[300px] ">
                <div className="relative w-56 bg-white shadow-md rounded-xl h-72 ">
                    <img
                        src={cupcake.image}
                        alt="Product"
                        className="h-56 w-56 object-cover rounded-t-xl"
                    />
                    <div className="px-4 py-3 w-56">
                        <div className="flex justify-between items-center">
                            <div className="relative">
                                <p className="text-lg font-bold text-lime-500  block uppercase hover:text-lime-500 duration-500">
                                    {cupcake.name}
                                </p>
                                <div className="absolute bottom-0 left-0 w-2/5 border-b-2 border-black"></div>
                            </div>
                            <button className="relative hover:text-lime-500 duration-500" onClick={() => handleBtnClick(cupcake, index)}>
                                <CiCircleCheck
                                    className={`hover:text-lime-500 duration-500 ${tooltipVisible[index] ? "logo-translate" : ""}`}
                                    style={{ fontSize: "34px" }}
                                />
                                {tooltipVisible[index] && (
                                    <div className="absolute top-0 right-0 mb-5 font-medium bg-lime-500 text-black shadowm-md border-2 border-slate-500 text-xs px-3 py-1 rounded-lg transition-opacity duration-300">
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
    setCupcakeslist: PropTypes.func.isRequired
};

export default CupCakeGrid;

