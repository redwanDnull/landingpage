import React from "react";
import Button from "../components/Button";

import mobileCard from '../assets/card.png';
const Page04 = () => {
  return (
    <div>
        {/* Virtual Cards Section */}
        <div className="relative flex flex-col md:flex-row items-center justify-center bg-[#265C5C] text-white p-6 md:p-8 mx-auto overflow-hidden max-w-[1440px]  w-full">
        {/* Left Content */}
        <div className="space-y-6 md:w-1/2 text-left ml-10 ">
        {/* Virtual Cards Button */}
        <Button  variant="primary" className=" border-2 border-white px-4 py-2 text-lg uppercase">
            Virtual Cards
        </Button>

        {/* Heading */}
        <h2 className="text-3xl md:text-3xl font-bold leading-tight">
            You can use our virtual <br /> card for all
            <Button variant="primary" className="bg-[#B1FCcE] text-[#265C5C] px-6 py-3 text-lg md:text-3xl font-bold rounded-[20px] shadow hover:bg-[#B1FCDE]  transition m-2 ">
            subscriptions
            </Button>
            <br /> and payment all around
        </h2>

        {/* Paragraph */}
        <p className="text-gray-300 text-lg md:text-2xl leading-relaxed">
            Pay all subscriptions, global payments, and online shopping with  our
            cost-fee-less virtual cards.
        </p>

        {/* Get Virtual Card Button */}
        <Button className="bg-white text-[#265C5C] !text-[#265C5C] px-6 py-3 text-lg font-bold rounded-md shadow hover:bg-gray-100 transition">
            Get virtual card
        </Button>
        </div>

        {/* Right div with Circle */}
        <div className="relative w-full md:w-1/2 h-auto flex justify-center items-center mt-8 md:mt-0">
        {/* Background Circle */}
        <div className="absolute left-[-3%] top-1/2 transform -translate-y-1/2 w-[140%] max-w-[900px] aspect-square bg-[#076969] rounded-full"></div>

        {/* Rectangle Background */}
        <div className="absolute right-[-6%] mb-[-120%] transform -translate-y-1/2 w-[90%] max-w-[450px] h-[500px] bg-[#ECFEF7] rounded-tl-[20px]">

            {/* Mobile Card Image (Centered) */}
            <div className="absolute inset-0 flex justify-center items-center">
            <img
                src={mobileCard}
                alt="Virtual Card"
                className="object-cover w-[80%] max-w-[300px] md:max-w-[400px] drop-shadow-lg"
            />
            </div>
        </div>
        </div>
    </div>
    </div>
  );
};

export default Page04;
