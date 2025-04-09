
import { History, BookOpen, Star, MapPin, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const KauaiHistory = () => {
  const funFacts = [
    {
      icon: <Star className="h-6 w-6 text-sunset-100" />,
      fact: "Kauai is the oldest of the main Hawaiian Islands, formed about 5 million years ago",
    },
    {
      icon: <MapPin className="h-6 w-6 text-ocean-100" />,
      fact: "Mount Waialeale is one of the wettest spots on Earth, receiving around 450 inches of rain annually",
    },
    {
      icon: <Info className="h-6 w-6 text-palm-100" />,
      fact: "Kauai was the only island that King Kamehameha I failed to conquer through warfare",
    },
  ];

  return (
    <section className="py-16 bg-sand-50">
      <div className="container mx-auto px-4">
        {/* Historical Overview */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center mb-4">
            <History className="h-8 w-8 text-ocean-100 mr-2" />
            <h2 className="text-3xl font-bold text-palm-100">The Garden Isle Story</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-6">
              Kauai, the oldest of the main Hawaiian Islands, has a rich history dating back centuries.
              Its isolation helped preserve much of its natural beauty and traditional Hawaiian culture,
              earning it the nickname "The Garden Isle" for its lush landscapes.
            </p>
            <Button 
              className="bg-sunset-100 hover:bg-sunset-200"
              onClick={() => window.location.href = "#tours"}
            >
              Explore Historical Tours
            </Button>
          </div>
        </div>

        {/* Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 text-ocean-100 mr-2" />
                <h3 className="font-semibold">Ancient Kauai</h3>
              </div>
              <p className="text-gray-600 text-sm">
                The island was home to thriving Hawaiian communities with complex social
                structures and agricultural systems.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 text-ocean-100 mr-2" />
                <h3 className="font-semibold">European Contact</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Captain James Cook first landed on Kauai in 1778, marking the first European
                contact with the Hawaiian Islands.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 text-ocean-100 mr-2" />
                <h3 className="font-semibold">Modern Kauai</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Today, Kauai balances tourism with preservation, maintaining its status as 
                one of Hawaii's most naturally beautiful islands.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Fun Facts */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-palm-100 mb-12">Fascinating Kauai Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {funFacts.map((fact, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">{fact.icon}</div>
                <p className="text-gray-600">{fact.fact}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Button 
              variant="outline" 
              className="border-ocean-100 text-ocean-100 hover:bg-ocean-100 hover:text-white"
              onClick={() => window.location.href = "#activities"}
            >
              Discover More About Kauai
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
