import React from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from "../components/NavigationMenu";
import Button from "../components/Button";
import tickIcon from "../assets/tick_icon.png";
import dotIcon from "../assets/dot.png";


const Header = () => {
  return (
    // Header section
    <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-2 bg-[#E2E6E9] shadow gap-4 md:gap-0">
      {/* Logo Section */}
      <div className="flex items-center space-x-4 relative">
        <div   
        style={{ marginLeft: "60px" }}
        className="w-10 h-10 relative flex ml-12 items-center justify-center rounded-lg bg-[#66F7E3]">
          <img src={tickIcon} alt="tick icon" className="absolute w-6 h-6" />
          <img src={dotIcon} alt="dot icon" className="absolute w-8.22 h-8.22 bottom-2.5 left-6" />
        </div>
        <span className="text-black font-bold text-lg">Kweli</span>
      </div>

      {/* Navigation Menu */}
      <NavigationMenu         
      style={{ marginLeft: "300px" }}
      className="flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-4 md:space-x-10 mt-2 ml-20 md:mt-0">
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
        className="w-[170px] h-[50px] text-white text-[14.48px] font-medium ml-0 md:ml-10"
      >
        Download App now
      </Button>
    </div>
  );
};

export default Header;
