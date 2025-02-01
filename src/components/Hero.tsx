import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1542259009477-d625272157b7?q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <div
          className={`text-center transform transition-all duration-700 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span className="inline-block bg-ocean-100/90 text-white px-4 py-1 rounded-full text-sm mb-6 backdrop-blur-sm">
            Welcome to Paradise
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Discover the Magic of
            <br /> Hawaiian Islands
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Experience unforgettable adventures with our curated selection of tours
            across Hawaii's most beautiful destinations.
          </p>
          <button className="bg-sunset-100 hover:bg-sunset-200 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
            Explore Tours
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <ChevronDown size={32} className="text-white" />
        </div>
      </div>
    </div>
  );
};