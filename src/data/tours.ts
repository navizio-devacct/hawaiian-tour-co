
export interface Tour {
  title: string;
  description: string;
  price: number | null;
  duration: string | null;
  image: string;
  rating: number | null;
  location: string;
  category: string;
  affiliateUrl: string;
  tags?: string[];
}

export const tours: Tour[] = [
  // Spiritual and nature tours
  {
    title: "All Lemuria Journey",
    description: "A sacred Kauai tour connecting spiritual seekers to Lemurian energy portals.",
    price: null,
    duration: null,
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
    price: null,
    duration: null,
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
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/H2osZ5YzTKSoK74SnB6Y",
    rating: 4.7,
    location: "Kauai",
    category: "Nature Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/spiritofkauai/items/441128/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes",
    tags: ["featured"]
  },
  
  // SNORKELING ADVENTURES
  {
    title: "4 hour Premium Afternoon Na Pali Adventure & Snorkel tour",
    description: "Hanalei Charters, Inc. - Snorkel in Hanalei, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/isaYYFiiSTm0UkvRDT4c",
    rating: 4.8,
    location: "Kauai",
    category: "Snorkeling Adventures",
    affiliateUrl: "https://fareharbor.com/embeds/book/hanaleicharters/items/437221/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Na Pali Coast - Group Tour - on the Amelia K from Port Allen",
    description: "Makana Charters / Liko Kauai Cruises - Boat Tour in Eleele, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/60DZSC0SKqu4Z2Sd6dC6",
    rating: 4.7,
    location: "Kauai",
    category: "Snorkeling Adventures",
    affiliateUrl: "https://fareharbor.com/embeds/book/makanacharters/items/392215/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Sharks Cove Self-Guided Snorkel",
    description: "Active Oahu Tours - Kayak in Kailua, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/PkjRjKeTk2HmM4j1pCVh",
    rating: 4.9,
    location: "Oahu",
    category: "Snorkeling Adventures",
    affiliateUrl: "https://fareharbor.com/embeds/book/activeoahutours/items/400783/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Shark Dive (Snorkel with Sharks)",
    description: "One Ocean Diving - Snorkel in Haleiwa, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/XI9TemmCQMmyqwg3DxO2",
    rating: 4.8,
    location: "Oahu",
    category: "Snorkeling Adventures",
    affiliateUrl: "https://fareharbor.com/embeds/book/oneoceandiving/items/2463/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Kaneohe Bay Sandbar Kayak Rental",
    description: "Active Oahu Tours - Kayak in Kailua, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/40KVbQz4RcCtFBGjnO1w",
    rating: 4.7,
    location: "Oahu",
    category: "Snorkeling Adventures",
    affiliateUrl: "https://fareharbor.com/embeds/book/activeoahutours/items/404326/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Ko Olina Four Seasons Snorkel",
    description: "Mana Cruises - Catamaran in Kapolei, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/p4Rhqu1TXaUJIPA72t6g",
    rating: 4.9,
    location: "Oahu",
    category: "Snorkeling Adventures",
    affiliateUrl: "https://fareharbor.com/embeds/book/manacruises/items/447913/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Ko Olina Exclusive Snorkel + Lunch",
    description: "Mana Cruises - Catamaran in Kapolei, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/efZNduDpSEaeyDGMhyBz",
    rating: 4.8,
    location: "Oahu",
    category: "Snorkeling Adventures",
    affiliateUrl: "https://fareharbor.com/embeds/book/manacruises/items/57549/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Waikiki Turtle Snorkel Tour",
    description: "North Shore Beach Bus - Kayak in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/hS12VwoGQ7ChyQs5EMwA",
    rating: 4.9,
    location: "Oahu",
    category: "Snorkeling Adventures",
    affiliateUrl: "https://fareharbor.com/embeds/book/northshorebeachbus/items/514664/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Waikiki Turtle, Snorkel and Lunch",
    description: "Hawaii Nautical - Oahu - Catamaran in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/Az2Of5MtS65J19BgfQ77",
    rating: 4.8,
    location: "Oahu",
    category: "Snorkeling Adventures",
    affiliateUrl: "https://fareharbor.com/embeds/book/hawaiinautical/items/213711/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Snorkel and Sighting Cruise",
    description: "Hawaiian Diving Adventures - Scuba in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/A0ubgwkQT25jgAnsSPog",
    rating: 4.7,
    location: "Oahu",
    category: "Snorkeling Adventures",
    affiliateUrl: "https://fareharbor.com/embeds/book/hawaiiandivingadventures/items/530420/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  
  // Original Snorkeling Adventures
  {
    title: "Molokini Crater Snorkel",
    description: "Explore the crystal clear waters of Molokini Crater and discover vibrant marine life.",
    price: null,
    duration: null,
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
    price: null,
    duration: null,
    image: "https://images.unsplash.com/photo-1530053969600-caed2596d242?q=80",
    rating: 4.8,
    location: "Oahu",
    category: "Snorkeling Adventures",
    affiliateUrl: "https://fareharbor.com/embeds/book/oahutours/items/67890/?ref=hawaiiantourco",
    tags: ["family-friendly"]
  },
  
  // HIKING EXPEDITIONS
  {
    title: "Secret Falls Tour",
    description: "Rainbow Kayak Tours - Kayak in Kapa'a, Hawaii",
    price: null,
    duration: null,
    image: "https://www.filepicker.io/api/file/bay3MYmgSXPhj51o2djw",
    rating: 4.8,
    location: "Kauai",
    category: "Hiking Expeditions",
    affiliateUrl: "https://fareharbor.com/embeds/book/rainbowkayak/items/1890/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Secret Falls Tour",
    description: "Ancient River Kayak - Kayak in Kapa'a, Hawaii",
    price: null,
    duration: null,
    image: "https://www.filepicker.io/api/file/2ZUrKJtJRS4pW0GaJOR0",
    rating: 4.9,
    location: "Kauai",
    category: "Hiking Expeditions",
    affiliateUrl: "https://fareharbor.com/embeds/book/ancientriverkayak/items/13622/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Road to Hana Halfway Tour",
    description: "Switchbacks Hawaii - Hiking in Lawai, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/UuytnhLLSnKx2KrXCSoQ",
    rating: 4.7,
    location: "Maui",
    category: "Hiking Expeditions",
    affiliateUrl: "https://fareharbor.com/embeds/book/switchbackshawaii/items/213399/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Hiking",
    description: "Mahina Hawaii - Surf in Haleiwa, Hawaii",
    price: null,
    duration: null,
    image: "https://www.filepicker.io/api/file/IlQf6ph6Sl6PGUrV9hhq",
    rating: 4.8,
    location: "Oahu",
    category: "Hiking Expeditions",
    affiliateUrl: "https://fareharbor.com/embeds/book/mahinahawaii/items/9793/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Chinaman's Hat Self-Guided Kayak Tour",
    description: "Active Oahu Tours - Kayak in Kailua, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/qegMnSyMTgqDpGrzRIA4",
    rating: 4.7,
    location: "Oahu",
    category: "Hiking Expeditions",
    affiliateUrl: "https://fareharbor.com/embeds/book/activeoahutours/items/115595/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Public Guided Waterfall Hikes of Oahu",
    description: "Horizon Ocean Charters of Hawaii - nan in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/4SiYOi8zSeSmeV2RK8rf",
    rating: 4.9,
    location: "Oahu",
    category: "Hiking Expeditions",
    affiliateUrl: "https://fareharbor.com/embeds/book/horizonoceancharters/items/515059/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Sunrise hike @ Lanikai pillboxes",
    description: "Take a Hike Oahu - Bus Tour in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/AlCMINr6RHaD2Ln3auyQ",
    rating: 4.8,
    location: "Oahu",
    category: "Hiking Expeditions",
    affiliateUrl: "https://fareharbor.com/embeds/book/hawaiianshuttles/items/134911/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "WaterFall Hike & East Side Beach Park",
    description: "Take a Hike Oahu - Bus Tour in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/Mhu9llESMizCFPGKVrvR",
    rating: 4.8,
    location: "Oahu",
    category: "Hiking Expeditions",
    affiliateUrl: "https://fareharbor.com/embeds/book/hawaiianshuttles/items/62875/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Waimea Falls & Valley & North Shore day",
    description: "Take a Hike Oahu - Bus Tour in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/5VdMrAMsQoysSayXYdSP",
    rating: 4.9,
    location: "Oahu",
    category: "Hiking Expeditions",
    affiliateUrl: "https://fareharbor.com/embeds/book/hawaiianshuttles/items/62862/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Jungle Hike",
    description: "Custom Island Tours LLC - Walking Tour in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/nFIkGdcHQtCRwKfDq5HE",
    rating: 4.7,
    location: "Oahu",
    category: "Hiking Expeditions",
    affiliateUrl: "https://fareharbor.com/embeds/book/customislandtours/items/468515/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  
  // Original Hiking Expeditions
  {
    title: "Waimea Canyon Trail",
    description: "Hike through the 'Grand Canyon of the Pacific' with breathtaking views.",
    price: null,
    duration: null,
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
    price: null,
    duration: null,
    image: "https://images.unsplash.com/photo-1578304745506-722718603408?q=80",
    rating: 4.6,
    location: "Oahu",
    category: "Hiking Expeditions",
    affiliateUrl: "https://fareharbor.com/embeds/book/oahuhikes/items/34567/?ref=hawaiiantourco",
    tags: ["beginner-friendly", "sunrise"]
  },
  
  // PHOTOGRAPHY TOURS
  {
    title: "Private Charter",
    description: "Hawaii Glass Bottom Boats LLC - Boat Tour in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/JYAtRrXpTBGqP5QYZXix",
    rating: 4.8,
    location: "Oahu",
    category: "Photography Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/hawaiiglassbottomboats/items/94374/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured", "unforgettable"]
  },
  {
    title: "Diamond Head Crater & East Side Beach Day",
    description: "Take a Hike Oahu - Bus Tour in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/Rck37HzCRjGDYKq1Qa7Q",
    rating: 4.9,
    location: "Oahu",
    category: "Photography Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/hawaiianshuttles/items/62871/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured", "unforgettable"]
  },
  {
    title: "Private Custom Tour",
    description: "Take a Hike Oahu - Bus Tour in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/EUOLgWBS1Ww1WS1igfOw",
    rating: 4.8,
    location: "Oahu",
    category: "Photography Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/hawaiianshuttles/items/62860/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured", "unforgettable"]
  },
  {
    title: "Proposal Photography Session",
    description: "Experience Aloha Co - Food Tour in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/YzoG6BVGS0aEsaqDOmqM",
    rating: 4.9,
    location: "Oahu",
    category: "Photography Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/experiencealoha/items/547236/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "60 Minutes SHARED Helicopter Tour in Honolulu",
    description: "Honolulu Helicopter Tours - Helicopter in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/7k3jtTL5RIG6bG6ewkaF",
    rating: 4.8,
    location: "Oahu",
    category: "Photography Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/honoluluhelicoptertours/items/413592/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "18 Minutes SHARED Helicopter Tour in Honolulu",
    description: "Honolulu Helicopter Tours - Helicopter in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/Trgan0qSQvaE1oaTWjuz",
    rating: 4.7,
    location: "Oahu",
    category: "Photography Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/honoluluhelicoptertours/items/413591/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "30 Minute PRIVATE Helicopter Flight",
    description: "Honolulu Helicopter Tours - Helicopter in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/upSj0CRqs0pnxDw5DoQV",
    rating: 4.9,
    location: "Oahu",
    category: "Photography Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/honoluluhelicoptertours/items/326066/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Private Tour - Pearl Harbor",
    description: "Blue Hawaii Photo Tours - Photography Tour in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/2kqfspBjSZSCX3LRY8Gr",
    rating: 4.8,
    location: "Oahu",
    category: "Photography Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/bluehawaiiphototours/items/112577/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Private Tour - Food & Sightseeing",
    description: "Blue Hawaii Photo Tours - Photography Tour in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/WjQ1R7EAQ4eHen7NTd22",
    rating: 4.7,
    location: "Oahu",
    category: "Photography Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/bluehawaiiphototours/items/112568/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Private Tour - Best of Oahu Sightseeing",
    description: "Blue Hawaii Photo Tours - Photography Tour in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/SbjPooqRC66cGaIrM5Pz",
    rating: 4.9,
    location: "Oahu",
    category: "Photography Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/bluehawaiiphototours/items/112557/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  
  // Original Photography Tours
  {
    title: "Road to Hana Photo Tour",
    description: "Capture Maui's most photogenic spots along the famous Road to Hana.",
    price: null,
    duration: null,
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
    price: null,
    duration: null,
    image: "https://images.unsplash.com/photo-1540390622538-149b9e127c69?q=80",
    rating: 4.8,
    location: "Big Island",
    category: "Photography Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/bigislandphotos/items/56789/?ref=hawaiiantourco",
    tags: ["gear-included", "small-group"]
  },
  
  // SUNSET CRUISES
  {
    title: "Sunset Sail",
    description: "Ko Olina Ocean Adventures - Dolphin in Kapolei, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/PXEVUHyNS8WTVOdb9Qfy",
    rating: 4.9,
    location: "Oahu",
    category: "Sunset Cruises",
    affiliateUrl: "https://fareharbor.com/embeds/book/koolinaoceanadventures/items/58193/?sheet=14284&asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Waikiki Friday Fireworks Cruise",
    description: "E Sea Diver - Parasail in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/p1HfnS5rQCU4rZ4JyhJL",
    rating: 4.8,
    location: "Oahu",
    category: "Sunset Cruises",
    affiliateUrl: "https://fareharbor.com/embeds/book/waikikimarinesports/items/32118/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Exclusive Sunset Sail Charter • Sundown",
    description: "Kamoauli LLC - Boat Tour in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/XoUxlfWiQJCzePE0A1Ov",
    rating: 4.9,
    location: "Oahu",
    category: "Sunset Cruises",
    affiliateUrl: "https://fareharbor.com/embeds/book/kamoauli/items/179690/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "West Oahu Sunset Cruise",
    description: "Hawaii Nautical - Oahu - Catamaran in Waianae, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/sJdV1j3hS9iZQ5csv0k9",
    rating: 4.7,
    location: "Oahu",
    category: "Sunset Cruises",
    affiliateUrl: "https://fareharbor.com/embeds/book/hawaiinautical/items/213716/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Pau Hana Sunset Cruise with the Whales departing Anaeho'omalu Bay",
    description: "Ocean Sports Cruises - Cruise / Large Boat in Kawaihae, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/bVBmLgy3SuCoSv9zA4gW",
    rating: 4.8,
    location: "Hawaii",
    category: "Sunset Cruises",
    affiliateUrl: "https://fareharbor.com/embeds/book/hawaiioceansports/items/487548/?sheet=18803&asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Sunset Views Cruise",
    description: "Captain Chad's Charters - Boat Rental in Waimea, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/NU3GEmqfR5W0aGRTQS98",
    rating: 4.9,
    location: "Hawaii",
    category: "Sunset Cruises",
    affiliateUrl: "https://fareharbor.com/embeds/book/captainchads/items/153715/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Waikoloa Sunset Sail",
    description: "Hawaii Nautical - Kona Maui - Catamaran in Waikoloa, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/RvkWcy9ReieKGcVmckIm",
    rating: 4.8,
    location: "Hawaii",
    category: "Sunset Cruises",
    affiliateUrl: "https://fareharbor.com/embeds/book/hawaiinautical-kona/items/127643/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Kona Sunset Sail",
    description: "Hawaii Nautical - Kona Maui - Catamaran in Kona, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/RvkWcy9ReieKGcVmckIm",
    rating: 4.7,
    location: "Hawaii",
    category: "Sunset Cruises",
    affiliateUrl: "https://fareharbor.com/embeds/book/hawaiinautical-kona/items/263051/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Sunset Cruise & Swim",
    description: "The Adventure Boat - Boat Tour in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/IgJg068ORPKkvbfRIDCe",
    rating: 4.9,
    location: "Oahu",
    category: "Sunset Cruises",
    affiliateUrl: "https://fareharbor.com/embeds/book/theadventureboat/items/291229/?sheet=223090&asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "2 Hour Sunset Cruise",
    description: "North Shore Catamaran Charters - Whale Watch in Haleiwa, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/kf7sNqSbeVlxmIdbzYlQ",
    rating: 4.8,
    location: "Oahu",
    category: "Sunset Cruises",
    affiliateUrl: "https://fareharbor.com/embeds/book/sailingcat/items/5/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  
  // Original Sunset Cruises
  {
    title: "Waikiki Sunset Sail",
    description: "Sail along the Waikiki coastline as the sun sets over the Pacific.",
    price: null,
    duration: null,
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
    price: null,
    duration: null,
    image: "https://images.unsplash.com/photo-1534350752840-1b8d04805f3d?q=80",
    rating: 4.7,
    location: "Maui",
    category: "Sunset Cruises",
    affiliateUrl: "https://fareharbor.com/embeds/book/mauicruises/items/78901/?ref=hawaiiantourco",
    tags: ["dinner-included", "entertainment"]
  },
  
  // BOAT TOURS
  {
    title: "4 hour Premium Morning Na Pali Adventure & Snorkel tour",
    description: "Hanalei Charters, Inc. - Snorkel in Hanalei, Hawaii",
    price: null,
    duration: null,
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
    price: null,
    duration: null,
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
    price: null,
    duration: null,
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
    price: null,
    duration: null,
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
    price: null,
    duration: null,
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
    price: null,
    duration: null,
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
    price: null,
    duration: null,
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
    price: null,
    duration: null,
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
    price: null,
    duration: null,
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
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/11iZD2cTJugSKQJ2N2Bn",
    rating: 4.7,
    location: "Oahu",
    category: "Boat Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/hawaiiglassbottomboats/items/72457/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  
  // Adventure Sports
  {
    title: "North Shore Surfing Lesson",
    description: "Learn to surf on Oahu's legendary North Shore with expert instructors.",
    price: null,
    duration: null,
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
    price: null,
    duration: null,
    image: "https://images.unsplash.com/photo-1622288288168-a496d8656e79?q=80",
    rating: 4.9,
    location: "Kauai",
    category: "Adventure Sports",
    affiliateUrl: "https://fareharbor.com/embeds/book/kauaizipline/items/90123/?ref=hawaiiantourco",
    tags: ["adrenaline", "scenic-views"]
  },
  
  // WHALE WATCHING
  {
    title: "Whale Watching Cruise",
    description: "Prince Kuhio Tours, LLC - Boat Tour in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/68cz2b2aRK2sfmUTsupM",
    rating: 4.8,
    location: "Oahu",
    category: "Whale Watching",
    affiliateUrl: "https://fareharbor.com/embeds/book/hawaiioceanadventures/items/265184/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Whale Watching & Late Breakfast Cruise",
    description: "Prince Kuhio Tours, LLC - Boat Tour in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/fMUksABT4idS2tXYxN3A",
    rating: 4.7,
    location: "Oahu",
    category: "Whale Watching",
    affiliateUrl: "https://fareharbor.com/embeds/book/hawaiioceanadventures/items/265170/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Private Whale Watch Charter",
    description: "Na Pali Experience - Boat Tour in Kekaha Kauai, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/j0GMEGj0RAyeVr76zV57",
    rating: 4.9,
    location: "Kauai",
    category: "Whale Watching",
    affiliateUrl: "https://fareharbor.com/embeds/book/napaliexperience/items/584304/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Eight Hour Public Whale Watch Cruise",
    description: "Horizon Ocean Charters of Hawaii - nan in Haleiwa, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/yByJgFdWQ120iOhEgAq0",
    rating: 4.8,
    location: "Oahu",
    category: "Whale Watching",
    affiliateUrl: "https://fareharbor.com/embeds/book/horizonoceancharters/items/515029/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Four Hour Public Whale Watch Cruise",
    description: "Horizon Ocean Charters of Hawaii - nan in Haleiwa, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/7MKGUEtOTzSypbbuukrN",
    rating: 4.7,
    location: "Oahu",
    category: "Whale Watching",
    affiliateUrl: "https://fareharbor.com/embeds/book/horizonoceancharters/items/514984/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Whale Watch Waikiki",
    description: "Hawaii Nautical - Oahu - Catamaran in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/Vk06ge1gRBi68KtmkDzi",
    rating: 4.9,
    location: "Oahu",
    category: "Whale Watching",
    affiliateUrl: "https://fareharbor.com/embeds/book/hawaiinautical/items/213708/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Private Whale Watching Waikiki Keanuenue\"\"",
    description: "Hawaii Ocean Charters - Boat Tour in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/PvnW5UxQiObndYbxncwe",
    rating: 4.8,
    location: "Oahu",
    category: "Whale Watching",
    affiliateUrl: "https://fareharbor.com/embeds/book/hawaiioceancharters/items/203381/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Whale Watch Cruise",
    description: "Ocean Therapy Charters - Boat Tour in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/L9eIvvxcSIuA2JhtpILa",
    rating: 4.7,
    location: "Oahu",
    category: "Whale Watching",
    affiliateUrl: "https://fareharbor.com/embeds/book/oceantherapycharters/items/503070/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Private Whale-Watching Tour",
    description: "Hawaii Apex Charters LLC - Boat Tour in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/JeLjoGhThq4AkdsVdjtP",
    rating: 4.8,
    location: "Oahu",
    category: "Whale Watching",
    affiliateUrl: "https://fareharbor.com/embeds/book/hawaiiapexcharters/items/565893/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Exquisite National Humpback Whale Sanctuary Tour",
    description: "Waikiki Dive Center - Scuba in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/0LiaAXEFRnyjVAN0Dn73",
    rating: 4.9,
    location: "Oahu",
    category: "Whale Watching",
    affiliateUrl: "https://fareharbor.com/embeds/book/waikikidivecenter/items/340314/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  
  // KAYAKING ADVENTURES
  {
    title: "Secret Falls Tour with Snacks and Drinks",
    description: "Kayak Adventures - Kayak in Kapaa, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/jQeiTsqiR3KgSIY8aMmh",
    rating: 4.8,
    location: "Kauai",
    category: "Kayaking Adventures",
    affiliateUrl: "https://fareharbor.com/embeds/book/kauaikayaktour/items/13615/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Secret Falls Kayak & Hike Tour",
    description: "Alii Kayaks - Kayak in Kapaa, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/T6EaisFITROwFVzbjErO",
    rating: 4.9,
    location: "Kauai",
    category: "Kayaking Adventures",
    affiliateUrl: "https://fareharbor.com/embeds/book/aliikayaks/items/109242/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Stand Up Paddle / Kayak",
    description: "Mahina Hawaii - Surf in Haleiwa, Hawaii",
    price: null,
    duration: null,
    image: "https://www.filepicker.io/api/file/pkt1czsbTPGQhweGObZv",
    rating: 4.8,
    location: "Oahu",
    category: "Kayaking Adventures",
    affiliateUrl: "https://fareharbor.com/embeds/book/mahinahawaii/items/9791/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Rainforest Self-Guided Kayak Tour",
    description: "Active Oahu Tours - Kayak in Kailua, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/wztq7axqSMqji0dpd245",
    rating: 4.7,
    location: "Oahu",
    category: "Kayaking Adventures",
    affiliateUrl: "https://fareharbor.com/embeds/book/activeoahutours/items/8522/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Chinaman's Hat Kayak Rental",
    description: "Active Oahu Tours - Kayak in Kailua, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/p6ScOjEXQFW4cktGZnb2",
    rating: 4.8,
    location: "Oahu",
    category: "Kayaking Adventures",
    affiliateUrl: "https://fareharbor.com/embeds/book/activeoahutours/items/402403/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Kaneohe Bay Sandbar Self-Guided Kayak Experience",
    description: "Active Oahu Tours - Kayak in Kailua, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/dOYFNzqTQuxivhOgkg6A",
    rating: 4.9,
    location: "Oahu",
    category: "Kayaking Adventures",
    affiliateUrl: "https://fareharbor.com/embeds/book/activeoahutours/items/400755/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Tour of North Shore & Waimea Waterfall and Pali Lookout",
    description: "North Shore Beach Bus - Kayak in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/Mhq4IhjQI2wc2B4sd8ew",
    rating: 4.7,
    location: "Oahu",
    category: "Kayaking Adventures",
    affiliateUrl: "https://fareharbor.com/embeds/book/northshorebeachbus/items/18035/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Mokulua Islands Guided Kayak Tour, Kailua's Twin Islands",
    description: "Active Oahu Tours - Kayak in Kailua, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/Ovx7JvbVQiyA0g60YmMz",
    rating: 4.8,
    location: "Oahu",
    category: "Kayaking Adventures",
    affiliateUrl: "https://fareharbor.com/embeds/book/activeoahutours/items/521252/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Popoia Island & Kailua Bay Guided Kayak Tour",
    description: "Active Oahu Tours - Kayak in Kailua, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/RmlYUbdSeWcvXxBnkPUq",
    rating: 4.9,
    location: "Oahu",
    category: "Kayaking Adventures",
    affiliateUrl: "https://fareharbor.com/embeds/book/activeoahutours/items/491549/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Mokulua Islands Self-Guided Kayak Adventure",
    description: "Active Oahu Tours - Kayak in Kailua, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/r5ddxdlvT9PICzlBvI8d",
    rating: 4.8,
    location: "Oahu",
    category: "Kayaking Adventures",
    affiliateUrl: "https://fareharbor.com/embeds/book/activeoahutours/items/491545/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  
  // STAND-UP PADDLEBOARDING
  {
    title: "SUP Lessons",
    description: "Da Life Outdoors | Kauai Beach Boys - Surf in Lihue, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/21skuFYiRaGGrOfRlpw5",
    rating: 4.8,
    location: "Kauai",
    category: "Stand-Up Paddleboarding",
    affiliateUrl: "https://fareharbor.com/embeds/book/kauaibeachboys/items/140354/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "SUP Lessons",
    description: "Surf N Sea - Surf in Haleiwa, Hawaii",
    price: null,
    duration: null,
    image: "https://www.filepicker.io/api/file/hfqIGqF9QeusboCfU8h9",
    rating: 4.7,
    location: "Oahu",
    category: "Stand-Up Paddleboarding",
    affiliateUrl: "https://fareharbor.com/embeds/book/surfnsea/items/49/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Paddle Rentals",
    description: "Blue Planet Adventure Company - SUP in Haleiwa, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/p0ffz8JeSxqi8LvVF5uX",
    rating: 4.9,
    location: "Oahu",
    category: "Stand-Up Paddleboarding",
    affiliateUrl: "https://fareharbor.com/embeds/book/blueplanetadventure/items/326734/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Haleiwa River Paddle Tour",
    description: "Blue Planet Adventure Company - SUP in Haleiwa, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/UXa6s5ZRMmSuTYZ3gqKt",
    rating: 4.8,
    location: "Oahu",
    category: "Stand-Up Paddleboarding",
    affiliateUrl: "https://fareharbor.com/embeds/book/blueplanetadventure/items/326733/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Rentals",
    description: "Kailua Beach Adventures - Kayak in Kailua, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/vUYoLmCpSQuC9ONZIvCI",
    rating: 4.7,
    location: "Oahu",
    category: "Stand-Up Paddleboarding",
    affiliateUrl: "https://fareharbor.com/embeds/book/kailuasailboards/items/2003/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Rentals at Ala Moana Beach",
    description: "Surf HNL - Surf in Ewa Beach, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/cQCO96TsQoSENO0t8dbM",
    rating: 4.8,
    location: "Oahu",
    category: "Stand-Up Paddleboarding",
    affiliateUrl: "https://fareharbor.com/embeds/book/surfhnl/items/493/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "SUP Pokai Bay",
    description: "Surf HNL - Surf in Ewa Beach, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/OCLGTHRlQ6yjvv8u1k1o",
    rating: 4.9,
    location: "Oahu",
    category: "Stand-Up Paddleboarding",
    affiliateUrl: "https://fareharbor.com/embeds/book/surfhnl/items/477/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Light up the Night",
    description: "Yoga Floats - SUP in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/glqtN67RTRLDP05CuDcA",
    rating: 4.7,
    location: "Oahu",
    category: "Stand-Up Paddleboarding",
    affiliateUrl: "https://fareharbor.com/embeds/book/yogafloats/items/60369/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Intro to Paddling",
    description: "Yoga Floats - SUP in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/MGgcNxoAQJyqqqgRIksQ",
    rating: 4.8,
    location: "Oahu",
    category: "Stand-Up Paddleboarding",
    affiliateUrl: "https://fareharbor.com/embeds/book/yogafloats/items/60368/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Surfboard & Paddleboard Rentals",
    description: "Gone Surfing Hawaii - Surf in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/BHBv6bQTASalV3SRe8gC",
    rating: 4.9,
    location: "Oahu",
    category: "Stand-Up Paddleboarding",
    affiliateUrl: "https://fareharbor.com/embeds/book/gonesurfinghawaii/items/323248/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  
  // BUS TOURS
  {
    title: "North Shore Tour",
    description: "The Surf Bus - Bus Tour in Haleiwa, Hawaii",
    price: null,
    duration: null,
    image: "https://www.filepicker.io/api/file/IQmtWFYWQdaQSS35h2TL",
    rating: 4.8,
    location: "Oahu",
    category: "Bus Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/thesurfbus/items/24134/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Full Day Custom Adventure (8 hours)",
    description: "Take a Hike Oahu - Bus Tour in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/tbnt3W0JRj6YtYHDMQFU",
    rating: 4.7,
    location: "Oahu",
    category: "Bus Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/hawaiianshuttles/items/88844/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Island and You",
    description: "And You Creations - Dolphin in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/jcWDPlYYRhKPFINM2emL",
    rating: 4.9,
    location: "Oahu",
    category: "Bus Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/andyoucreations/items/141757/?sheet=28138&asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "KA MOANA LUAU - CELEBRITY",
    description: "If Can, Can. LLC - Oahu Best Tours - Bus Tour in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/GWQ0nGwqTSAtpEbIMxWa",
    rating: 4.8,
    location: "Oahu",
    category: "Bus Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/ifcancan/items/467552/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "KA MOANA LUAU - CLASSIC",
    description: "If Can, Can. LLC - Oahu Best Tours - Bus Tour in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/sW4Uav8CTAqJCYn9KUs1",
    rating: 4.7,
    location: "Oahu",
    category: "Bus Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/ifcancan/items/467550/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "KA MOANA LUAU - SPLASH",
    description: "If Can, Can. LLC - Oahu Best Tours - Bus Tour in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/SytQFtPTlCZEVXzbKwo8",
    rating: 4.8,
    location: "Oahu",
    category: "Bus Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/ifcancan/items/466590/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Circle Island Tour",
    description: "Aloha Shaka Tours - nan in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/2pVs0JhxSXmox6mo2f4B",
    rating: 4.9,
    location: "Hawaii",
    category: "Bus Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/alohashakatours/items/558230/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Maui Birding Group Tour",
    description: "Unique Maui Tours - Bus Tour in Kihei, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/IIRINsXR1OolE16fF3Ik",
    rating: 4.8,
    location: "Maui",
    category: "Bus Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/uniquehawaiiexperience/items/451548/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Unique Road to Hana",
    description: "Unique Maui Tours - Bus Tour in Kihei, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/EFmmqhBzTcaxd6kmwOtZ",
    rating: 4.7,
    location: "Maui",
    category: "Bus Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/uniquehawaiiexperience/items/53670/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Shaxi Sunset Tour",
    description: "Shaxi Hawaii - Bus Tour in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/yCyATzgNRm2JuNWQ02JQ",
    rating: 4.8,
    location: "Oahu",
    category: "Bus Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/shaxihawaii/items/175896/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  
  // WALKING TOURS
  {
    title: "Toa Luau Transportation",
    description: "DanielsHawaii - Helicopter in Kapolei, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/lFy2l8rRVqvYXVmXe2VY",
    rating: 4.7,
    location: "Oahu",
    category: "Walking Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/hawaiireisetipps/items/447557/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "The Hunt - Downtown",
    description: "Scaventour - Walking Tour in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/qlWqNCBhQmqvuMdB8Qdl",
    rating: 4.8,
    location: "Oahu",
    category: "Walking Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/scaventour/items/183792/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "ホノルルチャイナタウングルメツアー",
    description: "Hawaii Free Tours - Walking Tour in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/ZoIHq0iPSJStulYY4fQA",
    rating: 4.9,
    location: "Oahu",
    category: "Walking Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/hawaiifreetours/items/503156/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "E-Z PASS DIMOND HEAD CREATOR",
    description: "Take a Hike Oahu - Bus Tour in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/PD2DKfTORam5LMGSzJW7",
    rating: 4.8,
    location: "Oahu",
    category: "Walking Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/hawaiianshuttles/items/100472/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Sea / Eat & See the North Shore",
    description: "Take a Hike Oahu - Bus Tour in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/V629P7YJS5az47uQ9pqf",
    rating: 4.7,
    location: "Oahu",
    category: "Walking Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/hawaiianshuttles/items/62868/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Cryptic Murder - Waikiki",
    description: "Scaventour - Walking Tour in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/WDeRoDBdSye246DFkcSW",
    rating: 4.8,
    location: "Oahu",
    category: "Walking Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/scaventour/items/126286/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Tourist Trap - Waikiki",
    description: "Scaventour - Walking Tour in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/dglU0PpYRjqdTpRuELrg",
    rating: 4.9,
    location: "Oahu",
    category: "Walking Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/scaventour/items/47622/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Diamond Head Electric Bike to Hike",
    description: "Bike Tour Hawaii - Bike Tour in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/hUvl8KaIQOuvpPV7kQjy",
    rating: 4.8,
    location: "Oahu",
    category: "Walking Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/biketourhawaii/items/480009/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Haumea's Quest - Video Scavenger Hunt",
    description: "Scaventour - Walking Tour in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/TECYs0T0eQTAydsHo58g",
    rating: 4.7,
    location: "Oahu",
    category: "Walking Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/scaventour/items/550296/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Lost Key - Waikiki",
    description: "Scaventour - Walking Tour in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/hf1dmd6QTGu4P21G4s3i",
    rating: 4.8,
    location: "Oahu",
    category: "Walking Tours",
    affiliateUrl: "https://fareharbor.com/embeds/book/scaventour/items/433126/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  
  // SAILING CHARTERS
  {
    title: "Panorama Sail",
    description: "Hawaii Nautical - Oahu - Catamaran in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/PVM7NXvSaXIXVtayMTIQ",
    rating: 4.9,
    location: "Oahu",
    category: "Sailing Charters",
    affiliateUrl: "https://fareharbor.com/embeds/book/hawaiinautical/items/215633/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Friday fireworks cruise",
    description: "Moana Sailing Company - Catamaran in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/D23bBwMIRES9Jbj9qtVM",
    rating: 4.8,
    location: "Oahu",
    category: "Sailing Charters",
    affiliateUrl: "https://fareharbor.com/embeds/book/moanawaikiki/items/249219/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Private 5Hrs Island Tour with 2Hrs Sail and Snorkel with Turtles",
    description: "Custom Island Tours LLC - Walking Tour in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/RfQ85hhBSIOZxQM4veh8",
    rating: 4.7,
    location: "Oahu",
    category: "Sailing Charters",
    affiliateUrl: "https://fareharbor.com/embeds/book/customislandtours/items/485653/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Private Charter",
    description: "Catamaran Kepoikai II - Catamaran in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/ZrjavVdqR1eAWciQeMSZ",
    rating: 4.8,
    location: "Oahu",
    category: "Sailing Charters",
    affiliateUrl: "https://fareharbor.com/embeds/book/kepoikai/items/605996/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Waikiki Day & Sunset Sail For Couples",
    description: "Waikiki Sailing Tours - Sailing in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/I4FWnUHGTI6r7pmNy9zs",
    rating: 4.9,
    location: "Oahu",
    category: "Sailing Charters",
    affiliateUrl: "https://fareharbor.com/embeds/book/waikikisailingtours/items/547218/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Sunset Tour",
    description: "Waikiki Sailing Tours - Sailing in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/r5hNgF4oRYSI6YoU5vVL",
    rating: 4.8,
    location: "Oahu",
    category: "Sailing Charters",
    affiliateUrl: "https://fareharbor.com/embeds/book/waikikisailingtours/items/470466/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Diamond Head Sail & Swim",
    description: "Waikiki Sailing Tours - Sailing in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/tfEpzRW4SCqO5UqeNBdt",
    rating: 4.7,
    location: "Oahu",
    category: "Sailing Charters",
    affiliateUrl: "https://fareharbor.com/embeds/book/waikikisailingtours/items/470464/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Sunset Whale Watch",
    description: "North Shore Catamaran Charters - Whale Watch in Haleiwa, Hawaii",
    price: null,
    duration: null,
    image: "https://www.filepicker.io/api/file/vxGQjXCmRoSjFOgE600I",
    rating: 4.8,
    location: "Oahu",
    category: "Sailing Charters",
    affiliateUrl: "https://fareharbor.com/embeds/book/sailingcat/items/2803/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Exclusive Afternoon Sail Charter",
    description: "Kamoauli LLC - Boat Tour in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/rFo8K1fDR1ONq88q2pxj",
    rating: 4.9,
    location: "Oahu",
    category: "Sailing Charters",
    affiliateUrl: "https://fareharbor.com/embeds/book/kamoauli/items/179688/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
    tags: ["featured"]
  },
  {
    title: "Exclusive Morning Sail Charter",
    description: "Kamoauli LLC - Boat Tour in Honolulu, Hawaii",
    price: null,
    duration: null,
    image: "https://cdn.filestackcontent.com/98tzsJETPGRU7qzneOyw",
    rating: 4.8,
    location: "Oahu",
    category: "Sailing Charters",
    affiliateUrl: "https://fareharbor.com/embeds/book/kamoauli/items/179687/?asn=fhdn&asn-ref=hawaiiantourco&full-items=yes&flow=no&branding=yes&bookable-only=yes&ref=hawaiiantourco&back=BACKLINK",
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
