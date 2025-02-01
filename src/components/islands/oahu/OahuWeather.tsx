import { useEffect, useState } from "react";
import { Cloud, Sun, Droplets, Wind } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface WeatherData {
  temperature: number;
  humidity: number;
  windSpeed: number;
  condition: string;
}

export const OahuWeather = () => {
  const [weather, setWeather] = useState<WeatherData>({
    temperature: 27,
    humidity: 65,
    windSpeed: 12,
    condition: "Partly Cloudy",
  });

  // In a real application, you would fetch this data from a weather API
  useEffect(() => {
    // Simulated weather data
    const fetchWeather = () => {
      // This would be replaced with actual API call
      setWeather({
        temperature: 27,
        humidity: 65,
        windSpeed: 12,
        condition: "Partly Cloudy",
      });
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 1800000); // Update every 30 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sun className="w-5 h-5 text-sunset-100" />
          Current Weather in Oahu
        </CardTitle>
        <CardDescription>Updated every 30 minutes</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sun className="w-4 h-4 text-sunset-100" />
              <span>Temperature</span>
            </div>
            <p className="text-2xl font-bold">{weather.temperature}°C</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cloud className="w-4 h-4 text-ocean-100" />
              <span>Condition</span>
            </div>
            <p className="text-2xl font-bold">{weather.condition}</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Droplets className="w-4 h-4 text-ocean-100" />
              <span>Humidity</span>
            </div>
            <p className="text-2xl font-bold">{weather.humidity}%</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Wind className="w-4 h-4 text-ocean-100" />
              <span>Wind Speed</span>
            </div>
            <p className="text-2xl font-bold">{weather.windSpeed} km/h</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};