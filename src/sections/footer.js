import React from "react";
import facebookIcon from "../assets/facebook.png";
import linkedinIcon from "../assets/linkedin.png";
import twitterIcon from "../assets/twitter.png";
import instagramIcon from "../assets/instagram.png";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from "../components/NavigationMenu";
import tickIcon from "../assets/tick_icon.png";
import dotIcon from "../assets/dot.png";
const Footer = () => {
    return (
        <div>
         {/* Footer Section */}
      <div className="bg-[#E2E6E9] py-8 px-8 lg:px-24 text-center">

      <div className="flex items-center justify-center mb-20 space-x-4">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-[#66F7E3]">
            <img src={tickIcon} alt="Tick Icon" className="absolute w-6 h-6" />
            <img src={dotIcon} alt="Dot Icon" className="absolute w-8.22 h-8.22 bottom-2.5 left-6" />
          </div>
          <span className="text-black font-bold text-2xl text-[#265C5C]">We made bank <br /> for Africans</span>
        </div>

        <div className="flex justify-between items-center">
          

          {/* Social Icons */}
          <div className="flex space-x-4">
            <img src={facebookIcon} alt="Facebook" className="w-6" />
            <img src={twitterIcon} alt="X" className="w-6" />
            <img src={linkedinIcon} alt="LinkedIn" className="w-6" />
            <img src={instagramIcon} alt="Instagram" className="w-6" />
          </div>

          {/* Navigation Links */}
          <NavigationMenu className="flex space-x-6 text-[#265C5C]">
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
        </div>
      </div>
      </div>
    );
};
export default Footer;
