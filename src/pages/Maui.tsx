import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MauiHero } from "@/components/islands/maui/MauiHero";
import { MauiMap } from "@/components/islands/maui/MauiMap";
import { MauiWeather } from "@/components/islands/maui/MauiWeather";
import { MauiCulture } from "@/components/islands/maui/MauiCulture";
import { MauiTours } from "@/components/islands/maui/MauiTours";
import { MauiHighlights } from "@/components/islands/maui/MauiHighlights";
import { MauiActivities } from "@/components/islands/maui/MauiActivities";
import { MauiHistory } from "@/components/islands/maui/MauiHistory";
import { Newsletter } from "@/components/sections/Newsletter";
import { FAQ } from "@/components/sections/FAQ";
import { Testimonials } from "@/components/sections/Testimonials";
import { WeatherTicker } from "@/components/WeatherTicker";
import { Button } from "@/components/ui/button";
import { ChevronRight, Calendar, MapPin } from "lucide-react";

const Maui = () => {
  return (
    <div className="min-h-screen bg-sand-50">
      <Navigation />
      <MauiHero />
      <WeatherTicker location="Maui" />
      
      {/* Primary CTA Section */}
      <div className="bg-white py-8 shadow-md sticky top-0 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-sunset-100 hover:bg-sunset-200 text-lg px-8">
              Book a Tour <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-ocean-100 text-ocean-100 text-lg">
              <Calendar className="mr-2 h-5 w-5" /> View Tour Calendar
            </Button>
            <Button variant="outline" className="border-ocean-100 text-ocean-100 text-lg">
              <MapPin className="mr-2 h-5 w-5" /> Explore Locations
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Essential Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <MauiWeather />
          <MauiCulture />
        </div>

        {/* Map Section */}
        <section className="mb-16">
          <MauiMap />
        </section>

        {/* Highlights Section */}
        <section className="mb-16">
          <MauiHighlights />
        </section>

        {/* Featured Tours Section */}
        <section className="mb-16">
          <div className="text-center">
            <span className="inline-block bg-ocean-100/10 text-ocean-100 px-4 py-1 rounded-full text-sm">
              Featured Tours
            </span>
            <h2 className="mt-4 text-3xl font-bold text-palm-100 mb-8">
              Must-Do Maui Experiences
            </h2>
          </div>
          <MauiTours />
          <div className="text-center mt-8">
            <Button className="bg-sunset-100 hover:bg-sunset-200 text-lg">
              View All Tours <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* Popular Activities */}
        <section className="mb-16">
          <MauiActivities />
        </section>

        {/* History Section */}
        <section className="mb-16">
          <MauiHistory />
        </section>

        {/* Testimonials Section with CTA */}
        <section className="mb-16">
          <Testimonials />
          <div className="text-center mt-8">
            <Button className="bg-sunset-100 hover:bg-sunset-200">
              Read More Reviews <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <FAQ />
        </section>

        {/* Newsletter Section */}
        <section className="bg-ocean-100/5 rounded-2xl p-8 mb-16">
          <Newsletter />
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Maui;