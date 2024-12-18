import React from "react";
import somalia from "../assets/somalia.png";
import nigeria from "../assets/nigeria.png";
import kenya from "../assets/kenya.png";
import mastercard from "../assets/mastercard.png";
import { Card } from "../components/Card"; // Import Card component

const Page02 = () => {
  return (
    <div className="bg-[#132E2E] px-8 md:px-16 lg:px-24 py-16 text-white">
      <h2 className="text-center text-[32px] md:text-[40px] font-bold mb-10">
        All in one digital banking solution
      </h2>

      {/* Cards Container */}
      <div className="flex flex-col lg:flex-row justify-between items-stretch gap-8">
        
        {/* First Card - Multi-Currency */}
        <Card className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6">
          <div className="bg-[#F9FAFB] rounded-lg p-4 mb-6">
            {/* Somalia */}
            <div className="bg-white rounded-lg p-4 mb-4 shadow-md">
              <div className="flex justify-between items-center">
                <span className="text-[16px] font-semibold text-[#0F0F0F]">23,099.87</span>
                <div className="flex items-center space-x-2">
                  <img src={somalia} alt="Somalia" className="w-[20px] h-[20px]" />
                  <span className="text-[#132E2E] font-medium">SOM</span>
                </div>
              </div>
            </div>

            {/* Nigeria */}
            <div className="bg-white rounded-lg p-4 mb-4 shadow-md">
              <div className="flex justify-between items-center">
                <span className="text-[16px] font-semibold text-[#0F0F0F]">23,099.87</span>
                <div className="flex items-center space-x-2">
                  <img src={nigeria} alt="Nigeria" className="w-[20px] h-[20px]" />
                  <span className="text-[#132E2E] font-medium">NGN</span>
                </div>
              </div>
            </div>

            {/* Kenya */}
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="flex justify-between items-center">
                <span className="text-[16px] font-semibold text-[#0F0F0F]">23,099.87</span>
                <div className="flex items-center space-x-2">
                  <img src={kenya} alt="Kenya" className="w-[20px] h-[20px]" />
                  <span className="text-[#132E2E] font-medium">KES</span>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-[20px] font-bold text-[#0F0F0F]">Multi-currency</h3>
          <p className="text-[14px] text-[#6D7280] mt-2 leading-relaxed">
            Manage multiple currencies effortlessly, whether at home or abroad.
          </p>
          <a href="#" className="text-[#265C5C] font-semibold mt-4 inline-block hover:underline">
            Sign up now &rarr;
          </a>
        </Card>

        {/* Second Card - Cross Border Payment */}
        <Card className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6">
          <div className="bg-[#F9FAFB] rounded-lg p-4 mb-6">
            <span className="text-[#6D7280] text-[14px] font-medium">Sending amount</span>
            <div className="flex items-center justify-between bg-white rounded-lg shadow-md p-4">
              <span className="text-[#0F0F0F] text-[18px] font-bold">100</span>
              <div className="flex items-center space-x-2 bg-white shadow-md rounded-lg px-3 py-2">
                <img src={somalia} alt="Somalia" className="w-[20px] h-[20px]" />
                <span className="text-[#132E2E] font-medium">SOM</span>
                <span className="text-[#132E2E] font-medium">▼</span>
              </div>
            </div>

            <span className="text-[#6D7280] text-[14px] font-medium">They will receive</span>
            <div className="flex items-center justify-between bg-white rounded-lg shadow-md p-4">
              <span className="text-[#0F0F0F] text-[18px] font-bold">20.09</span>
              <div className="flex items-center space-x-2 bg-white shadow-md rounded-lg px-3 py-2">
                <img src={kenya} alt="Kenya" className="w-[20px] h-[20px]" />
                <span className="text-[#132E2E] font-medium">KES</span>
                <span className="text-[#132E2E] font-medium">▼</span>
              </div>
            </div>
          </div>

          <h3 className="text-[20px] font-bold text-[#0F0F0F]">Cross border payment</h3>
          <p className="text-[14px] text-[#6D7280] mt-2 leading-relaxed">
            Send money internationally with low fees and real-time rates from the world FX exchange.
          </p>
          <a href="#" className="text-[#265C5C] font-semibold mt-4 inline-block hover:underline">
            Sign up now &rarr;
          </a>
        </Card>

        {/* Third Card - Virtual Card */}
        <Card className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6">
          <div className="bg-[#F9FAFB] rounded-lg p-4 mb-6 overflow-hidden">
            <img src={mastercard} alt="Virtual Card" className="w-full object-contain" />
          </div>
          <h3 className="text-[20px] font-bold text-[#0F0F0F]">Virtual card</h3>
          <p className="text-[14px] text-[#6D7280] mt-2 leading-relaxed">
            Secure and convenient cards for online transactions. No extra charges apply.
          </p>
          <a href="#" className="text-[#265C5C] font-semibold mt-4 inline-block hover:underline">
            Sign up now &rarr;
          </a>
        </Card>
      </div>
    </div>
  );
};

export default Page02;
