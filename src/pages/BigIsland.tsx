
import { IslandLayout } from "@/components/layouts/IslandLayout";
import { BigIslandHero } from "@/components/islands/bigisland/BigIslandHero";
import { BigIslandMap } from "@/components/islands/bigisland/BigIslandMap";
import { BigIslandWeather } from "@/components/islands/bigisland/BigIslandWeather";
import { BigIslandCulture } from "@/components/islands/bigisland/BigIslandCulture";
import { BigIslandTours } from "@/components/islands/bigisland/BigIslandTours";

const BigIsland = () => {
  return (
    <IslandLayout
      name="Big Island"
      hero={<BigIslandHero />}
      map={<BigIslandMap />}
      weather={<BigIslandWeather />}
      culture={<BigIslandCulture />}
      tours={<BigIslandTours />}
    />
  );
};

export default BigIsland;
