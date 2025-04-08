
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ActivityPage } from "@/components/ActivityPage";
import { tours } from "@/data/tours";
import { Boat } from "lucide-react";

const WhaleWatch = () => {
  const whaleWatching = tours.filter(
    (tour) => tour.category === "Whale Watching"
  );

  return (
    <>
      <Navigation />
      <ActivityPage
        title="Whale Watching"
        description="Witness majestic humpback whales in their natural habitat during Hawaii's whale season on our expert-guided watching tours."
        icon={<Boat className="w-8 h-8 text-ocean-100" />}
        tours={whaleWatching}
      />
      <Footer />
    </>
  );
};

export default WhaleWatch;
