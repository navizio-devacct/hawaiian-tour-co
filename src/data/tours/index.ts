
import { Tour } from "../types";
import { oahuTours } from "./oahu";
import { mauiTours } from "./maui";
import { kauaiTours } from "./kauai";
import { bigIslandTours } from "./bigisland";

export const tours: Tour[] = [
  ...oahuTours,
  ...mauiTours,
  ...kauaiTours,
  ...bigIslandTours,
];

// Category to URL mapping
export const categoryToUrl = {
  "Snorkeling Adventures": "snorkeling",
  "Hiking Expeditions": "hiking",
  "Nature Tours": "nature-tours",
  "Photography Tours": "photography",
  "Sunset Cruises": "sunset",
  "Adventure Sports": "adventure",
  "Boat Tours": "boat-tours",
  "Water Activities": "water-activities",
  "Surf Lessons": "surf",
  "Scuba Diving": "scuba",
  "Private Tours": "private-tours",
  "Equipment Rentals": "rentals",
  "Guided Tours": "guided-tours",
  "Sightseeing Tours": "sightseeing",
  "Stand-Up Paddleboarding": "sup",
  "Bus Tours": "bus-tours",
  "Whale Watching": "whale-watch",
  "Kayaking Adventures": "kayaking",
  "Transportation Services": "transportation",
  "Walking Tours": "walking-tours",
  "Sailing Charters": "sailing",
  "Helicopter Tours": "helicopter",
  "Cultural Tours": "cultural"
};

// URL to category mapping (reverse of above)
export const urlToCategory = Object.entries(categoryToUrl).reduce(
  (acc, [category, url]) => {
    acc[url] = category;
    return acc;
  },
  {} as Record<string, string>
);

// Get all unique locations
export const locations = [...new Set(tours.map(tour => tour.location))];
