import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Users, 
  Shield, 
  Award,
  Headphones,
  Calendar
} from "lucide-react";
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const EnhancedContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    smsConsent: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: "", email: "", phone: "", message: "", smsConsent: false });
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6 text-ocean-100" />,
      title: "Call Us",
      subtitle: "Speak with our travel experts",
      detail: "1-888-411-9121",
      subDetail: "Available 7 days a week, 5am-9pm HST"
    },
    {
      icon: <Mail className="w-6 h-6 text-ocean-100" />,
      title: "Email Us", 
      subtitle: "Get detailed answers to your questions",
      detail: "hello@hawaiiantourco.com",
      subDetail: "We'll respond within 24 hours"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-ocean-100" />,
      title: "Live Chat",
      subtitle: "Instant help when you need it",
      detail: "Available during business hours",
      subDetail: "Chat widget on bottom right"
    },
//    {
//      icon: <MapPin className="w-6 h-6 text-ocean-100" />,
//      title: "Visit Our Office",
//      subtitle: "Meet us in person in beautiful Hawaii",
//      detail: "801 Kakala St #1903, Kapolei, HI 96707",
//      subDetail: "By appointment only"
//    }
  ];

  const trustSignals = [
    {
      icon: <Users className="w-8 h-8 text-sunset-100" />,
      stat: "10,000+",
      label: "Happy Customers"
    },
    {
      icon: <Award className="w-8 h-8 text-ocean-100" />,
      stat: "4.8★",
      label: "Average Rating"
    },
    {
      icon: <Shield className="w-8 h-8 text-palm-100" />,
      stat: "100%",
      label: "Secure Booking"
    },
    {
      icon: <Headphones className="w-8 h-8 text-sunset-100" />,
      stat: "24/7",
      label: "Support Available"
    }
  ];

  return (
    <div className="min-h-screen bg-sand-50">
      <Navigation />
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80")'
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4 pt-12 pb-12 md:pt-20 md:pb-20">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-ocean-100/90 text-white px-4 py-1 rounded-full text-sm mb-6 backdrop-blur-sm">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Plan Your
              <br />Hawaiian Adventure?
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Our local experts are here to help you create unforgettable memories
              in paradise. Let's start planning your perfect island getaway.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* Trust Signals */}
        <section>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustSignals.map((signal, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  {signal.icon}
                </div>
                <div className="text-2xl font-bold text-palm-100 mb-1">
                  {signal.stat}
                </div>
                <div className="text-sm text-gray-600">
                  {signal.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Methods */}
        <section>
          <div className="text-center mb-12">
            <span className="inline-block bg-sunset-100/10 text-sunset-100 px-4 py-1 rounded-full text-sm mb-6">
              Multiple Ways to Reach Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-palm-100 mb-4">
              How Can We Help You Today?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the contact method that works best for you. Our friendly team 
              is ready to help plan your perfect Hawaiian experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {method.icon}
                  </div>
                  <h3 className="font-bold text-lg text-palm-100 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {method.subtitle}
                  </p>
                  <p className="font-semibold text-gray-800 mb-1">
                    {method.detail}
                  </p>
                  <p className="text-xs text-gray-500">
                    {method.subDetail}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Form & Info */}
        <section>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info - LEFT SIDE */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-palm-100 mb-4">
                  Let's Plan Your Perfect Hawaiian Adventure
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our local experts are standing by to help you create unforgettable memories
                  in paradise. Whether you're planning a romantic getaway, family vacation, 
                  or adventure trip, we'll craft the perfect itinerary just for you.
                </p>
              </div>

              {/* Contact Methods Grid */}
              <div className="grid grid-cols-1 gap-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex-shrink-0">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-palm-100 mb-1">{method.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{method.subtitle}</p>
                      <p className="font-semibold text-gray-800">{method.detail}</p>
                      <p className="text-xs text-gray-500">{method.subDetail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="w-6 h-6 text-ocean-100 mr-3" />
                    <h3 className="text-xl font-bold text-palm-100">Business Hours</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-medium">5:00 AM - 9:00 PM HST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-medium">5:00 AM - 9:00 PM HST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-medium">5:00 AM - 9:00 PM HST</span>
                    </div>
                    <div className="mt-4 p-3 bg-ocean-100/10 rounded-lg">
                      <p className="text-xs text-gray-600">
                        Emergency support available 24/7 for existing bookings
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Our Promise */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-ocean-100/5 to-sunset-100/5">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="w-6 h-6 text-sunset-100 mr-3" />
                    <h3 className="text-xl font-bold text-palm-100">Our Promise to You</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-sunset-100 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Response within 24 hours on weekdays</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-ocean-100 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Personalized recommendations based on your interests</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-palm-100 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-700">10% of profits support local Hawaiian communities</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form - RIGHT SIDE */}
            <div className="lg:pl-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-palm-100 mb-2">
                    Send Us a Message
                  </h3>
                  <p className="text-gray-600">
                    Tell us about your dream Hawaiian vacation and we'll make it happen!
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      How Can We Help? *
                    </label>
                    <Textarea
                      placeholder="Tell us about your travel plans, preferred dates, group size, interests, and any questions you have..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="sms-consent"
                      checked={formData.smsConsent}
                      onCheckedChange={(checked) => 
                        setFormData({ ...formData, smsConsent: checked })
                      }
                      required
                    />
                    <label
                      htmlFor="sms-consent"
                      className="text-sm leading-relaxed text-gray-600"
                    >
                      I consent to receive SMS notifications, alerts & occasional marketing 
                      communication from Four Winds Travel Group. Message frequency varies. 
                      Message & data rates may apply. Text HELP to 888-411-9121 for assistance. 
                      You can reply STOP to unsubscribe at any time.
                    </label>
                  </div>
                  
                  <Button 
                    onClick={handleSubmit}
                    className="w-full bg-sunset-100 hover:bg-sunset-200 text-white py-3 text-lg font-semibold"
                  >
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Quick Links */}
        <section className="text-center bg-white rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-palm-100 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">When should I book my tour?</h4>
              <p className="text-gray-600 text-sm">We recommend booking 2-4 weeks in advance, especially during peak season (December-April).</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">What's your cancellation policy?</h4>
              <p className="text-gray-600 text-sm">Full refund 48+ hours before tour. Weather cancellations receive full refund or reschedule.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Do you accommodate dietary restrictions?</h4>
              <p className="text-gray-600 text-sm">Yes! Please let us know about any dietary needs when booking and we'll coordinate with tour operators.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Are your tours family-friendly?</h4>
              <p className="text-gray-600 text-sm">Most tours welcome families. We'll help you choose age-appropriate activities for your group.</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default EnhancedContact;