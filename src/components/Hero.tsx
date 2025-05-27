// components/Hero.tsx - Properly Structured
import { useEffect, useState } from "react";
import { ChevronDown, Search, Calendar, MapPin, Users, Star, Shield, Zap, Award, Sparkles, Flame, TrendingUp, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import { Section, Container } from "./layout/AppLayout";

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedGuests, setSelectedGuests] = useState("");
  const [selectedIsland, setSelectedIsland] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [isNotificationDismissed, setIsNotificationDismissed] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Show floating notification after 2 seconds
    const timer = setTimeout(() => {
      if (!isNotificationDismissed) {
        setShowNotification(true);
      }
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [isNotificationDismissed]);

  const dismissNotification = () => {
    setShowNotification(false);
    setIsNotificationDismissed(true);
  };

  // Island showcase data
  const islands = [
    {
      name: "All Islands",
      subtitle: "Complete Hawaiian Experience",
      image: "https://images.unsplash.com/photo-1545251142-f32339076e6d?q=80&w=2070",
      gradient: "from-blue-500/30 via-teal-400/20 to-green-400/30",
      tours: "150+",
      link: "/booknow"
    },
    {
      name: "Big Island", 
      subtitle: "Active Volcanoes & Adventure",
      image: "https://images.unsplash.com/photo-1733711603118-eadcdd85bd25?q=80&w=2070",
      gradient: "from-red-500/35 via-orange-400/25 to-yellow-400/35",
      tours: "35+",
      link: "/big-island"
    },
    {
      name: "Maui",
      subtitle: "Road to Hana & Haleakala",
      image: "https://images.unsplash.com/photo-1542259009477-d625272157b7?q=80&w=2070", 
      gradient: "from-purple-500/30 via-pink-400/20 to-rose-400/30",
      tours: "40+",
      link: "/maui"
    },
    {
      name: "Oahu",
      subtitle: "Waikiki & Pearl Harbor",
      image: "https://images.unsplash.com/photo-1633511090690-0b7f2fec0e8d?q=80&w=2070",
      gradient: "from-emerald-500/30 via-cyan-400/20 to-blue-400/30", 
      tours: "45+",
      link: "/oahu"
    },
    {
      name: "Kauai",
      subtitle: "Garden Isle & Na Pali Coast", 
      image: "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=2070",
      gradient: "from-green-600/35 via-emerald-400/25 to-teal-400/35",
      tours: "30+", 
      link: "/kauai"
    }
  ];

  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % islands.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [islands.length]);

  const currentIsland = islands[currentSlide];

  const trustSignals = [
    { icon: <Shield className="w-5 h-5" />, text: "Secure Booking", color: "text-emerald-600" },
    { icon: <Zap className="w-5 h-5" />, text: "Instant Confirmation", color: "text-blue-600" },
    { icon: <Award className="w-5 h-5" />, text: "Best Price Guarantee", color: "text-amber-600" },
    { icon: <Star className="w-5 h-5" />, text: "4.8★ Rated Tours", color: "text-orange-600" }
  ];

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchQuery) params.set('search', searchQuery);
    if (selectedDate) params.set('date', selectedDate);
    if (selectedGuests) params.set('guests', selectedGuests);
    if (selectedIsland) params.set('island', selectedIsland);
    
    window.location.href = `/booknow${params.toString()}`;
  };

  return (
    <Section fullWidth className="relative min-h-screen overflow-hidden">
      {/* Full-width background - no container constraints */}
      <div className="absolute inset-0">
        {islands.map((island, index) => (
          <div
            key={island.name}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url("${island.image}")` }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${island.gradient}`} />
          </div>
        ))}
      </div>

      {/* Notification Bar - Full Width */}
      <div className={`fixed top-16 left-0 right-0 z-40 px-4 transition-all duration-500 ease-out ${
        showNotification ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <Container size="wide">
          <div className="bg-gradient-to-r from-red-500/95 via-orange-500/95 to-red-500/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-red-400/30 overflow-hidden">
            <div className="flex items-center px-4 sm:px-6 py-3 sm:py-4">
              <div className="flex items-center bg-white/20 px-2 sm:px-3 py-1 rounded-full mr-3 sm:mr-4 flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse mr-1 sm:mr-2"></div>
                <span className="text-white font-bold text-xs sm:text-sm">LIVE</span>
              </div>
              
              <div className="flex-1 overflow-hidden">
                <div className="whitespace-nowrap text-white font-medium text-sm sm:text-base">
                  <div className="inline-block animate-pulse">
                    <span className="inline-block">🌋 <strong>Kilauea erupting!</strong> Spectacular tours available</span>
                    <span className="mx-4 sm:mx-8">•</span>
                    <span className="inline-block">🌊 <strong>Perfect conditions</strong> for snorkeling today</span>
                    <span className="mx-4 sm:mx-8">•</span>
                    <span className="inline-block">⭐ <strong>Clear skies</strong> for stargazing tours</span>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={dismissNotification}
                className="flex-shrink-0 ml-3 sm:ml-4 w-6 h-6 sm:w-8 sm:h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Dismiss notification"
              >
                <X className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Hero Content - Properly Contained */}
      <div className="relative min-h-screen flex flex-col items-center justify-center text-white">
        <Container size="wide" className="text-center">
          <div className={`transform transition-all duration-700 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
            {/* Dynamic Badge */}
            <span className="inline-flex items-center bg-white/10 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm mb-8 backdrop-blur-md shadow-lg border border-white/20">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              {currentIsland.subtitle}
            </span>
            
            {/* Dynamic Heading */}
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-white/90 to-white bg-clip-text text-transparent">
                Discover
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-200 via-white to-yellow-200 bg-clip-text text-transparent">
                {currentIsland.name}
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 max-w-4xl mx-auto text-white/90 leading-relaxed">
              {currentIsland.tours} authentic Hawaiian adventures waiting for you.
            </p>
            <p className="text-base sm:text-lg md:text-xl mb-12 max-w-3xl mx-auto text-white/80">
              Expert guides • Instant booking • Best prices guaranteed • 10% supports local communities
            </p>

            {/* Search Interface - Contained but Spacious */}
            <div className="max-w-6xl mx-auto bg-white/95 backdrop-blur-xl rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl mb-12 border border-white/30">
              {/* Main Search Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
                {/* Search Input */}
                <div className="relative sm:col-span-2">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />
                  <Input
                    placeholder="Search volcano tours, snorkeling..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 sm:pl-12 h-12 sm:h-14 md:h-16 border-gray-200 text-gray-800 rounded-xl text-base sm:text-lg shadow-sm focus:shadow-md transition-shadow"
                  />
                </div>

                {/* Island Selector */}
                <Select value={selectedIsland} onValueChange={setSelectedIsland}>
                  <SelectTrigger className="h-12 sm:h-14 md:h-16 border-gray-200 text-gray-800 rounded-xl text-base sm:text-lg shadow-sm">
                    <div className="flex items-center">
                      <MapPin className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                      <SelectValue placeholder="Choose Island" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Islands</SelectItem>
                    <SelectItem value="Big Island">🌋 Big Island</SelectItem>
                    <SelectItem value="Maui">🌺 Maui</SelectItem>
                    <SelectItem value="Oahu">🏖️ Oahu</SelectItem>
                    <SelectItem value="Kauai">🌿 Kauai</SelectItem>
                  </SelectContent>
                </Select>

                {/* Date Picker */}
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />
                  <Input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="pl-10 sm:pl-12 h-12 sm:h-14 md:h-16 border-gray-200 text-gray-800 rounded-xl text-base sm:text-lg shadow-sm"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
              </div>

              {/* Trust Signals */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-4 sm:p-6 mb-8 border border-gray-100">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {trustSignals.map((signal, index) => (
                    <div key={index} className="flex items-center gap-2 sm:gap-3 text-gray-700">
                      <div className={`p-1.5 sm:p-2 rounded-xl bg-white shadow-sm ${signal.color}`}>
                        {signal.icon}
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-gray-700 leading-tight">{signal.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Search CTA */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Button
                  onClick={handleSearch}
                  className="w-full sm:w-auto bg-gradient-to-r from-sunset-100 to-sunset-200 hover:from-sunset-200 hover:to-sunset-300 text-white px-6 sm:px-10 py-3 sm:py-4 h-12 sm:h-14 text-base sm:text-lg font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Find Your Perfect Adventure
                </Button>
                
                <Link 
                  to="/booknow"
                  className="text-gray-600 hover:text-gray-800 text-base sm:text-lg font-medium hover:underline transition-colors"
                >
                  Browse All 150+ Tours →
                </Link>
              </div>
            </div>

            {/* Island Navigation & Quick Links */}
            <div className="flex justify-center space-x-2 sm:space-x-3 mb-8">
              {islands.map((island, index) => (
                <button
                  key={island.name}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-8 sm:w-12 h-2 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white shadow-lg' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`View ${island.name}`}
                />
              ))}
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4 max-w-4xl mx-auto">
              {islands.map((island) => (
                <Link
                  key={island.name}
                  to={island.link}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-lg sm:text-2xl font-bold mb-1">{island.tours}</div>
                  <div className="text-xs sm:text-sm opacity-90">{island.name} Tours</div>
                </Link>
              ))}
            </div>
          </div>
        </Container>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <ChevronDown size={32} className="text-white opacity-80" />
        </div>
      </div>
    </Section>
  );
};