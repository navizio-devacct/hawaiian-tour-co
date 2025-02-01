import { Star } from "lucide-react";

interface TourCardProps {
  title: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  rating: number;
  location: string;
}

export const TourCard = ({
  title,
  description,
  price,
  duration,
  image,
  rating,
  location,
}: TourCardProps) => {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-palm-100">
          {duration}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-ocean-100">{location}</span>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{rating}</span>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-palm-100 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-palm-100">
            ${price}
            <span className="text-sm font-normal text-gray-500">/person</span>
          </span>
          <button className="bg-sunset-100 hover:bg-sunset-200 text-white px-4 py-2 rounded-full text-sm transition-colors duration-300">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};