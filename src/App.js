// Import React and components
import React from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from "./components/NavigationMenu";
import Button from "./components/Button";
import { Card, CardContent } from "./components/Card"; // Import Card
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components/Accordion"; // Import Accordion

// Import images for logo
import tickIcon from "./assets/tick_icon.png"; // Tick image
import dotIcon from "./assets/dot.png"; // Dot image
import googlePlay from "./assets/googleplay.png"; // Google Play image
import appStore from "./assets/appstore.png"; // App Store image
import mobileImage from "./assets/mobile.png";
import qrCode from "./assets/qrcode.png";
function App() {
  return (
    <div className="min-h-screen bg-[#E2E6E9]"> {/* Background color for page */}
      {/* Header Section */}
      <header className="flex justify-between items-center px-8 py-4 bg-[#E2E6E9] shadow-md">
        {/* Logo Section */}
        <div className="flex items-center space-x-4 relative">
          <div className="w-10 h-10 relative flex items-center justify-center rounded-lg bg-[#66F7E3]">
            <img src={tickIcon} alt="tick icon" className="absolute w-6 h-6" /> {/* Tick icon */}
            <img src={dotIcon} alt="dot icon" className="absolute w-8.22 h-8.22 bottom-2.5 left-6" /> {/* Dot icon */}
          </div>
          <span className="text-black font-bold text-lg">Kweli</span> {/* Logo text */}
        </div>

        {/* Navigation Menu */}
        <NavigationMenu className="flex space-x-10 md:mt-0">
          <NavigationMenuItem >
            <NavigationMenuLink href="#about">About Us</NavigationMenuLink> {/* About Us link */}
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#services">Our Services</NavigationMenuLink> {/* Our Services */}
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#how-it-works">How it Works</NavigationMenuLink> {/* How it Works */}
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#contact">Contact Us</NavigationMenuLink> {/* Contact Us */}
          </NavigationMenuItem>
        </NavigationMenu>

        {/* Download App Button */}
        <Button
          variant="primary"
          className="w-[178px] h-[56px] text-white text-[14.48px] font-medium" // Button styles
        >
          Download App now {/* Button text */}
        </Button>
      </header>

      {/* Main Section */}
      <main className="flex flex-col lg:flex-row justify-between items-center px-8 md:px-16 lg:px-24 py-12 md:py-16 gap-16">
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
            <div className="flex items-center w-[150px] h-[50px] bg-black rounded-lg shadow-md">
              <img src={googlePlay} alt="Google Play" className="h-[40px] w-[45px] mr-2" />
              <div>
                <span className="text-[10px] text-white block">Get it on</span>
                <span className="text-[16px] font-bold text-white">Google Play</span>
              </div>
            </div>
            {/* App Store Button */}
            <div className="flex items-center w-[150px] h-[50px] bg-black rounded-lg shadow-md">
              <img src={appStore} alt="App Store" className="h-[40px] w-[40px] mr-2" />
              <div>
                <span className="text-[10px] text-white block">Download on the</span>
                <span className="text-[16px] font-bold text-white">App Store</span>
              </div>
            </div>
          </div>

          {/* Scan for Easy Download */}
          <div className="flex items-center justify-center lg:justify-start gap-6 mt-6">
            {/* Scan Text */}
            <div 
              className="text-black font-semibold leading-tight text-lg mr-4" 
              style={{ marginRight: "20px" }} // Add margin here
            >
              Scan for easy <br /> download
            </div>

            {/* QR Code */}
            <Card className="w-[120px] h-[120px] bg-white rounded-lg shadow-md flex items-center justify-center ml-4">
              <img 
                src={qrCode} 
                alt="QR Code" 
                className="w-[100px] h-[100px] object-contain"
              />
            </Card>
          </div>

        </div>

        {/* Mobile Image */}
        <div className="relative w-full md:w-[400px] lg:w-[450px] mt-10 lg:mt-0 lg:ml-16">
          <img src={mobileImage} alt="Mobile App" className="w-full h-auto" />
        </div>
      </main>






 
    </div>
  );
}

export default App;
