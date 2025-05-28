import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HelpCircle,
  CalendarDays,
  MapPin,
  Users,
  RefreshCcw,
  Shield,
  Phone,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export const FAQ = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const faqs = [
    {
      id: "timing",
      icon: <CalendarDays className="text-blue-600 w-5 h-5 mr-3" />,
      question: "What's the best time to visit Hawaii?",
      answer:
        "Hawaii is beautiful year-round! For the driest weather, visit April-October. For whale watching, December-May is perfect. We offer tours in all seasons with weather-appropriate options.",
      category: "Planning",
    },
    {
      id: "booking",
      icon: <Shield className="text-green-600 w-5 h-5 mr-3" />,
      question: "How far in advance should I book tours?",
      answer:
        "We recommend booking 2-4 weeks ahead, especially for popular experiences like volcano tours, helicopter rides, and luaus. Many tours sell out during peak seasons (December-March, June-August).",
      category: "Booking",
    },
    {
      id: "islands",
      icon: <MapPin className="text-purple-600 w-5 h-5 mr-3" />,
      question: "Which island should I visit first?",
      answer:
        "Each island offers unique experiences! Oahu has Waikiki and Pearl Harbor, Maui features the Road to Hana, Big Island showcases active volcanoes, and Kauai offers pristine nature. Our experts can help you choose based on your interests.",
      category: "Islands",
    },
    {
      id: "families",
      icon: <Users className="text-orange-600 w-5 h-5 mr-3" />,
      question: "Are your tours family-friendly?",
      answer:
        "Absolutely! Most tours welcome children with age-appropriate options. We clearly mark age restrictions and provide family-friendly alternatives. Kids especially love snorkeling, cultural experiences, and wildlife tours.",
      category: "Families",
    },
    {
      id: "cancellation",
      icon: <RefreshCcw className="text-red-600 w-5 h-5 mr-3" />,
      question: "What's your cancellation policy?",
      answer:
        "Most tours offer free cancellation 24-48 hours before departure. Weather-related cancellations are always fully refunded. Each tour operator sets their specific policy, which we'll clearly show during booking.",
      category: "Policies",
    },
    {
      id: "safety",
      icon: <Shield className="text-teal-600 w-5 h-5 mr-3" />,
      question: "How do you ensure tour safety?",
      answer:
        "All our partner operators are licensed, insured, and regularly inspected. Our guides are certified professionals with extensive local knowledge. We maintain the highest safety standards across all activities.",
      category: "Safety",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-50 text-blue-700 px-6 py-2 rounded-full text-sm mb-6">
              <HelpCircle className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Everything You Need to Know
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                About Hawaiian Tours
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Quick answers to common questions about booking, timing, and experiencing
              the best of Hawaii. Can't find what you're looking for?
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="mb-12">
            <Accordion type="multiple" className="w-full space-y-4">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="bg-gray-50 rounded-2xl border border-gray-200 px-6 py-2 hover:bg-gray-100/50 transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <div className="flex items-start text-gray-900 font-semibold text-lg">
                      {faq.icon}
                      <span className="flex-1">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="ml-8 pr-8">
                      <p className="text-gray-700 leading-relaxed text-base mb-4">
                        {faq.answer}
                      </p>
                      <div className="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                        {faq.category}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Help CTA Section - Full Width */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-50 via-teal-50 to-blue-50 rounded-3xl p-12 border border-blue-100">
              <div className="max-w-4xl mx-auto">
                <HelpCircle className="w-16 h-16 mx-auto mb-6 text-blue-600" />
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Still Have Questions?
                </h3>
                <p className="text-gray-600 mb-8 text-xl">
                  Our Hawaii travel experts are here to help you plan the perfect island adventure.
                  Get personalized recommendations and insider tips.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:18884119121"
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Talk to an Expert
                  </a>

                  <Link
                    to="/faq"
                    className="inline-flex items-center bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 hover:border-blue-300 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                  >
                    View All FAQs
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>

                <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-500">
                  <span>📞 Available 7 days a week</span>
                  <span>⚡ Instant chat support</span>
                  <span>🌺 Local Hawaii experts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
