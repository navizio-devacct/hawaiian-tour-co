
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ActivityPage } from "@/components/ActivityPage";
import { tours } from "@/data/tours";
import { Ship } from "lucide-react";

const Sailing = () => {
  const sailingCharters = tours.filter(
    (tour) => tour.category === "Sailing Charters"
  );

  return (
    <>
      <Navigation />
      <ActivityPage
        title="Sailing Charters"
        description="Set sail on the Pacific Ocean with our luxury sailing charters offering unforgettable experiences from sunset cruises to full-day adventures."
        icon={<Ship className="w-8 h-8 text-ocean-100" />}
        tours={sailingCharters}
      />
      <Footer />
    </>
  );
};

export default Sailing;
