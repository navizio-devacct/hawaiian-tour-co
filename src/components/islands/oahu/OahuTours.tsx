
import { TourCard } from "@/components/TourCard";
import { tours } from "@/data/tours";

export const OahuTours = () => {
  // Get tours specific to Oahu location
  const oahuTours = tours
    .filter(tour => tour.location === "Oahu" && tour.tags?.includes('featured'))
    .slice(0, 3); // Limit to 3 tours for display

  return (
    <section className="space-y-8">
      <div className="text-center">
        <span className="inline-block bg-ocean-100/10 text-ocean-100 px-4 py-1 rounded-full text-sm mb-4">
          Featured Tours
        </span>
        <h2 className="text-3xl font-bold text-palm-100 mb-4">
          Recommended Oahu Tours
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our most popular tours on Oahu, carefully curated to provide
          unforgettable experiences
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {oahuTours.map((tour) => (
          <TourCard key={tour.title} {...tour} />
        ))}
      </div>
    </section>
  );
};
