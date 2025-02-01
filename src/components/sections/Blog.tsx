import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Blog = () => {
  const blogPosts = [
    {
      title: "Top 10 Must-Visit Spots in Hawaii",
      excerpt: "Discover the hidden gems and popular attractions that make Hawaii a paradise on Earth.",
      date: "March 15, 2024",
      category: "Travel Tips",
      image: "https://images.unsplash.com/photo-1542259009477-d625272157b7?q=80"
    },
    {
      title: "Best Time to Visit Hawaii",
      excerpt: "Learn about the perfect seasons to plan your Hawaiian vacation for the best experience.",
      date: "March 10, 2024",
      category: "Planning",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80"
    },
    {
      title: "Hawaiian Culture Guide",
      excerpt: "Immerse yourself in the rich traditions and customs of Hawaiian culture.",
      date: "March 5, 2024",
      category: "Culture",
      image: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-sand-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-ocean-100/10 text-ocean-100 px-4 py-1 rounded-full text-sm">
            Our Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-palm-100 mt-4">
            Latest Travel Tips & Updates
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Stay informed with our latest travel guides, tips, and insights about Hawaii's most beautiful destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-ocean-100" />
                  <span className="text-sm text-ocean-100">{post.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-palm-100 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Button variant="ghost" className="text-ocean-100 hover:text-ocean-200">
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};