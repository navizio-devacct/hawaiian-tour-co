
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ActivityPage } from "@/components/ActivityPage";
import { tours } from "@/data/tours";
import { Waves } from "lucide-react";

const Snorkeling = () => {
  const snorkelingTours = tours.filter(
    (tour) => tour.category === "Snorkeling Adventures"
  );

  return (
    <>
      <Navigation />
      <ActivityPage
        title="Snorkeling Adventures"
        description="Explore vibrant coral reefs and tropical marine life in crystal-clear waters of the Hawaiian Islands."
        icon={<Waves className="w-8 h-8 text-ocean-100" />}
        tours={snorkelingTours}
      />
      <Footer />
    </>
  );
};

export default Snorkeling;
