
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ActivityPage } from "@/components/ActivityPage";
import { tours } from "@/data/tours";
import { Waves } from "lucide-react";

const SUP = () => {
  const supTours = tours.filter(
    (tour) => tour.category === "Stand-Up Paddleboarding"
  );

  return (
    <>
      <Navigation />
      <ActivityPage
        title="Stand-Up Paddleboarding"
        description="Glide across Hawaii's calm waters on a stand-up paddleboard with lessons and tours suitable for all experience levels."
        icon={<Waves className="w-8 h-8 text-ocean-100" />}
        tours={supTours}
      />
      <Footer />
    </>
  );
};

export default SUP;
