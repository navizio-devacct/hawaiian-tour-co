import { TourCard } from "@/components/TourCard";

export const OahuTours = () => {
  const recommendedTours = [
    {
      title: "Pearl Harbor Remembered",
      description:
        "Visit the USS Arizona Memorial and learn about the events that brought the US into World War II.",
      price: 119,
      duration: "6 hours",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      rating: 4.9,
      location: "Pearl Harbor",
    },
    {
      title: "North Shore Adventure",
      description:
        "Experience the legendary North Shore with its famous beaches, surf spots, and local culture.",
      price: 149,
      duration: "8 hours",
      image: "https://images.unsplash.com/photo-1507876466758-bc54f384809c",
      rating: 4.8,
      location: "North Shore",
    },
    {
      title: "Diamond Head Sunrise Hike",
      description:
        "Hike to the summit of Diamond Head crater for breathtaking views of Waikiki and the Pacific Ocean.",
      price: 79,
      duration: "3 hours",
      image: "https://images.unsplash.com/photo-1542259009477-d625272157b7",
      rating: 4.7,
      location: "Diamond Head",
    },
  ];

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
        {recommendedTours.map((tour) => (
          <TourCard key={tour.title} {...tour} />
        ))}
      </div>
    </section>
  );
};