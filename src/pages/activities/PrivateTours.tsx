
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ActivityPage } from "@/components/ActivityPage";
import { tours } from "@/data/tours";
import { Compass } from "lucide-react";

const PrivateTours = () => {
  const privateTours = tours.filter(
    (tour) => tour.category === "Private Tours"
  );

  return (
    <>
      <Navigation />
      <ActivityPage
        title="Private Tours"
        description="Experience Hawaii at your own pace with exclusive, customized private tours tailored to your preferences and schedule."
        icon={<Compass className="w-8 h-8 text-ocean-100" />}
        tours={privateTours}
      />
      <Footer />
    </>
  );
};

export default PrivateTours;
