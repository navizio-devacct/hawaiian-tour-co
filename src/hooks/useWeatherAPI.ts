import { useState, useEffect } from 'react';

// National Weather Service API - NO API KEY REQUIRED!
const NWS_BASE_URL = 'https://api.weather.gov';

// Hawaii Island Coordinates and preferred stations for NWS with fallbacks
const ISLAND_COORDINATES = {
  "Oahu": { 
    lat: 21.48, 
    lon: -158.03, 
    name: "Wheeler Air Force Base",
    stationId: "PHHI", // Wheeler AFB - matches NWS Oahu page
    fallbacks: ["PHNL"] // Honolulu Airport
  },
  "Maui": { 
    lat: 20.8893, 
    lon: -156.4729, 
    name: "Kahului Airport",
    stationId: "PHOG", // Kahului Airport - matches NWS Maui page
    fallbacks: ["PHOG"] // Same station
  },
  "Big Island": { 
    lat: 19.7381, 
    lon: -156.0456, 
    name: "Kona International Airport",
    stationId: "PHKO", // Kona Airport - primary
    fallbacks: ["PHTO", "PHSF", "PHMU"] // Hilo Airport, Bradshaw AAF, Volcano Observatory
  },
  "Kauai": { 
    lat: 21.98, 
    lon: -159.34, 
    name: "Lihue Airport",
    stationId: "PHLI", // Lihue Airport - matches NWS Kauai page
    fallbacks: ["PHLI"] // Same station
  }
};

export interface WeatherData {
  island: string;
  temperature: number; // Fahrenheit
  temperatureCelsius: number;
  condition: string;
  description: string;
  humidity: number;
  windSpeed: number; // mph
  windDirection: string;
  pressure: number;
  visibility: number;
  dewPoint: number;
  heatIndex?: number;
  windChill?: number;
  lastUpdated: Date;
  location: string;
  detailedForecast: string;
  icon: string;
  isDay: boolean;
}

interface WeatherError {
  island: string;
  message: string;
}

