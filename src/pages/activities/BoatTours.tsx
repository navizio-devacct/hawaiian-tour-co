
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ActivityPage } from "@/components/ActivityPage";
import { tours } from "@/data/tours";
import { Ship } from "lucide-react";

const BoatTours = () => {
  const boatTours = tours.filter(
    (tour) => tour.category === "Boat Tours"
  );

  return (
    <>
      <Navigation />
      <ActivityPage
        title="Boat Tours"
        description="Experience Hawaii's stunning coastal views and marine life from the water on our expertly guided boat tours."
        icon={<Ship className="w-8 h-8 text-ocean-100" />}
        tours={boatTours}
      />
      <Footer />
    </>
  );
};

export default BoatTours;
