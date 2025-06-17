import { useState, useEffect, ReactNode } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/sections/Newsletter";
import { WeatherTicker } from "@/components/WeatherTicker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight, Search, X } from "lucide-react";
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
  const [fetchedTours, setFetchedTours] = useState<any[]>([]);
  const [loadingTours, setLoadingTours] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [toursToShow, setToursToShow] = useState(12);
  const [unforgettableToShow, setUnforgettableToShow] = useState(6);
  const [searchParams] = useSearchParams();

  // Replace the fetchTours function in IslandLayout.tsx with this debug version:

useEffect(() => {
  const fetchTours = async () => {
    try {
      const supabaseLocation = name;
      console.log(`🏝️ Fetching tours for: "${supabaseLocation}"`);
      
      const response = await fetch(`/.netlify/functions/get-tours?location=${encodeURIComponent(supabaseLocation)}&limit=2500`);
      console.log(`📡 API Response status: ${response.status}`);
      
      const rawData = await response.json();
      console.log(`📊 Raw data for ${supabaseLocation}:`, {
        total_tours: rawData.data?.length || 0,
        pagination: rawData.pagination,
        first_tour: rawData.data?.[0]
      });

      const mappedTours = rawData.data.map((tour: any) => ({
        id: tour.id,
        title: tour.title,
        description: tour.description,
        price: tour.price,
        image: tour.image,
        affiliateUrl: tour.affiliate_url,
        location: tour.location,
        category: tour.category,
        tags: tour.tags || [],
        isUnforgettable: tour.is_unforgettable,
        isFeatured: tour.is_featured,
        sort_order: tour.sort_order
      }));

      console.log(`🔍 Processed tours for ${supabaseLocation}:`, {
        total: mappedTours.length,
        featured: mappedTours.filter(t => t.isFeatured).length,
        unforgettable: mappedTours.filter(t => t.isUnforgettable).length,
        sample_locations: [...new Set(mappedTours.map(t => t.location))]
      });

      setFetchedTours(mappedTours);
    } catch (error) {
      console.error(`❌ Error fetching tours for ${name}:`, error);
    } finally {
      setLoadingTours(false);
    }
  };

  fetchTours();
}, [name]);

  useEffect(() => {
    const handleHeroSearch = (event: CustomEvent) => {
      const { searchQuery: heroQuery, selectedCategory: heroCategory } = event.detail;
      if (heroQuery) setSearchQuery(heroQuery);
      if (heroCategory && heroCategory !== "all") setSelectedCategory(heroCategory);
      setShowSearch(true);
    };

    window.addEventListener("heroSearch", handleHeroSearch as EventListener);
    return () => window.removeEventListener("heroSearch", handleHeroSearch as EventListener);
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

  const loadMoreTours = () => setToursToShow((prev) => prev + 12);
  const loadMoreUnforgettable = () => setUnforgettableToShow((prev) => prev + 6);

  const categories = Array.from(new Set(fetchedTours.map((tour) => tour.category)));

  const unforgettableTours = fetchedTours.filter((tour) => tour.isUnforgettable);
  const featuredTours = fetchedTours.filter((tour) => tour.isFeatured);

  const filteredTours = featuredTours
    .filter((tour) => {
      const matchesCategory = selectedCategory === "all" || tour.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => (a.sort_order ?? 9999) - (b.sort_order ?? 9999));

  const toursToDisplay = filteredTours.slice(0, toursToShow);
  const visibleUnforgettable = unforgettableTours.slice(0, unforgettableToShow);
  const hasMoreUnforgettable = unforgettableTours.length > unforgettableToShow;
  const hasMoreTours = filteredTours.length > toursToShow;

  const createUniqueKey = (tour: any, section: string, index?: number) =>
    `${section}-${tour.title}-${tour.location}-${index || 0}`;

  return (
    <div className="w-full bg-sand-50">
      <Navigation />
      <div className="w-full">{hero}</div>
      <div className="w-full bg-white py-8 shadow-sm">
        <WeatherTicker location={name} />
      </div>

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-palm-100">Explore {name}</h2>
            <p className="mt-2 text-gray-600">Discover the wonders of {name}</p>
          </div>
          {map}
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {weather}
          {culture}
        </div>

        {/* Unforgettable Section */}
        {unforgettableTours.length > 0 && (
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
              {visibleUnforgettable.map((tour, index) => (
                <TourCard key={createUniqueKey(tour, "unforgettable", index)} {...tour} />
              ))}
            </div>
            {hasMoreUnforgettable && (
              <div className="text-center mt-8">
                <Button onClick={loadMoreUnforgettable} variant="outline">
                  Load More Unforgettable Tours ({unforgettableTours.length - unforgettableToShow} remaining)
                </Button>
              </div>
            )}
          </section>
        )}

        {highlights && <section className="space-y-6">{highlights}</section>}
        {activities && <section className="space-y-6">{activities}</section>}
        {history && <section className="space-y-6">{history}</section>}

        {/* Featured Section */}
        <section className="space-y-6" data-section="tours">
          <div className="text-center">
            <span className="inline-block bg-ocean-100/10 text-ocean-100 px-4 py-1 rounded-full text-sm">
              Featured Tours
            </span>
            <h2 className="mt-4 text-3xl font-bold text-palm-100">
              Must-Do {name} Experiences
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search tours and activities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

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

              {(searchQuery || selectedCategory !== "all") && (
                <Button variant="outline" onClick={clearSearch} className="flex items-center gap-2">
                  <X className="h-4 w-4" />
                  Clear
                </Button>
              )}
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>
                Showing {toursToDisplay.length} of {filteredTours.length} tours
                {searchQuery && ` for "${searchQuery}"`}
                {selectedCategory !== "all" && ` in ${selectedCategory}`}
              </span>
            </div>
          </div>

          {loadingTours ? (
            <p className="text-center text-gray-500">Loading tours...</p>
          ) : (
            <>
              {toursToDisplay.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {toursToDisplay.map((tour, index) => (
                      <TourCard key={createUniqueKey(tour, "featured", index)} {...tour} />
                    ))}
                  </div>
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
                  <Button variant="outline" onClick={clearSearch}>
                    Clear Search
                  </Button>
                </div>
              )}
            </>
          )}
        </section>
      </div>

      <div className="w-full bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Newsletter />
        </div>
      </div>

      <Footer />
    </div>
  );
};