export const useWeatherAPI = () => {
  const [weatherData, setWeatherData] = useState<Record<string, WeatherData>>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<WeatherError[]>([]);
  const [lastFetch, setLastFetch] = useState<Date | null>(null);

  // Convert NWS conditions to simplified format
  const simplifyCondition = (condition: string): string => {
    const lowerCondition = condition.toLowerCase();
    
    if (lowerCondition.includes('sunny') || lowerCondition.includes('clear')) return 'Sunny';
    if (lowerCondition.includes('partly cloudy') || lowerCondition.includes('partly sunny')) return 'Partly Cloudy';
    if (lowerCondition.includes('mostly cloudy') || lowerCondition.includes('mostly sunny')) return 'Mostly Cloudy';
    if (lowerCondition.includes('cloudy') || lowerCondition.includes('overcast')) return 'Cloudy';
    if (lowerCondition.includes('rain') || lowerCondition.includes('showers')) return 'Rainy';
    if (lowerCondition.includes('thunderstorm') || lowerCondition.includes('storm')) return 'Thunderstorms';
    if (lowerCondition.includes('fog') || lowerCondition.includes('mist')) return 'Foggy';
    if (lowerCondition.includes('wind')) return 'Windy';
    
    return condition;
  };

  // Get weather emoji based on condition
  const getWeatherEmoji = (condition: string): string => {
    const lowerCondition = condition.toLowerCase();
    
    if (lowerCondition.includes('sunny') || lowerCondition.includes('clear')) return '☀️';
    if (lowerCondition.includes('partly')) return '⛅';
    if (lowerCondition.includes('cloudy') || lowerCondition.includes('overcast')) return '☁️';
    if (lowerCondition.includes('rain') || lowerCondition.includes('showers')) return '🌧️';
    if (lowerCondition.includes('thunderstorm') || lowerCondition.includes('storm')) return '⛈️';
    if (lowerCondition.includes('fog') || lowerCondition.includes('mist')) return '🌫️';
    if (lowerCondition.includes('wind')) return '💨';
    
    return '🌤️'; // Default
  };

  // Convert Celsius to Fahrenheit
  const celsiusToFahrenheit = (celsius: number): number => {
    return Math.round((celsius * 9/5) + 32);
  };

  // Convert wind speed to mph (handles multiple units)
  const convertWindToMph = (windValue: any): number => {
    if (!windValue || windValue.value === null) return 0;
    
    const speed = windValue.value;
    const unit = windValue.unitCode;
    
    // Convert based on unit
    if (unit === 'wmoUnit:km_h-1' || unit === 'unit:km_h-1') {
      return Math.round(speed * 0.621371); // km/h to mph
    } else if (unit === 'wmoUnit:m_s-1' || unit === 'unit:m_s-1') {
      return Math.round(speed * 2.237); // m/s to mph
    } else if (unit === 'wmoUnit:mph' || unit === 'unit:mph') {
      return Math.round(speed); // Already in mph
    } else {
      // Unknown unit, assume km/h (most common for NWS)
      return Math.round(speed * 0.621371);
    }
  };

  // Convert wind direction from degrees to cardinal
  const getWindDirection = (degrees: number): string => {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    const index = Math.round(degrees / 22.5) % 16;
    return directions[index];
  };

  // Extract temperature from NWS value object
  const extractTemperature = (tempValue: any): number => {
    if (!tempValue || tempValue.value === null || tempValue.value === undefined) {
      return 80; // Default fallback for Hawaii
    }
    
    // NWS returns temperature in Celsius
    if (tempValue.unitCode === 'wmoUnit:degC' || tempValue.unitCode === 'unit:degC') {
      return celsiusToFahrenheit(tempValue.value);
    }
    
    // If it's already in Fahrenheit
    if (tempValue.unitCode === 'wmoUnit:degF' || tempValue.unitCode === 'unit:degF') {
      return Math.round(tempValue.value);
    }
    
    // Unknown unit - assume Celsius and convert
    return celsiusToFahrenheit(tempValue.value);
  };

  // Extract value from NWS measurement object
  const extractValue = (measurement: any): number => {
    return Math.round(measurement?.value || 0);
  };

  // Check if observation data is valid (not all null values)
  const isValidObservation = (observations: any): boolean => {
    return (
      observations.temperature?.value !== null ||
      observations.relativeHumidity?.value !== null ||
      observations.windSpeed?.value !== null
    );
  };

  // Try to fetch from a specific station
  const tryFetchFromStation = async (stationId: string, island: string): Promise<any | null> => {
    try {
      const response = await fetch(
        `${NWS_BASE_URL}/stations/${stationId}/observations/latest`,
        {
          headers: {
            'User-Agent': 'HawaiianTourCo/1.0 (contact@hawaiiantourco.com)'
          }
        }
      );

      if (!response.ok) {
        return null;
      }

      const obsData = await response.json();
      const observations = obsData.properties;
      
      if (isValidObservation(observations)) {
        return { observations, stationId };
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  };

  // Fetch weather for a single island using NWS API
  const fetchIslandWeather = async (island: string): Promise<WeatherData | null> => {
    try {
      const coords = ISLAND_COORDINATES[island as keyof typeof ISLAND_COORDINATES];
      if (!coords) throw new Error(`Unknown island: ${island}`);

      // Step 1: Get the grid point for coordinates (needed for station discovery)
      const pointResponse = await fetch(
        `${NWS_BASE_URL}/points/${coords.lat},${coords.lon}`,
        {
          headers: {
            'User-Agent': 'HawaiianTourCo/1.0 (contact@hawaiiantourco.com)'
          }
        }
      );

      if (!pointResponse.ok) {
        throw new Error(`NWS Point API error: ${pointResponse.status}`);
      }

      const pointData = await pointResponse.json();
      
      // Step 2: Try primary station first
      let result = await tryFetchFromStation(coords.stationId, island);
      let actualStationName = coords.name;
      
      // Step 3: If primary fails or has null data, try fallback stations
      if (!result && coords.fallbacks) {
        for (const fallbackStation of coords.fallbacks) {
          result = await tryFetchFromStation(fallbackStation, island);
          if (result) {
            actualStationName = `${coords.name} (via ${fallbackStation})`;
            break;
          }
        }
      }
      
      // Step 4: If all manual stations fail, try auto-discovery
      if (!result) {
        const stationsResponse = await fetch(pointData.properties.observationStations, {
          headers: {
            'User-Agent': 'HawaiianTourCo/1.0 (contact@hawaiiantourco.com)'
          }
        });

        if (stationsResponse.ok) {
          const stationsData = await stationsResponse.json();
          
          // Try first 3 stations from discovery
          for (let i = 0; i < Math.min(3, stationsData.features?.length || 0); i++) {
            const station = stationsData.features[i];
            result = await tryFetchFromStation(station.properties.stationIdentifier, island);
            if (result) {
              actualStationName = station.properties.name || `Auto-discovered station`;
              break;
            }
          }
        }
      }

      // If we still don't have data, throw error
      if (!result) {
        throw new Error(`No valid weather data available for ${island}`);
      }

      const { observations } = result;

      // Get current temperature and other data
      const currentTemp = extractTemperature(observations.temperature);
      
      // Sanity check - Hawaii should be 65-95°F
      const fallbackTemps = { "Oahu": 80, "Maui": 79, "Big Island": 82, "Kauai": 75 };
      const finalTemp = (currentTemp < 50 || currentTemp > 100) 
        ? fallbackTemps[island as keyof typeof fallbackTemps] || 80
        : currentTemp;

      // Build weather data object with better fallbacks for missing data
      const result_data: WeatherData = {
        island,
        temperature: finalTemp,
        temperatureCelsius: Math.round((finalTemp - 32) * 5/9),
        condition: simplifyCondition(observations.textDescription || 'Partly Cloudy'),
        description: observations.textDescription || 'Current conditions',
        humidity: observations.relativeHumidity?.value ? extractValue(observations.relativeHumidity) : 65,
        windSpeed: convertWindToMph(observations.windSpeed) || 12, // Default 12 mph if no wind data
        windDirection: observations.windDirection ? getWindDirection(observations.windDirection.value) : 'NE',
        pressure: observations.barometricPressure ? Math.round(observations.barometricPressure.value * 0.02953) : 30,
        visibility: observations.visibility ? Math.round(observations.visibility.value * 0.000621371) : 10,
        dewPoint: observations.dewpoint ? extractTemperature(observations.dewpoint) : finalTemp - 10,
        heatIndex: observations.heatIndex ? extractTemperature(observations.heatIndex) : undefined,
        windChill: observations.windChill ? extractTemperature(observations.windChill) : undefined,
        lastUpdated: new Date(observations.timestamp || Date.now()),
        location: actualStationName,
        detailedForecast: 'Current Hawaiian weather conditions',
        icon: '',
        isDay: new Date().getHours() >= 6 && new Date().getHours() <= 18
      };

      return result_data;
    } catch (error) {
      return null;
    }
  };

  // Fetch weather for all islands
  const fetchAllWeatherData = async () => {
    setLoading(true);
    setError([]);

    const islands = Object.keys(ISLAND_COORDINATES);
    const weatherPromises = islands.map(island => fetchIslandWeather(island));
    
    try {
      const results = await Promise.allSettled(weatherPromises);
      const newWeatherData: Record<string, WeatherData> = {};
      const newErrors: WeatherError[] = [];

      results.forEach((result, index) => {
        const island = islands[index];
        
        if (result.status === 'fulfilled' && result.value) {
          newWeatherData[island] = result.value;
        } else {
          newErrors.push({
            island,
            message: 'Failed to fetch weather data'
          });
          
          // Provide realistic fallback data for Hawaii
          const fallbackTemps = { "Oahu": 80, "Maui": 79, "Big Island": 82, "Kauai": 75 };
          const fallbackConditions = { "Oahu": "Sunny", "Maui": "Partly Cloudy", "Big Island": "Sunny", "Kauai": "Light Showers" };
          
          newWeatherData[island] = {
            island,
            temperature: fallbackTemps[island as keyof typeof fallbackTemps] || 80,
            temperatureCelsius: Math.round((fallbackTemps[island as keyof typeof fallbackTemps] - 32) * 5/9),
            condition: fallbackConditions[island as keyof typeof fallbackConditions] || 'Partly Cloudy',
            description: 'Current conditions unavailable',
            humidity: 65,
            windSpeed: 12,
            windDirection: 'NE',
            pressure: 30,
            visibility: 10,
            dewPoint: 70,
            lastUpdated: new Date(),
            location: ISLAND_COORDINATES[island as keyof typeof ISLAND_COORDINATES].name,
            detailedForecast: 'Weather data temporarily unavailable',
            icon: '',
            isDay: true
          };
        }
      });

      setWeatherData(newWeatherData);
      setError(newErrors);
      setLastFetch(new Date());
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Manual refresh function
  const refreshWeather = () => {
    fetchAllWeatherData();
  };

  // Initial fetch and auto-refresh every 30 minutes
  useEffect(() => {
    fetchAllWeatherData();
    
    const interval = setInterval(fetchAllWeatherData, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Helper functions for components
  const getIslandWeather = (island: string): WeatherData | null => {
    return weatherData[island] || null;
  };

  const getTemperatureDisplay = (island: string, unit: 'F' | 'C' = 'F'): string => {
    const weather = getIslandWeather(island);
    if (!weather) return 'N/A';
    
    const temp = unit === 'F' ? weather.temperature : weather.temperatureCelsius;
    return `${temp}°${unit}`;
  };

  const getWeatherSummary = (island: string): string => {
    const weather = getIslandWeather(island);
    if (!weather) return 'Weather unavailable';
    
    return `${weather.temperature}°F • ${weather.condition}`;
  };

  const getWeatherWithEmoji = (island: string): string => {
    const weather = getIslandWeather(island);
    if (!weather) return '🌤️ Weather unavailable';
    
    const emoji = getWeatherEmoji(weather.condition);
    return `${emoji} ${weather.temperature}°F • ${weather.condition}`;
  };

  // Get all weather for ticker (compact format)
  const getTickerWeather = (): string => {
    const islands = Object.keys(ISLAND_COORDINATES);
    const summaries = islands.map(island => {
      const weather = getIslandWeather(island);
      if (!weather) return `${island}: N/A`;
      
      const emoji = getWeatherEmoji(weather.condition);
      return `${island}: ${emoji} ${weather.temperature}°F`;
    });
    
    return summaries.join(' • ');
  };

  return {
    weatherData,
    loading,
    error,
    lastFetch,
    refreshWeather,
    getIslandWeather,
    getTemperatureDisplay,
    getWeatherSummary,
    getWeatherWithEmoji,
    getTickerWeather,
    getWeatherEmoji
  };
};