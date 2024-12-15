// Import React and utility for conditional classes
import React from "react";
import clsx from "clsx";

// Button Component
const Button = ({ children, className, variant = "default", ...props }) => {
  // Base styles for the button
  const baseStyles =
    "px-4 py-2 rounded-md font-medium text-[14.48px] transition duration-200 ease-in-out";

  // Variants for button styles
  const variants = {
    default: "bg-gray-800 text-white", // Default variant
    primary: "bg-[#265C5C] text-white", // Custom primary variant
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], className)} // Combine styles
      {...props} // Pass other props
    >
      {children} {/* Render button content */}
    </button>
  );
};

// Export Button Component
export default Button;
