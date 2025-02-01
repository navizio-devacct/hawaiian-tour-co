import { History, BookOpen, Star, MapPin, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const MauiHistory = () => {
  const funFacts = [
    {
      icon: <Star className="h-6 w-6 text-sunset-100" />,
      fact: "Maui is the second-largest Hawaiian island, with 727.2 square miles of land",
    },
    {
      icon: <MapPin className="h-6 w-6 text-ocean-100" />,
      fact: "Haleakala Crater is the world's largest dormant volcano, standing at 10,023 feet",
    },
    {
      icon: <Info className="h-6 w-6 text-palm-100" />,
      fact: "The Road to Hana features 620 curves and 59 bridges along its 64.4-mile length",
    },
  ];

  return (
    <section className="py-16 bg-sand-50">
      <div className="container mx-auto px-4">
        {/* Historical Overview */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center mb-4">
            <History className="h-8 w-8 text-ocean-100 mr-2" />
            <h2 className="text-3xl font-bold text-palm-100">The Valley Isle Story</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-6">
              Named after the demigod Māui, who according to legend pulled the Hawaiian islands from the sea,
              Maui has a rich history dating back to its first Polynesian settlers around 450 A.D. The island
              played a crucial role in Hawaiian unification under King Kamehameha I.
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
                <h3 className="font-semibold">Ancient Times</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Early Polynesians navigated to Maui using the stars, establishing the first settlements
                in the fertile valleys.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 text-ocean-100 mr-2" />
                <h3 className="font-semibold">Kingdom Era</h3>
              </div>
              <p className="text-gray-600 text-sm">
                During the 1800s, Lahaina served as the capital of the Hawaiian Kingdom and was a major
                whaling port.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 text-ocean-100 mr-2" />
                <h3 className="font-semibold">Modern Maui</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Today, Maui balances tourism with preservation of its natural beauty and cultural heritage.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Fun Facts */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-palm-100 mb-12">Fascinating Maui Facts</h2>
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
              Discover More About Maui
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};