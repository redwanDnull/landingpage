import React from "react";
import { Card } from "../components/Card"; // Import Card

import downloadApp from "../assets/downloadApp.png";
import paymentapp from "../assets/paymentApp.png";
import convertapp from "../assets/convertApp.png";
import downloadIcon from "../assets/download_circle.png";
import transferIcon from "../assets/transfer.png";
import convertIcon from "../assets/convert.png";
import download_icon from "../assets/download_icon.png";
const Page07 = () => {
  return (
    //   {/* page 6 */}
      <Card className="bg-[#265C5C] py-16 px-8 lg:px-24">
        {/* Section Title */}
        <Card className="text-center mb-12">
          <h2 className="text-[40px] md:text-[48px] font-extrabold text-[#FFFFFF]">
            How it works
          </h2>
          <p className="text-[#F2F2F2] text-[18px] md:text-[20px]">
            Your Kweli journey, simplified
          </p>
        </Card>

        {/* Cards Container */}
        <Card className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First Card */}
          <Card className="bg-[#FFFFFF] rounded-lg shadow-lg p-6 flex flex-col">
            <img
              src={downloadApp} // Image: downloadApp.png
              alt="Download App"
              className="w-full h-auto mb-8"
            />
            {/* Icon and Title */}
            <div className="bg-[#E8F0F0] rounded-full w-16 h-16 p-4 mb-2">
              <img
                src={downloadIcon} // Circle Icon for download
                alt="Download Icon"
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-[20px] font-bold text-[#000000] mb-0">
              Download mobile app
            </h3>
            <p className="text-[#6D7280] text-[16px] mt-2">
              Select your country of residence and create <br /> account in 5 minutes.
            </p>
            {/* Call to Action */}
            <a href="#" className="flex items-center mt-4 text-[#265C5C] font-semibold hover:underline">
              Download app now{" "}
              <img src={download_icon} alt="Arrow" className="w-3 h-3 ml-2" />
            </a>
          </Card>

          {/* Second Card */}
          <Card className="bg-[#FFFFFF] rounded-lg shadow-lg p-6 flex flex-col">
            <img
              src={paymentapp} // Image: paymentapp.png
              alt="Transfer Money"
              className="w-full h-auto mb-6"
            />
            {/* Icon and Title */}
            <div className="bg-[#E8F0F0] rounded-full w-16 h-16 p-4 mb-2">
              <img
                src={transferIcon} // Circle Icon for transfer
                alt="Transfer Icon"
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-[20px] font-bold text-[#000000] mb-0">
              Transfer money
            </h3>
            <p className="text-[#6D7280] text-[16px] mt-2">
              Create your account in minutes using your <br /> phone number or email address.
            </p>
            {/* Call to Action */}
            <a href="#" className="flex items-center mt-4 text-[#265C5C] font-semibold hover:underline">
              Make a transfer{" "}
              <img src={download_icon} alt="Arrow" className="w-3 h-3 ml-2" />
            </a>
          </Card>

          {/* Third Card */}
          <Card className="bg-[#FFFFFF] rounded-lg shadow-lg p-6 flex flex-col">
            <img
              src={convertapp} // Image: convertapp.png
              alt="Convert Exchange"
              className="w-full h-auto mb-6"
            />
            {/* Icon and Title */}
            <div className="bg-[#E8F0F0] rounded-full w-16 h-16 p-4 mb-2">
              <img
                src={convertIcon} // Circle Icon for convert
                alt="Convert Icon"
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-[20px] font-bold text-[#000000] mb-0">
              Convert exchange
            </h3>
            <p className="text-[#6D7280] text-[16px] mt-2">
              Create your account in minutes using your <br /> phone number or email address.
            </p>
            {/* Call to Action */}
            <a href="#" className="flex items-center mt-4 text-[#265C5C] font-semibold hover:underline">
              Get started{" "}
              <img src={download_icon} alt="Arrow" className="w-3 h-3 ml-2" />
            </a>
          </Card>
        </Card>
      </Card>
  );
};

export default Page07;
