
import { Mountain, Sunrise, Umbrella, Ship } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const KauaiHighlights = () => {
  const highlights = [
    {
      title: "Na Pali Coast",
      description: "Dramatic cliffs and lush valleys along the northwest shore",
      icon: <Mountain className="h-8 w-8 text-sunset-100" />,
    },
    {
      title: "Waimea Canyon",
      description: "The 'Grand Canyon of the Pacific' with stunning vistas",
      icon: <Sunrise className="h-8 w-8 text-palm-100" />,
    },
    {
      title: "Poipu Beach",
      description: "Sunny south shore beach perfect for swimming and snorkeling",
      icon: <Umbrella className="h-8 w-8 text-ocean-100" />,
    },
    {
      title: "Hanalei Bay",
      description: "Crescent-shaped bay backed by majestic mountains",
      icon: <Ship className="h-8 w-8 text-sunset-100" />,
    },
  ];

  return (
    <section className="space-y-6">
      <div className="text-center">
        <span className="inline-block bg-sunset-100/10 text-sunset-100 px-4 py-1 rounded-full text-sm">
          Island Highlights
        </span>
        <h2 className="mt-4 text-3xl font-bold text-palm-100">
          What Makes Kauai Special
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
