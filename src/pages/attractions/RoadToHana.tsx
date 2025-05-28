
import { AttractionPage } from "@/components/AttractionPage";

const RoadToHana = () => {
  return (
    <AttractionPage
      name="Road to Hana"
      location="Maui"
      heroImage="https://images.unsplash.com/photo-1542259009477-d625272157b7?q=80&w=2070"
      overview="A legendary 64-mile journey through Maui's most pristine rainforests, waterfalls, and coastal views."
      history="The Road to Hana was built in 1926 and winds through what was once an ancient Hawaiian foot path. This remote highway connects the town of Hana with the rest of Maui, passing through areas that have remained largely unchanged for centuries. The road crosses 59 bridges and navigates 620 curves, making it one of the world's most scenic drives."
      whyVisit={[
        "Experience Maui's most pristine and untouched landscapes",
        "Discover hidden waterfalls and natural swimming pools",
        "Drive through authentic Hawaiian rainforest",
        "Visit traditional Hawaiian communities and cultural sites"
      ]}
      bestTimeToVisit="Year-round, but early morning starts (7-8 AM) are best to avoid crowds and afternoon rain. Allow a full day for the journey. Some prefer to stay overnight in Hana to enjoy the return trip leisurely."
      facts={[
        { label: "Total Distance", value: "64 mi" },
        { label: "Bridges Crossed", value: "59" },
        { label: "Curves/Turns", value: "620" },
        { label: "Driving Time", value: "3-4 hrs" }
      ]}
      highlights={[
        "Twin Falls",
        "Wai'anapanapa Black Sand Beach",
        "Haleakala National Park",
        "Seven Sacred Pools",
        "Hana Bay",
        "Bamboo Forest Trail"
      ]}
      tips={[
        "Start early - leave by 8 AM to beat crowds",
        "Fill up your gas tank before starting the journey",
        "Pack snacks, water, and motion sickness remedies",
        "Download offline maps - cell service is spotty",
        "Be courteous to locals - pull over to let faster cars pass",
        "Consider staying overnight in Hana for a more relaxed experience"
      ]}
      relatedIsland="Maui"
    />
  );
};

export default RoadToHana;
