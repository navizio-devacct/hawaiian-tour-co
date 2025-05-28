
import { AttractionPage } from "@/components/AttractionPage";

const Haleakala = () => {
  return (
    <AttractionPage
      name="Haleakala Crater"
      location="Maui"
      heroImage="https://images.unsplash.com/photo-1523296004693-49fb425078b4"
      overview="A massive volcanic crater offering otherworldly landscapes and legendary sunrise views from 10,000+ feet."
      history="Haleakala, meaning 'House of the Sun,' is a massive shield volcano that forms more than 75% of Maui. According to Hawaiian legend, the demigod Maui lassoed the sun from this crater to slow its journey across the sky. The crater itself is about 2.5 miles wide and 2,600 feet deep, created by erosion rather than volcanic collapse. The summit offers views of an alien-like landscape that NASA has used for astronaut training."
      whyVisit={[
        "Witness legendary sunrise views from above the clouds",
        "Experience an otherworldly landscape unlike anywhere on Earth",
        "See the endangered Hawaiian silversword plant in its natural habitat",
        "Enjoy some of the world's clearest stargazing conditions"
      ]}
      bestTimeToVisit="Sunrise visits are most popular but require advance reservations and very early departure (3-4 AM). Sunset is equally beautiful with fewer crowds. Clear weather is most common in dry season (April-October), but views can be spectacular any time of year."
      facts={[
        { label: "Summit Elevation", value: "10,023 ft" },
        { label: "Crater Depth", value: "2,600 ft" },
        { label: "Crater Width", value: "2.5 mi" },
        { label: "Last Eruption", value: "1600s" }
      ]}
      highlights={[
        "Sunrise at Summit",
        "Sliding Sands Trail",
        "Silversword Plants",
        "Visitor Center",
        "Star Gazing",
        "Crater Floor Hiking"
      ]}
      tips={[
        "Sunrise viewing requires advance reservations - book early",
        "Bring warm clothing - temperatures can be near freezing at summit",
        "Allow 1.5-2 hours driving time from sea level",
        "Altitude can affect some visitors - take it slow",
        "Fuel up before ascending - no gas stations on the mountain",
        "Consider both sunrise and sunset visits for different experiences"
      ]}
      relatedIsland="Maui"
    />
  );
};

export default Haleakala;
