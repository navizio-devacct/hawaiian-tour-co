import { IslandLayout } from "@/components/layouts/IslandLayout";
import { MauiHero } from "@/components/islands/maui/MauiHero";
import { MauiMap } from "@/components/islands/maui/MauiMap";
import { MauiWeather } from "@/components/islands/maui/MauiWeather";
import { MauiCulture } from "@/components/islands/maui/MauiCulture";
import { MauiHighlights } from "@/components/islands/maui/MauiHighlights";
import { MauiTestimonials } from "@/components/islands/maui/MauiTestimonials";
import { MauiHistory } from "@/components/islands/maui/MauiHistory";

const Maui = () => {
  return (
    <IslandLayout
      name="Maui"
      hero={<MauiHero />}
      map={<MauiMap />}
      weather={<MauiWeather />}
      culture={<MauiCulture />}
      highlights={
        <>
          <MauiHighlights />
          <MauiTestimonials />
        </>
      }
      history={<MauiHistory />}
    />
  );
};

export default Maui;