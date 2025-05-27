import { Cloud, Sun, Droplets, Wind, RefreshCw, Eye, Thermometer, Gauge, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useWeatherAPI } from "../../../hooks/useWeatherAPI";

export const BigIslandWeather = () => {
  const { 
    weatherData, 
    loading, 
    error, 
    refreshWeather, 
    getWeatherEmoji,
    lastFetch 
  } = useWeatherAPI();

  // Mirror the exact pattern from working OahuWeather
  const bigIslandWeather = weatherData["Big Island"];

  // DEBUG: Only log if data is missing but Oahu works
  if (!bigIslandWeather && weatherData["Oahu"]) {
    console.log('🔍 Big Island missing but Oahu works:');
    console.log('Available keys:', Object.keys(weatherData));
    console.log('Full weatherData:', weatherData);
  }

  // Get appropriate icon based on condition
  const getConditionIcon = (condition: string) => {
    const lowerCondition = condition.toLowerCase();
    
    if (lowerCondition.includes('sunny') || lowerCondition.includes('clear')) {
      return <Sun className="w-5 h-5 text-yellow-500" />;
    }
    if (lowerCondition.includes('cloud')) {
      return <Cloud className="w-5 h-5 text-gray-500" />;
    }
    if (lowerCondition.includes('rain') || lowerCondition.includes('shower')) {
      return <Droplets className="w-5 h-5 text-blue-500" />;
    }
    
    return <Sun className="w-5 h-5 text-yellow-500" />; // Default
  };

  if (loading && !bigIslandWeather) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-5 h-5 animate-spin rounded-full border-2 border-sunset-100 border-t-transparent"></div>
            Loading Big Island Weather
          </CardTitle>
          <CardDescription>Getting live data from National Weather Service...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error.length > 0 && !bigIslandWeather) {
    return (
      <Card className="border-red-200 bg-red-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-700">
            <Cloud className="w-5 h-5" />
            Weather Unavailable
          </CardTitle>
          <CardDescription className="text-red-600">
            Unable to load current weather data. Please try again later.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Show which islands are working for debugging */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mb-3 text-xs bg-yellow-50 p-2 rounded">
              <strong>Debug:</strong> Working islands: {Object.keys(weatherData).join(', ') || 'None'}
            </div>
          )}
          <button
            onClick={refreshWeather}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Retry
          </button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-to-br from-red-50 via-white to-orange-50 border-red-200">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {bigIslandWeather ? getConditionIcon(bigIslandWeather.condition) : <Sun className="w-5 h-5 text-sunset-100" />}
            Current Weather in Big Island
          </div>
          <button
            onClick={refreshWeather}
            disabled={loading}
            className="inline-flex items-center gap-1 bg-white hover:bg-gray-50 border border-gray-200 px-3 py-1 rounded-lg text-sm transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </CardTitle>
        <CardDescription className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse inline-block"></span>
          <span>Live from National Weather Service</span>
          {bigIslandWeather && (
            <>
              <span>•</span>
              <span>{bigIslandWeather.location}</span>
            </>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {bigIslandWeather ? (
          <>
            {/* Main Weather Display */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Temperature & Condition */}
              <div className="text-center md:text-left">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl">{getWeatherEmoji(bigIslandWeather.condition)}</span>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">
                      {bigIslandWeather.temperature}°F
                    </div>
                    <div className="text-lg text-gray-600">
                      {bigIslandWeather.temperatureCelsius}°C
                    </div>
                  </div>
                </div>
                <div className="text-xl font-semibold text-gray-800 mb-1">
                  {bigIslandWeather.condition}
                </div>
                <div className="text-sm text-gray-600">
                  {bigIslandWeather.description}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-gray-200">
                  <div className="flex items-center gap-2 text-blue-600 mb-1">
                    <Droplets className="w-4 h-4" />
                    <span className="text-sm font-medium">Humidity</span>
                  </div>
                  <div className="text-lg font-bold text-gray-900">{bigIslandWeather.humidity}%</div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-gray-200">
                  <div className="flex items-center gap-2 text-green-600 mb-1">
                    <Wind className="w-4 h-4" />
                    <span className="text-sm font-medium">Wind</span>
                  </div>
                  <div className="text-lg font-bold text-gray-900">
                    {bigIslandWeather.windSpeed} mph
                  </div>
                  <div className="text-xs text-gray-600">{bigIslandWeather.windDirection}</div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-gray-200">
                  <div className="flex items-center gap-2 text-purple-600 mb-1">
                    <Gauge className="w-4 h-4" />
                    <span className="text-sm font-medium">Pressure</span>
                  </div>
                  <div className="text-lg font-bold text-gray-900">{bigIslandWeather.pressure}"</div>
                  <div className="text-xs text-gray-600">inHg</div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-gray-200">
                  <div className="flex items-center gap-2 text-orange-600 mb-1">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm font-medium">Visibility</span>
                  </div>
                  <div className="text-lg font-bold text-gray-900">{bigIslandWeather.visibility}</div>
                  <div className="text-xs text-gray-600">miles</div>
                </div>
              </div>
            </div>

            {/* Additional Details */}
            <div className="border-t border-gray-200 pt-4">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Thermometer className="w-4 h-4" />
                Additional Details
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Dew Point:</span>
                  <span className="font-semibold ml-2">{bigIslandWeather.dewPoint}°F</span>
                </div>
                {bigIslandWeather.heatIndex && (
                  <div>
                    <span className="text-gray-600">Heat Index:</span>
                    <span className="font-semibold ml-2">{bigIslandWeather.heatIndex}°F</span>
                  </div>
                )}
                <div>
                  <span className="text-gray-600">Updated:</span>
                  <span className="font-semibold ml-2">
                    {bigIslandWeather.lastUpdated.toLocaleTimeString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Location & Source */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>Weather Station: {bigIslandWeather.location}</span>
                </div>
                <div>
                  <span>Source: National Weather Service</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          // Fallback content - now with better debugging
          <div className="text-center py-8">
            <Cloud className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <div className="text-gray-600 mb-2">Weather data is loading...</div>
            {process.env.NODE_ENV === 'development' && (
              <div className="text-xs text-gray-500">
                {Object.keys(weatherData).length > 0 ? (
                  <span>Other islands loaded: {Object.keys(weatherData).join(', ')}</span>
                ) : (
                  <span>No weather data available yet</span>
                )}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};