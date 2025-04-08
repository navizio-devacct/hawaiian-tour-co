export interface Tour {
  title: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  rating: number;
  location: string;
  category: string;
  affiliateUrl: string;
  tags?: string[];
}

export const tours: Tour[] = [
  {
    title: "All Lemuria Journey",
    description: "A sacred Kauai tour connecting spiritual seekers to Lemurian energy portals.",
    price: 122,
    duration: "4 hours",
    image: "https://cdn.filestackcontent.com/RF4FPBllSn5i7YnX4Dt2",
    rating: 4.9,
    location: "Kauai",
    category: "Nature Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/spiritofkauai/items/441140/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes",
    tags: ["featured", "top-rated"]
  },
  {
    title: "Kaua'i Healing Journey",
    description: "Explore deep healing with local guides through sacred Kauai sites.",
    price: 144,
    duration: "6 hours",
    image: "https://cdn.filestackcontent.com/ARYI4SVoQQeD3BUtyxOJ",
    rating: 4.8,
    location: "Kauai",
    category: "Nature Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/spiritofkauai/items/441138/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes",
    tags: ["new"]
  },
  {
    title: "Whole Presence QSR Quantum Soul Retrieval",
    description: "Embark on a transformational soul journey with Kauai's sacred energy.",
    price: 199,
    duration: "8 hours",
    image: "https://cdn.filestackcontent.com/H2osZ5YzTKSoK74SnB6Y",
    rating: 4.7,
    location: "Kauai",
    category: "Nature Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/spiritofkauai/items/441128/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes",
    tags: ["featured"]
  },
  // Snorkeling Adventures
  {
    title: "Molokini Crater Snorkel",
    description: "Explore the crystal clear waters of Molokini Crater and discover vibrant marine life.",
    price: 139,
    duration: "5 hours",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80",
    rating: 4.9,
    location: "Maui",
    category: "Snorkeling Adventures",
    affiliateUrl: "https://fareharbor.com/embeds/book/mauitours/items/12345/?ref=hawaiiantourco",
    tags: ["featured", "best-seller"]
  },
  {
    title: "Turtle Canyon Snorkel",
    description: "Swim alongside Hawaiian green sea turtles in their natural habitat.",
    price: 99,
    duration: "3 hours",
    image: "https://images.unsplash.com/photo-1530053969600-caed2596d242?q=80",
    rating: 4.8,
    location: "Oahu",
    category: "Snorkeling Adventures",
    affiliateUrl: "https://fareharbor.com/embeds/book/oahutours/items/67890/?ref=hawaiiantourco",
    tags: ["family-friendly"]
  },
  // Hiking Expeditions
  {
    title: "Waimea Canyon Trail",
    description: "Hike through the 'Grand Canyon of the Pacific' with breathtaking views.",
    price: 119,
    duration: "6 hours",
    image: "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80",
    rating: 4.7,
    location: "Kauai",
    category: "Hiking Expeditions",
    affiliateUrl: "https://fareharbor.com/embeds/book/kauaihikes/items/23456/?ref=hawaiiantourco",
    tags: ["moderate", "scenic"]
  },
  {
    title: "Diamond Head Summit",
    description: "Climb to the top of Oahu's iconic crater for panoramic views of Waikiki.",
    price: 79,
    duration: "3 hours",
    image: "https://images.unsplash.com/photo-1578304745506-722718603408?q=80",
    rating: 4.6,
    location: "Oahu",
    category: "Hiking Expeditions",
    affiliateUrl: "https://fareharbor.com/embeds/book/oahuhikes/items/34567/?ref=hawaiiantourco",
    tags: ["beginner-friendly", "sunrise"]
  },
  // Photography Tours
  {
    title: "Road to Hana Photo Tour",
    description: "Capture Maui's most photogenic spots along the famous Road to Hana.",
    price: 169,
    duration: "10 hours",
    image: "https://images.unsplash.com/photo-1623718649591-311775a30c43?q=80",
    rating: 4.9,
    location: "Maui",
    category: "Photography Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/mauiphotos/items/45678/?ref=hawaiiantourco",
    tags: ["all-levels", "transportation-included"]
  },
  {
    title: "Waipio Valley Photography",
    description: "Learn composition techniques while photographing the lush Waipio Valley.",
    price: 149,
    duration: "7 hours",
    image: "https://images.unsplash.com/photo-1540390622538-149b9e127c69?q=80",
    rating: 4.8,
    location: "Big Island",
    category: "Photography Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/bigislandphotos/items/56789/?ref=hawaiiantourco",
    tags: ["gear-included", "small-group"]
  },
  // Sunset Cruises
  {
    title: "Waikiki Sunset Sail",
    description: "Sail along the Waikiki coastline as the sun sets over the Pacific.",
    price: 109,
    duration: "2.5 hours",
    image: "https://images.unsplash.com/photo-1502519144081-acca18599776?q=80",
    rating: 4.8,
    location: "Oahu",
    category: "Sunset Cruises",
    affiliateUrl: "https://fareharbor.com/embeds/book/oahucruises/items/67890/?ref=hawaiiantourco",
    tags: ["drinks-included", "romantic"]
  },
  {
    title: "Kaanapali Sunset Dinner Cruise",
    description: "Enjoy a gourmet dinner while watching the sunset from the water.",
    price: 159,
    duration: "3 hours",
    image: "https://images.unsplash.com/photo-1534350752840-1b8d04805f3d?q=80",
    rating: 4.7,
    location: "Maui",
    category: "Sunset Cruises",
    affiliateUrl: "https://fareharbor.com/embeds/book/mauicruises/items/78901/?ref=hawaiiantourco",
    tags: ["dinner-included", "entertainment"]
  },
  // Adventure Sports
  {
    title: "North Shore Surfing Lesson",
    description: "Learn to surf on Oahu's legendary North Shore with expert instructors.",
    price: 129,
    duration: "4 hours",
    image: "https://images.unsplash.com/photo-1537519646099-335112f03225?q=80",
    rating: 4.8,
    location: "Oahu",
    category: "Adventure Sports",
    affiliateUrl: "https://fareharbor.com/embeds/book/oahusurfing/items/89012/?ref=hawaiiantourco",
    tags: ["beginner-friendly", "equipment-included"]
  },
  {
    title: "Kauai Zipline Adventure",
    description: "Zip through the canopy of Kauai's lush rainforest on exhilarating ziplines.",
    price: 189,
    duration: "5 hours",
    image: "https://images.unsplash.com/photo-1622288288168-a496d8656e79?q=80",
    rating: 4.9,
    location: "Kauai",
    category: "Adventure Sports",
    affiliateUrl: "https://fareharbor.com/embeds/book/kauaizipline/items/90123/?ref=hawaiiantourco",
    tags: ["adrenaline", "scenic-views"]
  },
  
  // Boat Tours
  {
    title: "4 hour Premium Morning Na Pali Adventure & Snorkel tour",
    description: "Hanalei Charters, Inc. - Snorkel in Hanalei, Hawaii",
    price: 0,
    duration: "4 hours",
    image: "https://cdn.filestackcontent.com/v19dv6Q1R16KDmt74R2k",
    rating: 4.9,
    location: "Kauai",
    category: "Boat Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/hanaleicharters/items/437141/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Deluxe Afternoon Adventure",
    description: "Na Pali Experience - Boat Tour in Kekaha Kauai, Hawaii",
    price: 0,
    duration: "3 hours",
    image: "https://cdn.filestackcontent.com/kroYeTuSWKdhysoEQY5Q",
    rating: 4.8,
    location: "Kauai",
    category: "Boat Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/napaliexperience/items/583974/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Deluxe Morning Magic",
    description: "Na Pali Experience - Boat Tour in Kekaha Kauai, Hawaii",
    price: 0,
    duration: "3 hours",
    image: "https://cdn.filestackcontent.com/zNuSeOtVQY2qULnMRjvG",
    rating: 4.7,
    location: "Kauai",
    category: "Boat Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/napaliexperience/items/583972/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Shark Dive",
    description: "North Shore Shark Adventures / Whale Encounters / Turtle Encounters - Environmental Attraction in Haleiwa, Hawaii",
    price: 0,
    duration: "2 hours",
    image: "https://www.filepicker.io/api/file/0p7jDDz3QjGkqFn11xlX",
    rating: 4.9,
    location: "Oahu",
    category: "Boat Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/sharktourshawaii/items/7241/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Private Snorkel or Dive Charter",
    description: "Dolphin Divers - Scuba in Waianae, Hawaii",
    price: 0,
    duration: "4 hours",
    image: "https://cdn.filestackcontent.com/5lvgK8NT3eOfpkMkoQ1o",
    rating: 4.8,
    location: "Oahu",
    category: "Boat Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/oahuscubadiving/items/65105/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Oahu Highlights Tour & Sunset Sail",
    description: "DanielsHawaii - Helicopter in Kapolei, Hawaii",
    price: 0,
    duration: "6 hours",
    image: "https://cdn.filestackcontent.com/hGmWHvbwSO2murqDgpP9",
    rating: 4.7,
    location: "Oahu",
    category: "Boat Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/hawaiireisetipps/items/191302/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Venture Ko Olina Wildlife Snorkel",
    description: "Mana Cruises - Catamaran in Kapolei, Hawaii",
    price: 0,
    duration: "2.5 hours",
    image: "https://cdn.filestackcontent.com/oIF66o6XSY6sMIrZWy4Z",
    rating: 4.9,
    location: "Oahu",
    category: "Boat Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/manacruises/items/496438/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Venture Ko Olina Nearshore Fishing",
    description: "Mana Cruises - Catamaran in Kapolei, Hawaii",
    price: 0,
    duration: "3 hours",
    image: "https://cdn.filestackcontent.com/BPdPgNSwQaSu8yBGBnyr",
    rating: 4.6,
    location: "Oahu",
    category: "Boat Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/manacruises/items/496437/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Ko Olina Captain's Sunset + Tasting",
    description: "Mana Cruises - Catamaran in Kapolei, Hawaii",
    price: 0,
    duration: "2 hours",
    image: "https://cdn.filestackcontent.com/7X5d7z4Sm6GKMU5Qp7RH",
    rating: 4.8,
    location: "Oahu",
    category: "Boat Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/manacruises/items/57550/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Waikiki Glass Bottom Boat Cruise",
    description: "Hawaii Glass Bottom Boats LLC - Boat Tour in Honolulu, Hawaii",
    price: 0,
    duration: "1 hour",
    image: "https://cdn.filestackcontent.com/11iZD2cTJugSKQJ2N2Bn",
    rating: 4.7,
    location: "Oahu",
    category: "Boat Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/hawaiiglassbottomboats/items/72457/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  }
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
  "Sailing Charters": "sailing"
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
