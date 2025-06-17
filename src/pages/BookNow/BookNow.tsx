import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { HeroSection } from "./HeroSection";
import { SearchFilters } from "./SearchFilters";
import { TourGrid } from "./TourGrid";
import { CTASection } from "./CTASection";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { Tour } from "../../data/types";

const BookNow = () => {
  const [searchParams] = useSearchParams();
  const [tours, setTours] = useState<Tour[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // ✅ Initialize state from URL params
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [selectedIsland, setSelectedIsland] = useState(searchParams.get("island") || "all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDate, setSelectedDate] = useState(searchParams.get("date") || "");
  const [guestCount, setGuestCount] = useState("2");
  const [priceFilter, setPriceFilter] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Array<{ type: string; value: string }>>([]);

  const [page, setPage] = useState(1);
  const [limit] = useState(12);
  const [total, setTotal] = useState(0);

  // ✅ Function to scroll to tours section
  const scrollToTours = () => {
    const toursSection = document.querySelector('[data-section="tours"]');
    if (toursSection) {
      toursSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // ✅ Auto-scroll when coming from homepage
  useEffect(() => {
    const autoScrollParam = searchParams.get("autoScroll");
    if (autoScrollParam === "true") {
      // Small delay to ensure content is loaded
      setTimeout(() => {
        scrollToTours();
      }, 500);
    }
  }, [searchParams]);

  // ✅ Reset page when search params change
  useEffect(() => {
    setPage(1);
    setTours([]); // Clear existing tours when search changes
  }, [selectedIsland, searchQuery]);

  useEffect(() => {
    const fetchTours = async () => {
      setIsLoading(true);
      try {
        const params = new URLSearchParams({
          location: selectedIsland,
          search: searchQuery,
          page: page.toString(),
          limit: limit.toString(),
        });

        const res = await fetch(`/.netlify/functions/get-tours?${params}`);
        const json = await res.json();

        const mapped = json.data.map((tour: any) => ({
          ...tour,
          affiliateUrl: tour.affiliate_url,
          showOnHomepage: tour.show_on_homepage,
          isUnforgettable: tour.is_unforgettable,
        }));

        if (page === 1) {
          setTours(mapped);
        } else {
          setTours(prev => [...prev, ...mapped]);
        }

        setTotal(json.pagination.total || 0);
      } catch (err) {
        console.error("❌ Error loading tours:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTours();
  }, [selectedIsland, searchQuery, page]);

  useEffect(() => {
    const filters = [];
    if (selectedIsland !== "all") filters.push({ type: "island", value: selectedIsland });
    if (selectedCategory !== "all") filters.push({ type: "category", value: selectedCategory });
    if (priceFilter !== "all") filters.push({ type: "price", value: priceFilter });
    if (searchQuery) filters.push({ type: "search", value: searchQuery });
    setActiveFilters(filters);
  }, [selectedIsland, selectedCategory, priceFilter, searchQuery]);

  const removeFilter = (filterToRemove: { type: string; value: string }) => {
    switch (filterToRemove.type) {
      case "island": setSelectedIsland("all"); break;
      case "category": setSelectedCategory("all"); break;
      case "price": setPriceFilter("all"); break;
      case "search": setSearchQuery(""); break;
    }
    setPage(1);
  };

  const toursToDisplay = tours;
  const hasMoreTours = tours.length < total;

  const loadMoreTours = () => {
    setPage(prev => prev + 1);
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedIsland("all");
    setSelectedCategory("all");
    setPriceFilter("all");
    setSelectedDate("");
    setGuestCount("2");
    setPage(1);
  };

  const categories = [...new Set(tours.map(t => t.category))].sort();
  const islands = [...new Set(tours.map(t => t.location))].sort();

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
        totalTours={total}
        onSearch={scrollToTours}
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
      <div data-section="tours">
        <TourGrid
          tours={toursToDisplay}
          totalFilteredTours={total}
          selectedIsland={selectedIsland}
          selectedCategory={selectedCategory}
          clearAllFilters={clearAllFilters}
          hasMoreTours={hasMoreTours}
          loadMoreTours={loadMoreTours}
          isLoading={isLoading}
        />
      </div>
      <CTASection />
      <Footer />
    </div>
  );
};

export default BookNow;