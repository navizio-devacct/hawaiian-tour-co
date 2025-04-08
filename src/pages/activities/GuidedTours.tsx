
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ActivityPage } from "@/components/ActivityPage";
import { tours } from "@/data/tours";
import { Compass } from "lucide-react";

const GuidedTours = () => {
  const guidedTours = tours.filter(
    (tour) => tour.category === "Guided Tours"
  );

  return (
    <>
      <Navigation />
      <ActivityPage
        title="Guided Tours"
        description="Discover Hawaii's hidden gems and famous landmarks with knowledgeable local guides sharing cultural insights and historical context."
        icon={<Compass className="w-8 h-8 text-ocean-100" />}
        tours={guidedTours}
      />
      <Footer />
    </>
  );
};

export default GuidedTours;
