import { Sun, Map, Umbrella, UtensilsCrossed, Camera, Waves } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const OahuHighlights = () => {
  const highlights = [
    {
      title: "Waikiki Beach",
      description: "World-famous beach with stunning Diamond Head views",
      icon: <Sun className="h-8 w-8 text-sunset-100" />,
      color: "sunset"
    },
    {
      title: "Pearl Harbor",
      description: "Historic site commemorating the 1941 attack",
      icon: <Map className="h-8 w-8 text-palm-100" />,
      color: "palm"
    },
    {
      title: "North Shore",
      description: "Legendary surfing beaches and laid-back atmosphere",
      icon: <Umbrella className="h-8 w-8 text-ocean-100" />,
      color: "ocean"
    },
    {
      title: "Local Cuisine",
      description: "Try poke, plate lunches, and shave ice at local spots",
      icon: <UtensilsCrossed className="h-8 w-8 text-sunset-100" />,
      color: "sunset"
    },
    {
      title: "Scenic Photography",
      description: "Capture breathtaking views from Diamond Head and Lanikai",
      icon: <Camera className="h-8 w-8 text-palm-100" />,
      color: "palm"
    },
    {
      title: "Water Adventures",
      description: "Snorkeling, surfing, and whale watching year-round",
      icon: <Waves className="h-8 w-8 text-ocean-100" />,
      color: "ocean"
    },
  ];

  return (
    <section className="space-y-8">
      <div className="text-center">
        <span className="inline-block bg-sunset-100/10 text-sunset-100 px-4 py-1 rounded-full text-sm">
          Island Highlights
        </span>
        <h2 className="mt-4 text-3xl font-bold text-palm-100">
          What Makes Oahu Special
        </h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          From world-famous beaches to historic landmarks, discover the unique experiences 
          that make Oahu Hawaii's most beloved island destination.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {highlights.map((highlight, index) => (
          <Card key={index} className="hover:shadow-lg transition-all duration-300 group cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {highlight.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-ocean-100 transition-colors">
                {highlight.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
