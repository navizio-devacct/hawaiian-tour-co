import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BigIslandHero } from "@/components/islands/bigisland/BigIslandHero";
import { BigIslandMap } from "@/components/islands/bigisland/BigIslandMap";
import { BigIslandWeather } from "@/components/islands/bigisland/BigIslandWeather";
import { BigIslandCulture } from "@/components/islands/bigisland/BigIslandCulture";
import { BigIslandTours } from "@/components/islands/bigisland/BigIslandTours";
import { Newsletter } from "@/components/sections/Newsletter";
import { WeatherTicker } from "@/components/WeatherTicker";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const BigIsland = () => {
  return (
    <div className="min-h-screen bg-sand-50">
      <Navigation />
      <BigIslandHero />
      <WeatherTicker location="Big Island" />
      
      {/* Quick Actions */}
      <div className="bg-white py-8 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-sunset-100 hover:bg-sunset-200">
              Book a Tour <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-ocean-100 text-ocean-100">
              Download Guide
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 space-y-20">
        {/* Map Section */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-palm-100">Explore Big Island</h2>
            <p className="mt-2 text-gray-600">Discover the volcanic wonders of Hawaii's largest island</p>
          </div>
          <BigIslandMap />
        </section>

        {/* Weather and Culture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BigIslandWeather />
          <BigIslandCulture />
        </div>

        {/* Featured Tours */}
        <section className="space-y-6">
          <div className="text-center">
            <span className="inline-block bg-ocean-100/10 text-ocean-100 px-4 py-1 rounded-full text-sm">
              Featured Tours
            </span>
            <h2 className="mt-4 text-3xl font-bold text-palm-100">
              Must-Do Big Island Experiences
            </h2>
          </div>
          <BigIslandTours />
        </section>

        {/* Newsletter Section */}
        <div className="bg-ocean-100/5 rounded-2xl p-8">
          <Newsletter />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BigIsland;