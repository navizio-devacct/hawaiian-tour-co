
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ActivityPage } from "@/components/ActivityPage";
import { tours } from "@/data/tours";
import { Camera } from "lucide-react";

const Photography = () => {
  const photographyTours = tours.filter(
    (tour) => tour.category === "Photography Tours"
  );

  return (
    <>
      <Navigation />
      <ActivityPage
        title="Photography Tours"
        description="Capture stunning landscapes and memorable moments with professional guidance through Hawaii's most photogenic locations."
        icon={<Camera className="w-8 h-8 text-ocean-100" />}
        tours={photographyTours}
      />
      <Footer />
    </>
  );
};

export default Photography;
