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
    name: "Haleakala National Park",
    coordinates: [-156.1733, 20.7097],
    description: "Watch the sunrise above the clouds at Maui's highest peak",
  },
  {
    name: "Road to Hana",
    coordinates: [-156.1833, 20.7833],
    description: "Journey through 620 curves and 59 bridges of paradise",
  },
  {
    name: "Lahaina",
    coordinates: [-156.6778, 20.8783],
    description: "Historic whaling village and former capital of Hawaii",
  },
  {
    name: "Molokini Crater",
    coordinates: [-156.4958, 20.6316],
    description: "World-famous snorkeling destination",
  },
];

export const MauiMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = "pk.eyJ1IjoiaGF3YWlpdG91cmNvIiwiYSI6ImNtNmR1bmdsNDBhaDMyanBxYnVlbm42M2MifQ.wniZDj_mGkECuIYO7ubRDg";

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: [-156.3319, 20.7984],
      zoom: 9,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

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
          Explore Maui's Top Destinations
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