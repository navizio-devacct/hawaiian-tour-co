
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ActivityPage } from "@/components/ActivityPage";
import { tours } from "@/data/tours";
import { Waves } from "lucide-react";

const Kayaking = () => {
  const kayakingTours = tours.filter(
    (tour) => tour.category === "Kayaking Adventures"
  );

  return (
    <>
      <Navigation />
      <ActivityPage
        title="Kayaking Adventures"
        description="Paddle through Hawaii's stunning coastal waters, hidden coves, and serene rivers on our guided kayaking adventures."
        icon={<Waves className="w-8 h-8 text-ocean-100" />}
        tours={kayakingTours}
      />
      <Footer />
    </>
  );
};

export default Kayaking;
