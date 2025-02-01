import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const MauiTours = () => {
  const tours = [
    {
      title: "Road to Hana Adventure",
      description: "Experience the famous scenic drive with multiple stops at waterfalls and black sand beaches.",
      duration: "12 hours",
      price: "$189",
    },
    {
      title: "Haleakala Sunrise Tour",
      description: "Watch the sunrise from Maui's highest peak above the clouds.",
      duration: "8 hours",
      price: "$159",
    },
    {
      title: "Molokini Snorkel Trip",
      description: "Snorkel in the crystal-clear waters of Molokini Crater.",
      duration: "6 hours",
      price: "$139",
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