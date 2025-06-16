import { useState, useEffect } from "react";
import { HeroSection } from "./HeroSection";
import { SearchFilters } from "./SearchFilters";
import { TourGrid } from "./TourGrid";
import { CTASection } from "./CTASection";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { Tour } from "../../data/types";

const BookNow = () => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIsland, setSelectedIsland] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDate, setSelectedDate] = useState("");
  const [guestCount, setGuestCount] = useState("2");
  const [priceFilter, setPriceFilter] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Array<{ type: string; value: string }>>([]);

  const [displayCount, setDisplayCount] = useState(12);
  const INITIAL_LOAD = 12;
  const LOAD_MORE_COUNT = 12;

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const res = await fetch("/.netlify/functions/get-tours?location=all");
        const data = await res.json();
  
        // ✅ Inline mapping fix
        const mapped = data.map((tour: any) => ({
          ...tour,
          affiliateUrl: tour.affiliate_url,
          showOnHomepage: tour.show_on_homepage,
          isUnforgettable: tour.is_unforgettable,
        }));
  
        setTours(mapped);
      } catch (err) {
        console.error("❌ Error loading tours:", err);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchTours();
  }, []);
  

  const categories = [...new Set(tours.map(t => t.category))].sort();
  const islands = [...new Set(tours.map(t => t.location))].sort();

  useEffect(() => {
    const filters = [];
    if (selectedIsland !== "all") filters.push({ type: "island", value: selectedIsland });
    if (selectedCategory !== "all") filters.push({ type: "category", value: selectedCategory });
    if (priceFilter !== "all") filters.push({ type: "price", value: priceFilter });
    if (searchQuery) filters.push({ type: "search", value: searchQuery });
    setActiveFilters(filters);
  }, [selectedIsland, selectedCategory, priceFilter, searchQuery]);

  useEffect(() => {
    setDisplayCount(INITIAL_LOAD);
  }, [selectedIsland, selectedCategory, priceFilter, searchQuery, sortBy]);

  const removeFilter = (filterToRemove: { type: string; value: string }) => {
    switch (filterToRemove.type) {
      case "island": setSelectedIsland("all"); break;
      case "category": setSelectedCategory("all"); break;
      case "price": setPriceFilter("all"); break;
      case "search": setSearchQuery(""); break;
    }
  };

  const filteredTours = tours.filter(tour => {
    const matchesSearch = !searchQuery ||
      tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (tour.tags && tour.tags.includes(searchQuery.toLowerCase()));
    
    const matchesIsland = selectedIsland === "all" || tour.location === selectedIsland;
    const matchesCategory = selectedCategory === "all" || tour.category === selectedCategory;

    const matchesPrice = priceFilter === "all" ||
      (priceFilter === "budget" && (!tour.price || tour.price < 100)) ||
      (priceFilter === "mid" && tour.price && tour.price >= 100 && tour.price <= 200) ||
      (priceFilter === "luxury" && tour.price && tour.price > 200);

    return matchesSearch && matchesIsland && matchesCategory && matchesPrice;
  }).sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return (b.rating || 0) - (a.rating || 0);
      case "popular":
        return (b.tags?.includes("featured") ? 1 : 0) - (a.tags?.includes("featured") ? 1 : 0);
      case "title":
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const toursToDisplay = filteredTours.slice(0, displayCount);
  const hasMoreTours = filteredTours.length > displayCount;

  const loadMoreTours = () => {
    setIsLoading(true);
    setTimeout(() => {
      setDisplayCount(prev => prev + LOAD_MORE_COUNT);
      setIsLoading(false);
    }, 500);
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedIsland("all");
    setSelectedCategory("all");
    setPriceFilter("all");
    setSelectedDate("");
    setGuestCount("2");
    setDisplayCount(INITIAL_LOAD);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sand-50 to-ocean-50">
      <Navigation />
      <HeroSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedIsland={selectedIsland}
        setSelectedIsland={setSelectedIsland}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        guestCount={guestCount}
        setGuestCount={setGuestCount}
        sortBy={sortBy}
        setSortBy={setSortBy}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
        islands={islands}
        totalTours={tours.length}
      />
      <SearchFilters
        showFilters={showFilters}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        priceFilter={priceFilter}
        setPriceFilter={setPriceFilter}
        categories={categories}
        activeFilters={activeFilters}
        removeFilter={removeFilter}
        clearAllFilters={clearAllFilters}
      />
      <TourGrid
        tours={toursToDisplay}
        totalFilteredTours={filteredTours.length}
        selectedIsland={selectedIsland}
        selectedCategory={selectedCategory}
        clearAllFilters={clearAllFilters}
        hasMoreTours={hasMoreTours}
        loadMoreTours={loadMoreTours}
        isLoading={isLoading}
      />
      <CTASection />
      <Footer />
    </div>
  );
};

export default BookNow;
