
import { IslandLayout } from "@/components/layouts/IslandLayout";
import { BigIslandHero } from "@/components/islands/bigisland/BigIslandHero";
import { BigIslandMap } from "@/components/islands/bigisland/BigIslandMap";
import { BigIslandWeather } from "@/components/islands/bigisland/BigIslandWeather";
import { BigIslandCulture } from "@/components/islands/bigisland/BigIslandCulture";
import { BigIslandTours } from "@/components/islands/bigisland/BigIslandTours";
import { BigIslandHighlights } from "@/components/islands/bigisland/BigIslandHighlights";
// import { BigIslandActivities } from "@/components/islands/bigisland/BigIslandActivities";
import { BigIslandHistory } from "@/components/islands/bigisland/BigIslandHistory";

const BigIsland = () => {
  return (
    <IslandLayout
      name="Big Island"
      hero={<BigIslandHero />}
      map={<BigIslandMap />}
      weather={<BigIslandWeather />}
      culture={<BigIslandCulture />}
     // tours={<BigIslandTours />}
      highlights={<BigIslandHighlights />}
    //  activities={<BigIslandActivities />}
      history={<BigIslandHistory />}
    />
  );
};

export default BigIsland;
