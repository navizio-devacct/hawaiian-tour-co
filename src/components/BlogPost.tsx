<<<<<<< HEAD
=======

>>>>>>> d2ef9f4e48c057783b453f5a40b10a5dc58a18a2
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, BookOpen, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { BlogPost as BlogPostType } from "@/data/blogPosts";

interface BlogPostProps {
  post: BlogPostType;
}

export const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <div className="min-h-screen bg-sand-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${post.image}")` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative h-full flex flex-col justify-end text-white px-4 pb-12">
          <div className="container mx-auto max-w-4xl">
            <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-sunset-100/90 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                {post.category}
              </span>
              <div className="flex items-center gap-1 text-sm text-white/80">
                <Clock className="w-3 h-3" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <span>•</span>
              <span>By {post.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="prose prose-lg max-w-none">
                    <div 
                      className="blog-content"
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                  </div>
                  
                  {/* Share Section */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-palm-100">Share this article</span>
                      <Button variant="outline" className="border-sunset-100 text-sunset-100 hover:bg-sunset-100 hover:text-white">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Back to Blog */}
              <div className="mt-8">
                <Link to="/blog">
                  <Button variant="outline" className="border-sunset-100 text-sunset-100 hover:bg-sunset-100 hover:text-white">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to All Articles
                  </Button>
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Author Info */}
              <Card className="border-0 shadow-lg mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-palm-100 mb-4">About the Author</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-sunset-100" />
                    <span className="font-medium text-palm-100">{post.author}</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Hawaii travel expert and local guide sharing insider knowledge about the islands.
                  </p>
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
      </div>

      <Footer />
    </div>
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> d2ef9f4e48c057783b453f5a40b10a5dc58a18a2
