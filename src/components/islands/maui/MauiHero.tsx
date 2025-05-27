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

export const MauiHero = () => {
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
    <div className="relative h-[80vh] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1542259009477-d625272157b7?q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <div
          className={`text-center transform transition-all duration-700 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span className="inline-block bg-ocean-100/90 text-white px-4 py-1 rounded-full text-sm mb-6 backdrop-blur-sm">
            Explore Maui
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            The Valley Isle
            <br /> Paradise Awaits
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            From the Road to Hana to Haleakala's summit, discover Maui's most breathtaking adventures.
          </p>

          {/* Enhanced Search Bar */}
          <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              {/* Activity Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search activities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 border-gray-200 text-gray-800"
                />
              </div>

              {/* Date Picker */}
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="pl-10 h-12 border-gray-200 text-gray-800"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              {/* Guests */}
              <Select value={selectedGuests} onValueChange={setSelectedGuests}>
                <SelectTrigger className="h-12 border-gray-200 text-gray-800">
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
                <SelectTrigger className="h-12 border-gray-200 text-gray-800">
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-gray-400" />
                    <SelectValue placeholder="Category" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Snorkeling Adventures">Snorkeling</SelectItem>
                  <SelectItem value="Hiking Expeditions">Hiking</SelectItem>
                  <SelectItem value="Guided Tours">Road to Hana</SelectItem>
                  <SelectItem value="Sunset Cruises">Sunset Cruises</SelectItem>
                  <SelectItem value="Whale Watching">Whale Watching</SelectItem>
                  <SelectItem value="Helicopter Tours">Helicopter Tours</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button 
              onClick={handleSearch}
              className="w-full md:w-auto bg-sunset-100 hover:bg-sunset-200 text-white px-8 py-3 h-12 text-lg font-semibold"
            >
              Find Your Perfect Adventure
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold">40+</div>
              <div className="text-sm md:text-base opacity-90">Tours Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold">4.8★</div>
              <div className="text-sm md:text-base opacity-90">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold">15K+</div>
              <div className="text-sm md:text-base opacity-90">Happy Visitors</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white" />
        </div>
      </div>
    </div>
  );
};