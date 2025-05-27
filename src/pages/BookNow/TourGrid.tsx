import { Button } from "@/components/ui/button";
import { Search, TrendingUp, Sparkles, Plus, Loader2 } from "lucide-react";
import { TourCard } from "../../components/TourCard";
import type { Tour } from "../../data/types";

interface TourGridProps {
  tours: Tour[];
  totalFilteredTours: number;
  selectedIsland: string;
  selectedCategory: string;
  clearAllFilters: () => void;
  hasMoreTours: boolean;
  loadMoreTours: () => void;
  isLoading: boolean;
}

export const TourGrid = ({
  tours,
  totalFilteredTours,
  selectedIsland,
  selectedCategory,
  clearAllFilters,
  hasMoreTours,
  loadMoreTours,
  isLoading
}: TourGridProps) => {
  if (totalFilteredTours === 0) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-md mx-auto">
          <div className="text-gray-400 mb-8">
            <Search className="h-24 w-24 mx-auto" />
          </div>
          <h3 className="text-3xl font-bold text-gray-600 mb-4">
            No experiences found
          </h3>
          <p className="text-gray-500 mb-8 text-lg leading-relaxed">
            Try adjusting your search criteria or explore our featured tours instead.
          </p>
          <Button
            onClick={clearAllFilters}
            className="bg-gradient-to-r from-sunset-100 to-sunset-200 hover:from-sunset-200 hover:to-sunset-300 px-8 py-4 text-lg rounded-xl shadow-lg"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            View All Experiences
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Results Header */}
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-palm-100 mb-3">
            {totalFilteredTours} Amazing {totalFilteredTours === 1 ? 'Experience' : 'Experiences'}
          </h2>
          <p className="text-gray-600 text-lg">
            {selectedIsland !== "all" && `${selectedIsland} • `}
            {selectedCategory !== "all" && `${selectedCategory} • `}
            {tours.length < totalFilteredTours && `Showing ${tours.length} of ${totalFilteredTours} • `}
            Instant confirmation on all tours
          </p>
        </div>
        <div className="hidden md:flex items-center gap-3 text-sm text-gray-500">
          <TrendingUp className="w-5 h-5" />
          <span>Updated daily</span>
        </div>
      </div>

      {/* Tours Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map((tour, index) => (
          <TourCard
            key={`${tour.title}-${index}`}
            title={tour.title}
            description={tour.description}
            price={tour.price}
            duration={tour.duration}
            image={tour.image}
            rating={tour.rating}
            location={tour.location}
            category={tour.category}
            affiliateUrl={tour.affiliateUrl}
            showCategory={true}
            isPromoted={tour.tags?.includes("featured") || false}
          />
        ))}
      </div>

      {/* Load More Section */}
      {hasMoreTours && (
        <div className="text-center mt-16">
          <div className="mb-6">
            <p className="text-gray-600 text-lg">
              Showing {tours.length} of {totalFilteredTours} amazing experiences
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-3 max-w-md mx-auto">
              <div 
                className="bg-gradient-to-r from-ocean-100 to-sunset-100 h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(tours.length / totalFilteredTours) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <Button
            onClick={loadMoreTours}
            disabled={isLoading}
            className="bg-gradient-to-r from-ocean-100 to-ocean-200 hover:from-ocean-200 hover:to-ocean-300 px-10 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:opacity-75"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                Loading More Tours...
              </>
            ) : (
              <>
                <Plus className="mr-3 h-5 w-5" />
                Load More Experiences
              </>
            )}
          </Button>
          
          <p className="text-sm text-gray-500 mt-4">
            {totalFilteredTours - tours.length} more experiences available
          </p>
        </div>
      )}

      {/* All Loaded Message */}
      {!hasMoreTours && tours.length > 12 && (
        <div className="text-center mt-16 py-8">
          <div className="inline-flex items-center bg-green-50 text-green-700 px-6 py-3 rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4 mr-2" />
            You've seen all {totalFilteredTours} experiences! 
          </div>
          <p className="text-gray-500 mt-3">
            Try adjusting your filters to discover more adventures
          </p>
        </div>
      )}
    </div>
  );
};