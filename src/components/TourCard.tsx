import { Star, Clock, Users, MapPin, ExternalLink, Heart, Badge as BadgeIcon } from "lucide-react";
import { useState } from "react";
import { Tour } from "@/types/Tour";

type TourCardProps = Omit<Tour, "tags"> & {
  showCategory?: boolean;
  isPromoted?: boolean;
};

export const TourCard = ({
  title,
  description,
  price,
  duration,
  image,
  rating,
  location,
  category,
  affiliateUrl,
  showCategory = false,
  isPromoted = false,
}: TourCardProps) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Dynamically replace BACKLINK with your current site URL
  const fullUrl = affiliateUrl?.replace("BACKLINK", window.location.origin) || affiliateUrl;

  // Show duration only if available, otherwise hide it
  const getDisplayInfo = () => {
    // Only show duration if it exists in the data, otherwise hide
    const showDuration = duration && duration !== null;
    return { showDuration };
  };

  const { showDuration } = getDisplayInfo();

  // Format category for display
  const displayCategory = category?.replace(/([A-Z])/g, ' $1').trim() || 'Adventure';

  const handleBookClick = () => {
    // Track analytics here if needed
    window.open(fullUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      {/* Promoted Badge */}
      {isPromoted && (
        <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-sunset-100 to-sunset-200 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
          <BadgeIcon className="w-3 h-3" />
          Popular Choice
        </div>
      )}

      {/* Favorite Button */}
      <button
        onClick={() => setIsFavorited(!isFavorited)}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-200 shadow-md"
      >
        <Heart 
          className={`w-4 h-4 transition-colors ${
            isFavorited ? 'text-red-500 fill-red-500' : 'text-gray-600 hover:text-red-500'
          }`} 
        />
      </button>

      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-gray-200">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-all duration-500 ${
            imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } group-hover:scale-110`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Duration Badge - Only show if duration exists */}
        {showDuration && (
          <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-palm-100 shadow-md">
            <Clock className="w-3 h-3 inline mr-1" />
            {duration}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header Info */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="w-3 h-3 mr-1" />
            <span>{location}</span>
            {showCategory && (
              <>
                <span className="mx-2">•</span>
                <span className="text-ocean-100">{displayCategory}</span>
              </>
            )}
          </div>
          
          {rating && (
            <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-full">
              <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
              <span className="text-sm font-medium text-gray-700">{rating}</span>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-palm-100 mb-2 line-clamp-2 group-hover:text-ocean-100 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
          {description}
        </p>

        {/* Tour Details - Keep it simple for MVP */}
        <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
          <div className="flex items-center">
            <Users className="w-3 h-3 mr-1" />
            <span>Group sizes vary</span>
          </div>
          {showDuration && (
            <div className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              <span>{duration}</span>
            </div>
          )}
        </div>

        {/* Price and Book Button */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            {price ? (
              <div className="flex items-baseline">
                <span className="text-2xl font-bold text-palm-100">${price}</span>
                <span className="text-sm text-gray-500 ml-1">per person</span>
              </div>
            ) : (
              <div className="text-ocean-100 font-semibold">
                View Pricing
              </div>
            )}
          </div>

          <button
            onClick={handleBookClick}
            className="bg-gradient-to-r from-sunset-100 to-sunset-200 hover:from-sunset-200 hover:to-sunset-300 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg"
          >
            Book Now
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Instant confirmation</span>
            <span>Free cancellation*</span>
          </div>
        </div>
      </div>
    </div>
  );
};