
import { History, BookOpen, Star, MapPin, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const OahuHistory = () => {
  const funFacts = [
    {
      icon: <Star className="h-6 w-6 text-sunset-100" />,
      fact: "Oahu is the third largest Hawaiian island but has nearly 70% of the state's population",
    },
    {
      icon: <MapPin className="h-6 w-6 text-ocean-100" />,
      fact: "Diamond Head crater was formed about 300,000 years ago and stands 762 feet tall",
    },
    {
      icon: <Info className="h-6 w-6 text-palm-100" />,
      fact: "Honolulu has been the capital of Hawaii since 1845, when Kamehameha III moved it from Lahaina",
    },
  ];

  return (
    <section className="py-16 bg-sand-50">
      <div className="container mx-auto px-4">
        {/* Historical Overview */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center mb-4">
            <History className="h-8 w-8 text-ocean-100 mr-2" />
            <h2 className="text-3xl font-bold text-palm-100">The Gathering Place</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-6">
              Oahu, known as "The Gathering Place," has been the cultural and historical center of Hawaii 
              for centuries. From ancient Hawaiian settlements to the site of Pearl Harbor, this island 
              has played a pivotal role in both Hawaiian and American history.
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
                <h3 className="font-semibold">Ancient Oahu</h3>
              </div>
              <p className="text-gray-600 text-sm">
                The island was once divided into districts ruled by different chiefs, 
                with important religious sites like the Kukaniloko Birthstones.
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
                King Kamehameha I united the Hawaiian Islands in 1795, with 
                Honolulu later becoming the capital of the Hawaiian Kingdom.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 text-ocean-100 mr-2" />
                <h3 className="font-semibold">Modern Oahu</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Today, Oahu blends its rich cultural heritage with modern urban development,
                making it Hawaii's economic and cultural hub.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Fun Facts */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-palm-100 mb-12">Fascinating Oahu Facts</h2>
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
              Discover More About Oahu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
