
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ActivityPage } from "@/components/ActivityPage";
import { tours } from "@/data/tours";
import { Compass } from "lucide-react";

const BusTours = () => {
  const busTours = tours.filter(
    (tour) => tour.category === "Bus Tours"
  );

  return (
    <>
      <Navigation />
      <ActivityPage
        title="Bus Tours"
        description="Sit back and enjoy the sights on our comfortable bus tours visiting multiple scenic and cultural highlights across the Hawaiian Islands."
        icon={<Compass className="w-8 h-8 text-ocean-100" />}
        tours={busTours}
      />
      <Footer />
    </>
  );
};

export default BusTours;
