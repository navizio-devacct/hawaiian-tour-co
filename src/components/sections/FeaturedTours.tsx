import { useState, useEffect } from "react";
import { TourCard } from "@/components/TourCard";
import { Star, Filter, ArrowRight, Sparkles, Flame, Crown } from "lucide-react";
import { Link } from "react-router-dom";

export const FeaturedTours = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6); // How many tours to show initially

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const res = await fetch("/.netlify/functions/get-tours?show_on_homepage=true&limit=20");
        const data = await res.json();

        const mapped = data.data.map((tour) => ({
          ...tour,
          affiliateUrl: tour.affiliate_url,
          showOnHomepage: tour.show_on_homepage,
          isUnforgettable: tour.is_unforgettable,
        }));

        setTours(mapped);
      } catch (err) {
        console.error("❌ Failed to load tours:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  const shuffleTours = (arr) => {
    return [...arr].sort(() => Math.random() - 0.5);
  };

  // Separate pinned and rotating tours
  const pinnedTours = tours
    .filter((t) => t.is_pinned === true && t.showOnHomepage === true)
    .slice(0, 3); // Up to 3 pinned

  const rotatingTours = shuffleTours(
    tours.filter((t) => t.showOnHomepage === true && t.is_pinned !== true)
  );

  const allFeaturedTours = [...pinnedTours, ...rotatingTours];

  const filteredTours = activeFilter === "all"
    ? allFeaturedTours.slice(0, visibleCount)
    : allFeaturedTours
        .filter((t) => t.category === activeFilter)
        .slice(0, visibleCount);

  const categories = [
    { id: "all", label: "All Featured", icon: <Crown className="w-4 h-4" /> },
    { id: "Volcano Tours", label: "Volcano", icon: <Flame className="w-4 h-4" /> },
    { id: "Snorkeling Adventures", label: "Snorkeling", icon: <Star className="w-4 h-4" /> },
    { id: "Helicopter Tours", label: "Helicopter", icon: <Sparkles className="w-4 h-4" /> },
    { id: "Cultural Tours", label: "Cultural", icon: <Star className="w-4 h-4" /> },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="container mx-auto px-4">
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

       {/* <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveFilter(category.id);
                setVisibleCount(6); // Reset count on filter change
              }}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-blue-600 text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-blue-300"
              }`}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </div> */}

        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
            <Sparkles className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-gray-700 font-medium">
              Showing {filteredTours.length} of {allFeaturedTours.length} featured experiences
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredTours.map((tour) => (
            <div key={tour.id} className="group relative">
              <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                ⭐ FEATURED
              </div>
              <div className="transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl">
                <TourCard {...tour} showCategory={true} isPromoted={false} />
              </div>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {visibleCount < allFeaturedTours.length && (
          <div className="text-center mt-8">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="bg-white hover:bg-gray-50 text-blue-600 font-semibold px-6 py-3 rounded-lg border border-blue-200 shadow-sm transition-all"
            >
              Show More Tours
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
