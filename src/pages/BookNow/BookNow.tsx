import { useState, useEffect } from "react";
import { HeroSection } from "./HeroSection";
import { SearchFilters } from "./SearchFilters";
import { TourGrid } from "./TourGrid";
import { CTASection } from "./CTASection";

// Import your actual tour data
import { tours } from "../../data/tours";
import type { Tour } from "../../data/types";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const BookNow = () => {
  // Search and filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIsland, setSelectedIsland] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDate, setSelectedDate] = useState("");
  const [guestCount, setGuestCount] = useState("2");
  const [priceFilter, setPriceFilter] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Array<{ type: string; value: string }>>([]);

  // Pagination state
  const [displayCount, setDisplayCount] = useState(12);
  const [isLoading, setIsLoading] = useState(false);

  // Constants
  const INITIAL_LOAD = 12;
  const LOAD_MORE_COUNT = 12;

  // Get unique categories and islands from your actual data
  const categories = [...new Set(tours.map(tour => tour.category))].sort();
  const islands = [...new Set(tours.map(tour => tour.location))].sort();

  // Update active filters
  useEffect(() => {
    const filters = [];
    if (selectedIsland !== "all") filters.push({ type: "island", value: selectedIsland });
    if (selectedCategory !== "all") filters.push({ type: "category", value: selectedCategory });
    if (priceFilter !== "all") filters.push({ type: "price", value: priceFilter });
    if (searchQuery) filters.push({ type: "search", value: searchQuery });
    setActiveFilters(filters);
  }, [selectedIsland, selectedCategory, priceFilter, searchQuery]);

  // Reset display count when filters change
  useEffect(() => {
    setDisplayCount(INITIAL_LOAD);
  }, [selectedIsland, selectedCategory, priceFilter, searchQuery, sortBy]);

  const removeFilter = (filterToRemove: { type: string; value: string }) => {
    switch (filterToRemove.type) {
      case "island":
        setSelectedIsland("all");
        break;
      case "category":
        setSelectedCategory("all");
        break;
      case "price":
        setPriceFilter("all");
        break;
      case "search":
        setSearchQuery("");
        break;
    }
  };

  // Enhanced filtering and sorting using your actual data
  const filteredTours = tours.filter(tour => {
    const matchesSearch = !searchQuery || 
      tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (tour.tags && tour.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
    
    const matchesIsland = selectedIsland === "all" || tour.location === selectedIsland;
    const matchesCategory = selectedCategory === "all" || tour.category === selectedCategory;
    
    // Price filtering (you can enhance this based on your actual price data)
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
        // Prioritize tours with "featured" tag
        const aFeatured = a.tags?.includes("featured") ? 1 : 0;
        const bFeatured = b.tags?.includes("featured") ? 1 : 0;
        return bFeatured - aFeatured;
      case "title":
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  // Get tours to display (limited by displayCount)
  const toursToDisplay = filteredTours.slice(0, displayCount);
  const hasMoreTours = filteredTours.length > displayCount;

  const loadMoreTours = () => {
    setIsLoading(true);
    // Simulate loading delay for better UX
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
      {/* Hero Section */}
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

      {/* Search Filters */}
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

      {/* Tour Grid */}
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

      {/* CTA Section */}
      <CTASection />
      <Footer />
    </div>
  );
};

export default BookNow;