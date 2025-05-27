import { useEffect, useState } from "react";
import { ChevronDown, Search, Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const KauaiHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedGuests, setSelectedGuests] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSearch = () => {
    // Send search parameters to IslandLayout
    const searchEvent = new CustomEvent('heroSearch', {
      detail: {
        searchQuery,
        selectedDate,
        selectedGuests,
        selectedCategory
      }
    });
    window.dispatchEvent(searchEvent);
    
    // Scroll to tours section
    const toursSection = document.querySelector('[data-section="tours"]');
    if (toursSection) {
      toursSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-full-viewport relative min-h-screen overflow-hidden">
      {/* Kauai Background */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=2070")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
        </div>
      </div>

      <div className="relative w-full min-h-screen flex flex-col items-center justify-center text-white px-4 py-24 sm:py-32">
        <div className="text-center max-w-7xl mx-auto w-full mt-16 sm:mt-20">
          <div
            className={`transform transition-all duration-700 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <span className="inline-block bg-ocean-100/90 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm mb-6 sm:mb-8 backdrop-blur-sm shadow-lg">
              Welcome to Kauai
            </span>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight px-4">
              <span className="bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
                The Garden Isle
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent">
                Nature's Paradise
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto text-gray-100 leading-relaxed px-4">
              Explore the stunning Na Pali Coast, Waimea Canyon, and lush tropical gardens of Kauai.
            </p>

            {/* Enhanced Search Bar */}
            <div className="max-w-6xl mx-auto bg-white/95 backdrop-blur-xl rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl mb-8 sm:mb-12 border border-white/20">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6">
                {/* Activity Search */}
                <div className="relative sm:col-span-2 lg:col-span-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search activities..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 sm:h-14 border-gray-200 text-gray-800 rounded-xl"
                  />
                </div>

                {/* Date Picker */}
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="pl-10 h-12 sm:h-14 border-gray-200 text-gray-800 rounded-xl"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                {/* Guests */}
                <Select value={selectedGuests} onValueChange={setSelectedGuests}>
                  <SelectTrigger className="h-12 sm:h-14 border-gray-200 text-gray-800 rounded-xl">
                    <div className="flex items-center">
                      <Users className="mr-2 h-4 w-4 text-gray-400" />
                      <SelectValue placeholder="Guests" />
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

                {/* Category */}
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="h-12 sm:h-14 border-gray-200 text-gray-800 rounded-xl">
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4 text-gray-400" />
                      <SelectValue placeholder="Category" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="Boat Tours">⛵ Na Pali Coast</SelectItem>
                    <SelectItem value="Snorkeling Adventures">🐠 Snorkeling</SelectItem>
                    <SelectItem value="Hiking Expeditions">🥾 Hiking</SelectItem>
                    <SelectItem value="Kayaking Adventures">🚣 Kayaking</SelectItem>
                    <SelectItem value="Helicopter Tours">🚁 Helicopter Tours</SelectItem>
                    <SelectItem value="Nature Tours">🌿 Nature & Spiritual</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Button 
                  onClick={handleSearch}
                  className="w-full sm:w-auto bg-sunset-100 hover:bg-sunset-200 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 h-12 sm:h-14 text-base sm:text-lg font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Find Your Perfect Adventure
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-lg mx-auto mb-6 sm:mb-8 px-4">
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-green-200">35+</div>
                <div className="text-xs sm:text-sm opacity-90">Tours Available</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-emerald-200">4.8★</div>
                <div className="text-xs sm:text-sm opacity-90">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-teal-200">18K+</div>
                <div className="text-xs sm:text-sm opacity-90">Happy Visitors</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <ChevronDown size={32} className="text-white opacity-80" />
        </div>
      </div>
    </div>
  );
};