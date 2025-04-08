
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ActivityPage } from "@/components/ActivityPage";
import { tours } from "@/data/tours";
import { Mountain } from "lucide-react";

const Hiking = () => {
  const hikingTours = tours.filter(
    (tour) => tour.category === "Hiking Expeditions"
  );

  return (
    <>
      <Navigation />
      <ActivityPage
        title="Hiking Expeditions"
        description="Trek through lush rainforests and discover breathtaking volcanic landscapes across Hawaii's diverse terrain."
        icon={<Mountain className="w-8 h-8 text-ocean-100" />}
        tours={hikingTours}
      />
      <Footer />
    </>
  );
};

export default Hiking;
