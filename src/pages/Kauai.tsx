
import { IslandLayout } from "@/components/layouts/IslandLayout";
import { KauaiHero } from "@/components/islands/kauai/KauaiHero";
import { KauaiMap } from "@/components/islands/kauai/KauaiMap";
import { KauaiWeather } from "@/components/islands/kauai/KauaiWeather";
import { KauaiCulture } from "@/components/islands/kauai/KauaiCulture";
import { KauaiTours } from "@/components/islands/kauai/KauaiTours";

const Kauai = () => {
  return (
    <IslandLayout
      name="Kauai"
      hero={<KauaiHero />}
      map={<KauaiMap />}
      weather={<KauaiWeather />}
      culture={<KauaiCulture />}
      tours={<KauaiTours />}
    />
  );
};

export default Kauai;
