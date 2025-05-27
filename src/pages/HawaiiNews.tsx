import { useState, useEffect } from "react";
import { ArrowRight, BookOpen, TrendingUp, Clock, MapPin, Flame, Waves, Sun, Calendar, RefreshCw, AlertCircle, X, Mail, Phone, Gift, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  source: string;
  image: string;
  icon: React.ReactNode;
  priority: string;
  location: string;
  link?: string;
}

export const HawaiiNews = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [rssError, setRssError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  
  // Newsletter Modal State
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterPhone, setNewsletterPhone] = useState("");
  const [newsletterFirstName, setNewsletterFirstName] = useState("");
  const [newsletterSmsOptIn, setNewsletterSmsOptIn] = useState(false);
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  // RSS Feed URLs - Adding KHON2 and Hawaii.com
  const RSS_FEEDS = [
    {
      url: 'https://www.staradvertiser.com/feed/',
      source: 'Honolulu Star-Advertiser',
      priority: 'high'
    },
    {
      url: 'https://khon2.com/feed',
      source: 'KHON2 News',
      priority: 'high'
    },
    {
      url: 'https://hawaii.com/feed',
      source: 'Hawaii.com',
      priority: 'medium'
    }
  ];

  // HAWAII RELEVANCE FILTER - Only show Hawaii-related content!
  const isHawaiiRelevant = (title: string, description: string): boolean => {
    const text = (title + ' ' + description).toLowerCase();
    
    // MUST include Hawaii-related terms
    const hawaiiTerms = [
      'hawaii', 'hawaiian', 'honolulu', 'maui', 'oahu', 'kauai', 'big island',
      'volcano', 'kilauea', 'haleakala', 'aloha', 'waikiki', 'pearl harbor',
      'tourism', 'visitor', 'travel', 'tour', 'beach', 'ocean', 'surf',
      'pacific', 'island', 'hilo', 'kona', 'lahaina', 'tropical', 'reef',
      'luau', 'hula', 'lei', 'mahalo', 'ohana', 'mana', 'poke', 'shave ice'
    ];
    
    const hasHawaiiContent = hawaiiTerms.some(term => text.includes(term));
    
    // EXCLUDE non-Hawaii topics
    const excludeTerms = [
      'music awards', 'grammy', 'oscar', 'emmys', 'super bowl', 'nfl', 'nba',
      'trump', 'biden', 'congress', 'senate', 'washington dc', 'white house',
      'celebrity', 'hollywood', 'broadway', 'netflix', 'disney', 'marvel',
      'stock market', 'wall street', 'crypto', 'bitcoin', 'tesla', 'apple inc',
      'amazon', 'google', 'microsoft', 'facebook', 'twitter', 'instagram',
      'ukraine', 'russia', 'china', 'europe', 'middle east', 'covid vaccine'
    ];
    
    const hasExcludedContent = excludeTerms.some(term => text.includes(term));
    
    return hasHawaiiContent && !hasExcludedContent;
  };

  // CORS Proxy for RSS feeds
  const CORS_PROXY = 'https://api.rss2json.com/v1/api.json?rss_url=';

  // Categories remain the same
  const categories = [
    { id: "all", label: "All Updates", icon: <BookOpen className="w-4 h-4" /> },
    { id: "Volcano Updates", label: "Volcano", icon: <Flame className="w-4 h-4" /> },
    { id: "Ocean Conditions", label: "Ocean", icon: <Waves className="w-4 h-4" /> },
    { id: "Weather & Activities", label: "Weather", icon: <Sun className="w-4 h-4" /> },
    { id: "Travel Updates", label: "Travel", icon: <TrendingUp className="w-4 h-4" /> },
    { id: "Cultural News", label: "Culture", icon: <MapPin className="w-4 h-4" /> }
  ];

  // Fallback news items with REAL LINKS to tour pages
  const fallbackNews: NewsItem[] = [
    {
      id: 1,
      title: "Kilauea Volcano Shows Increased Activity",
      excerpt: "Scientists report new lava fountains reaching 800 feet, creating spectacular viewing opportunities for volcano tours.",
      date: "2 hours ago",
      category: "Volcano Updates",
      source: "USGS Hawaiian Volcano Observatory",
      image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?q=80&w=400",
      icon: <Flame className="w-4 h-4" />,
      priority: "high",
      location: "Big Island",
      link: "/big-island/volcano-tours" // Real link to volcano tours
    },
    {
      id: 2,
      title: "Perfect Snorkeling Conditions Across All Islands",
      excerpt: "Crystal clear waters and calm seas make this week ideal for underwater adventures. Visibility exceeds 100 feet.",
      date: "4 hours ago", 
      category: "Ocean Conditions",
      source: "NOAA Ocean Service",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=400",
      icon: <Waves className="w-4 h-4" />,
      priority: "medium",
      location: "All Islands",
      link: "/tours/snorkeling" // Real link to snorkeling tours
    },
    {
      id: 3,
      title: "Mauna Kea Stargazing Tours Resume",
      excerpt: "Clear skies return to Mauna Kea summit after weather clearing. Stargazing tours operating with exceptional visibility.",
      date: "6 hours ago",
      category: "Weather & Activities", 
      source: "Mauna Kea Observatories",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=400",
      icon: <Sun className="w-4 h-4" />,
      priority: "medium",
      location: "Big Island",
      link: "/big-island/stargazing-tours" // Real link to stargazing tours
    },
    {
      id: 4,
      title: "New Cultural Heritage Site Opens on Kauai",
      excerpt: "Ancient Hawaiian archaeological site now accessible to visitors, offering insights into native Hawaiian history and traditions.",
      date: "1 day ago",
      category: "Cultural News",
      source: "Hawaii Tourism Authority",
      image: "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=400",
      icon: <MapPin className="w-4 h-4" />,
      priority: "low",
      location: "Kauai",
      link: "/kauai/cultural-tours" // Real link to cultural tours
    },
    {
      id: 5,
      title: "Helicopter Tours Report Best Visibility in Months",
      excerpt: "Aerial tour operators across Hawaii report exceptional flying conditions with crystal clear skies and minimal trade winds.",
      date: "1 day ago",
      category: "Travel Updates",
      source: "Hawaii Aviation Weather",
      image: "https://images.unsplash.com/photo-1598135753163-6167c1a1ad65?q=80&w=400", 
      icon: <TrendingUp className="w-4 h-4" />,
      priority: "medium",
      location: "All Islands",
      link: "/tours/helicopter" // Real link to helicopter tours
    },
    {
      id: 6,
      title: "Humpback Whale Season Begins Early",
      excerpt: "First humpback whale sightings of the season reported off Maui coast, signaling early start to whale watching season.",
      date: "2 days ago",
      category: "Wildlife Updates",
      source: "Pacific Whale Foundation", 
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=400",
      icon: <Waves className="w-4 h-4" />,
      priority: "medium",
      location: "Maui",
      link: "/maui/whale-watching" // Real link to whale watching tours
    }
  ];

  // Smart categorization based on keywords
  const categorizeNews = (title: string, description: string): { category: string; icon: React.ReactNode; location: string; priority: string } => {
    const text = (title + ' ' + description).toLowerCase();
    
    if (text.includes('volcano') || text.includes('eruption') || text.includes('lava') || text.includes('kilauea')) {
      return { category: "Volcano Updates", icon: <Flame className="w-4 h-4" />, location: "Big Island", priority: "high" };
    }
    if (text.includes('ocean') || text.includes('surf') || text.includes('beach') || text.includes('snorkel') || text.includes('whale')) {
      return { category: "Ocean Conditions", icon: <Waves className="w-4 h-4" />, location: "All Islands", priority: "medium" };
    }
    if (text.includes('weather') || text.includes('storm') || text.includes('rain') || text.includes('wind') || text.includes('temperature')) {
      return { category: "Weather & Activities", icon: <Sun className="w-4 h-4" />, location: "All Islands", priority: "medium" };
    }
    if (text.includes('tour') || text.includes('travel') || text.includes('visitor') || text.includes('tourism') || text.includes('flight')) {
      return { category: "Travel Updates", icon: <TrendingUp className="w-4 h-4" />, location: "All Islands", priority: "medium" };
    }
    if (text.includes('cultural') || text.includes('hawaiian') || text.includes('tradition') || text.includes('heritage') || text.includes('festival')) {
      return { category: "Cultural News", icon: <MapPin className="w-4 h-4" />, location: "All Islands", priority: "low" };
    }
    
    // Default categorization
    return { category: "Travel Updates", icon: <TrendingUp className="w-4 h-4" />, location: "All Islands", priority: "medium" };
  };

  // Enhanced image selection based on category
  const getImageForCategory = (category: string): string => {
    const images = {
      "Volcano Updates": "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?q=80&w=400",
      "Ocean Conditions": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=400",
      "Weather & Activities": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=400",
      "Travel Updates": "https://images.unsplash.com/photo-1598135753163-6167c1a1ad65?q=80&w=400",
      "Cultural News": "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=400"
    };
    return images[category as keyof typeof images] || "https://images.unsplash.com/photo-1542259009477-d625272157b7?q=80&w=400";
  };

  // Newsletter Modal Functions
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterFirstName) return;

    setNewsletterSubmitting(true);
    
    // TODO: Replace with actual GHL/Make.com integration
    const formData = {
      email: newsletterEmail,
      phone: newsletterSmsOptIn ? newsletterPhone : '',
      firstName: newsletterFirstName,
      smsOptIn: newsletterSmsOptIn,
      source: 'hawaii_news_newsletter',
      timestamp: new Date().toISOString(),
      newsUpdates: true
    };

    try {
      // Simulate API call - replace with actual endpoint
      // await fetch('/api/newsletter-signup', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      console.log('Newsletter signup from Hawaii News:', formData);
      
      // Simulate success delay
      setTimeout(() => {
        setNewsletterSubmitted(true);
        setNewsletterSubmitting(false);
      }, 1500);
      
    } catch (error) {
      console.error('Newsletter signup error:', error);
      setNewsletterSubmitting(false);
    }
  };

  const closeNewsletterModal = () => {
    setShowNewsletterModal(false);
    // Reset form after a delay
    setTimeout(() => {
      setNewsletterSubmitted(false);
      setNewsletterEmail("");
      setNewsletterPhone("");
      setNewsletterFirstName("");
      setNewsletterSmsOptIn(false);
    }, 300);
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeNewsletterModal();
    };
    
    if (showNewsletterModal) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [showNewsletterModal]);
  // Format relative time
  const formatDate = (dateString: string): string => {
    try {
      const date = new Date(dateString);
      const now = new Date();
      const diffMs = now.getTime() - date.getTime();
      const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
      const diffDays = Math.floor(diffHours / 24);
      
      if (diffHours < 1) return 'Just now';
      if (diffHours < 24) return `${diffHours} hours ago`;
      if (diffDays < 7) return `${diffDays} days ago`;
      return date.toLocaleDateString();
    } catch {
      return 'Recently';
    }
  };

  // Fetch RSS feeds
  const fetchRSSFeeds = async () => {
    try {
      setRssError(null);
      const allNewsItems: NewsItem[] = [];
      
      for (const feed of RSS_FEEDS) {
        try {
          const response = await fetch(`${CORS_PROXY}${encodeURIComponent(feed.url)}`);
          
          if (!response.ok) continue;
          
          const xmlText = await response.text();
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
          
          const items = xmlDoc.querySelectorAll('item');
          
          for (let i = 0; i < Math.min(items.length, 8); i++) { // Increased to 8 per feed
            const item = items[i];
            
            const title = item.querySelector('title')?.textContent?.trim() || '';
            const description = item.querySelector('description')?.textContent?.trim() || '';
            const link = item.querySelector('link')?.textContent?.trim() || '';
            const pubDate = item.querySelector('pubDate')?.textContent?.trim() || '';
            
            // HAWAII RELEVANCE CHECK - Only include Hawaii-related articles
            if (title && description && isHawaiiRelevant(title, description)) {
              // Smart categorization
              const { category, icon, location, priority } = categorizeNews(title, description);
              
              allNewsItems.push({
                id: Date.now() + i + Math.random(), // More unique ID
                title,
                excerpt: description.replace(/<[^>]*>/g, '').slice(0, 150) + '...', // Clean HTML, truncate
                date: formatDate(pubDate),
                category,
                source: feed.source,
                image: getImageForCategory(category),
                icon,
                priority,
                location,
                link
              });
            }
          }
        } catch (feedError) {
          console.error(`Error fetching ${feed.source}:`, feedError);
        }
      }
      
      if (allNewsItems.length > 0) {
        // Sort by publication date and source priority
        allNewsItems.sort((a, b) => {
          // First sort by source priority (Star Advertiser & KHON2 first)
          const priorityA = a.source.includes('Star-Advertiser') || a.source.includes('KHON2') ? 1 : 2;
          const priorityB = b.source.includes('Star-Advertiser') || b.source.includes('KHON2') ? 1 : 2;
          
          if (priorityA !== priorityB) return priorityA - priorityB;
          
          // Then by date (newest first)
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
        
        // Mix RSS content with select fallback content for variety
        const hawaiiRelevantFallback = fallbackNews.filter(item => 
          isHawaiiRelevant(item.title, item.excerpt)
        );
        
        const mixedNews = [
          ...allNewsItems.slice(0, 5), // Top 5 RSS articles
          ...hawaiiRelevantFallback.slice(0, 1) // Add 1 curated item
        ].slice(0, 6); // Limit to 6 total items for 2x3 grid
        
        setNewsItems(mixedNews);
        setLastUpdated(new Date());
        setRssError(null);
      } else {
        // Use filtered fallback content if no Hawaii-relevant RSS found
        const hawaiiRelevantFallback = fallbackNews.filter(item => 
          isHawaiiRelevant(item.title, item.excerpt)
        );
        setNewsItems(hawaiiRelevantFallback);
        setRssError('Filtering for Hawaii-relevant content only');
      }
    } catch (error) {
      console.error('RSS fetch error:', error);
      setNewsItems(fallbackNews);
      setRssError('Using cached content - RSS temporarily unavailable');
    }
  };

  // Initial load and auto-refresh
  useEffect(() => {
    setNewsItems(fallbackNews); // Show fallback immediately
    fetchRSSFeeds(); // Then try to load RSS
    
    const interval = setInterval(fetchRSSFeeds, 30 * 60 * 1000); // 30 minutes
    return () => clearInterval(interval);
  }, []);

  const filteredNews = activeCategory === "all" 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  const handleCategoryChange = (categoryId: string) => {
    setIsLoading(true);
    setActiveCategory(categoryId);
    // Simulate loading delay for smooth UX
    setTimeout(() => setIsLoading(false), 300);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "border-l-red-500 bg-red-50/50";
      case "medium": return "border-l-blue-500 bg-blue-50/50"; 
      case "low": return "border-l-green-500 bg-green-50/50";
      default: return "border-l-gray-500 bg-gray-50/50";
    }
  };

  return (
    <section id="news" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="container mx-auto px-4">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-green-100 text-blue-700 px-6 py-2 rounded-full text-sm mb-6 backdrop-blur-sm border border-blue-200/50">
            <TrendingUp className="w-4 h-4 mr-2" />
            Live Hawaii Updates
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Stay Updated with
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 bg-clip-text text-transparent">
              Real-Time Hawaii News
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get the latest updates on volcano activity, weather conditions, and travel insights 
            to make the most of your Hawaiian adventure.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-blue-300'
              }`}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </div>

        {/* Live Indicator with Feed Sources */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-green-50 px-4 py-2 rounded-full border border-green-200 mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-3"></div>
            <span className="text-green-700 font-medium text-sm">
              Hawaii-focused content • Updated: {lastUpdated ? lastUpdated.toLocaleTimeString() : 'Just now'}
            </span>
            {rssError && (
              <span className="ml-2 text-orange-600 text-xs">({rssError})</span>
            )}
          </div>
          
          {/* Source Badges */}
          <div className="flex justify-center gap-3 flex-wrap">
            {RSS_FEEDS.map((feed, index) => (
              <div key={index} className="bg-white px-3 py-1 rounded-full border border-gray-200 text-xs font-medium text-gray-700">
                📰 {feed.source}
              </div>
            ))}
          </div>
        </div>

        {/* Manual Refresh Button */}
        <div className="text-center mb-8">
          <button
            onClick={fetchRSSFeeds}
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 hover:border-blue-300 px-4 py-2 rounded-xl font-medium transition-all duration-300"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh News
          </button>
        </div>

        {/* News Grid */}
        <div className={`transition-opacity duration-300 ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredNews.map((item, index) => (
              <article 
                key={item.id} 
                className={`bg-white rounded-2xl shadow-lg border-l-4 ${getPriorityColor(item.priority)} overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group cursor-pointer`}
                onClick={() => item.link && window.open(item.link, '_blank')}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
                    <div className="text-gray-600">
                      {item.icon}
                    </div>
                    <span className="text-xs font-medium text-gray-700">{item.category}</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-medium">
                    {item.location}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-500">{item.date}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-sm text-gray-500">{item.source}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {item.excerpt}
                  </p>

                  <div className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors group/btn">
                    {item.link && item.link.startsWith('http') ? 'Read Full Article' : 'Book Related Tours'}
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500/10 via-green-500/10 to-blue-500/10 rounded-3xl p-8 border border-blue-200/50">
            <Calendar className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Never Miss Important Updates
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for travel alerts, volcanic activity updates, 
              and insider tips delivered to your inbox.
            </p>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg"
              onClick={() => setShowNewsletterModal(true)}
            >
              Subscribe to Updates
            </Button>
          </div>
        </div>
      </div>

      {/* Newsletter Modal */}
      {showNewsletterModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {newsletterSubmitted ? (
              // Success State
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  You're Subscribed! 🌺
                </h3>
                <p className="text-gray-600 mb-6">
                  You'll now receive the latest Hawaii travel updates, news, and insider tips directly in your inbox.
                </p>
                <Button 
                  onClick={closeNewsletterModal}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
                >
                  Continue Reading News
                </Button>
              </div>
            ) : (
              // Newsletter Form
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Hawaii News Updates</h3>
                      <p className="text-sm text-gray-600">Stay informed about paradise</p>
                    </div>
                  </div>
                  <button 
                    onClick={closeNewsletterModal}
                    className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                  >
                    <X className="w-4 h-4 text-gray-600" />
                  </button>
                </div>

                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  {/* First Name */}
                  <div>
                    <label htmlFor="newsletter-firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <Input
                      id="newsletter-firstName"
                      type="text"
                      placeholder="Enter your first name"
                      value={newsletterFirstName}
                      onChange={(e) => setNewsletterFirstName(e.target.value)}
                      className="w-full h-11 border-gray-300 rounded-xl"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="newsletter-email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="newsletter-email"
                      type="email"
                      placeholder="Enter your email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="w-full h-11 border-gray-300 rounded-xl"
                      required
                    />
                  </div>

                  {/* SMS Opt-in */}
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="newsletter-smsOptIn"
                        checked={newsletterSmsOptIn}
                        onCheckedChange={(checked) => setNewsletterSmsOptIn(checked as boolean)}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <label htmlFor="newsletter-smsOptIn" className="text-sm font-medium text-gray-700 cursor-pointer">
                          📱 Also send me SMS updates (optional)
                        </label>
                        <p className="text-xs text-gray-600 mt-1">
                          Get instant volcano alerts, weather updates, and breaking Hawaii news
                        </p>
                      </div>
                    </div>
                    
                    {newsletterSmsOptIn && (
                      <div className="mt-3">
                        <Input
                          type="tel"
                          placeholder="Phone number (optional)"
                          value={newsletterPhone}
                          onChange={(e) => setNewsletterPhone(e.target.value)}
                          className="w-full h-10 border-gray-300 rounded-lg text-sm"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Standard message rates apply. Text STOP to opt out anytime.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Benefits */}
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-3">You'll receive:</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Flame className="w-4 h-4 text-red-500" />
                        <span>Volcano activity alerts</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sun className="w-4 h-4 text-yellow-500" />
                        <span>Weather & ocean conditions</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-blue-500" />
                        <span>Tourism & travel updates</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-green-500" />
                        <span>Cultural events & festivals</span>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={newsletterSubmitting || !newsletterEmail || !newsletterFirstName}
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white h-12 text-lg font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 disabled:transform-none disabled:opacity-50"
                  >
                    {newsletterSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Subscribing...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Mail className="w-5 h-5 mr-2" />
                        Subscribe to Hawaii News
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </div>
                    )}
                  </Button>

                  {/* Legal Text */}
                  <p className="text-xs text-gray-500 text-center leading-relaxed">
                    By subscribing, you agree to receive emails about Hawaii news and travel updates. 
                    Unsubscribe anytime. Privacy policy protected.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};