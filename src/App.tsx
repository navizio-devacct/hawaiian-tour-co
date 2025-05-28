import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { AppLayout } from "@/components/layouts/AppLayout";

import Index from "./pages/Index";
import Oahu from "./pages/Oahu";
import Maui from "./pages/Maui";
import BigIsland from "./pages/BigIsland";
import Kauai from "./pages/Kauai";
import Contact from "./pages/Contact";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CancellationPolicy from "./pages/CancellationPolicy";
import AboutUs from "./pages/AboutUs";
import BookNow from "./pages/BookNow/BookNow.tsx";

// Activity Pages
import Snorkeling from "./pages/activities/Snorkeling";
import Hiking from "./pages/activities/Hiking";
import NatureTours from "./pages/activities/NatureTours";
import Photography from "./pages/activities/Photography";
import SunsetCruises from "./pages/activities/Sunset";
import Adventure from "./pages/activities/Adventure";
import BoatTours from "./pages/activities/BoatTours";
import WaterActivities from "./pages/activities/WaterActivities";
import Surf from "./pages/activities/Surf";
import Scuba from "./pages/activities/Scuba";
import PrivateTours from "./pages/activities/PrivateTours";
import Rentals from "./pages/activities/Rentals";
import GuidedTours from "./pages/activities/GuidedTours";
import Sightseeing from "./pages/activities/Sightseeing";
import SUP from "./pages/activities/SUP";
import BusTours from "./pages/activities/BusTours";
import WhaleWatch from "./pages/activities/WhaleWatch";
import Kayaking from "./pages/activities/Kayaking";
import Transportation from "./pages/activities/Transportation";
import WalkingTours from "./pages/activities/WalkingTours";
import Sailing from "./pages/activities/Sailing";

// Add attraction page imports
import PearlHarbor from "./pages/attractions/PearlHarbor";
import DiamondHead from "./pages/attractions/DiamondHead";
import RoadToHana from "./pages/attractions/RoadToHana";
import HawaiiVolcanoes from "./pages/attractions/HawaiiVolcanoes";
import NaPaliCoast from "./pages/attractions/NaPaliCoast";
import WaimeaCanyon from "./pages/attractions/WaimeaCanyon";
import Haleakala from "./pages/attractions/Haleakala";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <AppLayout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/oahu" element={<Oahu />} />
            <Route path="/maui" element={<Maui />} />
            <Route path="/big-island" element={<BigIsland />} />
            <Route path="/kauai" element={<Kauai />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/booknow" element={<BookNow />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cancellation-policy" element={<CancellationPolicy />} />
            
            {/* Activity Routes */}
            <Route path="/activities/snorkeling" element={<Snorkeling />} />
            <Route path="/activities/hiking" element={<Hiking />} />
            <Route path="/activities/nature-tours" element={<NatureTours />} />
            <Route path="/activities/photography" element={<Photography />} />
            <Route path="/activities/sunset" element={<SunsetCruises />} />
            <Route path="/activities/adventure" element={<Adventure />} />
            
            {/* New Activity Routes */}
            <Route path="/activities/boat-tours" element={<BoatTours />} />
            <Route path="/activities/water-activities" element={<WaterActivities />} />
            <Route path="/activities/surf" element={<Surf />} />
            <Route path="/activities/scuba" element={<Scuba />} />
            <Route path="/activities/private-tours" element={<PrivateTours />} />
            <Route path="/activities/rentals" element={<Rentals />} />
            <Route path="/activities/guided-tours" element={<GuidedTours />} />
            <Route path="/activities/sightseeing" element={<Sightseeing />} />
            <Route path="/activities/sup" element={<SUP />} />
            <Route path="/activities/bus-tours" element={<BusTours />} />
            <Route path="/activities/whale-watch" element={<WhaleWatch />} />
            <Route path="/activities/kayaking" element={<Kayaking />} />
            <Route path="/activities/transportation" element={<Transportation />} />
            <Route path="/activities/walking-tours" element={<WalkingTours />} />
            <Route path="/activities/sailing" element={<Sailing />} />
            
            {/* Attraction Routes */}
            <Route path="/attractions/pearl-harbor" element={<PearlHarbor />} />
            <Route path="/attractions/diamond-head" element={<DiamondHead />} />
            <Route path="/attractions/road-to-hana" element={<RoadToHana />} />
            <Route path="/attractions/volcanoes-national-park" element={<HawaiiVolcanoes />} />
            <Route path="/attractions/na-pali-coast" element={<NaPaliCoast />} />
            <Route path="/attractions/waimea-canyon" element={<WaimeaCanyon />} />
            <Route path="/attractions/haleakala" element={<Haleakala />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
