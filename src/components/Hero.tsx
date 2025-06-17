import { useEffect, useState, useRef } from "react";
import {
  ChevronDown,
  Search,
  Calendar,
  MapPin,
  Star,
  Shield,
  Zap,
  Award,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { TourCard } from "@/components/TourCard";
import type { Tour } from "../data/types";

export const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedIsland, setSelectedIsland] = useState("all");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchSuggestions, setSearchSuggestions] = useState<Array<{text: string; type: string}>>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [vipTours, setVipTours] = useState<Tour[]>([]);
  const [isLoadingVip, setIsLoadingVip] = useState(true);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const islands = [
    {
      name: "Big Island",
      subtitle: "Active Volcanoes & Adventure",
      image: "https://images.unsplash.com/photo-1733711603118-eadcdd85bd25?q=80&w=2070",
      gradient: "from-red-500/35 via-orange-400/25 to-yellow-400/35",
      link: "/big-island",
    },
    {
      name: "Maui",
      subtitle: "Road to Hana & Haleakala",
      image: "https://images.unsplash.com/photo-1542259009477-d625272157b7?q=80&w=2070",
      gradient: "from-purple-500/30 via-pink-400/20 to-rose-400/30",
      link: "/maui",
    },
    {
      name: "Oahu",
      subtitle: "Waikiki & Pearl Harbor",
      image: "https://images.unsplash.com/photo-1633511090690-0b7f2fec0e8d?q=80&w=2070",
      gradient: "from-emerald-500/30 via-cyan-400/20 to-blue-400/30",
      link: "/oahu",
    },
    {
      name: "Kauai",
      subtitle: "Garden Isle & Na Pali Coast",
      image: "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=2070",
      gradient: "from-green-600/35 via-emerald-400/25 to-teal-400/35",
      link: "/kauai",
    },
  ];

  const trustSignals = [
    { icon: <Shield className="w-5 h-5" />, text: "Secure Booking", color: "text-emerald-600" },
    { icon: <Zap className="w-5 h-5" />, text: "Instant Confirmation", color: "text-blue-600" },
    { icon: <Award className="w-5 h-5" />, text: "Competitive Pricing", color: "text-amber-600" },
    { icon: <Star className="w-5 h-5" />, text: "4.8★ Rated Tours", color: "text-orange-600" },
  ];

  // ✅ Background slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % islands.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Load STATIC VIP tours (only once, no search affects these)
  useEffect(() => {
    const loadVIPTours = async () => {
      setIsLoadingVip(true);
      try {
        // ✅ Only load tours with is_vip=true
        const res = await fetch(`/.netlify/functions/get-tours?limit=3&is_vip=true`);
        const data = await res.json();
        
        // Only set tours if we actually have VIP tours
        if (data.data && data.data.length > 0) {
          const mapped = data.data.map((tour: any) => ({
            id: tour.id,
            title: tour.title,
            description: tour.description,
            price: tour.price,
            image: tour.image,
            affiliateUrl: tour.affiliate_url,
            location: tour.location,
            category: tour.category,
            rating: "4.8", // Default rating
            duration: tour.duration || null,
            isUnforgettable: tour.is_unforgettable,
          }));
          
          setVipTours(mapped);
        } else {
          setVipTours([]); // No VIP tours found
        }
      } catch (err) {
        console.error("❌ Error loading VIP tours:", err);
        setVipTours([]); // Set empty on error
      } finally {
        setIsLoadingVip(false);
      }
    };

    loadVIPTours();
  }, []); // Only runs once, no dependencies

  // ✅ Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Get search suggestions from API (BookNow style)
  const getSearchSuggestions = async (query: string) => {
    if (query.length < 2) return [];
    
    try {
      const params = new URLSearchParams({
        search: query,
        location: selectedIsland,
        limit: "12" // Get more results for better suggestions
      });
      
      const res = await fetch(`/.netlify/functions/get-tours?${params}`);
      const data = await res.json();
      
      if (data.data && data.data.length > 0) {
        const titles = data.data.map((tour: any) => ({
          text: tour.title,
          type: 'tour'
        }));
        
        const categories = [...new Set(data.data.map((tour: any) => tour.category))]
          .map(cat => ({
            text: cat,
            type: 'category'
          }));
        
        // Combine suggestions with type information
        const allSuggestions = [...titles, ...categories]
          .filter(item => item.text.toLowerCase().includes(query.toLowerCase()))
          .slice(0, 8);
        
        return allSuggestions;
      }
      return [];
    } catch {
      return [];
    }
  };

  // ✅ Handle search input with debounced suggestions (BookNow style)
  const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.length >= 2) {
      const suggestions = await getSearchSuggestions(query);
      setSearchSuggestions(suggestions);
      setShowSuggestions(suggestions.length > 0);
    } else {
      setSearchSuggestions([]);
      setShowSuggestions(false);
    }
  };

  // ✅ Handle suggestion click with smart behavior
  const handleSuggestionClick = (suggestion: {text: string; type: string}) => {
    if (suggestion.type === 'category') {
      // For categories, search for the category to show ALL tours in that category
      setSearchQuery(suggestion.text);
    } else {
      // For tour titles, search for the exact title
      setSearchQuery(suggestion.text);
    }
    setShowSuggestions(false);
    // Auto-trigger search
    setTimeout(() => handleSearch(), 100);
  };

  const handleSearch = () => {
    // ✅ Build URL params for BookNow with auto-scroll trigger
    const params = new URLSearchParams();
    
    if (searchQuery.trim()) {
      params.set("search", searchQuery.trim());
    }
    
    if (selectedIsland && selectedIsland !== "all") {
      params.set("island", selectedIsland);
    }
    
    if (selectedDate) {
      params.set("date", selectedDate);
    }

    // ✅ Add auto-scroll parameter to trigger scroll in BookNow
    params.set("autoScroll", "true");

    // ✅ Navigate to BookNow with search params for auto-scroll
    const queryString = params.toString();
    navigate(`/booknow${queryString ? `?${queryString}` : '?autoScroll=true'}`);
  };

  // ✅ Handle Enter key in search input
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const currentIsland = islands[currentSlide];

  return (
    <section className="relative text-white">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center transition-opacity duration-1000"
          style={{ backgroundImage: `url(${currentIsland.image})` }}
        >
          <div className={`absolute inset-0 w-full h-full bg-gradient-to-br ${currentIsland.gradient}`} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20 text-center">
        <span className="inline-flex items-center bg-white/10 text-white px-6 py-2 rounded-full text-sm mb-6 backdrop-blur-md shadow-lg border border-white/20">
          <Sparkles className="w-5 h-5 mr-2" />
          {currentIsland.subtitle}
        </span>

        <h1 className="text-6xl font-bold mb-6 leading-tight">
          Discover <br />
          <span className="bg-gradient-to-r from-yellow-200 via-white to-yellow-200 bg-clip-text text-transparent">
            {currentIsland.name}
          </span>
        </h1>

        {/* Search Interface - BookNow Style */}
        <div className="bg-white/95 backdrop-blur-xl max-w-5xl w-full rounded-3xl p-8 shadow-2xl border border-white/30 mb-10">
          {/* Main Search Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {/* Search Input with Predictions - BookNow Style */}
            <div className="relative md:col-span-2" ref={searchRef}>
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 z-10" />
              <Input
                placeholder="Search tours, activities, or experiences..."
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyPress={handleKeyPress}
                onFocus={() => searchSuggestions.length > 0 && setShowSuggestions(true)}
                className="pl-12 pr-12 h-16 border-gray-200 text-gray-800 rounded-xl text-lg shadow-sm focus:shadow-md transition-shadow"
              />
              
              {/* ✅ Search Suggestions Dropdown - BookNow Style */}
              {showSuggestions && searchSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-lg border z-50 max-h-60 overflow-y-auto">
                  {searchSuggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors border-b last:border-b-0 flex items-center gap-3"
                    >
                      <Search className="w-4 h-4 text-gray-400" />
                      <div className="flex-1">
                        <span className="text-gray-700">{suggestion.text}</span>
                        {suggestion.type === 'category' && (
                          <span className="ml-2 text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                            Category
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Island Selector */}
            <Select value={selectedIsland} onValueChange={setSelectedIsland}>
              <SelectTrigger className="h-16 border-gray-200 text-gray-800 rounded-xl text-lg shadow-sm">
                <div className="flex items-center">
                  <MapPin className="mr-3 h-5 w-5 text-gray-400" />
                  <SelectValue placeholder="Choose Island" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Islands</SelectItem>
                {islands.map(island => (
                  <SelectItem key={island.name} value={island.name}>{island.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Date Picker */}
            <Input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="h-16 border-gray-200 text-gray-800 rounded-xl text-lg pl-4 shadow-sm"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>

          {/* Trust Signals */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 mb-8 border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {trustSignals.map((signal, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-700">
                  <div className={`p-2 rounded-xl bg-white shadow-sm ${signal.color}`}>
                    {signal.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{signal.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Search Button */}
          <div className="text-center">
            <Button
              onClick={handleSearch}
              className="h-12 px-8 bg-gradient-to-r from-sunset-100 to-sunset-200 hover:from-sunset-200 hover:to-sunset-300 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
            >
              <Search className="w-5 h-5" />
              Search Tours
            </Button>
          </div>
        </div>

        {/* ✅ STATIC VIP Tours Section - Only show if VIP tours exist */}
        {!isLoadingVip && vipTours.length > 0 && (
          <div className="bg-white/95 backdrop-blur-xl max-w-6xl w-full rounded-2xl p-6 shadow-xl border mb-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">VIP Hawaiian Adventures</h2>
              <Button
                onClick={() => navigate('/booknow')}
                variant="outline"
                className="text-sunset-200 border-sunset-200 hover:bg-sunset-50"
              >
                View All Tours
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {vipTours.map((tour) => (
                <TourCard
                  key={tour.id}
                  {...tour}
                  isPromoted={true}
                />
              ))}
            </div>
          </div>
        )}

        {/* Island Dots */}
        <div className="flex gap-2">
          {islands.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-8 h-2 rounded-full ${
                idx === currentSlide ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white opacity-80" />
        </div>
      </div>
    </section>
  );
};