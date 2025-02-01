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
      title: "Search initiated",
      description: `Searching for "${searchQuery}" tours${
        dateRange?.from && dateRange?.to
          ? ` between ${format(dateRange.from, "PPP")} and ${format(
              dateRange.to,
              "PPP"
            )}`
          : ""
      }...`,
    });
    // TODO: Implement actual search functionality with Fareharbor API integration
  };

  const handleTagClick = (category: string) => {
    setSearchQuery(category);
  };

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
                          {format(dateRange.from, "LLL dd, y")} -{" "}
                          {format(dateRange.to, "LLL dd, y")}
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

          <div className="flex flex-wrap gap-3 justify-center items-center">
            {tourCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleTagClick(category)}
                className="px-4 py-2 rounded-full bg-white border border-ocean-100/20 text-ocean-100 hover:bg-ocean-100/10 transition-colors text-sm font-medium animate-fade-up"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};