import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { SearchTours } from "@/components/SearchTours";
import { FeaturedTours } from "@/components/sections/FeaturedTours";
import { FeaturedActivities } from "@/components/sections/FeaturedActivities";
import { AboutUs } from "@/components/sections/AboutUs";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Blog } from "@/components/sections/Blog";
import { Testimonials } from "@/components/sections/Testimonials";
import { Newsletter } from "@/components/sections/Newsletter";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-sand-50">
      <Navigation />
      <Hero />
      <SearchTours />
      <FeaturedTours />
      <FeaturedActivities />
      <AboutUs />
      <WhyChooseUs />
      <Blog />
      <Testimonials />
      <Newsletter />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;