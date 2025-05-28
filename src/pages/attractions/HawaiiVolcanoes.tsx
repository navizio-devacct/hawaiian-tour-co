
import { AttractionPage } from "@/components/AttractionPage";

const HawaiiVolcanoes = () => {
  return (
    <AttractionPage
      name="Hawaii Volcanoes National Park"
      location="Big Island"
      heroImage="https://images.unsplash.com/photo-1733711603118-eadcdd85bd25?q=80&w=2070"
      overview="Home to two of the world's most active volcanoes and a landscape shaped by ongoing creation."
      history="Established in 1916, Hawaii Volcanoes National Park protects the dynamic volcanic landscape of Kilauea and Mauna Loa volcanoes. For Native Hawaiians, this is the sacred home of Pele, the volcano goddess. The park showcases the ongoing process of land creation, with new earth being formed as lava flows into the ocean. Kilauea has been erupting almost continuously since 1983."
      whyVisit={[
        "Witness active volcanic activity and flowing lava (when conditions permit)",
        "Experience the raw power of Earth's creation in real-time",
        "Explore unique volcanic landscapes found nowhere else on Earth",
        "Learn about Hawaiian culture and the goddess Pele"
      ]}
      bestTimeToVisit="Year-round destination, but volcanic activity varies. Check current conditions before visiting. Night visits offer spectacular glowing lava views when eruptions are active. The park is open 24/7, allowing for sunrise and sunset experiences."
      facts={[
        { label: "Park Established", value: "1916" },
        { label: "Active Volcanoes", value: "2" },
        { label: "Total Area", value: "523 sq mi" },
        { label: "Elevation Range", value: "Sea level to 13,677 ft" }
      ]}
      highlights={[
        "Kilauea Caldera",
        "Halemaumau Crater",
        "Thurston Lava Tube",
        "Chain of Craters Road",
        "Devastation Trail",
        "Jaggar Museum Overlook"
      ]}
      tips={[
        "Check current volcanic activity and road conditions before visiting",
        "Bring warm clothing - temperatures drop significantly at elevation",
        "Respect all barriers and warning signs for your safety",
        "Download the park app for real-time updates and safety information",
        "Bring a flashlight for lava tube exploration",
        "Visit both day and night for different volcanic experiences"
      ]}
      relatedIsland="Big Island"
    />
  );
};

export default HawaiiVolcanoes;
