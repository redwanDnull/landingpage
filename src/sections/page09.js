// import React from "react";

// const Page09 = () => {
//   return (
    
//   );
// };

// export default Page09;
import React from "react";
import googlePlay from "../assets/googleplay.png";
import appStore from "../assets/appstore.png";
import qrCode from "../assets/qrcode.png";
import smilingWoman from "../assets/women.png";

const Page09 = () => {
  return (
    <div className="bg-[#0D1F1F] w-full text-white relative">
      {/* Section with Centered Image and Overlay */}
      <div className="relative flex justify-center items-center h-[500px]">
        {/* Background Image */}
        <img
          src={smilingWoman}
          alt="Smiling Woman"
          className="absolute w-[1150px] h-[400px] object-cover"
        />

        {/* Overlay Background */}
        <div className="absolute w-[1150px] h-[400px]  bg-[#076969] opacity-80"></div>

{/* Content */}
<div className="relative z-10 flex flex-col md:flex-row justify-between items-center w-[80%] mx-auto ml-11">
      {/* Left Content: Heading and Text */}
      <div className="flex-1 space-y-4 ml-20">
        <h1 className="text-[32px] md:text-[40px] font-extrabold leading-tight ml-20">
          <span className="text-[#66F7E3] ">One multi-currency </span>app for all <br /> 
          your money needs
        </h1>
        <p className="text-lg ml-20">Join 100,000+ changers worldwide</p>
      </div>

      {/* Right Content: Buttons and QR Code */}
      <div className="flex flex-col justify-center items-center md:items-end space-y-4">
        {/* Buttons */}
        <div className="flex space-x-4">
          <a
            href="#"
            className="w-[160px] h-[50px] bg-black rounded-lg flex items-center px-4"
          >
            <img
              src={googlePlay}
              alt="Google Play"
              className="w-[24px] h-[24px]"
            />
            <div className="ml-2">
              <p className="text-[10px] text-white">GET IT ON</p>
              <p className="text-[16px] font-bold text-white">Google Play</p>
            </div>
          </a>
          <a
            href="#"
            className="w-[160px] h-[50px] bg-black rounded-lg flex items-center px-4"
          >
            <img
              src={appStore}
              alt="App Store"
              className="w-[24px] h-[24px]"
            />
            <div className="ml-2">
              <p className="text-[10px] text-white">Download on the</p>
              <p className="text-[16px] font-bold text-white">App Store</p>
            </div>
          </a>
        </div>

        {/* QR Code */}
        <div className="flex flex-col items-center">
          <p className="text-lg mb-2">Scan for easy download</p>
          <div className="w-[120px] h-[120px] bg-white rounded-lg flex items-center justify-center shadow-md">
            <img
              src={qrCode}
              alt="QR Code"
              className="w-[100px] h-[100px]"
            />
            </div>
        </div>
        </div>
        </div>
        </div>
    </div>
  );
};

export default Page09;
