import { Sun, Cloud, Droplets, Wind, MapPin, RefreshCw, AlertCircle } from "lucide-react";
import { useWeatherAPI } from "../hooks/useWeatherAPI";

interface WeatherTickerProps {
  location: string; // "Maui", "Big Island", "Oahu", "Kauai"
}

export const WeatherTicker = ({ location }: WeatherTickerProps) => {
  const { 
    weatherData, 
    loading, 
    getWeatherEmoji,
    refreshWeather
  } = useWeatherAPI();

  const weather = weatherData[location];

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

  // Handle manual refresh
  const handleRefresh = () => {
    refreshWeather();
  };

  // Loading state
  if (loading) {
    return (
      <div className="bg-white/90 backdrop-blur-sm shadow-md py-4 sticky top-0 z-40">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-3">
            <RefreshCw className="w-5 h-5 animate-spin text-blue-500" />
            <span className="text-gray-600 font-medium">Loading live weather data from National Weather Service...</span>
          </div>
        </div>
      </div>
    );
  }

  // No weather data - show unavailable message
  if (!weather) {
    return (
      <div className="bg-white/90 backdrop-blur-sm shadow-md py-4 sticky top-0 z-40">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-orange-500" />
              <span className="text-gray-600 font-medium">
                Weather data temporarily unavailable from National Weather Service
              </span>
            </div>
            <button
              onClick={handleRefresh}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700 transition-all duration-300"
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Show real weather data
  return (
    <div className="bg-white/90 backdrop-blur-sm shadow-md py-4 sticky top-0 z-40 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-2">
          {/* Left side - Live indicator */}
          <div className="flex items-center gap-2 text-base">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse inline-block"></span>
            <span className="text-green-700 font-medium text-sm">LIVE WEATHER</span>
          </div>

          {/* Right side - Refresh button */}
          <button
            onClick={handleRefresh}
            disabled={loading}
            className="flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh
          </button>
        </div>

        {/* Scrolling weather content - REAL DATA ONLY */}
        <div className="flex items-center space-x-12 animate-[scroll_25s_linear_infinite] whitespace-nowrap">
          {/* Temperature */}
          <div className="flex items-center gap-3 text-base">
            <span className="text-2xl">{getWeatherEmoji(weather.condition)}</span>
            <span className="font-bold text-lg text-gray-900">
              {weather.temperature}°F
            </span>
          </div>

          {/* Condition */}
          <div className="flex items-center gap-3 text-base">
            {getConditionIcon(weather.condition)}
            <span className="font-medium text-gray-800">{weather.condition}</span>
          </div>

          {/* Humidity */}
          <div className="flex items-center gap-3 text-base">
            <Droplets className="w-5 h-5 text-blue-500" />
            <span className="text-gray-700">{weather.humidity}% Humidity</span>
          </div>

          {/* Wind */}
          <div className="flex items-center gap-3 text-base">
            <Wind className="w-5 h-5 text-green-500" />
            <span className="text-gray-700">
              {weather.windSpeed} mph {weather.windDirection}
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3 text-base">
            <MapPin className="w-5 h-5 text-purple-500" />
            <span className="text-gray-700 font-medium">
              Current conditions in {weather.location}
            </span>
          </div>

          {/* Data Source */}
          <div className="text-sm text-gray-600 bg-green-100 px-3 py-1 rounded-full">
            National Weather Service
          </div>

          {/* Duplicate content for seamless scrolling */}
          <div className="flex items-center gap-3 text-base">
            <span className="text-2xl">{getWeatherEmoji(weather.condition)}</span>
            <span className="font-bold text-lg text-gray-900">
              {weather.temperature}°F
            </span>
          </div>

          <div className="flex items-center gap-3 text-base">
            {getConditionIcon(weather.condition)}
            <span className="font-medium text-gray-800">{weather.condition}</span>
          </div>

          <div className="flex items-center gap-3 text-base">
            <Droplets className="w-5 h-5 text-blue-500" />
            <span className="text-gray-700">{weather.humidity}% Humidity</span>
          </div>

          <div className="flex items-center gap-3 text-base">
            <Wind className="w-5 h-5 text-green-500" />
            <span className="text-gray-700">
              {weather.windSpeed} mph {weather.windDirection}
            </span>
          </div>

          <div className="flex items-center gap-3 text-base">
            <MapPin className="w-5 h-5 text-purple-500" />
            <span className="text-gray-700 font-medium">
              Current conditions in {weather.location}
            </span>
          </div>

          <div className="text-sm text-gray-600 bg-green-100 px-3 py-1 rounded-full">
            National Weather Service
          </div>
        </div>
      </div>
    </div>
  );
};