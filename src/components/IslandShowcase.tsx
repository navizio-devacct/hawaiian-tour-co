import { useState, useEffect } from "react";
import { ArrowRight, MapPin, Star, Users, Flame, Mountain, Waves, TreePine, Camera, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import { useWeatherAPI } from "../hooks/useWeatherAPI";

interface TourCounts {
  [key: string]: number;
}

export const IslandShowcase = () => {
  const [hoveredIsland, setHoveredIsland] = useState<string | null>(null);
  const [tourCounts, setTourCounts] = useState<TourCounts>({});
  const [toursLoading, setToursLoading] = useState(true);
  
  // Get live weather data from National Weather Service
  const { 
    weatherData, 
    loading: weatherLoading, 
    error: weatherError, 
    refreshWeather,
    getWeatherSummary,
    getWeatherWithEmoji,
    lastFetch 
  } = useWeatherAPI();

  // ✅ Fetch live tour counts from existing tours API
  useEffect(() => {
    const fetchTourCounts = async () => {
      setToursLoading(true);
      try {
        console.log('🔍 Fetching tour counts...');
        
        // Use existing get-tours API to count tours by location
        const islands = ['Oahu', 'Kauai', 'Big Island', 'Maui'];
        const counts: TourCounts = {};
        
        for (const island of islands) {
          try {
            const response = await fetch(`/.netlify/functions/get-tours?location=${encodeURIComponent(island)}&limit=1`);
            const data = await response.json();
            
            if (data.pagination) {
              counts[island] = data.pagination.total || 0;
              console.log(`✅ ${island}: ${counts[island]} tours`);
            }
          } catch (err) {
            console.error(`❌ Error fetching ${island} count:`, err);
            counts[island] = 0;
          }
        }
        
        setTourCounts(counts);
        console.log('📊 Final tour counts:', counts);
        
      } catch (error) {
        console.error('❌ Error fetching tour counts:', error);
        // Fallback to default counts
        setTourCounts({
          'Oahu': 2047,
          'Big Island': 878,
          'Maui': 840,
          'Kauai': 417
        });
      } finally {
        setToursLoading(false);
      }
    };

    fetchTourCounts();
  }, []);

  // Dynamic status with LIVE weather data
  const getIslandStatus = (islandName: string) => {
    const weather = weatherData[islandName];
    
    // Default conditions when weather is loading or unavailable
    const defaults = {
      "Big Island": {
        weather: "82°F • Sunny",
        condition: "🌋 Active Volcano Tours",
        alert: false
      },
      "Maui": {
        weather: "78°F • Partly Cloudy", 
        condition: "🌺 Perfect Road to Hana",
        alert: false
      },
      "Oahu": {
        weather: "80°F • Clear Skies",
        condition: "🏖️ Ideal Beach Weather", 
        alert: false
      },
      "Kauai": {
        weather: "75°F • Light Showers",
        condition: "🌿 Lush & Green",
        alert: false
      }
    };

    const defaultStatus = defaults[islandName as keyof typeof defaults];
    
    // Use live weather if available, otherwise use defaults
    if (weather) {
      return {
        weather: getWeatherSummary(islandName),
        condition: defaultStatus.condition, // Keep tour-focused condition
        alert: false,
        isLive: true
      };
    }
    
    return {
      ...defaultStatus,
      isLive: false
    };
  };

  const islands = [
    {
      name: "Oahu",
      subtitle: "The Gathering Place",
      description: "Discover Waikiki Beach, Pearl Harbor, and the vibrant culture of Honolulu.",
      image: "https://images.unsplash.com/photo-1633511090690-0b7f2fec0e8d?q=80&w=2070",
      highlights: ["Pearl Harbor Memorial", "Diamond Head Hike", "Waikiki Beach"],
      topActivity: "Historical Tours", 
      rating: 4.7,
      icon: <Users className="w-5 h-5" />,
      gradient: "from-blue-500 to-cyan-500",
      link: "/oahu"
    },
    {
      name: "Maui",
      subtitle: "The Valley Isle", 
      description: "Experience the legendary Road to Hana, Haleakala sunrise, and world-class beaches.",
      image: "https://images.unsplash.com/photo-1542259009477-d625272157b7?q=80&w=2070",
      highlights: ["Road to Hana", "Haleakala Sunrise", "Snorkeling at Molokini"],
      topActivity: "Scenic Tours",
      rating: 4.8,
      icon: <Mountain className="w-5 h-5" />,
      gradient: "from-purple-500 to-pink-500",
      link: "/maui"
    },
    {
      name: "Big Island",
      subtitle: "Volcanic Wonders",
      description: "Witness active volcanoes, black sand beaches, and diverse landscapes on Hawaii's largest island.",
      image: "https://images.unsplash.com/photo-1576941026827-bccc82341bdd",
      highlights: ["Active Kilauea Volcano", "Manta Ray Night Dives", "Mauna Kea Stargazing"],
      topActivity: "Volcano Tours",
      rating: 4.9,
      icon: <Flame className="w-5 h-5" />,
      gradient: "from-red-500 to-orange-500",
      link: "/big-island"
    },
    {
      name: "Kauai",
      subtitle: "The Garden Isle",
      description: "Explore dramatic Na Pali Coast cliffs, lush valleys, and pristine wilderness.",
      image: "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=2070",
      highlights: ["Na Pali Coast", "Waimea Canyon", "Helicopter Tours"],
      topActivity: "Nature Tours",
      rating: 4.9,
      icon: <TreePine className="w-5 h-5" />,
      gradient: "from-green-500 to-emerald-500", 
      link: "/kauai"
    }
  ];

  // ✅ Calculate total tours from live data
  const totalTours = Object.values(tourCounts).reduce((sum, count) => sum + count, 0);

  return (
    <section className="py-20 bg-gradient-to-br from-sand-50 via-white to-ocean-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-ocean-100/10 text-ocean-100 px-6 py-2 rounded-full text-sm mb-6 backdrop-blur-sm border border-ocean-100/20">
            <MapPin className="w-4 h-4 mr-2" />
            Explore Hawaiian Islands
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-palm-100 mb-6 leading-tight">
            Choose Your Perfect
            <br />
            <span className="bg-gradient-to-r from-sunset-100 via-sunset-200 to-sunset-100 bg-clip-text text-transparent">
              Island Adventure
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each Hawaiian island offers unique experiences and breathtaking beauty. 
            Discover {toursLoading ? '...' : `${totalTours.toLocaleString()}+`} carefully curated tours across all four major islands.
          </p>
          
          {/* Live Weather Indicator */}
          {lastFetch && (
            <div className="mt-6 flex items-center justify-center gap-4">
              <div className="inline-flex items-center bg-green-50 px-4 py-2 rounded-full border border-green-200">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                <span className="text-green-700 font-medium text-sm">
                  Live weather from National Weather Service
                </span>
              </div>
              <button
                onClick={refreshWeather}
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 hover:border-blue-300 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300"
                disabled={weatherLoading}
              >
                <RefreshCw className={`w-4 h-4 ${weatherLoading ? 'animate-spin' : ''}`} />
                Refresh
              </button>
            </div>
          )}
        </div>

        {/* Islands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {islands.map((island, index) => {
            const islandStatus = getIslandStatus(island.name);
            const tourCount = tourCounts[island.name] || 0;
            
            return (
              <Link
                key={island.name}
                to={island.link}
                className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]"
                onMouseEnter={() => setHoveredIsland(island.name)}
                onMouseLeave={() => setHoveredIsland(null)}
              >
                {/* Background Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={island.image}
                    alt={island.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${island.gradient} opacity-60 group-hover:opacity-70 transition-opacity duration-300`} />
                  
                  {/* Live Weather Badge - Top Left */}
                  <div className={`absolute top-4 left-4 px-3 py-2 rounded-xl text-gray-800 font-medium text-sm border shadow-sm transition-all duration-300 ${
                    islandStatus.isLive 
                      ? 'bg-green-50/95 border-green-200/50 backdrop-blur-md' 
                      : 'bg-white/95 border-white/30 backdrop-blur-md'
                  }`}>
                    <div className="flex items-center gap-2">
                      {islandStatus.isLive && (
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      )}
                      <span className={islandStatus.isLive ? 'text-green-800' : 'text-gray-800'}>
                        {islandStatus.weather}
                      </span>
                    </div>
                  </div>
                  
                  {/* ✅ Dynamic Tour Count Badge - Top Right */}
                  <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-2 rounded-xl text-white font-bold text-sm border border-white/20">
                    {toursLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 border border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>...</span>
                      </div>
                    ) : (
                      <span>{tourCount.toLocaleString()} Tours</span>
                    )}
                  </div>

                  {/* Activity Status - Bottom Right Corner */}
                  <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white font-medium text-xs border border-white/30">
                    {islandStatus.condition}
                  </div>
                </div>

                {/* Content */}
                <div className="bg-white p-6">
                  {/* Island Icon & Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r ${island.gradient} rounded-xl text-white shadow-lg`}>
                        {island.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-palm-100">{island.name}</h3>
                        <p className="text-gray-600 text-sm">{island.subtitle}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-palm-100 font-semibold">{island.rating}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {island.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {island.highlights.slice(0, 2).map((highlight, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 px-3 py-1 rounded-full text-gray-700 text-xs font-medium border"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  
                  {/* Bottom Row with Weather Detail */}
                  <div className="pt-3 border-t border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-gray-600 text-sm">{island.topActivity}</div>
                      
                      <div className="flex items-center gap-2 text-ocean-100 group-hover:text-sunset-100 transition-colors duration-300">
                        <span className="font-semibold">Explore</span>
                        <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                          hoveredIsland === island.name ? 'translate-x-1' : ''
                        }`} />
                      </div>
                    </div>
                    
                    {/* Live Weather Detail */}
                    {weatherData[island.name] && (
                      <div className="text-xs text-gray-500 flex items-center gap-1">
                        <span>🌐 Live from NWS</span>
                        <span>•</span>
                        <span>Updated {weatherData[island.name].lastUpdated.toLocaleTimeString()}</span>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-sunset-100 via-sunset-200 to-sunset-100 rounded-3xl p-8 text-white relative overflow-hidden">
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-24 translate-y-24"></div>
              </div>

              <div className="relative z-10">
                <Camera className="w-12 h-12 mx-auto mb-4 text-white" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Can't Decide? Let Our Experts Help!
                </h3>
                <p className="text-white/90 mb-6 text-lg max-w-2xl mx-auto">
                  Get personalized island recommendations based on your interests, travel dates, and group size.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/booknow"
                    className="inline-flex items-center bg-white text-sunset-100 hover:bg-gray-50 px-6 py-3 rounded-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Browse All {toursLoading ? '...' : totalTours.toLocaleString()} Experiences
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <a
                    href="tel:18884119121"
                    className="inline-flex items-center bg-white/20 hover:bg-white/30 text-white border border-white/30 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                  >
                    <Users className="w-5 h-5 mr-2" />
                    Talk to an Expert
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};