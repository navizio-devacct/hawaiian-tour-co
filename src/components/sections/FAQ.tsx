import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, CalendarDays, MapPin, Users, RefreshCcw, Globe } from "lucide-react";

export const FAQ = () => {
  const faqs = [
    {
      icon: <CalendarDays className="text-ocean-100 w-5 h-5 mr-2" />,
      question: "What is the best time to visit Hawaii?",
      answer:
        "Hawaii is a year-round destination! The driest months are April through October. If you're hoping to see humpback whales, visit between December and May.",
    },
    {
      icon: <Globe className="text-ocean-100 w-5 h-5 mr-2" />,
      question: "Do I need to book tours in advance?",
      answer:
        "Yes — we recommend booking your tours early, especially for popular activities like luaus, snorkeling excursions, and helicopter rides. Many experiences sell out weeks in advance.",
    },
    {
      icon: <MapPin className="text-ocean-100 w-5 h-5 mr-2" />,
      question: "Which island should I visit first?",
      answer:
        "It depends! Oahu is great for first-timers and nightlife. Maui offers scenic beauty and waterfalls. Big Island has volcano adventures. Kauai is perfect for nature lovers and hiking.",
    },
    {
      icon: <Users className="text-ocean-100 w-5 h-5 mr-2" />,
      question: "Are your tours suitable for families or kids?",
      answer:
        "Absolutely! Many tours are family-friendly — including boat cruises, cultural experiences, and wildlife watching. Always check the activity details for age and safety recommendations.",
    },
    {
      icon: <RefreshCcw className="text-ocean-100 w-5 h-5 mr-2" />,
      question: "Can I cancel or reschedule my tour?",
      answer:
        "Each tour operator has their own cancellation policy. Most allow free changes up to 24–48 hours before departure. Check the details at checkout or contact us for help.",
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
              Find answers to common questions about booking tours across the Hawaiian Islands.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-palm-100 hover:text-ocean-100">
                  <div className="flex items-center">{faq.icon}{faq.question}</div>
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
