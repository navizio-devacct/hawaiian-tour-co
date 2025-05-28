
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  author: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ultimate-guide-island-hopping",
    title: "Ultimate Guide to Island Hopping in Hawaii",
    excerpt: "Discover the perfect itinerary for exploring all four major Hawaiian islands, from Oahu's vibrant culture to Kauai's natural wonders.",
    content: `
      <h2>Planning Your Island Hopping Adventure</h2>
      <p>Island hopping in Hawaii is one of the most rewarding travel experiences you can have. Each of the four major islands - Oahu, Maui, Big Island, and Kauai - offers unique attractions, cultures, and natural wonders that make them worth visiting.</p>
      
      <h3>Best Time to Visit</h3>
      <p>The best time for island hopping is during the shoulder seasons of April-May and September-November when the weather is pleasant and crowds are smaller.</p>
      
      <h3>Recommended Itinerary</h3>
      <ul>
        <li><strong>Days 1-3: Oahu</strong> - Start with the most populated island to ease into island life</li>
        <li><strong>Days 4-6: Maui</strong> - Experience the Road to Hana and Haleakala National Park</li>
        <li><strong>Days 7-9: Big Island</strong> - Explore active volcanoes and diverse landscapes</li>
        <li><strong>Days 10-12: Kauai</strong> - End with the most pristine and natural island</li>
      </ul>
      
      <h3>Transportation Between Islands</h3>
      <p>Inter-island flights are the most common way to travel between islands, with Hawaiian Airlines, Southwest, and Alaska Airlines offering regular service.</p>
    `,
    date: "March 20, 2024",
    readTime: "8 min read",
    category: "Travel Guides",
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?q=80&w=2070",
    author: "Sarah Mitchell",
    featured: true
  },
  {
    slug: "best-snorkeling-spots-maui",
    title: "Best Snorkeling Spots in Maui",
    excerpt: "Explore the underwater paradise of Maui with our guide to the most spectacular snorkeling locations.",
    content: `
      <h2>Maui's Underwater Paradise</h2>
      <p>Maui offers some of the world's best snorkeling experiences, with crystal-clear waters, vibrant coral reefs, and diverse marine life. Here are the top spots every snorkeling enthusiast should visit.</p>
      
      <h3>1. Molokini Crater</h3>
      <p>This partially submerged volcanic crater offers exceptional visibility and is home to over 250 species of fish. The protected waters make it perfect for beginners and experienced snorkelers alike.</p>
      
      <h3>2. Turtle Town (Nahuna)</h3>
      <p>Located along Maui's south shore, this area is famous for its Hawaiian green sea turtles. The underwater lava formations create unique swim-throughs and caves.</p>
      
      <h3>3. Honolua Bay</h3>
      <p>A marine life conservation district on Maui's north shore, Honolua Bay offers pristine coral reefs and calm waters during summer months.</p>
      
      <h3>4. Black Rock (Kaanapali Beach)</h3>
      <p>Perfect for shore snorkeling, this spot features a lava rock promontory teeming with tropical fish and easy beach access.</p>
      
      <h3>Best Time to Snorkel</h3>
      <p>Early morning hours typically offer the best visibility and calmest conditions. Always check local weather and ocean conditions before heading out.</p>
    `,
    date: "March 18, 2024",
    readTime: "5 min read",
    category: "Activities",
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80",
    author: "Mike Johnson"
  },
  {
    slug: "hawaiian-cultural-experiences",
    title: "Hawaiian Cultural Experiences You Can't Miss",
    excerpt: "Immerse yourself in authentic Hawaiian culture through traditional ceremonies, music, and local customs.",
    content: `
      <h2>Discovering Authentic Hawaiian Culture</h2>
      <p>Hawaii's rich cultural heritage offers visitors countless opportunities to connect with the islands' deep traditions and history. These authentic experiences will give you a deeper appreciation for Hawaiian culture.</p>
      
      <h3>Traditional Luau Experiences</h3>
      <p>Beyond tourist luaus, seek out authentic celebrations at local venues. The best luaus feature traditional imu (underground oven) cooking, authentic Hawaiian music, and cultural storytelling.</p>
      
      <h3>Hula and Music</h3>
      <p>Attend a traditional hula performance or take a hula lesson. Many cultural centers offer classes where you can learn about the meaning behind the movements and the stories they tell.</p>
      
      <h3>Lei Making Workshops</h3>
      <p>Learn the ancient art of lei making using traditional flowers and materials. Each lei style has cultural significance and learning the proper techniques connects you to generations of tradition.</p>
      
      <h3>Visit Heiau (Sacred Sites)</h3>
      <p>Explore ancient Hawaiian temples and sacred sites with respect and understanding. Many offer guided tours that explain their historical and spiritual significance.</p>
      
      <h3>Local Markets and Festivals</h3>
      <p>Visit farmers markets and cultural festivals to experience contemporary Hawaiian culture, taste local foods, and meet island residents.</p>
      
      <h3>Cultural Etiquette</h3>
      <p>Remember to approach sacred sites with respect, ask permission before taking photos of people, and be mindful of the ocean and land as sacred to Hawaiian culture.</p>
    `,
    date: "March 15, 2024",
    readTime: "6 min read",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80",
    author: "Leilani Torres"
  },
  {
    slug: "planning-perfect-hawaii-vacation",
    title: "Planning Your Perfect Hawaii Vacation",
    excerpt: "From choosing the right island to packing essentials, here's everything you need to know for your trip.",
    content: `
      <h2>Your Complete Hawaii Planning Guide</h2>
      <p>Planning a trip to Hawaii can feel overwhelming with so many islands, activities, and options to choose from. This comprehensive guide will help you plan the perfect Hawaiian vacation tailored to your interests and budget.</p>
      
      <h3>Choosing Your Island</h3>
      <p><strong>Oahu:</strong> Best for first-time visitors, vibrant nightlife, and historical sites like Pearl Harbor.</p>
      <p><strong>Maui:</strong> Perfect for romantic getaways, scenic drives, and luxury resorts.</p>
      <p><strong>Big Island:</strong> Ideal for adventure seekers, volcano enthusiasts, and diverse landscapes.</p>
      <p><strong>Kauai:</strong> Great for nature lovers, hiking enthusiasts, and those seeking tranquility.</p>
      
      <h3>When to Visit</h3>
      <p>Hawaii has great weather year-round, but consider these factors:</p>
      <ul>
        <li><strong>Dry Season (April-October):</strong> Less rain, more crowds, higher prices</li>
        <li><strong>Wet Season (November-March):</strong> More rain, fewer crowds, better deals</li>
        <li><strong>Whale Season (December-May):</strong> Best time for whale watching</li>
      </ul>
      
      <h3>Packing Essentials</h3>
      <ul>
        <li>Reef-safe sunscreen (required by law)</li>
        <li>Lightweight, breathable clothing</li>
        <li>Sturdy hiking shoes</li>
        <li>Snorkeling gear (optional - can rent)</li>
        <li>Rain jacket or poncho</li>
        <li>Insect repellent</li>
      </ul>
      
      <h3>Budget Planning</h3>
      <p>Hawaii can be expensive, but these tips can help you save:</p>
      <ul>
        <li>Book accommodations and flights well in advance</li>
        <li>Consider vacation rentals with kitchens</li>
        <li>Mix expensive resort dining with local food trucks</li>
        <li>Take advantage of free activities like beaches and hiking</li>
      </ul>
    `,
    date: "March 12, 2024",
    readTime: "7 min read",
    category: "Planning",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80",
    author: "David Chen"
  },
  {
    slug: "hidden-waterfalls-big-island",
    title: "Hidden Waterfalls of the Big Island",
    excerpt: "Venture off the beaten path to discover some of Hawaii's most secluded and breathtaking waterfalls.",
    content: `
      <h2>Discovering Big Island's Secret Waterfalls</h2>
      <p>The Big Island of Hawaii is home to some of the most spectacular and secluded waterfalls in the world. These hidden gems require a bit of adventure to reach, but the reward is worth every step.</p>
      
      <h3>Hi'ilawe Falls</h3>
      <p>Located in Waipi'o Valley, this 1,450-foot waterfall is one of Hawaii's tallest. The hike down into the valley is challenging but offers incredible views and a glimpse into traditional Hawaiian life.</p>
      
      <h3>Umauma Falls</h3>
      <p>A three-tiered waterfall near Hakalau, Umauma Falls features natural swimming pools and is perfect for a refreshing dip. The short hike through tropical vegetation is family-friendly.</p>
      
      <h3>Pe'epe'e Falls (Boiling Pots)</h3>
      <p>Near Hilo, these unique circular pools connected by small waterfalls create a otherworldly landscape. The pools get their name from the bubbling effect created by underwater lava tubes.</p>
      
      <h3>Waiale Falls</h3>
      <p>Hidden in the Kohala Mountains, this 1,080-foot waterfall requires a moderate hike but offers solitude and pristine beauty. Best visited during the rainy season when water flow is strongest.</p>
      
      <h3>Safety Tips for Waterfall Hiking</h3>
      <ul>
        <li>Always check weather conditions before hiking</li>
        <li>Wear appropriate footwear with good grip</li>
        <li>Be cautious of slippery rocks near waterfalls</li>
        <li>Respect private property and sacred sites</li>
        <li>Bring plenty of water and snacks</li>
        <li>Let someone know your hiking plans</li>
      </ul>
      
      <h3>Best Time to Visit</h3>
      <p>Waterfalls are most impressive during and after rainy periods. Winter months typically offer the most dramatic water flow, while summer may have reduced flow but easier hiking conditions.</p>
    `,
    date: "March 10, 2024",
    readTime: "4 min read",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80",
    author: "Amanda Rodriguez"
  },
  {
    slug: "best-local-restaurants-honolulu",
    title: "Best Local Restaurants in Honolulu",
    excerpt: "Taste the authentic flavors of Hawaii at these local favorites recommended by island residents.",
    content: `
      <h2>Honolulu's Hidden Culinary Gems</h2>
      <p>Skip the tourist traps and eat where the locals eat. These Honolulu restaurants offer authentic Hawaiian flavors and represent the true spirit of island dining.</p>
      
      <h3>Helena's Hawaiian Food</h3>
      <p>A James Beard Award winner, Helena's has been serving traditional Hawaiian food since 1946. Don't miss their pipi kaula (Hawaiian beef jerky) and poi.</p>
      
      <h3>Leonard's Bakery</h3>
      <p>Home of the original malasada, Leonard's has been a local institution since 1952. Their warm, sugar-coated Portuguese donuts are a must-try treat.</p>
      
      <h3>Ono Seafood</h3>
      <p>This unassuming poke shop serves some of the freshest and most delicious poke on the island. The ahi poke is particularly outstanding.</p>
      
      <h3>Highway Inn</h3>
      <p>Family-owned since 1947, Highway Inn offers authentic plate lunches and traditional Hawaiian dishes. Their lau lau and kalua pig are local favorites.</p>
      
      <h3>Rainbow Drive-In</h3>
      <p>A beloved local chain known for their plate lunches and mix plates. Obama's childhood favorite, this spot represents true local comfort food.</p>
      
      <h3>Marukame Udon</h3>
      <p>Fresh, handmade udon noodles served cafeteria-style. Watch the noodle-making process while you wait in line for affordable, delicious Japanese comfort food.</p>
      
      <h3>Local Dining Etiquette</h3>
      <ul>
        <li>Many local spots are cash-only</li>
        <li>Portions are typically generous - come hungry</li>
        <li>Don't be surprised by long lines at popular spots</li>
        <li>Mixed plates let you try multiple dishes</li>
        <li>Respect the casual, laid-back atmosphere</li>
      </ul>
      
      <h3>What to Order</h3>
      <p>Try local specialties like poke, plate lunches, shave ice, malasadas, and traditional Hawaiian dishes like poi, lau lau, and kalua pig.</p>
    `,
    date: "March 8, 2024",
    readTime: "5 min read",
    category: "Food & Dining",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80",
    author: "Chef Marcus Kim"
  },
  {
    slug: "sunrise-haleakala-complete-guide",
    title: "Sunrise at Haleakala: A Complete Guide",
    excerpt: "Everything you need to know about witnessing one of the world's most spectacular sunrises.",
    content: `
      <h2>Witnessing Paradise at 10,000 Feet</h2>
      <p>Watching the sunrise from the summit of Haleakala volcano is an unforgettable experience that draws visitors from around the world. Here's everything you need to know to make the most of this bucket-list adventure.</p>
      
      <h3>Planning Your Visit</h3>
      <p>Reservations are required for sunrise viewing and must be made online at recreation.gov. Reservations can be made up to 60 days in advance and cost $1.50 per vehicle in addition to park entrance fees.</p>
      
      <h3>What Time to Arrive</h3>
      <p>Plan to arrive at the summit at least 30-45 minutes before sunrise. This gives you time to find parking, walk to a good viewing spot, and adjust to the altitude and cold temperature.</p>
      
      <h3>The Drive Up</h3>
      <p>The drive from sea level to the 10,023-foot summit takes about 2 hours from most Maui locations. The road is well-maintained but has numerous switchbacks and steep grades.</p>
      
      <h3>What to Bring</h3>
      <ul>
        <li><strong>Warm clothing:</strong> Temperatures can be 30-40°F colder than sea level</li>
        <li><strong>Blankets:</strong> Essential for staying warm while waiting</li>
        <li><strong>Flashlight:</strong> You'll be hiking in the dark</li>
        <li><strong>Camera:</strong> The views are incredible</li>
        <li><strong>Snacks and water:</strong> No food available at the summit</li>
        <li><strong>Cash for park entry:</strong> $30 per vehicle</li>
      </ul>
      
      <h3>Best Viewing Spots</h3>
      <p>The visitor center area offers the most accessible viewing, but walking a short distance along the trail can provide less crowded vantage points with equally spectacular views.</p>
      
      <h3>After Sunrise</h3>
      <p>Don't rush to leave! Explore the summit area, visit the visitor center, and consider hiking part of the Sliding Sands Trail. The views during daylight are just as impressive.</p>
      
      <h3>Alternative Options</h3>
      <p>If you can't get sunrise reservations, consider sunset viewing (no reservations required) or visiting during the day to explore the unique lunar-like landscape.</p>
      
      <h3>Safety Tips</h3>
      <ul>
        <li>Drive slowly and use lower gears going down</li>
        <li>Stay hydrated at high altitude</li>
        <li>Be careful walking in the dark</li>
        <li>Check weather conditions before going</li>
      </ul>
    `,
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80",
    author: "Jennifer Walsh"
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getFeaturedPost = (): BlogPost | undefined => {
  return blogPosts.find(post => post.featured);
};

export const getRecentPosts = (limit: number = 6): BlogPost[] => {
  return blogPosts.filter(post => !post.featured).slice(0, limit);
};
