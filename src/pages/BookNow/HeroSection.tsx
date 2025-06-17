import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Search, 
  MapPin, 
  Users, 
  Star, 
  Filter,
  Zap,
  Award,
  Shield,
  Sparkles,
  ChevronDown,
  SortAsc
} from "lucide-react";

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedIsland: string;
  setSelectedIsland: (island: string) => void;
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  guestCount: string;
  setGuestCount: (count: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
  islands: string[];
  totalTours: number;
  onSearch: () => void; // ✅ Added missing prop
}

export const HeroSection = ({
  searchQuery,
  setSearchQuery,
  selectedIsland,
  setSelectedIsland,
  selectedDate,
  setSelectedDate,
  guestCount,
  setGuestCount,
  sortBy,
  setSortBy,
  showFilters,
  setShowFilters,
  islands,
  totalTours,
  onSearch // ✅ Added missing prop
}: HeroSectionProps) => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Search with debounce effect
  useEffect(() => {
    if (searchQuery) {
      setIsSearching(true);
      const timer = setTimeout(() => {
        setIsSearching(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [searchQuery]);

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

  // ✅ Get search suggestions from API
  const getSearchSuggestions = async (query: string) => {
    if (query.length < 2) return [];
    
    try {
      const params = new URLSearchParams({
        search: query,
        location: selectedIsland,
        limit: "8"
      });
      
      const res = await fetch(`/.netlify/functions/get-tours?${params}`);
      const data = await res.json();
      
      if (data.data && data.data.length > 0) {
        const titles = data.data.map((tour: any) => tour.title);
        const categories = [...new Set(data.data.map((tour: any) => tour.category))];
        
        // Combine and filter unique suggestions
        const allSuggestions = [...new Set([...titles, ...categories])]
          .filter(item => item.toLowerCase().includes(query.toLowerCase()))
          .slice(0, 5);
        
        return allSuggestions;
      }
      return [];
    } catch {
      return [];
    }
  };

  // ✅ Handle search input with debounced suggestions
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

  // ✅ Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  // ✅ Handle search tours button click
  const handleSearchTours = () => {
    onSearch(); // Scroll to tours section
  };

  const trustSignals = [
    { icon: <Shield className="w-5 h-5" />, text: "Secure Booking", color: "text-emerald-600" },
    { icon: <Zap className="w-5 h-5" />, text: "Instant Confirmation", color: "text-blue-600" },
    { icon: <Award className="w-5 h-5" />, text: "Best Price Guarantee", color: "text-amber-600" },
    { icon: <Star className="w-5 h-5" />, text: "4.8★ Rated Tours", color: "text-orange-600" }
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Hero Background - Na Pali Coast at sunset */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1598135753163-6167c1a1ad65?q=80&w=2070")'
        }}
      >
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60" />
        
        {/* Subtle animated overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-100/20 via-transparent to-transparent animate-pulse" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white px-4 py-20">
        {/* Header Content */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          {/* Badge */}
          <div className="inline-flex items-center bg-sunset-100/90 text-white px-6 py-3 rounded-full text-sm mb-10 backdrop-blur-md shadow-lg border border-white/20">
            <Sparkles className="w-5 h-5 mr-2" />
            Book Your Hawaiian Adventure
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-sand-100 to-white bg-clip-text text-transparent">
              Find Your Perfect
            </span>
            <br />
            <span className="bg-gradient-to-r from-sunset-100 via-sunset-200 to-sunset-100 bg-clip-text text-transparent">
              Hawaiian Experience
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-4 text-sand-50 leading-relaxed">
            Search through {totalTours}+ authentic Hawaiian adventures curated by local experts.
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-sand-100/90">
            Instant booking, best prices, and 10% of profits support local communities.
          </p>
        </div>

        {/* Search Interface */}
        <div className="w-full max-w-7xl mx-auto">
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30">
            {/* Main Search Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {/* Search Input with Predictions */}
              <div className="relative md:col-span-2" ref={searchRef}>
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 z-10" />
                <Input
                  placeholder="Search tours, activities, or experiences..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => searchSuggestions.length > 0 && setShowSuggestions(true)}
                  className="pl-12 pr-12 h-16 border-gray-200 text-gray-800 rounded-xl text-lg shadow-sm focus:shadow-md transition-shadow"
                />
                {isSearching && (
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-ocean-100"></div>
                  </div>
                )}
                
                {/* ✅ Search Suggestions Dropdown */}
                {showSuggestions && searchSuggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-lg border z-50 max-h-60 overflow-y-auto">
                    {searchSuggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors border-b last:border-b-0 flex items-center gap-3"
                      >
                        <Search className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-700">{suggestion}</span>
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
                    <SelectItem key={island} value={island}>{island}</SelectItem>
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

            {/* Secondary Controls & Search Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-4">
                {/* Guest Count */}
                <Select value={guestCount} onValueChange={setGuestCount}>
                  <SelectTrigger className="w-36 h-12 border-gray-200 rounded-xl text-gray-700">
                    <div className="flex items-center">
                      <Users className="mr-2 h-4 w-4 text-gray-400" />
                      <SelectValue />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="3">3 Guests</SelectItem>
                    <SelectItem value="4">4 Guests</SelectItem>
                    <SelectItem value="5+">5+ Guests</SelectItem>
                  </SelectContent>
                </Select>

                {/* Sort By */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-44 h-12 border-gray-200 rounded-xl text-gray-700">
                    <div className="flex items-center">
                      <SortAsc className="mr-2 h-4 w-4 text-gray-400" />
                      <SelectValue />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="title">A-Z</SelectItem>
                  </SelectContent>
                </Select>

                {/* More Filters Toggle */}
                <Button
                  onClick={() => setShowFilters(!showFilters)}
                  variant="outline"
                  className="flex items-center gap-3 h-12 px-6 border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-gray-700"
                >
                  <Filter className="w-4 h-4" />
                  More Filters
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`} />
                </Button>
              </div>

              {/* ✅ NEW: Search Tours Button */}
              <Button 
                onClick={handleSearchTours}
                className="h-12 px-8 bg-gradient-to-r from-sunset-100 to-sunset-200 hover:from-sunset-200 hover:to-sunset-300 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
              >
                <Search className="w-5 h-5" />
                Search Tours
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};