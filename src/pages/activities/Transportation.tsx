
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ActivityPage } from "@/components/ActivityPage";
import { tours } from "@/data/tours";
import { Compass } from "lucide-react";

const Transportation = () => {
  const transportationServices = tours.filter(
    (tour) => tour.category === "Transportation Services"
  );

  return (
    <>
      <Navigation />
      <ActivityPage
        title="Transportation Services"
        description="Travel between Hawaiian destinations with ease using our reliable transportation services, from airport transfers to island-hopping options."
        icon={<Compass className="w-8 h-8 text-ocean-100" />}
        tours={transportationServices}
      />
      <Footer />
    </>
  );
};

export default Transportation;
