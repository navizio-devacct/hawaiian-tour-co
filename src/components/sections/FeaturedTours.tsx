import { useState } from "react";
import { TourCard } from "@/components/TourCard";
import { tours } from "@/data/tours";
import { Star, Filter, ArrowRight, Sparkles, Flame, Crown } from "lucide-react";
import { Link } from "react-router-dom";

export const FeaturedTours = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Get featured tours from the main tours data
  const featuredTours = tours.filter(tour => tour.tags?.includes('featured'));

  // Categories for filtering
  const categories = [
    { id: "all", label: "All Featured", icon: <Crown className="w-4 h-4" /> },
    { id: "Volcano Tours", label: "Volcano", icon: <Flame className="w-4 h-4" /> },
    { id: "Snorkeling Adventures", label: "Snorkeling", icon: <Star className="w-4 h-4" /> },
    { id: "Helicopter Tours", label: "Helicopter", icon: <Sparkles className="w-4 h-4" /> },
    { id: "Cultural Tours", label: "Cultural", icon: <Star className="w-4 h-4" /> }
  ];

  // Filter tours based on active filter
  const filteredTours = activeFilter === "all" 
    ? featuredTours 
    : featuredTours.filter(tour => tour.category === activeFilter);

  // Limit to 6 tours for display
  const displayTours = filteredTours.slice(0, 6);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="container mx-auto px-4">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100/50 to-blue-200/50 text-blue-700 px-6 py-2 rounded-full text-sm mb-6 backdrop-blur-sm border border-blue-200/30">
            <Crown className="w-4 h-4 mr-2" />
            Featured Experiences
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Our Most Popular
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Hawaiian Adventures
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the experiences that have earned 5-star reviews from thousands of travelers. 
            These hand-picked tours showcase the very best of Hawaii's natural beauty and culture.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-blue-300'
              }`}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </div>

        {/* Tours Counter */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
            <Sparkles className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-gray-700 font-medium">
              Showing {displayTours.length} of {filteredTours.length} featured experiences
            </span>
          </div>
        </div>

        {/* Enhanced Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayTours.map((tour, index) => (
            <div key={tour.title} className="group relative">
              {/* Featured Badge - Moved to upper left corner */}
              <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                ⭐ FEATURED
              </div>
              
              {/* Enhanced Tour Card - No internal badges */}
              <div className="transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl">
                <TourCard
                  {...tour}
                  showCategory={true}
                  isPromoted={false}
                />
              </div>
              
              {/* Hover Effect Overlay - Changed to blue instead of red */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50/50 via-gray-50/50 to-blue-50/50 rounded-3xl p-8 border border-gray-200/50">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Ready for Your Hawaiian Adventure?
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Browse our complete collection of {tours.length}+ tours and find your perfect island experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/booknow"
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <Filter className="w-5 h-5 mr-2" />
                  Browse All Tours
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                
                <button className="inline-flex items-center bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 hover:border-blue-300 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                  <Star className="w-5 h-5 mr-2" />
                  View Customer Reviews
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-4">
            <div className="text-2xl font-bold text-blue-600 mb-2">4.8★</div>
            <div className="text-gray-600 text-sm">Average rating on featured tours</div>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl font-bold text-blue-600 mb-2">10K+</div>
            <div className="text-gray-600 text-sm">Guests on featured experiences</div>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl font-bold text-green-600 mb-2">99%</div>
            <div className="text-gray-600 text-sm">Would recommend to friends</div>
          </div>
        </div>
      </div>
    </section>
  );
};