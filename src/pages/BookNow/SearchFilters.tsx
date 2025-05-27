import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";

interface SearchFiltersProps {
  showFilters: boolean;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  priceFilter: string;
  setPriceFilter: (price: string) => void;
  categories: string[];
  activeFilters: Array<{ type: string; value: string }>;
  removeFilter: (filter: { type: string; value: string }) => void;
  clearAllFilters: () => void;
}

export const SearchFilters = ({
  showFilters,
  selectedCategory,
  setSelectedCategory,
  priceFilter,
  setPriceFilter,
  categories,
  activeFilters,
  removeFilter,
  clearAllFilters
}: SearchFiltersProps) => {
  if (!showFilters && activeFilters.length === 0) return null;

  return (
    <div className="container mx-auto px-4 -mt-8 relative z-20">
      {/* Additional Filters Panel */}
      {showFilters && (
        <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/30 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="h-12 rounded-xl">
                <SelectValue placeholder="Activity Type" />
              </SelectTrigger>
              <SelectContent className="max-h-64 overflow-y-auto">
                <SelectItem value="all">All Activities</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Price Filter */}
            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger className="h-12 rounded-xl">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="budget">Budget Friendly</SelectItem>
                <SelectItem value="mid">Mid Range</SelectItem>
                <SelectItem value="luxury">Luxury</SelectItem>
              </SelectContent>
            </Select>

            {/* Clear Filters */}
            <Button
              onClick={clearAllFilters}
              variant="outline"
              className="h-12 rounded-xl hover:bg-gray-50 transition-colors"
            >
              Clear All Filters
            </Button>
          </div>
        </div>
      )}

      {/* Active Filters */}
      {activeFilters.length > 0 && (
        <div className="max-w-7xl mx-auto mb-8">
          <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/20">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm text-gray-600 font-medium">Active filters:</span>
              {activeFilters.map((filter, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 bg-ocean-100/10 text-ocean-100 px-4 py-2 rounded-full text-sm font-medium border border-ocean-100/20"
                >
                  <span>{filter.value}</span>
                  <button 
                    onClick={() => removeFilter(filter)}
                    className="hover:bg-ocean-100/20 rounded-full p-1 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};