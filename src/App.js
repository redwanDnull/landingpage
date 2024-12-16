import React from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from "./components/NavigationMenu";
import Button from "./components/Button";
import { Card } from "./components/Card"; // Import Card
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components/Accordion"; // Import Accordion

// Import assets
import tickIcon from "./assets/tick_icon.png";
import dotIcon from "./assets/dot.png";
import googlePlay from "./assets/googleplay.png";
import appStore from "./assets/appstore.png";
import mobileImage from "./assets/mobile.png";
import qrCode from "./assets/qrcode.png";
// import somalia from "./assets/somalia.png";
import kenya from "./assets/kenya.png";
// import nigeria from "./assets/nigeria.png";
import mastercard from "./assets/mastercard.png";
import userAvatar from "./assets/user.png";
import chillIcon from "./assets/un.png";
import smilingWomen from "./assets/smillingWomen.png"; // Smiling Woman Image

import favoriteIcon from "./assets/un.png"; // Icon for favorite or rating
import world from "./assets/world.png";
import bank from "./assets/bank.png";
import check from "./assets/check.png";

// Import flag data
import somalia from "./assets/flags/somalia.png";
import nigeria from "./assets/flags/nigeria.png";
import usa from "./assets/flags/usa.png";
import pakistan from "./assets/flags/pakistan.png";
import egypt from "./assets/flags/egypt.png";
import serbia from "./assets/flags/serbia.png";
import romania from "./assets/flags/romania.png";
import rwanda from "./assets/flags/rwanda.png";
import spain from "./assets/flags/spain.png";
import stvincent from "./assets/flags/stvincent.png";
import uganda from "./assets/flags/uganda.png";
import china from "./assets/flags/china.png";


