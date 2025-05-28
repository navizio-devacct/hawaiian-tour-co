import { ReactNode } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/sections/Newsletter";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, Star, Camera, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface AttractionPageProps {
  name: string;
  location: string;
  heroImage: string;
  overview: string;
  history: string;
  whyVisit: string[];
  bestTimeToVisit: string;
  facts: { label: string; value: string }[];
  highlights: string[];
  tips: string[];
  relatedIsland: string;
}

export const AttractionPage = ({
  name,
  location,
  heroImage,
  overview,
  history,
  whyVisit,
  bestTimeToVisit,
  facts,
  highlights,
  tips,
  relatedIsland,
}: AttractionPageProps) => {
  return (
    <div className="w-full bg-sand-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src={heroImage}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <div className="max-w-4xl">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                {location}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                {name}
              </h1>
              <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
                {overview}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts Bar */}
      <section className="bg-white shadow-sm py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {facts.map((fact, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-palm-100">{fact.value}</div>
                <div className="text-gray-600 text-sm">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* History & Background */}
          <section>
            <h2 className="text-3xl font-bold text-palm-100 mb-6">History & Background</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">{history}</p>
            </div>
          </section>

          {/* Why Visit */}
          <section>
            <h2 className="text-3xl font-bold text-palm-100 mb-6">Why This is a Must-See</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyVisit.map((reason, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm border">
                  <Star className="w-5 h-5 text-sunset-100 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{reason}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Best Time to Visit */}
          <section className="bg-gradient-to-r from-ocean-50 to-sand-50 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-ocean-100" />
              <h2 className="text-2xl font-bold text-palm-100">Best Time to Visit</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">{bestTimeToVisit}</p>
          </section>

          {/* Highlights */}
          <section>
            <h2 className="text-3xl font-bold text-palm-100 mb-6">What You'll Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <Camera className="w-4 h-4 text-sunset-100" />
                    <span className="font-medium text-palm-100">{highlight}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Visitor Tips */}
          <section>
            <h2 className="text-3xl font-bold text-palm-100 mb-6">Insider Tips</h2>
            <div className="space-y-3">
              {tips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-sunset-100 to-sunset-200 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience {name}?</h3>
            <p className="text-white/90 mb-6 text-lg">
              Discover tours and activities that will take you to this incredible destination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={`/${relatedIsland.toLowerCase().replace(' ', '-')}`}
                className="inline-flex items-center bg-white text-sunset-100 hover:bg-gray-50 px-6 py-3 rounded-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Explore {relatedIsland} Tours
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/booknow"
                className="inline-flex items-center bg-white/20 hover:bg-white/30 text-white border border-white/30 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                <Users className="w-5 h-5 mr-2" />
                Browse All Tours
              </Link>
            </div>
          </section>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="w-full bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="container mx-auto px-4">
          <Newsletter />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};
