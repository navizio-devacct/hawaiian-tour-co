
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ActivityPage } from "@/components/ActivityPage";
import { tours } from "@/data/tours";
import { Compass } from "lucide-react";

const Rentals = () => {
  const equipmentRentals = tours.filter(
    (tour) => tour.category === "Equipment Rentals"
  );

  return (
    <>
      <Navigation />
      <ActivityPage
        title="Equipment Rentals"
        description="Rent high-quality adventure gear for your Hawaiian exploration, from snorkeling equipment to kayaks and surfboards."
        icon={<Compass className="w-8 h-8 text-ocean-100" />}
        tours={equipmentRentals}
      />
      <Footer />
    </>
  );
};

export default Rentals;
