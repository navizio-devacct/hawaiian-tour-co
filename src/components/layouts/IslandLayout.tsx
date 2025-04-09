
import { useState } from "react";
import { ReactNode } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/sections/Newsletter";
import { WeatherTicker } from "@/components/WeatherTicker";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { tours } from "@/data/tours";
import { TourCard } from "@/components/TourCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface IslandLayoutProps {
  name: string;
  hero: ReactNode;
  map: ReactNode;
  weather: ReactNode;
  culture: ReactNode;
  tours?: ReactNode;
  highlights?: ReactNode;
  activities?: ReactNode;
  history?: ReactNode;
}

export const IslandLayout = ({
  name,
  hero,
  map,
  weather,
  culture,
  tours: customTours,
  highlights,
  activities,
  history,
}: IslandLayoutProps) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Get all featured tours for this island
  const islandTours = tours.filter(
    (tour) => tour.location === name && tour.tags?.includes("featured")
  );

  // Build unique category list
  const categories = Array.from(
    new Set(islandTours.map((tour) => tour.category))
  );

  // Filter based on selected category
  const filteredTours =
    selectedCategory === "all"
      ? islandTours
      : islandTours.filter((tour) => tour.category === selectedCategory);

  return (
    <div className="min-h-screen bg-sand-50">
      <Navigation />
      {hero}
      <WeatherTicker location={name} />

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
            <h2 className="text-3xl font-bold text-palm-100">Explore {name}</h2>
            <p className="mt-2 text-gray-600">Discover the wonders of {name}</p>
          </div>
          {map}
        </section>

        {/* Weather and Culture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {weather}
          {culture}
        </div>

        {/* Highlights Section */}
        {highlights && <section className="space-y-6">{highlights}</section>}
        {activities && <section className="space-y-6">{activities}</section>}
        {history && <section className="space-y-6">{history}</section>}

        {/* Featured Tours */}
        <section className="space-y-6">
          <div className="text-center">
            <span className="inline-block bg-ocean-100/10 text-ocean-100 px-4 py-1 rounded-full text-sm">
              Featured Tours
            </span>
            <h2 className="mt-4 text-3xl font-bold text-palm-100">
              Must-Do {name} Experiences
            </h2>
          </div>

          {/* Category Filter */}
          {!customTours && (
            <div className="flex justify-center mb-6">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[240px]">
                  <SelectValue placeholder="Filter by Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {customTours ? (
            customTours
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTours.map((tour) => (
                <TourCard key={tour.title} {...tour} />
              ))}
            </div>
          )}
        </section>

        <div className="bg-ocean-100/5 rounded-2xl p-8">
          <Newsletter />
        </div>
      </div>
      <Footer />
    </div>
  );
};

