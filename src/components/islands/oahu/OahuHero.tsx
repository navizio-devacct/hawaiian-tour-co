import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export const OahuHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative h-[70vh] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1507876466758-bc54f384809c?q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <div
          className={`text-center transform transition-all duration-700 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span className="inline-block bg-ocean-100/90 text-white px-4 py-1 rounded-full text-sm mb-6 backdrop-blur-sm">
            Discover Oahu
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Experience the Heart of
            <br /> Hawaiian Paradise
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            From Pearl Harbor to North Shore, explore the most iconic destinations
            on Hawaii's most visited island.
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white" />
        </div>
      </div>
    </div>
  );
};