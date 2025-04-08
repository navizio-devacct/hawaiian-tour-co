
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ActivityPage } from "@/components/ActivityPage";
import { tours } from "@/data/tours";
import { Waves } from "lucide-react";

const WaterActivities = () => {
  const waterActivities = tours.filter(
    (tour) => tour.category === "Water Activities"
  );

  return (
    <>
      <Navigation />
      <ActivityPage
        title="Water Activities"
        description="Dive into Hawaii's crystal-clear waters with our range of exciting water-based activities for all ages and skill levels."
        icon={<Waves className="w-8 h-8 text-ocean-100" />}
        tours={waterActivities}
      />
      <Footer />
    </>
  );
};

export default WaterActivities;
