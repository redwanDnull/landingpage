import React from "react";
import { Card } from "../components/Card"; // Import Card
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/Accordion"; // Import Accordion

const Page08 = () => {
  return (
    <Card className="min-h-screen bg-[#F1FAF9] py-16 px-6 md:px-24">
      {/* Header Section */}
      <Card className="text-center mb-12">
        <Card className="inline-block bg-[#E5E7EB] px-6 py-2 rounded-md mb-4">
          <span className="text-[#265C5C] font-medium text-sm uppercase">FREQUENTLY ASKED QUESTIONS</span>
        </Card>
        <h2 className="text-[40px] md:text-[48px] font-extrabold text-[#000000]">
          Have Questions? We <br /> have answers
        </h2>
      </Card>

      {/* Accordion Section */}
      <div className="w-full max-w-4xl mx-auto space-y-6">
        <Accordion>
          {/* Accordion Items */}
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <span className="text-[#191919] text-[20px] font-semibold">How do I sign up on Kweli?</span>
            </AccordionTrigger>
            <AccordionContent>
              Signing up is easy! Download the Kweli app from the Playstore or Google Play, and register with your phone
              number or email. You’ll be ready to bank in minutes.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              <span className="text-[#191919] text-[20px] font-semibold">Can I send money internationally with Kweli?</span>
            </AccordionTrigger>
            <AccordionContent>
              Yes, you can send money internationally with Kweli, offering real-time rates and low fees.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              <span className="text-[#191919] text-[20px] font-semibold">What currencies can I use with Kweli?</span>
            </AccordionTrigger>
            <AccordionContent>
              Kweli supports multiple currencies, including USD, GBP, NGN, and more, for seamless cross-border payments.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              <span className="text-[#191919] text-[20px] font-semibold">Are there any hidden fees for creating an account?</span>
            </AccordionTrigger>
            <AccordionContent>
              No, Kweli does not charge hidden fees for creating an account. All fees are transparent and straightforward.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Card>
  );
};

export default Page08;
