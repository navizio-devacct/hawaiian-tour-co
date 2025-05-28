import { AttractionPage } from "@/components/AttractionPage";

const PearlHarbor = () => {
  return (
    <AttractionPage
      name="Pearl Harbor National Memorial"
      location="Oahu"
      heroImage="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070"
      overview="A solemn memorial commemorating the December 7, 1941 attack that launched America into World War II, featuring historic sites and preserved warships."
      history="On December 7, 1941, the Imperial Japanese Navy launched a surprise attack on Pearl Harbor, sinking or damaging 18 U.S. warships and killing over 2,400 Americans. This 'date which will live in infamy' led to America's entry into World War II. The memorial was established to honor those who served and died, preserving the USS Arizona, USS Missouri, USS Bowfin, and USS Oklahoma for future generations. The site serves as both a grave site and a symbol of American resilience."
      whyVisit={[
        "Pay respects at one of America's most significant historical sites",
        "Learn about the events that changed the course of World War II",
        "Experience authentic WWII-era ships and submarines",
        "Witness the lasting impact of December 7, 1941"
      ]}
      bestTimeToVisit="Year-round destination. Mornings are less crowded and cooler. Allow a full day to experience all attractions. Advance reservations are required for all tours. Book tickets online weeks in advance, especially during peak tourist seasons and holidays."
      facts={[
        { label: "Attack Date", value: "December 7, 1941" },
        { label: "Ships Sunk/Damaged", value: "18" },
        { label: "Casualties", value: "2,400+" },
        { label: "Memorial Established", value: "1962" }
      ]}
      highlights={[
        "USS Arizona Memorial",
        "USS Missouri Battleship",
        "USS Bowfin Submarine",
        "USS Oklahoma Memorial",
        "Pearl Harbor Aviation Museum",
        "Visitor Center exhibits"
      ]}
      tips={[
        "Book tickets online in advance - same-day tickets are rarely available",
        "Arrive 60 minutes before your tour time for security screening",
        "No bags, purses, or cameras allowed - use storage facility or leave in car",
        "Wear comfortable walking shoes and dress respectfully",
        "Bring government-issued photo ID for all visitors over 18",
        "Audio tours are available in multiple languages",
        "Plan 4-6 hours to see all major attractions",
        "Free shuttle connects different memorial sites",
        "Maintain respectful behavior - this is an active military base and memorial"
      ]}
      relatedIsland="Oahu"
    />
  );
};

export default PearlHarbor;