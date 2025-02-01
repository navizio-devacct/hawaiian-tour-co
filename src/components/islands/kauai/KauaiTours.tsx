import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const KauaiTours = () => {
  const tours = [
    {
      title: "Na Pali Coast Boat Tour",
      description: "Cruise along the stunning Na Pali Coast with opportunities for snorkeling.",
      duration: "5 hours",
      price: "$169",
    },
    {
      title: "Waimea Canyon Adventure",
      description: "Explore the 'Grand Canyon of the Pacific' with expert guides.",
      duration: "8 hours",
      price: "$149",
    },
    {
      title: "Hanalei Valley Tour",
      description: "Discover the beauty of Hanalei Valley and its taro fields.",
      duration: "6 hours",
      price: "$129",
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