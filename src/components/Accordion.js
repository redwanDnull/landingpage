import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import clsx from "clsx"; // For adding Tailwind CSS classes

// Accordion Root Component
export const Accordion = ({ children, type = "single", collapsible = true }) => {
  return (
    <AccordionPrimitive.Root type={type} collapsible={collapsible}>
      {children}
    </AccordionPrimitive.Root>
  );
};

// Accordion Item Component
export const AccordionItem = ({ children, value }) => {
  return (
    <AccordionPrimitive.Item
      value={value}
      className="border-b border-gray-300 p-5 mb-3.5"
    >
      {children}
    </AccordionPrimitive.Item>
  );
};

// Accordion Trigger Component
export const AccordionTrigger = React.forwardRef(({ children }, ref) => (
  <AccordionPrimitive.Header>
    <AccordionPrimitive.Trigger
      ref={ref}
      className="flex justify-between items-center w-full py-2 text-gray-800 font-medium"
    >
      {children}
      {/* <span>▼</span> */}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));

// Accordion Content Component
export const AccordionContent = React.forwardRef(({ children }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="p-6 text-gray-600 bg-gray-100"
  >
    {children}
  </AccordionPrimitive.Content>
));
