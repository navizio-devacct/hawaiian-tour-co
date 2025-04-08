
import { Compass, Mountain, Waves, TreePine, Camera, Sunset } from "lucide-react";
import { Link } from "react-router-dom";

interface ActivityCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  url: string;
}

export const FeaturedActivities = () => {
  const activities: ActivityCard[] = [
    {
      title: "Snorkeling Adventures",
      description: "Explore vibrant coral reefs and tropical marine life in crystal-clear waters.",
      icon: <Waves className="w-8 h-8 text-ocean-100" />,
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80",
      url: "/activities/snorkeling"
    },
    {
      title: "Hiking Expeditions",
      description: "Trek through lush rainforests and discover breathtaking volcanic landscapes.",
      icon: <Mountain className="w-8 h-8 text-ocean-100" />,
      image: "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80",
      url: "/activities/hiking"
    },
    {
      title: "Nature Tours",
      description: "Experience Hawaii's unique flora and fauna with expert naturalist guides.",
      icon: <TreePine className="w-8 h-8 text-ocean-100" />,
      image: "https://images.unsplash.com/photo-1598135753163-6167c1a1ad65?q=80",
      url: "/activities/nature-tours"
    },
    {
      title: "Photography Tours",
      description: "Capture stunning landscapes and memorable moments with professional guidance.",
      icon: <Camera className="w-8 h-8 text-ocean-100" />,
      image: "https://images.unsplash.com/photo-1623718649591-311775a30c43?q=80",
      url: "/activities/photography"
    },
    {
      title: "Sunset Cruises",
      description: "Sail into the sunset while enjoying drinks and spectacular ocean views.",
      icon: <Sunset className="w-8 h-8 text-ocean-100" />,
      image: "https://images.unsplash.com/photo-1502519144081-acca18599776?q=80",
      url: "/activities/sunset"
    },
    {
      title: "Adventure Sports",
      description: "Get your adrenaline pumping with surfing, kayaking, and more.",
      icon: <Compass className="w-8 h-8 text-ocean-100" />,
      image: "https://images.unsplash.com/photo-1537519646099-335112f03225?q=80",
      url: "/activities/adventure"
    },
  ];

  return (
    <section className="py-20 bg-sand-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-ocean-100/10 text-ocean-100 px-4 py-1 rounded-full text-sm mb-4">
            Activities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-palm-100 mb-4">
            Explore Our Activities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the best of Hawaii through our carefully curated selection of
            activities and adventures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Link
              key={index}
              to={activity.url}
              className="group relative bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                  {activity.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-palm-100 mb-2">
                  {activity.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {activity.description}
                </p>
                <div className="w-full bg-sunset-100 hover:bg-sunset-200 text-white px-4 py-2 rounded-full text-sm transition-colors duration-300 text-center">
                  Explore Activities
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