function App() {
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
    
    <Card className="min-h-screen bg-[#E2E6E9]"> {/* Replace main wrapper with Card */}
      {/* Header Section */}
      <Card className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-4 bg-[#E2E6E9] shadow gap-4 md:gap-0">
        {/* Logo Section */}
        <Card className="flex items-center space-x-4 relative">
          <Card className="w-10 h-10 relative flex items-center justify-center rounded-lg bg-[#66F7E3]">
            <img src={tickIcon} alt="tick icon" className="absolute w-6 h-6" />
            <img src={dotIcon} alt="dot icon" className="absolute w-8.22 h-8.22 bottom-2.5 left-6" />
          </Card>
          <span className="text-black font-bold text-lg">Kweli</span>
        </Card>

        {/* Navigation Menu */}
        <NavigationMenu className="flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-4 md:space-x-10 mt-2 md:mt-0">
          <NavigationMenuItem>
            <NavigationMenuLink href="#about">About Us</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#services">Our Services</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#how-it-works">How it Works</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#contact">Contact Us</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenu>

        {/* Download Button */}
        <Button
          variant="primary"
          className="w-[178px] h-[56px] text-white text-[14.48px] font-medium ml-0 md:ml-10" // Add margin-left
        >
          Download App now
        </Button>
      </Card>


      {/* Main Section */}
      <Card className="flex flex-col lg:flex-row justify-between items-center px-8 md:px-16 lg:px-24 py-12 md:py-16 gap-16">
        {/* Left Content */}
        <Card className="max-w-[500px] space-y-6 text-center lg:text-left">
          <h1 className="text-[36px] md:text-[48px] font-extrabold text-black leading-tight">
            Banking made <br /> simple for Africa
          </h1>
          <p className="text-[#1F2937] text-base md:text-lg">
            Empowering you with multi-currency accounts, seamless cross-border transfers, and secure
            virtual cards—all in one app.
          </p>

          {/* Download Buttons */}
          <Card className="flex flex-wrap justify-center lg:justify-start gap-4">
            {/* Google Play Button */}
            <Card className="flex items-center w-[150px] h-[50px] bg-[#000] rounded-lg shadow-md">
              <img src={googlePlay} alt="Google Play" className="h-[24px] w-[24px] ml-4" />
              <div className="flex flex-col ml-2">
                <span className="text-[10px] text-white">GET IT ON</span>
                <span className="text-[16px] font-bold text-white">Google Play</span>
              </div>
            </Card>

            {/* App Store Button */}
            <Card className="flex items-center w-[150px] h-[50px] bg-[#000] rounded-lg shadow-md">
              <img src={appStore} alt="App Store" className="h-[24px] w-[24px] ml-4" />
              <div className="flex flex-col ml-2">
                <span className="text-[10px] text-white">Download on the</span>
                <span className="text-[16px] font-bold text-white">App Store</span>
              </div>
            </Card>
          </Card>


          {/* Scan for Easy Download */}
          <Card className="flex items-center justify-center lg:justify-start gap-6 mt-6">
            <div className="text-black font-semibold leading-tight text-lg">
              Scan for easy <br /> download
            </div>
            <Card className="w-[120px] h-[120px] bg-white rounded-lg shadow-md flex items-center justify-center">
              <img src={qrCode} alt="QR Code" className="w-[100px] h-[100px] object-contain" />
            </Card>
          </Card>
        </Card>

        {/* Mobile Image */}
        <Card className="relative w-full md:w-[400px] lg:w-[450px] mt-10 lg:mt-0 lg:ml-16">
          <img src={mobileImage} alt="Mobile App" className="w-full h-auto" />
        </Card>
      </Card>

      {/* All in One Digital Banking Solution Section */}
      <Card className="bg-[#132E2E] px-8 md:px-16 lg:px-24 py-16 text-white">
        <h2 className="text-center text-[32px] md:text-[40px] font-bold mb-10">
          All in one digital banking solution
        </h2>

        {/* Cards Container */}
        <div className="flex flex-col lg:flex-row justify-between items-stretch gap-8">
          {/* First Card - Multi-Currency */}
          <Card className="bg-[#FFFFFF] rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6">
            <Card className="bg-[#F9FAFB] rounded-lg p-4 mb-6">
              <div className="space-y-4">
                {/* Somalia */}
                <Card className="bg-[#FFFFFF] rounded-lg p-4 mb-4 shadow-md">
                  <div className="flex justify-between items-center">
                    <span className="text-[16px] font-semibold text-[#0F0F0F]">23,099.87</span>
                    <div className="flex items-center space-x-2">
                      <img src={somalia} alt="Somalia" className="w-[20px] h-[20px]" />
                      <span className="text-[#132E2E] font-medium">SOM</span>
                    </div>
                  </div>
                </Card>
                {/* Nigeria */}
                <Card className="bg-[#FFFFFF] rounded-lg p-4 mb-4 shadow-md">
                  <div className="flex justify-between items-center">
                    <span className="text-[16px] font-semibold text-[#0F0F0F]">23,099.87</span>
                    <div className="flex items-center space-x-2">
                      <img src={nigeria} alt="Nigeria" className="w-[20px] h-[20px]" />
                      <span className="text-[#132E2E] font-medium">NGN</span>
                    </div>
                  </div>
                </Card>
                {/* Kenya */}
                <Card className="bg-[#FFFFFF] rounded-lg p-4 shadow-md">
                  <div className="flex justify-between items-center">
                    <span className="text-[16px] font-semibold text-[#0F0F0F]">23,099.87</span>
                    <div className="flex items-center space-x-2">
                      <img src={kenya} alt="Kenya" className="w-[20px] h-[20px]" />
                      <span className="text-[#132E2E] font-medium">KES</span>
                    </div>
                  </div>
                </Card>
              </div>
            </Card>
            <h3 className="text-[20px] font-bold text-[#0F0F0F]">Multi-currency</h3>
            <p className="text-[14px] text-[#6D7280] mt-2 leading-relaxed">
              Manage multiple currencies effortlessly, whether at home or abroad.
            </p>
            <a href="#" className="text-[#265C5C] font-semibold mt-4 inline-block hover:underline">
              Sign up now &rarr;
            </a>
          </Card>

          {/* Second Card - Cross Border Payment */}
          <Card className="bg-[#FFFFFF] rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6">
            <Card className="bg-[#F9FAFB] rounded-xl p-4 mb-6">
              {/* Sending Amount */}
              <div className="space-y-4">
                {/* Label */}
                <span className="text-[#6D7280] text-[14px] font-medium">Sending amount</span>

                {/* Input Row */}
                <Card className="flex items-center justify-between bg-[#FFFFFF] rounded-lg shadow-md p-4">
                  {/* Amount */}
                  <span className="text-[#0F0F0F] text-[18px] font-bold">100</span>
                  {/* Country Icon */}
                  <Card className="flex items-center space-x-2 bg-white shadow-md rounded-lg px-3 py-2">
                    <img
                      src={somalia}
                      alt="Somalia"
                      className="w-[20px] h-[20px] object-contain"
                    />
                    <span className="text-[#132E2E] font-medium">SOM</span>
                    <span className="text-[#132E2E] font-medium">▼</span>
                  </Card>
                </Card>

                {/* They Will Receive */}
                <span className="text-[#6D7280] text-[14px] font-medium">They will receive</span>

                {/* Output Row */}
                <Card className="flex items-center justify-between bg-[#FFFFFF] rounded-lg shadow-md p-4">
                  {/* Amount */}
                  <span className="text-[#0F0F0F] text-[18px] font-bold">20.09</span>
                  {/* Country Icon */}
                  <Card className="flex items-center space-x-2 bg-white shadow-md rounded-lg px-3 py-2">
                    <img
                      src={kenya}
                      alt="Kenya"
                      className="w-[20px] h-[20px] object-contain"
                    />
                    <span className="text-[#132E2E] font-medium">KES</span>
                    <span className="text-[#132E2E] font-medium">▼</span>
                  </Card>
                </Card>
              </div>
            </Card>

            <h3 className="text-[20px] font-bold text-[#0F0F0F]">Cross border payment</h3>
            <p className="text-[14px] text-[#6D7280] mt-2 leading-relaxed">
              Send money internationally with low fees and real-time rates from the world FX exchange.
            </p>
            <a href="#" className="text-[#265C5C] font-semibold mt-4 inline-block hover:underline">
              Sign up now &rarr;
            </a>
          </Card>

          {/* Third Card - Virtual Card */}
          <Card className="bg-[#FFFFFF] rounded-xl  hover:shadow-2xl transition-shadow duration-300 p-6">
            <Card className="bg-[#F9FAFB] rounded-lg p-4 mb-6 overflow-hidden">
              <img
                src={mastercard}
                alt="Virtual Card"
                className="w-full object-contain"
              />
            </Card>
            <h3 className="text-[20px] font-bold text-[#0F0F0F]">Virtual card</h3>
            <p className="text-[14px] text-[#6D7280] mt-2 leading-relaxed">
              Secure and convenient cards for online transactions. No extra charges apply.
            </p>
            <a href="#" className="text-[#265C5C] font-semibold mt-4 inline-block hover:underline">
              Sign up now &rarr;
            </a>
          </Card>
        </div>
      </Card>

      <div className="bg-gray-100 p-6 mt-10 px-8 lg:px-24 md:p-10">
        <Button className="p-5 m-5 bg-gray-200 md:p-4 text-lg mt-6 border border-gray-300 text-[#265C5C] rounded-none">
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

      {/* 3 grid */}
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


        <>
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

        </>

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
    </Card>
    
  );
}

export default App;
