import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { BsQuestionLg } from "react-icons/bs";
import SectionTopPart from "../SectionTopPart";

const faqData = [
  {
    question: "What is Octobid",
    answer:
      "Octobid is a B2B platform designed to streamline the buying and selling of medical equipment and supplies. It connects suppliers directly with hospitals and healthcare providers, making the procurement process more efficient and transparent.",
  },
  {
    question: "Who is the target audience?",
    answer:
      "Our primary target audience includes hospitals, healthcare providers, medical suppliers, and procurement professionals in the healthcare industry who are looking for efficient ways to buy and sell medical equipment and supplies.",
  },
  {
    question: "What are the unique selling points of the product?",
    answer:
      "Octobid offers verified suppliers, flexible buying options (individual products, packages, or co-buying), smart management tools, faster sourcing, and a streamlined procurement process that saves time and money for healthcare organizations.",
  },
  {
    question: "How does co-buying work?",
    answer:
      "Co-buying allows multiple healthcare organizations to combine their purchasing power to get better prices on medical supplies. Organizations can join existing co-buying groups or create new ones, sharing costs and benefiting from bulk pricing discounts.",
  },
];

export default function FAQs() {
  return (
    <section
      className="relative flex flex-col items-center justify-center  "
      id="faqs"
    
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center bg-[url('/images/bg_gradient1.svg')]  bg-position-[-10rem_bottom_-10rem] bg-cover bg-no-repeat ">
          <SectionTopPart
            icon={<BsQuestionLg className="w-5 h-5 text-white" />}
            title1="FAQs"
            title2="Got Questions"
            description1="A spotlight on the most valued question"
            description2="from our audience."
          />

          {/* Main Content Grid */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl">
            {/* Left Side - Contact Card */}
            <div className="bg-transparent rounded-2xl p-8 text-left w-100 h-114 border border-[#FFFFFF] shadow-sm">
              {/* FAQ Hub Badge */}

              <div className="inline-flex items-center space-x-2 pr-2 bg-white rounded-full border border-[#E9EDF8] mb-10 py-0.5 justify-center">
                <div className="bg-[#284A9A] flex items-center justify-center rounded-full p-1">
                  <BsQuestionLg className="w-4 h-4 text-[#999CA1]" />
                </div>
                <span className="text-black font-semibold text-sm">
                  {" "}
                  Faq Hub
                </span>
              </div>

              {/* Still Have Questions */}
              <h3 className="text-2xl font-bold text-black mb-4">
                Still Have Questions?
              </h3>

              {/* Contact Us Link */}
              <p className="text-gray-600 mb-8">
                <span className="underline font-medium cursor-pointer hover:text-blue-600">
                  Contact Us
                </span>
                . We are happy to help you
              </p>

              {/* Octobid Logo and Mockups */}
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  {/* Main Octobid Logo */}
                  <div className="flex justify-start mb-4">
                    <Image
                      src="/images/logo_with_text.svg"
                      alt="Octobid Logo"
                      width={86}
                      height={132}
                    />

                    <Image
                      src="/images/faqs_small_image.svg"
                      alt="Octobid Logo"
                      width={190}
                      height={128}
                      className="ml-4"
                    />
                  </div>
                </div>
              </div>

              {/* Get the App Button */}
              <button className="w-full h-11 bg-[#284A9A] text-white font-semibold text-lg  rounded-xl hover:bg-[#284A9A]/70 transition-colors text-center">
                Get the App
              </button>
            </div>

            {/* Right Side - FAQ Accordion */}
            <div className="text-left">
              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-0 bg-white rounded-2xl shadow-sm overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-5 text-left font-semibold text-gray-900 hover:no-underline hover:bg-gray-50 [&[data-state=open]>svg]:rotate-45">
                      <span className="text-base">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-5 pt-0">
                      <div className="text-gray-600 text-sm leading-relaxed">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
