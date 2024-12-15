// Import necessary dependencies
import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"; // Radix UI Navigation Menu
import { cva } from "class-variance-authority"; // Utility for managing variants
import clsx from "clsx"; // Utility for conditional class management

// Define NavigationMenu styles using CVA (Class Variance Authority)
const navigationMenuStyles = cva(
  "relative flex items-center justify-between px-4 py-2", // Basic styling for the menu
  {
    variants: {
      variant: {
        default: "bg-transparent text-gray-800", // Default style
      },
    },
    defaultVariants: {
      variant: "default", // Default variant
    },
  }
);

// Navigation Menu Root Component
const NavigationMenu = ({ children, className, variant, ...props }) => {
  return (
    <NavigationMenuPrimitive.Root
      className={clsx(navigationMenuStyles({ variant }), className)} // Combine base styles with variant
      {...props}
    >
      {children} {/* Render child components */}
    </NavigationMenuPrimitive.Root>
  );
};

// Navigation Menu Item Component (Individual Menu Item)
const NavigationMenuItem = ({ children }) => (
  <NavigationMenuPrimitive.Item className="flex items-center space-x-2">
    {children} {/* Render menu link */}
  </NavigationMenuPrimitive.Item>
);

// Navigation Menu Link Component (Clickable link)
const NavigationMenuLink = React.forwardRef(({ href, children }, ref) => (
  <NavigationMenuPrimitive.Link
    ref={ref}
    href={href} // Set the link destination
    className="text-[#1F2937]" // Text color without hover effect
  >
    {children} {/* Render link text */}
  </NavigationMenuPrimitive.Link>
));

// Export components
export { NavigationMenu, NavigationMenuItem, NavigationMenuLink };
