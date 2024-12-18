import React from "react";
import Button from "../components/Button";
import { Card } from "../components/Card"; // Import Card

import world from "../assets/world.png";
import bank from "../assets/bank.png";
import check from "../assets/check.png";
// Import flag data
import somalia from "../assets/flags/somalia.png";
import nigeria from "../assets/flags/nigeria.png";
import usa from "../assets/flags/usa.png";
import pakistan from "../assets/flags/pakistan.png";
import egypt from "../assets/flags/egypt.png";
import serbia from "../assets/flags/serbia.png";
import romania from "../assets/flags/romania.png";
import rwanda from "../assets/flags/rwanda.png";
import spain from "../assets/flags/spain.png";
import stvincent from "../assets/flags/stvincent.png";
import uganda from "../assets/flags/uganda.png";
import china from "../assets/flags/china.png";

const Page03 = () => {
    const countryFlags = [
        { image: somalia, name: "Somalia" },
        { image: nigeria, name: "Nigeria" },
        { image: usa, name: "USA" },
        { image: pakistan, name: "Pakistan" },
        { image: egypt, name: "Egypt" },
        { image: serbia, name: "Serbia" },
        { image: romania, name: "Romania" },
        { image: rwanda, name: "Rwanda" },
        { image: spain, name: "Spain" },
        { image: stvincent, name: "St Vincent" },
        { image: uganda, name: "Uganda" },
        { image: china, name: "China" },
    ];
  return (
    //   {/* page 3 */}
    <div>
      <div className="bg-gray-100 p-6 mt-10 px-8 lg:px-24 md:p-10">
        <Button className="p-5 m-5 bg-white md:p-4 text-lg mt-6 border border-gray-300 text-[#265C5C] !text-[#265C5C] rounded-none shadow hover:bg-gray-100">
          GLOBAL PAYMENTS
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center m-7">
          {/* Section Header */}
          <div>
            <h2 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight">
              Expand New Market <br /> Faster and Easier
            </h2>

            <p className="text-gray-600 text-lg  mt-4 mb-6 leading-relaxed">
              Reduce the complexity and cost of multi-currency management <br />
              with flexible cross-border payment options available in 1982 <br />
              countries across 135+ countries
            </p>
            <Button variant="primary" className="p-5 md:p-4 text-lg mt-6 ">
              Start sending money now
            </Button>
          </div>

          {/* Flag Section */}
          <div className="flex justify-center items-center">
            <Card className="p-9 rounded-lg  bg-gray-200 w-[600px] h-[350px] shadow-md border border-gray-300">
              {/* Flag Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {countryFlags.map((flag, index) => (
                  <Card
                    key={index}
                    className="flex items-center justify-center bg-gray-50 rounded-lg shadow-md hover:shadow-lg w-[121px] h-[76px]"
                  >
                    <img
                      src={flag.image}
                      alt={flag.name}
                      className="object-contain w-[52px] h-[52px]"
                    />
                  </Card>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* page 3 grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-100 p-6 lg:px-24 md:p-10">
        {/* Card 1 */}
        <div className="bg-white  rounded-lg p-6 flex flex-col items-start text-left border border-gray-300 pt-8">
          <div className="bg-gray-100 rounded-full p-3 mb-4">
            <img src={world} alt="world" className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 text-left">100+ African supported <br /> countries</h3>
          <p className="text-gray-500 mt-2 text-left">
            Manage multiple currencies effortlessly,<br /> whether at home or abroad.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg p-6 flex flex-col items-start text-left border border-gray-300 pt-8 ">
          <div className="bg-gray-100 rounded-full p-3 mb-4">
            <img src={check} alt="check" className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 text-left">Easy convert currency  <br /> automatically</h3>
          <p className="text-gray-500 mt-2 text-left">
            Manage multiple currencies effortlessly,<br /> whether at home or abroad.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white  rounded-lg p-6 flex flex-col items-start text-left border border-gray-300 pt-8 w-[400px]">
          <div className="bg-gray-100 rounded-full p-3 mb-4">
            <img src={bank} alt="bank" className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 text-left"><br /> Flexible sending fees</h3>
          <p className="text-gray-500 mt-2 text-left">
            Manage multiple currencies effortlessly, <br /> whether at home or abroad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page03;
