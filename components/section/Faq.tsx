"use client";
import { useState } from "react";

const faqs = [
  {
    question: "How long does the visa process take?",
    answer:
      "Visa processing times vary significantly by country and type. On average, student visas take anywhere from 4 to 12 weeks. We recommend starting at least 6 months before your intended intake.",
  },
  {
    question: "Do you help with scholarship applications?",
    answer:
      "Yes, we help with scholarship applications. Please contact us for more information.",
  },
  {
    question: "What is the cost of your visa services?",
    answer:
      "Our visa services vary depending on the country and type of visa you need. Please contact us for more information.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-20 container-max mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-headline-lg text-primary mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto">
          Everything you need to know about starting your global education
          journey.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;
          const id = `faq-answer-${index}`;
          const buttonId = `faq-button-${index}`;

          return (
            <div
              key={index}
              className="border border-outline-variant rounded-xl bg-white overflow-hidden"
            >
              <button
                id={buttonId}
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
                aria-controls={id}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-container transition-colors"
              >
                <span className="text-lg font-semibold text-primary">
                  {faq.question}
                </span>
                <span className="text-2xl font-light text-primary">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              <div
                id={id}
                role="region"
                aria-labelledby={buttonId}
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="p-6 pt-0">
                    <p className="text-body-md text-on-surface-variant">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
