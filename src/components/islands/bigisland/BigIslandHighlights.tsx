
import { Flame, Cloud, Waves, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const BigIslandHighlights = () => {
  const highlights = [
    {
      title: "Active Volcanoes",
      description: "Experience the power of Kilauea, one of the world's most active volcanoes",
      icon: <Flame className="h-8 w-8 text-sunset-100" />,
    },
    {
      title: "Mauna Kea",
      description: "Stargaze from the world's tallest mountain (measured from sea floor)",
      icon: <Cloud className="h-8 w-8 text-palm-100" />,
    },
    {
      title: "Black Sand Beaches",
      description: "Visit unique beaches formed by volcanic activity",
      icon: <Waves className="h-8 w-8 text-ocean-100" />,
    },
    {
      title: "Diverse Climates",
      description: "Experience 8 of the world's 13 climate zones on one island",
      icon: <Star className="h-8 w-8 text-sunset-100" />,
    },
  ];

  return (
    <section className="space-y-6">
      <div className="text-center">
        <span className="inline-block bg-sunset-100/10 text-sunset-100 px-4 py-1 rounded-full text-sm">
          Island Highlights
        </span>
        <h2 className="mt-4 text-3xl font-bold text-palm-100">
          What Makes Big Island Special
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
