import React from "react";
import { Card } from "../components/Card"; // Import Card
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/Accordion"; // Import Accordion

const Page08 = () => {
  return (
    //   {/* page 7 */}
      <Card className="min-h-screen bg-[#F1FAF9] py-16 px-6 md:px-24">
        {/* Header Section */}
        <Card className="text-center mb-12">
          <Card className="inline-block bg-[#E5E7EB] px-6 py-2 rounded-md mb-4">
            <span className="text-[#265C5C] font-medium text-sm uppercase">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </Card>
          <h2 className="text-[40px] md:text-[48px] font-extrabold text-[#000000]">
            Have Questions? We <br /> have answers
          </h2>
        </Card>

        {/* Accordion Section */}
        <div className="w-full max-w-4xl mx-auto space-y-6"> {/* Center Accordion with space */}
          <Accordion>

            {/* First Accordion - Default Open */}
            <AccordionItem className="bg-[#E5E7EB] rounded-lg p-6 mb-10">
              <div className="flex justify-between items-center w-full">
                <span className="text-[#191919] text-[20px] font-semibold">
                  How do I sign up on Kweli?
                </span>
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[#6D7280] text-[#6D7280]">
                  −
                </span>
              </div>
              <div>
                <p className="text-[#6D7280] text-[20px] mt-4 leading-relaxed">
                  Signing up is easy! Download the Kweli app from the Playstore or Google Play, 
                  and register with your phone number or email. You’ll be ready to bank in minutes.
                </p>
              </div>
            </AccordionItem>

            {/* Second Accordion */}
            <AccordionItem className="bg-[#E5E7EB] rounded-lg p-6 mb-4">
              <div className="flex justify-between items-center w-full">
                <span className="text-[#191919] text-[20px] font-semibold">
                  Can I send money internationally with Kweli?
                </span>
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[#6D7280] text-[#6D7280]">
                  +
                </span>
              </div>
            </AccordionItem>

            {/* Third Accordion */}
            <AccordionItem className="bg-[#E5E7EB] rounded-lg p-6 mb-4">
              <div className="flex justify-between items-center w-full">
                <span className="text-[#191919] text-[20px] font-semibold">
                  What currencies can I use with Kweli?
                </span>
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[#6D7280] text-[#6D7280]">
                  +
                </span>
              </div>
            </AccordionItem>

            {/* Fourth Accordion */}
            <AccordionItem className="bg-[#E5E7EB] rounded-lg p-6 mb-4">
              <div className="flex justify-between items-center w-full">
                <span className="text-[#191919] text-[20px] font-semibold">
                  Are there any hidden fees for creating an account?
                </span>
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[#6D7280] text-[#6D7280]">
                  +
                </span>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </Card> 
  );
};

export default Page08;
