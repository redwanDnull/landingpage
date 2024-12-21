import React from "react";
import googlePlay from "../assets/googleplay.png";
import appStore from "../assets/appstore.png";
import qrCode from "../assets/qrcode.png";
import mobileImage from "../assets/mobile.png";

const Page01 = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center px-8 md:px-16 lg:px-24 py-12 md:py-16 gap-16">
      {/* Left Content */}
      <div className="max-w-[500px] space-y-6 text-center lg:text-left">
        <h1 className="text-[36px] md:text-[48px] font-extrabold text-black leading-tight">
          Banking made <br /> simple for Africa
        </h1>
        <p className="text-[#1F2937] text-base md:text-lg">
          Empowering you with multi-currency accounts, seamless cross-border transfers, and secure
          virtual cards—all in one app.
        </p>

        {/* Download Buttons */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          {/* Google Play Button */}
          <div className="flex items-center w-[150px] h-[50px] bg-[#000] rounded-lg shadow-md">
            <img src={googlePlay} alt="Google Play" className="h-[24px] w-[24px] ml-4" />
            <div className="flex flex-col ml-2">
              <span className="text-[10px] text-white">GET IT ON</span>
              <span className="text-[16px] font-bold text-white">Google Play</span>
            </div>
          </div>

          {/* App Store Button */}
          <div className="flex items-center w-[150px] h-[50px] bg-[#000] rounded-lg shadow-md">
            <img src={appStore} alt="App Store" className="h-[24px] w-[24px] ml-4" />
            <div className="flex flex-col ml-2">
              <span className="text-[10px] text-white">Download on the</span>
              <span className="text-[16px] font-bold text-white">App Store</span>
            </div>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="flex items-center justify-center lg:justify-start gap-6 mt-6">
          <div className="text-black font-semibold leading-tight text-lg">
            Scan for easy <br /> download
          </div>
          <div className="w-[120px] h-[120px] bg-white rounded-lg shadow-md flex items-center justify-center">
            <img src={qrCode} alt="QR Code" className="w-[100px] h-[100px] object-contain" />
          </div>
        </div>
      </div>

      {/* Mobile Image */}
      <div       
      style={{ marginRight: "200px"}}
      className="relative w-full md:w-[400px] lg:w-[450px] mt-10 lg:mt-0 lg:ml-16">
        <img src={mobileImage} alt="Mobile App" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Page01;
