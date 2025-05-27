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
import { IslandShowcase } from "@/components/IslandShowcase";
import { LiveStats } from "@/components/LiveStats";
import { HawaiiNews } from "./HawaiiNews";

const Index = () => {
  return (
    <div className="min-h-screen bg-sand-50">
      <Navigation />
      <Hero />
      <IslandShowcase />
      <LiveStats />
      <FeaturedTours />
     {/*  <FeaturedActivities /> */}
      <AboutUs />
     {/* <WhyChooseUs /> */}
      <HawaiiNews />
      <Blog />
      <Testimonials />
      <Newsletter />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;