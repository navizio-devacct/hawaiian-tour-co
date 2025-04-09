
import { TourCard } from "@/components/TourCard";
import { tours } from "@/data/tours";

export const FeaturedTours = () => {
  // Get featured tours from the main tours data
  const featuredTours = tours
    .filter(tour => tour.tags?.includes('featured'))
    .slice(0, 3); // Only display first 3 featured tours

  return (
    <section id="tours" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-ocean-100/10 text-ocean-100 px-4 py-1 rounded-full text-sm mb-4">
            Popular Tours
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-palm-100 mb-4">
            Discover Our Featured Tours
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our most popular tours and create unforgettable memories in
            Hawaii's paradise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTours.map((tour) => (
            <TourCard key={tour.title} {...tour} />
          ))}
        </div>
      </div>
    </section>
  );
};
