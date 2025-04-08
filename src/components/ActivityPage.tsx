
import { useState } from "react";
import { TourCard } from "@/components/TourCard";
import { Tour, locations } from "@/data/tours";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ActivityPageProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tours: Tour[];
}

export const ActivityPage = ({ title, description, icon, tours }: ActivityPageProps) => {
  const [selectedLocation, setSelectedLocation] = useState<string>("all");

  const filteredTours = selectedLocation === "all"
    ? tours
    : tours.filter(tour => tour.location === selectedLocation);

  return (
    <div className="min-h-screen bg-sand-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-ocean-100/10 to-sand-50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white p-4 rounded-full shadow-md">
              {icon}
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-palm-100 mb-4">
            {title}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {description}
          </p>
        </div>
      </section>

      {/* Tours Grid Section */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          {/* Filter Controls */}
          <div className="mb-8 flex justify-between items-center flex-wrap gap-4">
            <h2 className="text-2xl font-bold text-palm-100">
              {filteredTours.length} Tours Available
            </h2>
            <div className="flex gap-4 items-center">
              <span className="text-gray-600">Filter by Island:</span>
              <Select
                value={selectedLocation}
                onValueChange={(value) => setSelectedLocation(value)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Island" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Islands</SelectItem>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Tours Grid */}
          {filteredTours.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTours.map((tour) => (
                <TourCard key={tour.title} {...tour} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">
                No tours available for the selected criteria. Please try a different filter.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
