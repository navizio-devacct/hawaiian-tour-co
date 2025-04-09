
import { History, BookOpen, Star, MapPin, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const BigIslandHistory = () => {
  const funFacts = [
    {
      icon: <Star className="h-6 w-6 text-sunset-100" />,
      fact: "The Big Island is still growing due to volcanic activity, adding new land along its coastlines",
    },
    {
      icon: <MapPin className="h-6 w-6 text-ocean-100" />,
      fact: "King Kamehameha I, who united the Hawaiian Islands, was born in North Kohala",
    },
    {
      icon: <Info className="h-6 w-6 text-palm-100" />,
      fact: "Captain James Cook was killed at Kealakekua Bay on the Big Island in 1779",
    },
  ];

  return (
    <section className="py-16 bg-sand-50">
      <div className="container mx-auto px-4">
        {/* Historical Overview */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center mb-4">
            <History className="h-8 w-8 text-ocean-100 mr-2" />
            <h2 className="text-3xl font-bold text-palm-100">The Island of Creation</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-6">
              The Big Island, Hawaii's youngest and largest island, has a dynamic history shaped by volcanic 
              activity. It was the birthplace of King Kamehameha I and the site of significant cultural 
              and historical events that influenced the entire Hawaiian archipelago.
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
                <h3 className="font-semibold">Ancient Hawaii</h3>
              </div>
              <p className="text-gray-600 text-sm">
                The island was home to many important Hawaiian cultural sites, 
                including Pu'uhonua o Hōnaunau (Place of Refuge).
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 text-ocean-100 mr-2" />
                <h3 className="font-semibold">Kamehameha's Legacy</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Born on the Big Island, King Kamehameha I launched his campaign 
                to unite the Hawaiian Islands from here in the late 1700s.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 text-ocean-100 mr-2" />
                <h3 className="font-semibold">Modern Growth</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Today, the Big Island continues to grow through volcanic activity,
                while balancing development with preservation of natural resources.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Fun Facts */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-palm-100 mb-12">Fascinating Big Island Facts</h2>
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
              Discover More About Big Island
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
