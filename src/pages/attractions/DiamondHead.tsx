import { AttractionPage } from "@/components/AttractionPage";

const DiamondHead = () => {
  return (
    <AttractionPage
      name="Diamond Head State Monument"
      location="Oahu"
      heroImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070"
      overview="An iconic volcanic crater offering one of Hawaii's most rewarding hikes with panoramic views of Waikiki and Honolulu."
      history="Diamond Head, known as Leahi in Hawaiian (meaning 'brow of the yellowfin tuna'), was formed about 300,000 years ago during a single explosive eruption. British sailors in the 19th century mistook calcite crystals in the rock for diamonds, giving it its English name. The U.S. military fortified the crater in the early 1900s as part of Oahu's coastal defense system, building tunnels, bunkers, and observation stations that hikers pass through today."
      whyVisit={[
        "Hike to one of Oahu's most spectacular viewpoints",
        "Experience a piece of Hawaii's military history",
        "Capture iconic photos of Waikiki Beach and downtown Honolulu",
        "Explore the interior of an ancient volcanic crater"
      ]}
      bestTimeToVisit="Early morning (6-8 AM) or late afternoon to avoid crowds and heat. The trail can get very hot and crowded midday. Sunrise hikes offer cooler temperatures and stunning golden hour lighting. Reservations are required for entry."
      facts={[
        { label: "Crater Age", value: "300,000 years" },
        { label: "Summit Elevation", value: "760 feet" },
        { label: "Hike Distance", value: "1.6 miles round trip" },
        { label: "Average Hike Time", value: "1-2 hours" }
      ]}
      highlights={[
        "Summit panoramic viewpoint",
        "Historic military bunkers and tunnels",
        "Waikiki Beach and coastline views",
        "Downtown Honolulu skyline",
        "Koko Head crater in the distance",
        "Interior crater floor exploration"
      ]}
      tips={[
        "Make reservations online in advance - entry is by timed reservation only",
        "Bring plenty of water and wear sturdy hiking shoes",
        "Start early to beat the heat and crowds",
        "Bring a flashlight for the dark tunnel sections",
        "Wear sunscreen and a hat - there's limited shade on the trail",
        "Allow extra time for photos at the summit",
        "Park at the Diamond Head State Monument parking lot",
        "The trail includes steep sections and stairs - moderate fitness required"
      ]}
      relatedIsland="Oahu"
    />
  );
};

export default DiamondHead;