
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ActivityPage } from "@/components/ActivityPage";
import { tours } from "@/data/tours";
import { Compass } from "lucide-react";

const WalkingTours = () => {
  const walkingTours = tours.filter(
    (tour) => tour.category === "Walking Tours"
  );

  return (
    <>
      <Navigation />
      <ActivityPage
        title="Walking Tours"
        description="Immerse yourself in Hawaii's culture, history, and natural beauty with our guided walking tours through towns, parks, and historic sites."
        icon={<Compass className="w-8 h-8 text-ocean-100" />}
        tours={walkingTours}
      />
      <Footer />
    </>
  );
};

export default WalkingTours;
