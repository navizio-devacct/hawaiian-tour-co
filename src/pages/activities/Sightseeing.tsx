
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ActivityPage } from "@/components/ActivityPage";
import { tours } from "@/data/tours";
import { Compass } from "lucide-react";

const Sightseeing = () => {
  const sightseeingTours = tours.filter(
    (tour) => tour.category === "Sightseeing Tours"
  );

  return (
    <>
      <Navigation />
      <ActivityPage
        title="Sightseeing Tours"
        description="Take in Hawaii's breathtaking landscapes and iconic landmarks on our comprehensive sightseeing tours across the islands."
        icon={<Compass className="w-8 h-8 text-ocean-100" />}
        tours={sightseeingTours}
      />
      <Footer />
    </>
  );
};

export default Sightseeing;
