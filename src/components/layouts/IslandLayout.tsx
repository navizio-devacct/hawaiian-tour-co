import { useState, useEffect } from "react";
import { ReactNode } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/sections/Newsletter";
import { WeatherTicker } from "@/components/WeatherTicker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight, Search, X } from "lucide-react";
import { tours } from "@/data/tours";
import { TourCard } from "@/components/TourCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "react-router-dom";


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
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [toursToShow, setToursToShow] = useState(12);
  const [searchParams] = useSearchParams();


  // Get all featured tours for this island
  const islandTours = tours.filter(
    (tour) => tour.location === name && tour.tags?.includes("featured")
  );

  // Build unique category list
  const categories = Array.from(
    new Set(islandTours.map((tour) => tour.category))
  );

  // Enhanced filtering with search functionality
  const filteredTours = islandTours.filter((tour) => {
    const matchesCategory = selectedCategory === "all" || tour.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const toursToDisplay = filteredTours.slice(0, toursToShow);
  const hasMoreTours = filteredTours.length > toursToShow;

  const createUniqueKey = (tour: any, section: string, index?: number) => {
    return `${section}-${tour.title}-${tour.location}-${index || 0}`;
  };

  useEffect(() => {
    const handleHeroSearch = (event: CustomEvent) => {
      const { searchQuery: heroQuery, selectedCategory: heroCategory } = event.detail;
      if (heroQuery) setSearchQuery(heroQuery);
      if (heroCategory && heroCategory !== "all") setSelectedCategory(heroCategory);
      setShowSearch(true);
    };

    window.addEventListener('heroSearch', handleHeroSearch as EventListener);
    return () => window.removeEventListener('heroSearch', handleHeroSearch as EventListener);
  }, []);

  useEffect(() => {
    const searchParam = searchParams.get("search");
    if (searchParam) {
      setSearchQuery(searchParam);
      setShowSearch(true);
    }
  }, [searchParams]);

  const clearSearch = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setShowSearch(false);
    setToursToShow(12);
  };

  const loadMoreTours = () => {
    setToursToShow(prev => prev + 12);
  };

  return (
    <div className="w-full bg-sand-50">
      <Navigation />
      
      {/* Hero Section - Full Width */}
      <div className="w-full">
        {hero}
      </div>
      
      {/* Weather Ticker - Full Width */}
      <div className="w-full bg-white py-8 shadow-sm">
        <WeatherTicker location={name} />
      </div>

      {/* Quick Actions - Contained */}
      <div className="w-full bg-white py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
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

        {/* Unforgettable Experiences Section */}
        {!customTours && (
          <section className="space-y-6">
            <div className="text-center">
              <span className="inline-block bg-sunset-100/10 text-sunset-100 px-4 py-1 rounded-full text-sm">
                Unforgettable Experiences
              </span>
              <h2 className="mt-4 text-3xl font-bold text-palm-100">
                Our Top Picks for {name}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tours
                .filter(
                  (tour) =>
                    tour.location === name && tour.tags?.includes("unforgettable")
                )
                .map((tour, index) => (
                  <TourCard key={createUniqueKey(tour, "unforgettable", index)} {...tour} />
                ))}
            </div>
          </section>
        )}

        {/* Dynamic Sections */}
        {highlights && <section className="space-y-6">{highlights}</section>}
        {activities && <section className="space-y-6">{activities}</section>}
        {history && <section className="space-y-6">{history}</section>}

        {/* Featured Tours with Enhanced Search */}
        <section className="space-y-6" data-section="tours">
          <div className="text-center">
            <span className="inline-block bg-ocean-100/10 text-ocean-100 px-4 py-1 rounded-full text-sm">
              Featured Tours
            </span>
            <h2 className="mt-4 text-3xl font-bold text-palm-100">
              Must-Do {name} Experiences
            </h2>
          </div>

          {/* Enhanced Search Bar */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              {/* Search Input */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search tours and activities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="All Categories" />
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

              {/* Clear Button */}
              {(searchQuery || selectedCategory !== "all") && (
                <Button
                  variant="outline"
                  onClick={clearSearch}
                  className="flex items-center gap-2"
                >
                  <X className="h-4 w-4" />
                  Clear
                </Button>
              )}
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>
                Showing {toursToDisplay.length} of {filteredTours.length} tours
                {searchQuery && ` for "${searchQuery}"`}
                {selectedCategory !== "all" && ` in ${selectedCategory}`}
              </span>
            </div>
          </div>

          {/* Category Button Filter */}
          {!customTours && (
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                  selectedCategory === "all"
                    ? "bg-sunset-100 text-white border-sunset-100"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                All ({islandTours.length})
              </button>
              {categories.map((cat) => {
                const count = islandTours.filter(tour => tour.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                      selectedCategory === cat
                        ? "bg-sunset-100 text-white border-sunset-100"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {cat} ({count})
                  </button>
                );
              })}
            </div>
          )}

          {/* Tours Grid */}
          {customTours ? (
            customTours
          ) : (
            <>
              {toursToDisplay.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {toursToDisplay.map((tour, index) => (
                      <TourCard key={createUniqueKey(tour, "featured", index)} {...tour} />
                    ))}
                  </div>
                  
                  {/* Load More Button */}
                  {hasMoreTours && (
                    <div className="text-center mt-12">
                      <Button
                        onClick={loadMoreTours}
                        variant="outline"
                        className="border-ocean-100 text-ocean-100 hover:bg-ocean-100 hover:text-white px-8 py-3"
                      >
                        Load More Tours ({filteredTours.length - toursToShow} remaining)
                      </Button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-2xl">
                  <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">
                    No tours found
                  </h3>
                  <p className="text-gray-500 mb-4">
                    Try adjusting your search terms or category filter
                  </p>
                  <Button
                    variant="outline"
                    onClick={clearSearch}
                  >
                    Clear Search
                  </Button>
                </div>
              )}
            </>
          )}
        </section>
      </div>

      {/* Newsletter Section - Full Width */}
      <div className="w-full bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Newsletter />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};