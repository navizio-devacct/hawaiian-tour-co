import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const BigIslandTours = () => {
  const tours = [
    {
      title: "Volcano National Park Tour",
      description: "Explore active volcanoes and walk through ancient lava tubes.",
      duration: "12 hours",
      price: "$199",
    },
    {
      title: "Mauna Kea Stargazing",
      description: "Stargaze from one of the world's best astronomical sites.",
      duration: "7 hours",
      price: "$179",
    },
    {
      title: "Black Sand Beach Adventure",
      description: "Visit famous black sand beaches and spot sea turtles.",
      duration: "6 hours",
      price: "$149",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Popular Tours</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <Card key={tour.title}>
            <CardHeader>
              <CardTitle>{tour.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{tour.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{tour.duration}</span>
                <span className="font-bold text-lg">{tour.price}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};