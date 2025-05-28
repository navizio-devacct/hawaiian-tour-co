
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getRecentPosts } from "@/data/blogPosts";

export const Blog = () => {
  const blogPosts = getRecentPosts(3);

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
                  <Link to={`/blog/${post.slug}`}>
                    <Button variant="ghost" className="text-ocean-100 hover:text-ocean-200">
                      Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
<<<<<<< HEAD
        
=======

>>>>>>> d2ef9f4e48c057783b453f5a40b10a5dc58a18a2
        {/* View All Articles Button */}
        <div className="text-center mt-12">
          <Link to="/blog">
            <Button className="bg-sunset-100 hover:bg-sunset-200 text-white px-8 py-3 text-lg">
              View All Articles <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
