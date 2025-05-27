import { IslandLayout } from "@/components/layouts/IslandLayout";
import { BigIslandHero } from "@/components/islands/bigisland/BigIslandHero";
import { BigIslandMap } from "@/components/islands/bigisland/BigIslandMap";
import { BigIslandWeather } from "@/components/islands/bigisland/BigIslandWeather";
import { BigIslandCulture } from "@/components/islands/bigisland/BigIslandCulture";
import { BigIslandHighlights } from "@/components/islands/bigisland/BigIslandHighlights";
import { BigIslandTestimonials } from "@/components/islands/bigisland/BigIslandTestimonials";
import { BigIslandHistory } from "@/components/islands/bigisland/BigIslandHistory";

const BigIsland = () => {
  return (
    <IslandLayout
      name="Big Island"
      hero={<BigIslandHero />}
      map={<BigIslandMap />}
      weather={<BigIslandWeather />}
      culture={<BigIslandCulture />}
      highlights={
        <>
          <BigIslandHighlights />
          <BigIslandTestimonials />
        </>
      }
      history={<BigIslandHistory />}
    />
  );
};

export default BigIsland;