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

const CupCakeGrid = () => {
    const [tooltipVisible, setTooltipVisible] = useState(Array(12).fill(false)); 

    // now we need to make a list of all the images with the cupcake names

    const cupcakeImages = [IceCreamCupcake, BabyBorn, Biscuitsinside, CreamCakes, CustomizedCupcake, PlainFlower, PurpleCupCake, RedVelvet, SkyCreamChocolate, StrawberryCupCake, TruityFruity, VanillaCupCake];
    const cupcakeNames = ["Ice Cream", "Baby Born", "Biscuits Inside", "Cream Cakes", "Customized Cup Cake", "Plain Flower", "Purple Cup Cake", "Red Velvet", "Sky Cream Chocolate", "Strawberry Cup Cake", "Truity Fruity", "Vanilla Cup Cake"];

    const handleBtnClick = (index) => {
        console.log("added");
        const newTooltipVisible = [...tooltipVisible]; 
        newTooltipVisible[index] = true; 
        setTooltipVisible(newTooltipVisible);
        setTimeout(() => {
            const newTooltipVisible = [...tooltipVisible]; 
            newTooltipVisible[index] = false; 
            setTooltipVisible(newTooltipVisible);
        }, 2000);
    };

    return (
        <div>
            <section
                id="Projects"
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-10 "
            >
                {cupcakeImages.map((cupcake, index) => (
                    <div key={index} className="relative w-56 bg-white shadow-md rounded-xl h-80">
                        <img
                            src={cupcake}
                            alt="Product"
                            className="h-56 w-56 object-cover rounded-t-xl"
                        />
                        <div className="px-4 py-3 w-56">
                            <div className="flex justify-between items-center">
                                <div className="relative">
                                    <p className="text-lg font-bold text-lime-500  block uppercase hover:text-lime-500 duration-500">
                                        {cupcakeNames[index]}
                                    </p>
                                    <div className="absolute bottom-0 left-0 w-2/5 border-b-2 border-black"></div>
                                </div>
                                <button className="relative hover:text-lime-500 duration-500" onClick={() => handleBtnClick(index)}>
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
                ))}
            </section>
        </div>
    );
};
export default CupCakeGrid;
