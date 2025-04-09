
import { IslandLayout } from "@/components/layouts/IslandLayout";
import { KauaiHero } from "@/components/islands/kauai/KauaiHero";
import { KauaiMap } from "@/components/islands/kauai/KauaiMap";
import { KauaiWeather } from "@/components/islands/kauai/KauaiWeather";
import { KauaiCulture } from "@/components/islands/kauai/KauaiCulture";
import { KauaiTours } from "@/components/islands/kauai/KauaiTours";
import { KauaiHighlights } from "@/components/islands/kauai/KauaiHighlights";
// import { KauaiActivities } from "@/components/islands/kauai/KauaiActivities";
import { KauaiHistory } from "@/components/islands/kauai/KauaiHistory";

const Kauai = () => {
  return (
    <IslandLayout
      name="Kauai"
      hero={<KauaiHero />}
      map={<KauaiMap />}
      weather={<KauaiWeather />}
      culture={<KauaiCulture />}
      tours={<KauaiTours />}
      highlights={<KauaiHighlights />}
     // activities={<KauaiActivities />}
      history={<KauaiHistory />}
    />
  );
};

export default Kauai;
