import { useState } from "react";
import { Search, Calendar as CalendarIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/components/ui/use-toast";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";

import { tours } from "@/data/tours";
import { TourCard } from "@/components/TourCard";

const tourCategories = [
  "Sightseeing Tours",
  "Water Tours",
  "Adventure Tours",
  "Cultural Tours",
  "Volcano Tours",
  "Sunset Cruises",
  "Snorkeling Tours",
  "Hiking Tours",
];

export const SearchTours = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const { toast } = useToast();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Search applied",
      description: `Filtering tours by "${searchQuery}"$${
        dateRange?.from && dateRange?.to
          ? ` from ${format(dateRange.from, "PPP")} to ${format(
              dateRange.to,
              "PPP"
            )}`
          : ""
      }`,
    });
  };

  const handleTagClick = (category: string) => {
    setSearchQuery(category);
  };

  const filteredTours = tours.filter((tour) => {
    const query = searchQuery.toLowerCase();
    return (
      tour.title?.toLowerCase().includes(query) ||
      tour.description?.toLowerCase().includes(query) ||
      tour.category?.toLowerCase().includes(query) ||
      tour.location?.toLowerCase().includes(query) ||
      tour.tags?.some((tag) => tag.toLowerCase().includes(query))
    );
  });

  return (
    <section className="py-12 bg-sand-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-palm-100 mb-4">
            Find Your Perfect Hawaiian Adventure
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Search through our collection of tours and activities to discover your
            next unforgettable experience in Hawaii
          </p>
        </div>

        {/* Search Form */}
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSearch} className="space-y-4 mb-6">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search tours (e.g., 'Sunset Cruise')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 w-full text-lg rounded-full border-2 border-ocean-100/20 focus:border-ocean-100 transition-colors"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-ocean-100 w-5 h-5" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={`w-full sm:w-[300px] justify-start text-left font-normal ${
                      !dateRange?.from && "text-muted-foreground"
                    }`}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateRange?.from ? (
                      dateRange.to ? (
                        <>
                          {format(dateRange.from, "LLL dd, y")} - {format(dateRange.to, "LLL dd, y")}
                        </>
                      ) : (
                        format(dateRange.from, "LLL dd, y")
                      )
                    ) : (
                      "Select dates"
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={dateRange?.from}
                    selected={dateRange}
                    onSelect={setDateRange}
                    numberOfMonths={2}
                  />
                </PopoverContent>
              </Popover>

              <Button
                type="submit"
                className="w-full sm:w-auto bg-sunset-100 hover:bg-sunset-200 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors duration-300"
              >
                <Search className="w-5 h-5 mr-2" />
                Search Tours
              </Button>
            </div>
          </form>

          <div className="flex flex-wrap gap-3 justify-center items-center mb-8">
            {tourCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleTagClick(category)}
                className="px-4 py-2 rounded-full bg-white border border-ocean-100/20 text-ocean-100 hover:bg-ocean-100/10 transition-colors text-sm font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Section */}
        <div className="container mx-auto px-4">
          {searchQuery.length > 0 ? (
            filteredTours.length > 0 ? (
              <section className="rounded-xl space-y-10 mt-12">
                <div className="text-center">
                  <span className="inline-block bg-sunset-100/10 text-sunset-100 px-4 py-1 rounded-full text-sm">
                    Search Results
                  </span>
                  <h2 className="mt-4 text-3xl font-bold text-palm-100">
                    Matching Tours Found
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredTours.map((tour) => (
                    <TourCard key={tour.title} {...tour} />
                  ))}
                </div>
              </section>
            ) : (
              <p className="text-center text-gray-500 mt-8">No tours found.</p>
            )
          ) : (
            <p className="text-center text-gray-400 mt-8 text-sm">
              Use the search above or tap a category to explore tours.
            </p>
          )}

          <div className="text-center mt-4">
            <Button
              variant="ghost"
              className="text-sm text-ocean-100 hover:underline"
              onClick={() => {
                setSearchQuery("");
                setDateRange(undefined);
              }}
            >
              Reset Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};