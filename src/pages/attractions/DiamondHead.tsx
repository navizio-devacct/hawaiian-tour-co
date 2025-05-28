
import { AttractionPage } from "@/components/AttractionPage";

const DiamondHead = () => {
  return (
    <AttractionPage
      name="Diamond Head Crater"
      location="Honolulu, Oahu"
<<<<<<< HEAD
      heroImage="https://images.unsplash.com/photo-1581720488341-a02fe8d6575d"
=======
      heroImage="https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?q=80&w=2070"
>>>>>>> d2ef9f4e48c057783b453f5a40b10a5dc58a18a2
      overview="Oahu's most recognizable landmark offering panoramic views of Waikiki and the Pacific Ocean."
      history="Diamond Head, known as 'Le'ahi' in Hawaiian, was formed about 300,000 years ago during a single volcanic eruption. The English name comes from 19th-century British sailors who mistook calcite crystals for diamonds. The crater served as a military lookout point during WWII, and the bunkers and tunnels from that era are still visible today."
      whyVisit={[
        "Iconic panoramic views of Waikiki Beach and Honolulu skyline",
        "Moderate hike suitable for most fitness levels",
        "Historic military bunkers and tunnels to explore",
        "Perfect sunrise or sunset viewing location"
      ]}
      bestTimeToVisit="Early morning (6-8 AM) or late afternoon to avoid crowds and heat. The crater opens at 6 AM and parking fills up quickly. Sunrise hikes are particularly spectacular but require advance planning."
      facts={[
        { label: "Elevation", value: "760 ft" },
        { label: "Crater Age", value: "300,000 yrs" },
        { label: "Hike Distance", value: "1.6 mi" },
        { label: "Daily Visitors", value: "3,000+" }
      ]}
      highlights={[
        "Summit Panoramic Views",
        "Historic Military Bunkers",
        "Waikiki Beach Overlook",
        "Honolulu City Views",
        "Pacific Ocean Vistas",
        "Sunrise/Sunset Photography"
      ]}
      tips={[
        "Arrive early - parking fills up by 8 AM on busy days",
        "Bring plenty of water and wear sturdy hiking shoes",
        "The trail includes steep stairs and uneven terrain",
        "Flashlight helpful for tunnel sections",
        "Entrance fee required - bring cash or card",
        "Allow 2-3 hours for the complete hike"
      ]}
      relatedIsland="Oahu"
    />
  );
};

export default DiamondHead;
