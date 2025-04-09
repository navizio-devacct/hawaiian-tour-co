
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const OahuActivities = () => {
  const activities = [
    {
      title: "Surfing Lessons",
      image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80",
      description: "Learn to surf at Waikiki Beach with expert instructors",
      price: "From $95",
    },
    {
      title: "Diamond Head Hike",
      image: "https://images.unsplash.com/photo-1590752991301-7c4a051dbb6d?q=80",
      description: "Experience stunning panoramic views of Honolulu",
      price: "From $39",
    },
    {
      title: "Polynesian Cultural Center",
      image: "https://images.unsplash.com/photo-1568002183192-3c323ff60783?q=80",
      description: "Immerse yourself in Hawaiian and Pacific Island cultures",
      price: "From $69",
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
