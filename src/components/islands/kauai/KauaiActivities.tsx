
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const KauaiActivities = () => {
  const activities = [
    {
      title: "Na Pali Coast Boat Tour",
      image: "https://images.unsplash.com/photo-1543248152-8703e1a62af3?q=80",
      description: "Experience towering sea cliffs and hidden beaches",
      price: "From $159",
    },
    {
      title: "Kauai Helicopter Tour",
      image: "https://images.unsplash.com/photo-1512100254544-47340ba56b5d?q=80",
      description: "See Kauai's dramatic landscapes from the air",
      price: "From $299",
    },
    {
      title: "Kayaking Adventures",
      image: "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?q=80",
      description: "Paddle along Kauai's scenic rivers and coastlines",
      price: "From $89",
    },
  ];

  return (
    <section className="space-y-6">
      <div className="text-center">
        <span className="inline-block bg-ocean-100/10 text-ocean-100 px-4 py-1 rounded-full text-sm">
          Popular Activities
        </span>
        <h2 className="mt-4 text-3xl font-bold text-palm-100">
          Unforgettable Experiences
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {activities.map((activity, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48">
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">{activity.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{activity.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-ocean-100 font-semibold">{activity.price}</span>
                <Button size="sm" className="bg-sunset-100 hover:bg-sunset-200">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
