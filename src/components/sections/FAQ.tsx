import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export const FAQ = () => {
  const faqs = [
    {
      question: "What are the most popular things to do in Maui?",
      answer:
        "Watch the sunrise at Haleakala, drive the Road to Hana, snorkel at Molokini Crater, visit the historic town of Lahaina, and experience a traditional luau. Whale watching (in season), hiking in Iao Valley, and relaxing on Ka'anapali Beach are also must-do activities.",
    },
    {
      question: "What is the best time to visit Maui?",
      answer:
        "The best time to visit Maui is from April to October when the weather is consistently warm and dry. However, if you're interested in whale watching, visit between December and May when humpback whales migrate to the warm Hawaiian waters.",
    },
    {
      question: "How big is the island of Maui?",
      answer:
        "Maui is the second-largest Hawaiian island, with an area of 727.2 square miles. The island is 48 miles long and 26 miles wide, making it easy to explore multiple areas during your stay.",
    },
    {
      question: "What makes Maui's beaches unique?",
      answer:
        "Maui's beaches are known for their diverse characteristics - from the black sand beaches of Waianapanapa to the red sand of Kaihalulu. The island features over 30 miles of beaches, many of which are perfect for swimming, snorkeling, and surfing.",
    },
    {
      question: "What should I know about the Road to Hana?",
      answer:
        "The Road to Hana is a 64.4-mile scenic drive that includes 620 curves and 59 bridges. It typically takes 2.5 to 3 hours one-way without stops. It's recommended to start early and plan for a full day to enjoy the numerous waterfalls, beaches, and scenic points along the way.",
    },
  ];

  return (
    <section className="py-16 bg-sand-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 mx-auto mb-4 text-ocean-100" />
            <h2 className="text-3xl font-bold text-palm-100 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-palm-100/80">
              Find answers to common questions about Maui tours and activities.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-palm-100 hover:text-ocean-100">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-palm-100/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};