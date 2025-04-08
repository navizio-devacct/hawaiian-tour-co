
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ActivityPage } from "@/components/ActivityPage";
import { tours } from "@/data/tours";
import { TreePine } from "lucide-react";

const NatureTours = () => {
  const natureTours = tours.filter(
    (tour) => tour.category === "Nature Tours"
  );

  return (
    <>
      <Navigation />
      <ActivityPage
        title="Nature Tours"
        description="Experience Hawaii's unique flora and fauna with expert naturalist guides on these immersive eco-tours."
        icon={<TreePine className="w-8 h-8 text-ocean-100" />}
        tours={natureTours}
      />
      <Footer />
    </>
  );
};

export default NatureTours;
