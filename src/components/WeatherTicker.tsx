import { useEffect, useState } from "react";
import { Sun, Cloud, Droplets, Wind } from "lucide-react";

interface WeatherData {
  temperature: number;
  humidity: number;
  windSpeed: number;
  condition: string;
  location: string;
}

const getWeatherRanges = (location: string) => {
  switch (location) {
    case "Maui":
      return {
        tempMin: 22,
        tempMax: 28,
        humidityMin: 70,
        humidityMax: 80,
        windMin: 12,
        windMax: 25
      };
    case "Big Island":
      return {
        tempMin: 21,
        tempMax: 29,
        humidityMin: 65,
        humidityMax: 75,
        windMin: 8,
        windMax: 20
      };
    case "Oahu":
      return {
        tempMin: 23,
        tempMax: 28,
        humidityMin: 68,
        humidityMax: 78,
        windMin: 10,
        windMax: 22
      };
    case "Kauai":
    default:
      return {
        tempMin: 21,
        tempMax: 27,
        humidityMin: 75,
        humidityMax: 85,
        windMin: 10,
        windMax: 20
      };
  }
};

export const WeatherTicker = ({ location }: { location: string }) => {
  const [weather, setWeather] = useState<WeatherData>({
    temperature: 24,
    humidity: 80,
    windSpeed: 15,
    condition: "Partly Cloudy with Scattered Showers",
    location: location
  });

  useEffect(() => {
    const fetchWeather = () => {
      const ranges = getWeatherRanges(location);
      const getRandomTemp = () => Math.floor(Math.random() * (ranges.tempMax - ranges.tempMin) + ranges.tempMin);
      const getRandomHumidity = () => Math.floor(Math.random() * (ranges.humidityMax - ranges.humidityMin) + ranges.humidityMin);
      const getRandomWind = () => Math.floor(Math.random() * (ranges.windMax - ranges.windMin) + ranges.windMin);
      
      const conditions = [
        "Partly Cloudy with Scattered Showers",
        "Mostly Sunny",
        "Light Rain",
        "Tropical Showers"
      ];
      const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];

      setWeather(prev => ({
        ...prev,
        temperature: getRandomTemp(),
        humidity: getRandomHumidity(),
        windSpeed: getRandomWind(),
        condition: randomCondition,
        location
      }));
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 1800000); // Update every 30 minutes
    return () => clearInterval(interval);
  }, [location]);

  // Convert Celsius to Fahrenheit
  const fahrenheit = Math.round((weather.temperature * 9/5) + 32);
  // Convert km/h to mph
  const mph = Math.round(weather.windSpeed * 0.621371);

  return (
    <div className="bg-white/90 backdrop-blur-sm shadow-md py-4 sticky top-0 z-40 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex items-center space-x-12 animate-[scroll_20s_linear_infinite] whitespace-nowrap">
          <div className="flex items-center gap-3 text-base">
            <Sun className="w-5 h-5 text-sunset-100" />
            <span className="font-medium">{fahrenheit}°F</span>
          </div>
          <div className="flex items-center gap-3 text-base">
            <Cloud className="w-5 h-5 text-ocean-100" />
            <span>{weather.condition}</span>
          </div>
          <div className="flex items-center gap-3 text-base">
            <Droplets className="w-5 h-5 text-ocean-100" />
            <span>{weather.humidity}% Humidity</span>
          </div>
          <div className="flex items-center gap-3 text-base">
            <Wind className="w-5 h-5 text-ocean-100" />
            <span>{mph} mph</span>
          </div>
          <div className="text-palm-100 font-medium text-base">
            Current conditions in {weather.location}
          </div>
          {/* Duplicate content for seamless scrolling */}
          <div className="flex items-center gap-3 text-base">
            <Sun className="w-5 h-5 text-sunset-100" />
            <span className="font-medium">{fahrenheit}°F</span>
          </div>
          <div className="flex items-center gap-3 text-base">
            <Cloud className="w-5 h-5 text-ocean-100" />
            <span>{weather.condition}</span>
          </div>
          <div className="flex items-center gap-3 text-base">
            <Droplets className="w-5 h-5 text-ocean-100" />
            <span>{weather.humidity}% Humidity</span>
          </div>
          <div className="flex items-center gap-3 text-base">
            <Wind className="w-5 h-5 text-ocean-100" />
            <span>{mph} mph</span>
          </div>
          <div className="text-palm-100 font-medium text-base">
            Current conditions in {weather.location}
          </div>
        </div>
      </div>
    </div>
  );
};