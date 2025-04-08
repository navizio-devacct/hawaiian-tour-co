
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ActivityPage } from "@/components/ActivityPage";
import { tours } from "@/data/tours";
import { Sunset } from "lucide-react";

const SunsetCruises = () => {
  const sunsetTours = tours.filter(
    (tour) => tour.category === "Sunset Cruises"
  );

  return (
    <>
      <Navigation />
      <ActivityPage
        title="Sunset Cruises"
        description="Sail into the sunset while enjoying drinks and spectacular ocean views on one of our memorable Hawaiian evening cruises."
        icon={<Sunset className="w-8 h-8 text-ocean-100" />}
        tours={sunsetTours}
      />
      <Footer />
    </>
  );
};

export default SunsetCruises;
