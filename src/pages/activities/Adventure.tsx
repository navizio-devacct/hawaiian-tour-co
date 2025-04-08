
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ActivityPage } from "@/components/ActivityPage";
import { tours } from "@/data/tours";
import { Compass } from "lucide-react";

const Adventure = () => {
  const adventureTours = tours.filter(
    (tour) => tour.category === "Adventure Sports"
  );

  return (
    <>
      <Navigation />
      <ActivityPage
        title="Adventure Sports"
        description="Get your adrenaline pumping with surfing, ziplining, kayaking, and more across the Hawaiian Islands."
        icon={<Compass className="w-8 h-8 text-ocean-100" />}
        tours={adventureTours}
      />
      <Footer />
    </>
  );
};

export default Adventure;
