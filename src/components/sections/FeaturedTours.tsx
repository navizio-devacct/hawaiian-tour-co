import { TourCard } from "@/components/TourCard";

export const FeaturedTours = () => {
  const tours = [
    {
      title: "Pearl Harbor Memorial Tour",
      description:
        "Visit the historic Pearl Harbor and pay tribute to the fallen heroes of WWII. TEST UPDATE",
      price: 119,
      duration: "6 hours",
      image: "https://images.unsplash.com/photo-1528844433838-6115c9c13a14",
      rating: 4.9,
      location: "Oahu",
    },
    {
      title: "Road to Hana Adventure",
      description:
        "Experience the legendary Road to Hana with its waterfalls and scenic views.",
      price: 189,
      duration: "12 hours",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      rating: 4.8,
      location: "Maui",
    },
    {
      title: "Volcano National Park Explorer",
      description:
        "Discover the active volcanoes and unique landscapes of Hawaii's Big Island.",
      price: 149,
      duration: "8 hours",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
      rating: 4.7,
      location: "Big Island",
    },
  ];

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
          {tours.map((tour) => (
            <TourCard key={tour.title} {...tour} />
          ))}
        </div>
      </div>
    </section>
  );
};
