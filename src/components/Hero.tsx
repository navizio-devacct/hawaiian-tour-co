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
  X,
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
import { Link } from "react-router-dom";
import { categoryToUrl } from "@/data/tours";

export const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedIsland, setSelectedIsland] = useState("");
  const [suggestedCategories, setSuggestedCategories] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const suggestionsRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % islands.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node)
      ) {
        setSuggestedCategories([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setSearchQuery(input);
    setError("");

    if (input.length > 0) {
      const matches = Object.keys(categoryToUrl).filter((cat) =>
        cat.toLowerCase().startsWith(input.toLowerCase())
      );
      setSuggestedCategories(matches);
    } else {
      setSuggestedCategories([]);
    }
  };

  const handleSearch = () => {
    if (!searchQuery || !selectedIsland) {
      setError("Please enter a search term and select an island.");
      return;
    }

    const params = new URLSearchParams();
    params.set("search", searchQuery);
    if (selectedDate) params.set("date", selectedDate);

    const islandPath = selectedIsland.toLowerCase().replace(" ", "-");
    window.location.href = `/${islandPath}?${params.toString()}`;
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

{/* Search Box + Trust Badges Combined */}
<div className="bg-white/95 backdrop-blur-xl max-w-4xl w-full rounded-2xl p-6 shadow-xl border mb-10">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
    <div className="relative" ref={suggestionsRef}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
      <Input
        placeholder="Search volcano, snorkeling, helicopter..."
        value={searchQuery}
        onChange={handleInputChange}
        className="pl-10 h-12 rounded-xl border-gray-300 text-gray-900"
      />
      {suggestedCategories.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-lg z-50 p-2 grid grid-cols-2 gap-2">
          {suggestedCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSearchQuery(cat);
                setSuggestedCategories([]);
              }}
              className="bg-blue-100 hover:bg-blue-200 text-blue-900 text-sm px-3 py-2 rounded-xl text-left transition"
            >
              {cat}
            </button>
          ))}
        </div>
      )}
    </div>

    <Select value={selectedIsland} onValueChange={setSelectedIsland}>
      <SelectTrigger className="h-12 rounded-xl border-gray-300 text-gray-900">
        <div className="flex items-center">
          <MapPin className="mr-2 h-5 w-5 text-gray-400" />
          <SelectValue placeholder="Choose Island" />
        </div>
      </SelectTrigger>
      <SelectContent>
        {islands.map((i) => (
          <SelectItem key={i.name} value={i.name}>
            {i.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>

    <div className="relative">
      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
      <Input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        className="pl-10 h-12 rounded-xl border-gray-300 text-gray-900"
        min={new Date().toISOString().split("T")[0]}
      />
    </div>
  </div>

  {error && (
    <div className="text-red-600 text-sm mb-3 font-medium bg-red-50 border border-red-200 px-4 py-2 rounded-xl">
      {error}
    </div>
  )}

  <div className="text-center mb-6">
    <Button
      onClick={handleSearch}
      className="bg-sunset-200 hover:bg-sunset-300 text-white text-lg px-8 py-3 rounded-xl shadow transition"
    >
      <Search className="w-5 h-5 mr-2" />
      Find Your Perfect Adventure
    </Button>
  </div>

  {/* Trust Badges Inside */}
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
    {trustSignals.map((signal, i) => (
      <div key={i} className="flex items-center gap-2 text-gray-800 text-sm">
        <div className={`p-2 rounded-xl bg-white/80 ${signal.color}`}>
          {signal.icon}
        </div>
        {signal.text}
      </div>
    ))}
  </div>
</div>


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
