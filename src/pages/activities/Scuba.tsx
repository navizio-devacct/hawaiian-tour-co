
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ActivityPage } from "@/components/ActivityPage";
import { tours } from "@/data/tours";
import { Waves } from "lucide-react";

const Scuba = () => {
  const scubaDiving = tours.filter(
    (tour) => tour.category === "Scuba Diving"
  );

  return (
    <>
      <Navigation />
      <ActivityPage
        title="Scuba Diving"
        description="Explore Hawaii's underwater paradise with guided scuba diving tours suitable for beginners and certified divers."
        icon={<Waves className="w-8 h-8 text-ocean-100" />}
        tours={scubaDiving}
      />
      <Footer />
    </>
  );
};

export default Scuba;
