
import { AttractionPage } from "@/components/AttractionPage";

const PearlHarbor = () => {
  return (
    <AttractionPage
      name="Pearl Harbor"
      location="Honolulu, Oahu"
      heroImage="https://images.unsplash.com/photo-1733712058043-c2fe8d8c935e"
      overview="A solemn reminder of December 7, 1941, and one of America's most significant historical sites."
      history="Pearl Harbor was thrust into history on December 7, 1941, when the Japanese launched a surprise attack that brought the United States into World War II. Today, this active naval base serves as a memorial to those who lost their lives and a testament to American resilience. The harbor houses multiple historic sites including the USS Arizona Memorial, USS Missouri Battleship, and USS Bowfin Submarine Museum."
      whyVisit={[
        "Pay respects at the USS Arizona Memorial, built over the sunken battleship",
        "Walk the deck of the USS Missouri where WWII officially ended",
        "Experience authentic WWII history through interactive exhibits",
        "Learn about the pivotal moment that changed American history forever"
      ]}
      bestTimeToVisit="Year-round destination, but mornings are less crowded. Advance reservations are required and often book weeks ahead. Allow a full day to experience all memorials and museums properly."
      facts={[
        { label: "Visitors Annually", value: "2M+" },
        { label: "Ships Sunk", value: "18" },
        { label: "Lives Lost", value: "2,400+" },
        { label: "Memorial Opened", value: "1962" }
      ]}
      highlights={[
        "USS Arizona Memorial",
        "USS Missouri Battleship",
        "USS Bowfin Submarine",
        "Pearl Harbor Aviation Museum",
        "USS Oklahoma Memorial",
        "Visitor Center Exhibits"
      ]}
      tips={[
        "Book tickets in advance online - they often sell out weeks ahead",
        "No bags or purses allowed - use the storage facility or travel light",
        "Arrive early for security screening and parking",
        "Wear comfortable walking shoes and bring sun protection",
        "Allow 6-8 hours to see all major attractions",
        "Audio tours are available in multiple languages"
      ]}
      relatedIsland="Oahu"
    />
  );
};

export default PearlHarbor;
