import React from "react";
import { Card } from "../components/Card"; // Import Card
import smilingWomen from "../assets/smillingWomen.png"; // Smiling Woman Image

const Page06 = () => {
  return (
    //     {/* page 5         */}
      <Card className="bg-[#FFFFFF] py-16 px-10">
        {/* Main Content Section */}
        <Card className="flex flex-col lg:flex-row ml-14 justify-between items-center gap-10">
          {/* Left Section */}
          <Card className="space-y-6 max-w-[600px]">
            {/* Header */}
            <h1 className="text-[#000000] font-extrabold text-[36px] md:text-[48px] leading-tight">
              Stay ahead of your bills, <br />
              pay your subscription <br />
              and bills in one app
            </h1>
            {/* Subtext */}
            <p className="text-[#475367] text-[16px] leading-relaxed">
              Reduce the complexity and cost of multi-currency <br />
              management with flexible cross border.
            </p>

            {/* Rows of Cards */}
            <Card className="space-y-4">
              {/* First Row */}
              <Card className="bg-[#F9FAFB] rounded-lg p-2 flex items-center gap-6 shadow-md">
                <span
                  className="text-[#265C5C] text-[20px] font-bold"
                  style={{ lineHeight: "1" }}
                >
                  &#10003;
                </span>
                <p className="text-[#191919] font-medium text-[14px] md:text-[16px]">
                  we install your smart solar inverter with a one time <br />
                  connection fee from ₦129,000
                </p>
              </Card>

              {/* Second Row */}
              <Card className="bg-[#F9FAFB] rounded-lg p-4 flex items-center gap-4 shadow-md">
                <span
                  className="text-[#265C5C] text-[20px] font-bold"
                  style={{ lineHeight: "1" }}
                >
                  &#10003;
                </span>
                <p className="text-[#191919] font-medium text-[14px] md:text-[16px]">
                  we install your smart solar inverter with a one time <br />
                  connection fee from ₦129,000
                </p>
              </Card>

              {/* Third Row */}
              <Card className="bg-[#F9FAFB] rounded-lg p-4 flex items-center gap-4 shadow-md">
                <span
                  className="text-[#265C5C] text-[20px] font-bold"
                  style={{ lineHeight: "1" }}
                >
                  &#10003;
                </span>
                <p className="text-[#191919] font-medium text-[14px] md:text-[16px]">
                  we install your smart solar inverter with a one time <br />
                  connection fee from ₦129,000
                </p>
              </Card>
            </Card>
          </Card>

          {/* Right Section */}
          <Card>
            <img
              src={smilingWomen}
              alt="Smiling Woman"
              className="rounded-lg w-[500px] h-auto object-cover shadow-lg"
            />
          </Card>
        </Card>
      </Card>
  );
};

export default Page06;
