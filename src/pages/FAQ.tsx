import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  Clock,
  CreditCard,
  Camera,
  Umbrella,
  Car,
  Waves,
  Mountain,
  Plane,
} from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqCategories = [
    {
      title: "Planning Your Trip",
      icon: <CalendarDays className="w-5 h-5" />,
      color: "text-blue-600",
      faqs: [
        {
          question: "What's the best time to visit Hawaii?",
          answer: "Hawaii is beautiful year-round! For the driest weather and fewer crowds, visit April-May or September-October. December-March is peak season with higher prices but great whale watching. June-August is busy but perfect for families. Each season offers unique experiences - we can help you choose based on your preferences."
        },
        {
          question: "How many days should I spend in Hawaii?",
          answer: "We recommend at least 7-10 days to truly experience Hawaii. For one island, 5-7 days is sufficient. For island hopping, plan 3-4 days per island. This allows time to relax, explore major attractions, and experience local culture without feeling rushed."
        },
        {
          question: "Which island should I visit first?",
          answer: "Oahu is great for first-time visitors with Waikiki, Pearl Harbor, and diverse activities. Maui offers luxury resorts and the famous Road to Hana. Big Island showcases active volcanoes and diverse landscapes. Kauai provides pristine nature and dramatic scenery. We'll help match the perfect island to your interests."
        },
        {
          question: "Do I need a rental car in Hawaii?",
          answer: "It depends on your plans! In Waikiki, you can walk or use public transport. For exploring other areas, a rental car is highly recommended. Some tours include transportation, so you might not need a car every day. We offer tours with pickup services to make your trip more convenient."
        }
      ]
    },
    {
      title: "Booking & Reservations",
      icon: <CreditCard className="w-5 h-5" />,
      color: "text-green-600",
      faqs: [
        {
          question: "How far in advance should I book tours?",
          answer: "Book popular tours 2-4 weeks ahead, especially helicopter rides, volcano tours, and luaus. Pearl Harbor requires advance reservations. During peak seasons (December-March, June-August), book even earlier. Last-minute bookings are sometimes available, but selection is limited."
        },
        {
          question: "What's your cancellation policy?",
          answer: "Most tours offer free cancellation 24-48 hours before departure. Weather-related cancellations are always fully refunded. Each tour operator sets their specific policy, which we clearly display during booking. We recommend travel insurance for added protection."
        },
        {
          question: "Do you offer group discounts?",
          answer: "Yes! Groups of 6+ often receive discounts on many tours. Wedding parties, family reunions, and corporate groups get special rates. Contact us with your group size and preferred activities for a customized quote with the best available pricing."
        },
        {
          question: "Can I modify my booking after confirmation?",
          answer: "Most bookings can be modified up to 24-48 hours before the tour, subject to availability. Changes may incur fees depending on the tour operator's policy. We'll do our best to accommodate changes and will clearly explain any associated costs."
        }
      ]
    },
    {
      title: "Safety & Requirements",
      icon: <Shield className="w-5 h-5" />,
      color: "text-red-600",
      faqs: [
        {
          question: "Are your tours family-friendly?",
          answer: "Most tours welcome children with age-appropriate options! We clearly mark age restrictions and provide family alternatives. Kids especially love snorkeling (age 5+), cultural experiences, and wildlife tours. Some adventure tours have minimum age requirements for safety."
        },
        {
          question: "What safety measures do you have in place?",
          answer: "All partner operators are licensed, insured, and regularly inspected. Our guides are certified professionals with extensive local knowledge and first aid training. We maintain the highest safety standards across all activities and provide safety briefings before each tour."
        },
        {
          question: "Do I need to know how to swim for water activities?",
          answer: "For snorkeling tours, basic swimming ability is recommended but not always required - life jackets are provided. Boat tours don't require swimming skills. We'll clearly state swimming requirements for each activity and offer alternatives for non-swimmers."
        },
        {
          question: "What should I bring on tours?",
          answer: "Essentials include sunscreen (reef-safe), hat, water bottle, and comfortable shoes. For water activities: swimwear, towel, and waterproof phone case. We provide specific packing lists for each tour and often include some equipment like snorkel gear."
        }
      ]
    },
    {
      title: "Activities & Experiences",
      icon: <Mountain className="w-5 h-5" />,
      color: "text-purple-600",
      faqs: [
        {
          question: "What's included in your snorkeling tours?",
          answer: "Snorkeling tours typically include equipment (mask, snorkel, fins), safety briefing, and guide instruction. Many include lunch, drinks, and transportation. Some offer underwater cameras or photos. We partner with operators who visit the best coral reefs and turtle spotting locations."
        },
        {
          question: "How physically demanding are hiking tours?",
          answer: "We offer hikes for all fitness levels! Easy walks (1-2 miles, minimal elevation) to challenging treks (5+ miles, steep terrain). Each tour description includes difficulty level, distance, and elevation gain. Our guides adjust pace for the group and provide rest stops."
        },
        {
          question: "Can I see active lava flows?",
          answer: "Volcanic activity varies constantly. Currently, Kilauea volcano on Big Island is active but viewing depends on conditions. We offer helicopter tours, boat tours, and hiking tours to get as close as safely possible. Our local guides have real-time updates on the best viewing spots."
        },
        {
          question: "What's the best way to see whales?",
          answer: "Whale season runs December-May with peak activity February-March. We offer whale watching boat tours with marine naturalists who explain behaviors. Maui and Big Island have the best viewing. Early morning tours often have calmer seas and better whale activity."
        }
      ]
    },
    {
      title: "Weather & Seasons",
      icon: <Umbrella className="w-5 h-5" />,
      color: "text-cyan-600",
      faqs: [
        {
          question: "What if it rains during my tour?",
          answer: "Hawaii's rain is usually brief and warm! Most tours continue unless there's severe weather. We provide rain ponchos when needed. Some indoor alternatives or covered areas are available. For safety reasons, certain tours (helicopter, boat) may be postponed or cancelled."
        },
        {
          question: "Is hurricane season a concern?",
          answer: "Hurricane season runs June-November, but direct hits are rare. We monitor weather closely and prioritize safety. If conditions are unsafe, we'll reschedule or provide full refunds. Most storms bring just rain and wind, not dangerous conditions."
        },
        {
          question: "How hot does it get in Hawaii?",
          answer: "Hawaii's temperatures are mild year-round, typically 70-85°F (21-29°C). Trade winds provide natural cooling. Higher elevations (like Haleakala) can be much cooler. We recommend layers and always bring sun protection - the tropical sun is strong even on cloudy days."
        }
      ]
    },
    {
      title: "Transportation & Logistics",
      icon: <Car className="w-5 h-5" />,
      color: "text-orange-600",
      faqs: [
        {
          question: "Do you provide hotel pickup?",
          answer: "Many tours include pickup from major hotels and resorts. Pickup areas vary by island and tour type. Some tours meet at central locations. We'll provide exact pickup details and times when you book. Private tours can often accommodate custom pickup locations."
        },
        {
          question: "How do I get between islands?",
          answer: "Inter-island flights take 20-45 minutes and run frequently. Airlines include Hawaiian, Southwest, and Mokulele. We can help coordinate tours if you're island hopping. Some tours include inter-island transportation, making multi-island experiences seamless."
        },
        {
          question: "Is tipping expected for tour guides?",
          answer: "Tipping is appreciated but not required. For excellent service, 10-20% is customary, similar to restaurant service. Some tours include gratuity, which we'll note in the booking details. Your satisfaction is our priority - great guides enhance your Hawaiian experience."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-sand-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1495822892661-2ead864e1c7b")'
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4 pt-12 pb-12 md:pt-20 md:pb-20">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-ocean-100/90 text-white px-4 py-1 rounded-full text-sm mb-6 backdrop-blur-sm">
              Frequently Asked Questions
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Everything You Need to Know
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Get answers to the most common questions about Hawaiian tours, booking, and planning your perfect island adventure
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center border-0 shadow-lg">
            <CardContent className="p-6">
              <Clock className="w-8 h-8 text-sunset-100 mx-auto mb-3" />
              <div className="text-2xl font-bold text-palm-100 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </CardContent>
          </Card>
          <Card className="text-center border-0 shadow-lg">
            <CardContent className="p-6">
              <Shield className="w-8 h-8 text-sunset-100 mx-auto mb-3" />
              <div className="text-2xl font-bold text-palm-100 mb-1">100%</div>
              <div className="text-sm text-gray-600">Safety Guaranteed</div>
            </CardContent>
          </Card>
          <Card className="text-center border-0 shadow-lg">
            <CardContent className="p-6">
              <Users className="w-8 h-8 text-sunset-100 mx-auto mb-3" />
              <div className="text-2xl font-bold text-palm-100 mb-1">10K+</div>
              <div className="text-sm text-gray-600">Happy Guests</div>
            </CardContent>
          </Card>
          <Card className="text-center border-0 shadow-lg">
            <CardContent className="p-6">
              <RefreshCcw className="w-8 h-8 text-sunset-100 mx-auto mb-3" />
              <div className="text-2xl font-bold text-palm-100 mb-1">Free</div>
              <div className="text-sm text-gray-600">Cancellation</div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <div className="flex items-center mb-6">
                <div className={`${category.color} mr-3`}>
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold text-palm-100">{category.title}</h2>
              </div>
              
              <Accordion type="multiple" className="w-full space-y-3">
                {category.faqs.map((faq, faqIndex) => (
                  <AccordionItem
                    key={`${categoryIndex}-${faqIndex}`}
                    value={`${categoryIndex}-${faqIndex}`}
                    className="bg-white rounded-lg border-0 shadow-sm px-6 py-2 hover:shadow-md transition-all"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <span className="text-palm-100 font-semibold text-lg">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-ocean-100/5 to-sunset-100/5">
            <CardContent className="p-8 text-center">
              <HelpCircle className="w-16 h-16 mx-auto mb-6 text-sunset-100" />
              <h3 className="text-3xl font-bold text-palm-100 mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                Our Hawaii travel experts are here to help you plan the perfect island adventure. 
                Get personalized recommendations and insider tips from locals who know Hawaii best.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <a
                  href="tel:18884119121"
                  className="inline-flex items-center bg-sunset-100 hover:bg-sunset-200 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Our Experts
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white hover:bg-gray-50 text-palm-100 border-2 border-ocean-100 hover:border-sunset-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                >
                  Send a Message
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
                <span className="flex items-center">
                  <Phone className="w-4 h-4 mr-1" />
                  Available 7 days a week
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  Response within 1 hour
                </span>
                <span className="flex items-center">
                  <Shield className="w-4 h-4 mr-1" />
                  Local Hawaii experts
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;