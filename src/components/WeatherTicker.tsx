import { Sun, Cloud, Droplets, Wind, MapPin } from "lucide-react";
import { useWeatherAPI } from "../hooks/useWeatherAPI";

interface WeatherTickerProps {
  location: string; // "Maui", "Big Island", "Oahu", "Kauai"
}

export const WeatherTicker = ({ location }: WeatherTickerProps) => {
  const { 
    weatherData, 
    loading, 
    getWeatherEmoji 
  } = useWeatherAPI();

  const weather = weatherData[location];

  // Fallback data while loading or if error
  const getFallbackWeather = (loc: string) => {
    const fallbacks = {
      "Maui": { temp: 79, condition: "Partly Cloudy", humidity: 75, wind: 15 },
      "Big Island": { temp: 82, condition: "Sunny", humidity: 68, wind: 12 },
      "Oahu": { temp: 80, condition: "Sunny", humidity: 72, wind: 14 },
      "Kauai": { temp: 75, condition: "Light Showers", humidity: 78, wind: 16 }
    };
    return fallbacks[loc as keyof typeof fallbacks] || fallbacks["Oahu"];
  };

  // Use live weather data or fallback
  const displayWeather = weather ? {
    temperature: weather.temperature,
    condition: weather.condition,
    humidity: weather.humidity,
    windSpeed: weather.windSpeed,
    windDirection: weather.windDirection,
    location: weather.location,
    isLive: true
  } : {
    temperature: getFallbackWeather(location).temp,
    condition: getFallbackWeather(location).condition,
    humidity: getFallbackWeather(location).humidity,
    windSpeed: getFallbackWeather(location).wind,
    windDirection: 'NE',
    location: location,
    isLive: false
  };

  // Get appropriate weather icon
  const getConditionIcon = (condition: string) => {
    const lowerCondition = condition.toLowerCase();
    
    if (lowerCondition.includes('sunny') || lowerCondition.includes('clear')) {
      return <Sun className="w-5 h-5 text-yellow-500" />;
    }
    if (lowerCondition.includes('rain') || lowerCondition.includes('shower')) {
      return <Droplets className="w-5 h-5 text-blue-500" />;
    }
    
    return <Cloud className="w-5 h-5 text-gray-500" />; // Default for cloudy/other
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm shadow-md py-4 sticky top-0 z-40 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex items-center space-x-12 animate-[scroll_25s_linear_infinite] whitespace-nowrap">
          {/* Live Weather Status */}
          <div className="flex items-center gap-2 text-base">
            {weather ? (
              <>
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse inline-block"></span>
                <span className="text-green-700 font-medium text-sm">LIVE</span>
              </>
            ) : (
              <span className="text-gray-500 font-medium text-sm">
                {loading ? 'Loading...' : 'Cached'}
              </span>
            )}
          </div>

          {/* Temperature */}
          <div className="flex items-center gap-3 text-base">
            <span className="text-2xl">{weather ? getWeatherEmoji(weather.condition) : '🌤️'}</span>
            <span className="font-bold text-lg text-gray-900">
              {displayWeather.temperature}°F
            </span>
          </div>

          {/* Condition */}
          <div className="flex items-center gap-3 text-base">
            {getConditionIcon(displayWeather.condition)}
            <span className="font-medium text-gray-800">{displayWeather.condition}</span>
          </div>

          {/* Humidity */}
          <div className="flex items-center gap-3 text-base">
            <Droplets className="w-5 h-5 text-blue-500" />
            <span className="text-gray-700">{displayWeather.humidity}% Humidity</span>
          </div>

          {/* Wind */}
          <div className="flex items-center gap-3 text-base">
            <Wind className="w-5 h-5 text-green-500" />
            <span className="text-gray-700">
              {displayWeather.windSpeed} mph {displayWeather.windDirection}
            </span>
          </div>

          {/* Location & Source */}
          <div className="flex items-center gap-3 text-base">
            <MapPin className="w-5 h-5 text-purple-500" />
            <span className="text-palm-100 font-medium">
              Current conditions in {displayWeather.location}
            </span>
          </div>

          {/* Data Source */}
          <div className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
            {weather ? 'National Weather Service' : 'Estimated Conditions'}
          </div>

          {/* Duplicate content for seamless scrolling */}
          <div className="flex items-center gap-2 text-base">
            {weather ? (
              <>
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse inline-block"></span>
                <span className="text-green-700 font-medium text-sm">LIVE</span>
              </>
            ) : (
              <span className="text-gray-500 font-medium text-sm">
                {loading ? 'Loading...' : 'Cached'}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 text-base">
            <span className="text-2xl">{weather ? getWeatherEmoji(weather.condition) : '🌤️'}</span>
            <span className="font-bold text-lg text-gray-900">
              {displayWeather.temperature}°F
            </span>
          </div>

          <div className="flex items-center gap-3 text-base">
            {getConditionIcon(displayWeather.condition)}
            <span className="font-medium text-gray-800">{displayWeather.condition}</span>
          </div>

          <div className="flex items-center gap-3 text-base">
            <Droplets className="w-5 h-5 text-blue-500" />
            <span className="text-gray-700">{displayWeather.humidity}% Humidity</span>
          </div>

          <div className="flex items-center gap-3 text-base">
            <Wind className="w-5 h-5 text-green-500" />
            <span className="text-gray-700">
              {displayWeather.windSpeed} mph {displayWeather.windDirection}
            </span>
          </div>

          <div className="flex items-center gap-3 text-base">
            <MapPin className="w-5 h-5 text-purple-500" />
            <span className="text-palm-100 font-medium">
              Current conditions in {displayWeather.location}
            </span>
          </div>

          <div className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
            {weather ? 'National Weather Service' : 'Estimated Conditions'}
          </div>
        </div>
      </div>
    </div>
  );
};