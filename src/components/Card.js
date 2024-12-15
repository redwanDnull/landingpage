import React from "react";
import clsx from "clsx"; // For conditional styling

// Card container component
export const Card = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "bg-white rounded-lg shadow-md overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
};

// Card content
export const CardContent = ({ children, className }) => {
  return (
    <div className={clsx("p-4", className)}>
      {children}
    </div>
  );
};
