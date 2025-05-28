
import { AttractionPage } from "@/components/AttractionPage";

const WaimeaCanyon = () => {
  return (
    <AttractionPage
      name="Waimea Canyon"
      location="Kauai"
      heroImage="https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070"
      overview="Known as the 'Grand Canyon of the Pacific,' this spectacular gorge showcases millions of years of geological history."
      history="Waimea Canyon was formed by the collapse of the volcano that created Kauai, followed by millions of years of erosion from the Waimea River and rainfall. The canyon's colorful layers reveal the geological history of the island, with each stratum representing different volcanic eruptions and erosion periods. Mark Twain famously called it the 'Grand Canyon of the Pacific.'"
      whyVisit={[
        "Marvel at dramatic red rock formations and layered canyon walls",
        "Experience panoramic views stretching to the ocean",
        "Hike trails through diverse ecosystems from desert to rainforest",
        "Photograph one of Hawaii's most iconic and unique landscapes"
      ]}
      bestTimeToVisit="Early morning offers the clearest views and best lighting for photography. Afternoon clouds often obscure the views. The dry season (April-October) provides more consistent clear weather, though the canyon is beautiful year-round."
      facts={[
        { label: "Length", value: "14 mi" },
        { label: "Depth", value: "3,600 ft" },
        { label: "Width", value: "1 mi" },
        { label: "Age", value: "4+ million yrs" }
      ]}
      highlights={[
        "Waimea Canyon Lookout",
        "Pu'u O Kila Lookout",
        "Kalalau Valley Overlook",
        "Canyon Trail Hikes",
        "Waipo'o Falls",
        "Native Forest Reserve"
      ]}
      tips={[
        "Visit early morning for clearest views - clouds often roll in afternoon",
        "Bring layers - temperatures can be 10-15°F cooler than sea level",
        "Multiple lookout points offer different perspectives",
        "Hiking trails range from easy walks to challenging adventures",
        "Check road conditions - some areas may be closed after heavy rain",
        "Bring a camera - the changing light creates incredible photo opportunities"
      ]}
      relatedIsland="Kauai"
    />
  );
};

export default WaimeaCanyon;
