import React from "react";
import { Card } from "../components/Card"; // Import Card

import somalia from "../assets/somalia.png";
import nigeria from "../assets/nigeria.png";
import userAvatar from "../assets/user.png";
import chillIcon from "../assets/un.png";
const Page05 = () => {
  return (
    <div>
        {/* Section with White Background */}
        <Card className="bg-[#FFFFFF] py-16 px-14 text-center">
            <Card className="mt-16">
                <h2 className="text-[40px] md:text-[48px] font-extrabold text-[#000000] leading-tight mb-4">
                Loved by Users across Africa
                </h2>
                <p className="text-[18px] md:text-[20px] text-[#4B5563] leading-relaxed mb-20">
                Hear from our customers and see what they say about using our <br />
                <span className="block ml-4">
                    services to ahead in local and international payment.
                </span>
                </p>
                
            </Card>
            {/* Section with Light Green Background */}
            <Card
            className="bg-[#F1FAF9] mx-20 w-152 h-67 p-10 flex justify-center items-center"
            >
                {/* <h2>Fooos</h2> */}
                {/* Cards Container */}
                <Card className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* First Card */}
                    <Card className="bg-[#FFFFFF] rounded-lg shadow-md p-6 flex flex-col justify-between" style={{ width: "380px", height: "600px" }}>
                        <p className="text-[#111827] text-[16px] mb-6 leading-relaxed">
                            Kweli makes managing my finances a breeze. The cross-border transfer feature has been a game-changer for my remote work needs.
                        </p>
                        <hr className="my-4 border-t border-gray-200" />
                        <Card className="flex justify-between items-center">
                            <div>
                            <h3 className="text-[14px] font-bold text-[#0F0F0F]">Adamson Favor</h3>
                            <p className="text-[12px] text-[#6D7280]">Freelancer Designer</p>
                            </div>
                            <img src={nigeria} alt="Nigeria Flag" className="w-6 h-6" />
                        </Card>
                        <div className="flex mt-4">
                            <span className="text-[#FFA500]">★★★★☆</span>
                        </div>
                    </Card>

                    {/* Second Card */}
                    <Card
                    className="bg-[#FFFFFF] rounded-lg shadow-md p-6 flex flex-col justify-between"
                    style={{ width: "476.33px", height: "544px" }}
                    >
                        <p className="text-[#111827] text-[16px] mb-6 leading-relaxed">
                            As a business owner, I rely on Kweli’s multi-currency wallet to
                            handle payments from international clients effortlessly. It’s
                            secure and always reliable.
                        </p>
                        <hr className="my-4 border-t border-gray-200" />
                        <Card className="flex justify-between items-center">
                            <Card className="flex items-center space-x-4">
                                <img
                                    src={userAvatar}
                                    alt="User Avatar"
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <h3 className="text-[14px] font-bold text-[#0F0F0F]">
                                    Tunde. A
                                    </h3>
                                    <p className="text-[12px] text-[#6D7280]">Export Trader</p>
                                </div>
                            </Card>
                            <img src={chillIcon} alt="Chill Icon" className="w-6 h-6" />
                        </Card>
                        <div className="flex mt-4">
                            <span className="text-[#FFA500]">★★★★☆</span>
                        </div>
                    </Card>

                    {/* Third Card */}
                    <Card
                    className="bg-[#FFFFFF] rounded-lg shadow-md p-6 flex flex-col justify-between"
                    style={{ width: "476.33px", height: "544px" }}
                    >
                        <p className="text-[#111827] text-[16px] mb-6 leading-relaxed">
                            Kweli makes managing my finances a breeze. The cross-border
                            transfer feature has been a game-changer for my remote work needs.
                        </p>
                        <hr className="my-4 border-t border-gray-200" />
                        <Card className="flex justify-between items-center">
                            <div>
                            <h3 className="text-[14px] font-bold text-[#0F0F0F]">
                                Adamson Favor
                            </h3>
                            <p className="text-[12px] text-[#6D7280]">Freelancer Designer</p>
                            </div>
                            <img src={somalia} alt="Somalia Flag" className="w-6 h-6" />
                        </Card>
                        <div className="flex mt-4">
                            <span className="text-[#FFA500]">★★★★☆</span>
                        </div>
                    </Card>
                </Card>
            </Card>
        </Card>
    </div>
  );
};

export default Page05;
