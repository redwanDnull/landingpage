import React, { useState } from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import clsx from "clsx"; // Tailwind CSS helper for conditional classes

// Accordion Root Component
export const Accordion = ({ children, type = "single", collapsible = true }) => {
  return (
    <AccordionPrimitive.Root
      type={type}
      collapsible={collapsible}
      className="space-y-4"
    >
      {children}
    </AccordionPrimitive.Root>
  );
};

// Accordion Item Component
export const AccordionItem = ({ children, value }) => {
  return (
    <AccordionPrimitive.Item
      value={value}
      className="border rounded-lg overflow-hidden bg-[#E5E7EB]"
    >
      {children}
    </AccordionPrimitive.Item>
  );
};

// Accordion Trigger Component
export const AccordionTrigger = React.forwardRef(({ children, className, ...props }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AccordionPrimitive.Header>
      <AccordionPrimitive.Trigger
        ref={ref}
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "flex justify-between items-center w-full p-4 text-gray-800 font-medium cursor-pointer",
          className
        )}
        {...props}
      >
        {children}
        <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[#6D7280] text-[#6D7280]">
          {isOpen ? "−" : "+"}
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

// Accordion Content Component
export const AccordionContent = React.forwardRef(({ children, className, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={clsx(
      "p-4 bg-gray-100 text-gray-600",
      "data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp",
      className
    )}
    {...props}
  >
    {children}
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";

// TailwindCSS Animations (in `globals.css` or `tailwind.css`)
// Add these styles if not already in your project
export const styles = `
  @keyframes slideDown {
    from {
      height: 0;
    }
    to {
      height: var(--radix-accordion-content-height);
    }
  }

  @keyframes slideUp {
    from {
      height: var(--radix-accordion-content-height);
    }
    to {
      height: 0;
    }
  }

  .data-[state=open]:animate-slideDown {
    animation: slideDown 300ms ease-in-out;
  }

  .data-[state=closed]:animate-slideUp {
    animation: slideUp 300ms ease-in-out;
  }
`;
