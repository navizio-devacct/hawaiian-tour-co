
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const BigIslandActivities = () => {
  const activities = [
    {
      title: "Volcano National Park Tour",
      image: "https://images.unsplash.com/photo-1542383458-04e3b8fad797?q=80",
      description: "Explore active volcanoes and walk through ancient lava tubes",
      price: "From $129",
    },
    {
      title: "Manta Ray Night Dive",
      image: "https://images.unsplash.com/photo-1544552866-d3ed42536cfd?q=80",
      description: "Snorkel or dive with majestic manta rays after dark",
      price: "From $109",
    },
    {
      title: "Coffee Farm Tour",
      image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?q=80",
      description: "Taste authentic Kona coffee at source on a local farm",
      price: "From $45",
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
