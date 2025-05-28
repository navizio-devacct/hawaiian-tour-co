
import { AttractionPage } from "@/components/AttractionPage";

const NaPaliCoast = () => {
  return (
    <AttractionPage
      name="Na Pali Coast"
      location="Kauai"
      heroImage="https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=2070"
      overview="A pristine 17-mile stretch of dramatic sea cliffs, emerald valleys, and untouched wilderness."
      history="The Na Pali Coast, meaning 'the cliffs' in Hawaiian, was carved by millions of years of erosion from wind and rain. Ancient Hawaiians once lived in the remote valleys, leaving behind terraces and stone platforms. This roadless wilderness has remained largely unchanged and inaccessible except by foot, boat, or helicopter, preserving its pristine beauty."
      whyVisit={[
        "Experience some of the most dramatic coastal scenery on Earth",
        "See pristine wilderness accessible only by hiking, boat, or helicopter",
        "Discover ancient Hawaiian settlements and archaeological sites",
        "Witness towering waterfalls plunging directly into the Pacific Ocean"
      ]}
      bestTimeToVisit="May through September offers the calmest ocean conditions for boat tours. Winter months bring larger swells but spectacular waterfalls. Hiking is possible year-round, but the Kalalau Trail can be challenging in wet conditions."
      facts={[
        { label: "Coastline Length", value: "17 mi" },
        { label: "Highest Cliffs", value: "4,000 ft" },
        { label: "Valleys", value: "5 major" },
        { label: "Accessible Roads", value: "0" }
      ]}
      highlights={[
        "Kalalau Trail",
        "Hanakapi'ai Falls",
        "Cathedral Caves",
        "Ancient Hawaiian Terraces",
        "Pristine Beaches",
        "Towering Sea Cliffs"
      ]}
      tips={[
        "Hiking permits required for overnight stays on Kalalau Trail",
        "Ocean conditions can change rapidly - check weather reports",
        "Bring reef-safe sunscreen and plenty of water for hiking",
        "Helicopter tours offer stunning aerial perspectives",
        "Boat tours from Port Allen or Hanalei provide ocean views",
        "Respect ancient Hawaiian sites and leave no trace"
      ]}
      relatedIsland="Kauai"
    />
  );
};

export default NaPaliCoast;
