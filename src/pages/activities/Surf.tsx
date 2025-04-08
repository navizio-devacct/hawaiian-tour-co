
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ActivityPage } from "@/components/ActivityPage";
import { tours } from "@/data/tours";
import { Waves } from "lucide-react";

const Surf = () => {
  const surfLessons = tours.filter(
    (tour) => tour.category === "Surf Lessons"
  );

  return (
    <>
      <Navigation />
      <ActivityPage
        title="Surf Lessons"
        description="Learn to ride the waves with professional instructors at Hawaii's legendary surf spots perfect for beginners and advanced surfers alike."
        icon={<Waves className="w-8 h-8 text-ocean-100" />}
        tours={surfLessons}
      />
      <Footer />
    </>
  );
};

export default Surf;
