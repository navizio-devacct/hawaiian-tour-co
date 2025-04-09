
import { IslandLayout } from "@/components/layouts/IslandLayout";
import { OahuHero } from "@/components/islands/oahu/OahuHero";
import { OahuMap } from "@/components/islands/oahu/OahuMap";
import { OahuWeather } from "@/components/islands/oahu/OahuWeather";
import { OahuCulture } from "@/components/islands/oahu/OahuCulture";
import { OahuHighlights } from "@/components/islands/oahu/OahuHighlights";
// import { OahuActivities } from "@/components/islands/oahu/OahuActivities";
import { OahuHistory } from "@/components/islands/oahu/OahuHistory";

const Oahu = () => {
  return (
    <IslandLayout
      name="Oahu"
      hero={<OahuHero />}
      map={<OahuMap />}
      weather={<OahuWeather />}
      culture={<OahuCulture />}
      highlights={<OahuHighlights />}
    //  activities={<OahuActivities />}
      history={<OahuHistory />}
    />
  );
};

export default Oahu;
