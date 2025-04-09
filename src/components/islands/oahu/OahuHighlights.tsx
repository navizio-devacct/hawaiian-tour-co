
import { Sun, Map, Umbrella, UtensilsCrossed } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const OahuHighlights = () => {
  const highlights = [
    {
      title: "Waikiki Beach",
      description: "World-famous beach with stunning Diamond Head views",
      icon: <Sun className="h-8 w-8 text-sunset-100" />,
    },
    {
      title: "Pearl Harbor",
      description: "Historic site commemorating the 1941 attack",
      icon: <Map className="h-8 w-8 text-palm-100" />,
    },
    {
      title: "North Shore",
      description: "Legendary surfing beaches and laid-back atmosphere",
      icon: <Umbrella className="h-8 w-8 text-ocean-100" />,
    },
    {
      title: "Local Cuisine",
      description: "Try poke, plate lunches, and shave ice at local spots",
      icon: <UtensilsCrossed className="h-8 w-8 text-sunset-100" />,
    },
  ];

  return (
    <section className="space-y-6">
      <div className="text-center">
        <span className="inline-block bg-sunset-100/10 text-sunset-100 px-4 py-1 rounded-full text-sm">
          Island Highlights
        </span>
        <h2 className="mt-4 text-3xl font-bold text-palm-100">
          What Makes Oahu Special
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((highlight, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <div className="mb-4 flex justify-center">{highlight.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{highlight.title}</h3>
              <p className="text-gray-600 text-sm">{highlight.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
