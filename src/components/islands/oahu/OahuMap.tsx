import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

type Location = {
  name: string;
  coordinates: [number, number];
  description: string;
};

const tourLocations: Location[] = [
  {
    name: "Pearl Harbor",
    coordinates: [-157.9785, 21.3669],
    description: "Historic WWII site and memorial",
  },
  {
    name: "Diamond Head",
    coordinates: [-157.8058, 21.2620],
    description: "Iconic volcanic crater with panoramic views",
  },
  {
    name: "North Shore",
    coordinates: [-158.0375, 21.6977],
    description: "Famous surfing destination",
  },
  {
    name: "Waikiki Beach",
    coordinates: [-157.8261, 21.2767],
    description: "Legendary beach and tourist hotspot",
  },
];

export const OahuMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = "pk.eyJ1IjoiaGF3YWlpdG91cmNvIiwiYSI6ImNtNmR1bmdsNDBhaDMyanBxYnVlbm42M2MifQ.wniZDj_mGkECuIYO7ubRDg";

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: [-157.9785, 21.4389],
      zoom: 10,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Add markers for tour locations
    tourLocations.forEach((location) => {
      const marker = new mapboxgl.Marker()
        .setLngLat(location.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<h3 class="font-bold">${location.name}</h3><p>${location.description}</p>`
          )
        )
        .addTo(map.current!);
      markersRef.current.push(marker);
    });

    return () => {
      markersRef.current.forEach((marker) => marker.remove());
      map.current?.remove();
    };
  }, []);

  const flyToLocation = (coordinates: [number, number], name: string) => {
    map.current?.flyTo({
      center: coordinates,
      zoom: 14,
      essential: true,
    });

    // Find and show popup for the location
    markersRef.current.forEach((marker) => {
      if (
        marker.getLngLat().lng === coordinates[0] &&
        marker.getLngLat().lat === coordinates[1]
      ) {
        marker.togglePopup();
      }
    });
  };

  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-palm-100 mb-4">
          Explore Oahu's Top Destinations
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Click on the locations to see where our most popular tours take place
          across the island
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        {tourLocations.map((location) => (
          <Button
            key={location.name}
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => flyToLocation(location.coordinates, location.name)}
          >
            <MapPin className="w-4 h-4" />
            {location.name}
          </Button>
        ))}
      </div>

      <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
        <div ref={mapContainer} className="w-full h-full" />
      </div>
    </section>
  );
};