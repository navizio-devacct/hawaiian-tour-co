
import { IslandLayout } from "@/components/layouts/IslandLayout";
import { OahuHero } from "@/components/islands/oahu/OahuHero";
import { OahuMap } from "@/components/islands/oahu/OahuMap";
import { OahuWeather } from "@/components/islands/oahu/OahuWeather";
import { OahuCulture } from "@/components/islands/oahu/OahuCulture";
import { OahuTours } from "@/components/islands/oahu/OahuTours";

const Oahu = () => {
  return (
    <IslandLayout
      name="Oahu"
      hero={<OahuHero />}
      map={<OahuMap />}
      weather={<OahuWeather />}
      culture={<OahuCulture />}
      tours={<OahuTours />}
    />
  );
};

export default Oahu;
