
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TourCard } from "@/components/TourCard";
import { mauiTours } from "@/data/tours/maui";

export const MauiTours = () => {
  // Filter to show only 3 featured tours
  const featuredTours = mauiTours
    .filter(tour => tour.tags?.includes("featured"))
    .slice(0, 3);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Popular Tours</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredTours.map((tour) => (
          <TourCard
            key={tour.title}
            title={tour.title}
            description={tour.description}
            price={tour.price}
            duration={tour.duration}
            image={tour.image}
            rating={tour.rating || 4.5}
            location={tour.location}
            affiliateUrl={tour.affiliateUrl}
          />
        ))}
      </div>
    </div>
  );
};
