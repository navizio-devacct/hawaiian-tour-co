import { IslandLayout } from "@/components/layouts/IslandLayout";
import { KauaiHero } from "@/components/islands/kauai/KauaiHero";
import { KauaiMap } from "@/components/islands/kauai/KauaiMap";
import { KauaiWeather } from "@/components/islands/kauai/KauaiWeather";
import { KauaiCulture } from "@/components/islands/kauai/KauaiCulture";
import { KauaiHighlights } from "@/components/islands/kauai/KauaiHighlights";
import { KauaiTestimonials } from "@/components/islands/kauai/KauaiTestimonials";
import { KauaiHistory } from "@/components/islands/kauai/KauaiHistory";

const Kauai = () => {
  return (
    <IslandLayout
      name="Kauai"
      hero={<KauaiHero />}
      map={<KauaiMap />}
      weather={<KauaiWeather />}
      culture={<KauaiCulture />}
      highlights={
        <>
          <KauaiHighlights />
          <KauaiTestimonials />
        </>
      }
      history={<KauaiHistory />}
    />
  );
};

export default Kauai;