import { Button } from "@/components/ui/button";
import { Phone, Globe, Mail, MessageCircle } from "lucide-react";

export const CTASection = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="relative max-w-6xl mx-auto">
        {/* Main CTA Card */}
        <div className="relative bg-gradient-to-br from-ocean-100 via-ocean-200 to-sunset-100 rounded-3xl p-16 text-white overflow-hidden shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Can't Find What You're
              <br />Looking For?
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-95 leading-relaxed">
              Our local Hawaiian experts are here to help you create the perfect custom itinerary. 
              Get personalized recommendations based on your interests and travel dates.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button 
                className="bg-white text-ocean-100 hover:bg-sand-50 hover:text-ocean-200 px-10 py-4 font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl transform hover:scale-105"
              >
                <Phone className="mr-3 h-5 w-5" />
                Contact Our Experts
              </Button>
              <Button 
                className="border-2 border-white text-white hover:bg-white hover:text-ocean-100 bg-white/10 backdrop-blur-sm px-10 py-4 font-semibold text-lg rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <Globe className="mr-3 h-5 w-5" />
                Browse All Islands
              </Button>
            </div>

            {/* Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <Mail className="w-8 h-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-sm opacity-90">Get detailed itinerary suggestions</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <Phone className="w-8 h-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Call Direct</h3>
                <p className="text-sm opacity-90">Speak with a Hawaii specialist</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <MessageCircle className="w-8 h-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Live Chat</h3>
                <p className="text-sm opacity-90">Get instant help and recommendations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-palm-100 mb-2">150+</div>
            <div className="text-gray-600">Authentic Experiences</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-palm-100 mb-2">4.8★</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-palm-100 mb-2">10%</div>
            <div className="text-gray-600">Supports Communities</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-palm-100 mb-2">24/7</div>
            <div className="text-gray-600">Expert Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};