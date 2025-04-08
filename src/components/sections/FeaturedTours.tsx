import { TourCard } from "@/components/TourCard";

export const FeaturedTours = () => {
  const tours = [
    {
      title: "All Lemuria Journey",
      description: "A sacred Kauai tour connecting spiritual seekers to Lemurian energy portals.",
      price: 122,
      duration: "4 hours",
      image: "https://cdn.filestackcontent.com/RF4FPBllSn5i7YnX4Dt2",
      rating: 4.9,
      location: "Kauai",
      affiliateUrl: "https://fareharbor.com/embeds/book/spiritofkauai/items/441140/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK"
    },
    {
      title: "Kaua'i Healing Journey",
      description: "Explore deep healing with local guides through sacred Kauai sites.",
      price: 144,
      duration: "6 hours",
      image: "https://cdn.filestackcontent.com/ARYI4SVoQQeD3BUtyxOJ",
      rating: 4.8,
      location: "Kauai",
      affiliateUrl: "https://fareharbor.com/embeds/book/spiritofkauai/items/441138/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK"
    },
    {
      title: "Whole Presence QSR Quantum Soul Retrieval",
      description: "Embark on a transformational soul journey with Kauai's sacred energy.",
      price: 199,
      duration: "8 hours",
      image: "https://cdn.filestackcontent.com/H2osZ5YzTKSoK74SnB6Y",
      rating: 4.7,
      location: "Kauai",
      affiliateUrl: "https://fareharbor.com/embeds/book/spiritofkauai/items/441128/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK"
    }
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
