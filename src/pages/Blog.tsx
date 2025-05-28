import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Calendar, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts, getFeaturedPost, getRecentPosts } from "@/data/blogPosts";

const Blog = () => {
  const featuredPost = getFeaturedPost();
  const recentPosts = getRecentPosts(6);

  const categories = [
    { name: "All Posts", count: blogPosts.length },
    { name: "Travel Guides", count: blogPosts.filter(p => p.category === "Travel Guides").length },
    { name: "Activities", count: blogPosts.filter(p => p.category === "Activities").length },
    { name: "Culture", count: blogPosts.filter(p => p.category === "Culture").length },
    { name: "Planning", count: blogPosts.filter(p => p.category === "Planning").length },
    { name: "Nature", count: blogPosts.filter(p => p.category === "Nature").length },
    { name: "Food & Dining", count: blogPosts.filter(p => p.category === "Food & Dining").length }
  ];

  return (
    <div className="min-h-screen bg-sand-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80")'
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4 pt-12 pb-12 md:pt-20 md:pb-20">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-ocean-100/90 text-white px-4 py-1 rounded-full text-sm mb-6 backdrop-blur-sm">
              Travel Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Stories from Paradise
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Discover insider tips, hidden gems, and authentic experiences from the Hawaiian Islands
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <BookOpen className="w-6 h-6 text-sunset-100 mr-3" />
              <h2 className="text-3xl font-bold text-palm-100">Featured Article</h2>
            </div>
            
            <Card className="overflow-hidden border-0 shadow-xl">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-full">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-sunset-100 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm text-ocean-100 font-medium">{featuredPost.category}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-600">{featuredPost.readTime}</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-palm-100 mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                      <span>•</span>
                      <span>By {featuredPost.author}</span>
                    </div>
                    <Link to={`/blog/${featuredPost.slug}`}>
                      <Button className="bg-sunset-100 hover:bg-sunset-200 text-white">
                        Read Article <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </div>
            </Card>
          </section>
        )}

        {/* Main Content */}
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Blog Posts */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-palm-100">Latest Articles</h2>
              <span className="text-gray-600">{recentPosts.length} articles</span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {recentPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm text-ocean-100 font-medium">{post.category}</span>
                      <span className="text-gray-400">•</span>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-palm-100 mb-3 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <Link to={`/blog/${post.slug}`}>
                        <Button variant="ghost" size="sm" className="text-sunset-100 hover:text-sunset-200 p-0">
                          Read More <ArrowRight className="ml-1 w-3 h-3" />
                        </Button>
                      </Link>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <span className="text-xs text-gray-500">By {post.author}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <Button variant="outline" className="border-sunset-100 text-sunset-100 hover:bg-sunset-100 hover:text-white">
                Load More Articles
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <Card className="border-0 shadow-lg mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-palm-100 mb-4">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                      <span className="text-gray-700 hover:text-sunset-100 cursor-pointer transition-colors">
                        {category.name}
                      </span>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-ocean-100/5 to-sunset-100/5">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-palm-100 mb-4">Stay Updated</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Get the latest travel tips and island insights delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sunset-100 focus:border-transparent text-sm"
                  />
                  <Button className="w-full bg-sunset-100 hover:bg-sunset-200 text-white text-sm">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
