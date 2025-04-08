
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Oahu from "./pages/Oahu";
import Maui from "./pages/Maui";
import BigIsland from "./pages/BigIsland";
import Kauai from "./pages/Kauai";
import Contact from "./pages/Contact";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CancellationPolicy from "./pages/CancellationPolicy";

// Activity Pages
import Snorkeling from "./pages/activities/Snorkeling";
import Hiking from "./pages/activities/Hiking";
import NatureTours from "./pages/activities/NatureTours";
import Photography from "./pages/activities/Photography";
import SunsetCruises from "./pages/activities/Sunset";
import Adventure from "./pages/activities/Adventure";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/oahu" element={<Oahu />} />
          <Route path="/maui" element={<Maui />} />
          <Route path="/big-island" element={<BigIsland />} />
          <Route path="/kauai" element={<Kauai />} />
          <Route path="/contact" element={<Contact />} />
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
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
